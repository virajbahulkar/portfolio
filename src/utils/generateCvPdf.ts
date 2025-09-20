/* Utility to generate a compact two-page CV PDF without removing content */
import type { jsPDF as JsPDFType } from 'jspdf';

interface Profile { name: string; contact: string; summary: string; life: string; }
interface EducationItem { title: string; subtitle: string; }
interface Project { name: string; bullets: string[]; }
interface ExperienceItem { title: string; start?: string; end?: string; bullets?: string[]; projects?: Project[]; technologies?: string; }
interface Skill { title: string; description: string; icon?: string; color?: string; }

interface CvData {
  profile: Profile;
  education: EducationItem[];
  experience: ExperienceItem[];
  skills: Skill[];
}

interface FontStyle { size: number; lineHeight: number; font: [string, string]; }

interface LayoutConfig {
  margins: { top: number; bottom: number; left: number; right: number; gutter: number };
  fonts: {
    name: FontStyle; heading: FontStyle; sub: FontStyle; body: FontStyle; bullet: FontStyle;
  };
}

interface Block { type: string; lines?: string[]; style: FontStyle; height?: number; }

export function generateCvPdf(jsPDF: typeof JsPDFType, data: CvData) {
  const doc = new jsPDF({ unit: 'pt', format: 'a4', orientation: 'portrait' });
  const page = { width: doc.internal.pageSize.getWidth(), height: doc.internal.pageSize.getHeight() };

  const config: LayoutConfig = {
    margins: { top: 36, bottom: 40, left: 36, right: 36, gutter: 18 },
    fonts: {
      name: { size: 22, lineHeight: 26, font: ['helvetica', 'bold'] },
      heading: { size: 14, lineHeight: 18, font: ['helvetica', 'bold'] },
      sub: { size: 11.5, lineHeight: 14, font: ['helvetica', 'bold'] },
      body: { size: 10.5, lineHeight: 12.5, font: ['helvetica', 'normal'] },
      bullet: { size: 10.5, lineHeight: 12.5, font: ['helvetica', 'normal'] }
    }
  };

  const columnWidth = (page.width - config.margins.left - config.margins.right - config.margins.gutter) / 2;

  const originalBlocks = buildBlocks(data, config, doc, columnWidth);
  let blocks = originalBlocks;
  let attempt = layout(blocks, page, columnWidth, config, doc);

  // adaptive squeeze: reduce body fonts slightly if overflow > 2 pages
  while (attempt.overflow && config.fonts.body.size > 10) {
    config.fonts.body.size -= 0.25;
    config.fonts.body.lineHeight = Math.max(11.5, config.fonts.body.lineHeight - 0.25);
    config.fonts.bullet.size = config.fonts.body.size;
    config.fonts.bullet.lineHeight = config.fonts.body.lineHeight;
    blocks = buildBlocks(data, config, doc, columnWidth); // rebuild with new metrics
    attempt = layout(blocks, page, columnWidth, config, doc);
  }

  render(attempt.columns, doc, columnWidth, config, page);
  return doc;
}

function buildBlocks(data: CvData, config: LayoutConfig, doc: JsPDFType, columnWidth: number): Block[] {
  const blocks: Block[] = [];
  const wrap = (text: string, style: FontStyle) => {
    doc.setFont(...style.font); doc.setFontSize(style.size);
    return doc.splitTextToSize(text || '', columnWidth);
  };
  const paragraph = (text: string, style: FontStyle): Block => ({ type: 'paragraph', lines: wrap(text, style), style });
  const heading = (t: string): Block => ({ type: 'heading', lines: [t], style: config.fonts.heading });
  const bullet = (t: string): Block => ({ type: 'bullet', lines: wrap(`• ${t}`, config.fonts.bullet), style: config.fonts.bullet });

  // Name & Contact
  blocks.push({ type: 'name', lines: [`${data.profile.name} - Resume`], style: config.fonts.name });
  blocks.push(paragraph(data.profile.contact, config.fonts.body));

  blocks.push(heading('Profile'));
  blocks.push(paragraph(data.profile.summary, config.fonts.body));
  blocks.push(heading('Life'));
  blocks.push(paragraph(data.profile.life, config.fonts.body));

  blocks.push(heading('Education'));
  data.education.forEach(e => {
    blocks.push({ type: 'edu', lines: wrap(e.title, config.fonts.sub), style: config.fonts.sub });
    blocks.push(paragraph(e.subtitle, config.fonts.body));
  });

  blocks.push(heading('Experience'));
  data.experience.forEach(exp => {
    const duration = buildDuration(exp.start, exp.end);
    blocks.push({ type: 'role', lines: wrap(`${exp.title}${duration}`, config.fonts.sub), style: config.fonts.sub });
    (exp.projects || []).forEach(p => {
      blocks.push({ type: 'project', lines: wrap(p.name, config.fonts.body), style: config.fonts.body });
      p.bullets.forEach(b => blocks.push(bullet(b)));
    });
    (exp.bullets || []).forEach(b => blocks.push(bullet(b)));
    if (exp.technologies) blocks.push(paragraph(`Technologies: ${exp.technologies}`, config.fonts.body));
  });

  blocks.push(heading('Skills'));
  data.skills.forEach(s => {
    blocks.push(paragraph(`${s.title}: ${s.description}`, config.fonts.body));
  });
  return blocks;
}

function buildDuration(start?: string, end?: string) {
  if (!start) return '';
  const s = new Date(start);
  const e = end ? new Date(end) : new Date();
  let years = e.getFullYear() - s.getFullYear();
  let months = e.getMonth() - s.getMonth();
  if (months < 0) { years--; months += 12; }
  const startText = s.toLocaleString('default', { month: 'short', year: 'numeric' });
  const endText = (end ? new Date(end) : new Date()).toLocaleString('default', { month: 'short', year: 'numeric' });
  const parts: string[] = [];
  if (years > 0) parts.push(`${years}y`);
  if (months > 0) parts.push(`${months}m`);
  return ` (${startText} – ${endText}${parts.length ? ` | ${parts.join(' ')}` : ''})`;
}

function layout(blocks: Block[], page: { width: number; height: number }, _colWidth: number, config: LayoutConfig, _doc: JsPDFType) {
  const columns: Block[][] = [];
  let current: Block[] = [];
  let y = config.margins.top;
  const usable = page.height - config.margins.top - config.margins.bottom;
  let colIndex = 0;
  for (const b of blocks) {
    let h: number;
    if (b.lines) {
      h = b.lines.length * b.style.lineHeight + 4;
    } else { h = b.style.lineHeight + 4; }

    if (y + h > usable && current.length) {
      columns.push(current); current = []; y = config.margins.top; colIndex++;
      if (colIndex >= 4) return { overflow: true, columns };
    }
    current.push({ ...b, height: h });
    y += h;
  }
  if (current.length) columns.push(current);
  return { overflow: false, columns };
}

function render(columns: Block[][], doc: JsPDFType, colWidth: number, config: LayoutConfig, _page: { width: number; height: number }) {
  columns.forEach((blocks, i) => {
    if (i === 2) doc.addPage();
    const xBase = config.margins.left + (i % 2 === 1 ? colWidth + config.margins.gutter : 0);
    let y = config.margins.top;
    blocks.forEach(b => {
      doc.setFont(...b.style.font); doc.setFontSize(b.style.size);
      if (b.lines) {
        b.lines.forEach(line => { y += b.style.lineHeight; doc.text(line, xBase, y); });
        y += 4;
      }
    });
  });
}
