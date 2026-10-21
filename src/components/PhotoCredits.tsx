import L from '@/components/L';

export default function PhotoCredits() {
  return (
    <p className="home-photo-credits">
      <L en="Photos" fil="Mga larawan" ilo="Dagiti retrato" />: Patrickroque01 / Wikimedia Commons ·{' '}
      <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0</a>
      {' · '}
      {[
        ['Magat Dam', 'Magat Dam wide (Ramon, Isabela; 11-24-2022).jpg'],
        ['Magat Reservoir', 'Magat Dam reservoir (Ramon, Isabela; 11-24-2022).jpg'],
        ['Rolling Hills', 'Ramon Isabela rolling hills (Ramon, Isabela; 11-24-2022).jpg'],
      ].map(([label, file], index) => (
        <span key={file}>
          {index > 0 && ' · '}
          <a href={`https://commons.wikimedia.org/wiki/File:${encodeURIComponent(file)}`} target="_blank" rel="noopener noreferrer">{label}</a>
        </span>
      ))}
      {' · '}<L en="Resized and cropped for display." fil="Binago ang laki at na-crop para sa display." ilo="Nabaliwan ti kadakkel ken na-crop para iti display." />
    </p>
  );
}
