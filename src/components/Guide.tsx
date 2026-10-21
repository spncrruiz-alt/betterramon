import type { ReactNode } from 'react';
import L from '@/components/L';

// Shown at the top of every guide: this site informs, the LGU transacts.
export function GuideNotice({ children }: { children?: ReactNode }) {
  return (
    <div className="service-item-card" role="note">
      <h2 className="service-item-title">
        <i className="bi bi-info-circle-fill" aria-hidden="true"></i>{' '}
        <L en="Guide only" fil="Gabay lamang" ilo="Giya laeng" />
      </h2>
      <p>
        <L
          en="BetterRamon.org does not collect payments, accept applications or issue documents. Assessments, official receipts and permits come only from the offices of LGU Ramon."
          fil="Hindi tumatanggap ang BetterRamon.org ng bayad o aplikasyon at hindi naglalabas ng dokumento. Ang assessment, opisyal na resibo at permit ay mula lamang sa mga opisina ng LGU Ramon."
          ilo="Saan nga umaw-awat ti BetterRamon.org ti bayad wenno aplikasion ken saan nga agipapaay ti dokumento. Ti assessment, opisial a resibo ken permit ket aggapu laeng kadagiti opisina ti LGU Ramon."
        />{' '}
        {children}
      </p>
      <p>
        <L
          en="Local fees, schedules and forms can differ by ordinance. Items marked “To be verified” are not yet confirmed for Ramon; ask the office before you go."
          fil="Maaaring magbago ang bayarin, iskedyul at porma ayon sa ordinansa. Ang may markang “Hindi pa beripikado” ay hindi pa kumpirmado para sa Ramon; magtanong muna sa opisina bago pumunta."
          ilo="Mabalin nga agduduma dagiti bayad, iskedyul ken porma segun iti ordinansa. Dagiti addaan marka a “Saan pay a naberipika” ket saan pay a nakumpirma para iti Ramon; agsaludsod iti opisina sakbay a mapan."
        />
      </p>
    </div>
  );
}
