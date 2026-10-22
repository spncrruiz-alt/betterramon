import type { Metadata } from 'next';
import PageShell, { pageFor } from '@/components/PageShell';
import { pages } from '@/data/pages';
import { lgu } from '@/data/ramon';
import L from '@/components/L';

const page = pageFor('/terms', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

const repo = (
  <a href={lgu.repo} target="_blank" rel="noopener noreferrer">
    GitHub
  </a>
);

const en = (
  <>
    <h2>Independent project</h2>
    <p>
      BetterRamon.org is a volunteer-run community website. It is not operated by, affiliated with,
      or endorsed by the Municipal Government of Ramon, Isabela. Nothing here replaces official
      notices, forms or transactions of the LGU.
    </p>
    <h2>Accuracy</h2>
    <p>
      We publish only information from public sources. Information can change or contain mistakes;
      always confirm with the responsible office before acting on it. Items we have not confirmed
      are marked &ldquo;To be verified.&rdquo;
    </p>
    <h2>Reuse</h2>
    <p>
      The site&rsquo;s source code is available under the MIT License on {repo}. Public-sector data
      remains subject to the terms of its original source.
    </p>
    <h2>External links</h2>
    <p>We link to other websites for convenience and are not responsible for their content.</p>
  </>
);

const fil = (
  <>
    <h2>Independiyenteng proyekto</h2>
    <p>
      Ang BetterRamon.org ay website ng komunidad na pinatatakbo ng mga boluntaryo. Hindi ito
      pinatatakbo, kaanib o inendorso ng Pamahalaang Bayan ng Ramon, Isabela. Walang anumang narito
      ang pumapalit sa opisyal na abiso, porma o transaksyon ng LGU.
    </p>
    <h2>Katumpakan</h2>
    <p>
      Impormasyon lamang mula sa pampublikong pinagkunan ang aming inilalathala. Maaaring magbago o
      magkamali ang impormasyon; laging kumpirmahin sa kinauukulang opisina bago kumilos. Ang hindi
      pa namin nakukumpirma ay may markang &ldquo;Hindi pa beripikado.&rdquo;
    </p>
    <h2>Muling paggamit</h2>
    <p>
      Makukuha ang source code ng site sa ilalim ng MIT License sa {repo}. Ang datos ng pamahalaan
      ay sakop pa rin ng mga tuntunin ng orihinal na pinagkunan nito.
    </p>
    <h2>Mga link sa labas</h2>
    <p>
      Nagli-link kami sa ibang website para sa kaginhawaan at hindi kami mananagot sa nilalaman
      nila.
    </p>
  </>
);

const ilo = (
  <>
    <h2>Independiente a proyekto</h2>
    <p>
      Ti BetterRamon.org ket website ti komunidad a patpataray dagiti boluntario. Saan a patarayen,
      kameng wenno inendorso ti Gobierno ti Ili ti Ramon, Isabela. Awan ti aniaman ditoy a mangsukat
      kadagiti opisial a pakaammo, porma wenno transaksion ti LGU.
    </p>
    <h2>Kinapudno</h2>
    <p>
      Impormasyon laeng manipud kadagiti publiko a nagtaudan ti ipablaakmi. Mabalin nga agbaliw
      wenno agbiddut ti impormasyon; kanayon a kumpirmaen iti maseknan nga opisina sakbay nga
      agtignay. Dagiti saanmi pay a nakumpirma ket addaan iti marka a &ldquo;Saan pay a
      naberipika.&rdquo;
    </p>
    <h2>Panangusar manen</h2>
    <p>
      Adda ti source code ti site iti sidong ti MIT License iti {repo}. Ti datos ti gobierno ket
      sakupen pay laeng dagiti pagannurotan ti orihinal a nagtaudanna.
    </p>
    <h2>Dagiti link iti ruar</h2>
    <p>
      Ag-link kami kadagiti sabali a website para iti kombeniensia ken saankami a mapabasol iti
      linaonda.
    </p>
  </>
);

export default function TermsPage() {
  return (
    <PageShell page={page}>
      <L en={en} fil={fil} ilo={ilo} />
    </PageShell>
  );
}
