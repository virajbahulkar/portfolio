import { useEffect } from 'react';

import { generateCvPdf } from '../utils/generateCvPdf';

interface Profile {
  name: string;
  contact: string;
  summary: string;
}
interface EducationItem {
  title: string;
  subtitle: string;
}
interface Project {
  name: string;
  bullets: string[];
}
interface ExperienceItem {
  title: string;
  start?: string;
  end?: string;
  bullets?: string[];
  projects?: Project[];
  technologies?: string;
}
interface Skill {
  title: string;
  description: string;
  icon?: string;
  color?: string;
}

interface CvData {
  profile: Profile;
  education: EducationItem[];
  experience: ExperienceItem[];
  skills: Skill[];
}

export function PdfDownloader({ data }: { data: CvData }) {
  useEffect(() => {
    const btn = document.getElementById(
      'download-pdf'
    ) as HTMLButtonElement | null;
    if (!btn) return undefined;
    const errorSpan = document.getElementById('pdf-error');

    btn.disabled = false;

    const handler = async () => {
      btn.disabled = true;
      if (errorSpan) errorSpan.textContent = '';
      try {
        const { jsPDF } = await import('jspdf');
        const doc = generateCvPdf(jsPDF, data);
        await doc.save('Viraj_Bahulkar_CV.pdf', { returnPromise: true });
      } catch {
        if (errorSpan) {
          errorSpan.textContent =
            'PDF generation failed. Please refresh and try again.';
        }
      } finally {
        btn.disabled = false;
      }
    };
    btn.addEventListener('click', handler);
    return () => {
      btn.removeEventListener('click', handler);
      btn.disabled = true;
    };
  }, [data]);

  return null; // No visible UI, just behavior
}

export default PdfDownloader;
