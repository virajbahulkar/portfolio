import { useEffect } from 'react';
import { generateCvPdf } from '../utils/generateCvPdf';

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

export function PdfDownloader({ data }: { data: CvData }) {
  useEffect(() => {
    const btn = document.getElementById('download-pdf');
    if (!btn) return;
    const errorSpan = document.getElementById('pdf-error');

    const isMobile = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    const handler = async () => {
      (btn as HTMLButtonElement).disabled = true;
      try {
        const { jsPDF } = await import('jspdf');
        const doc = generateCvPdf(jsPDF, data);
        if (isMobile()) {
          const blob = doc.output('blob');
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url; a.download = 'Viraj_Bahulkar_CV.pdf';
          document.body.appendChild(a); a.click();
          setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(url); }, 120);
        } else {
          doc.save('Viraj_Bahulkar_CV.pdf');
        }
      } catch (e) {
        console.error('PDF generation error', e);
        if (errorSpan) {
          errorSpan.textContent = 'PDF generation failed. Please refresh and try again.';
          (errorSpan as HTMLElement).style.display = 'inline';
        }
      } finally {
        (btn as HTMLButtonElement).disabled = false;
      }
    };
    btn.addEventListener('click', handler);
    return () => btn.removeEventListener('click', handler);
  }, [data]);

  return null; // No visible UI, just behavior
}

export default PdfDownloader;
