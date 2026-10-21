import type { Metadata } from 'next';
import PageShell, { pageFor } from '@/components/PageShell';
import { pages } from '@/data/pages';
import { fiscalDocs } from '@/data/ramon';
import L from '@/components/L';

const page = pageFor('/budget', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

const docs = [
  {
    icon: 'bi-list-check',
    title: (
      <L
        en="Annual Investment Program"
        fil="Annual Investment Program"
        ilo="Annual Investment Program"
      />
    ),
    text: (
      <L
        en="The projects and programs the LGU plans to fund next year."
        fil="Mga proyekto at programang balak pondohan ng LGU sa susunod na taon."
        ilo="Dagiti proyekto ken programa a planuen ti LGU a pondoan iti sumaruno a tawen."
      />
    ),
  },
  {
    icon: 'bi-journal-text',
    title: <L en="Annual Budget" fil="Taunang Badyet" ilo="Tinawen a Badyet" />,
    text: (
      <L
        en="How much each office may spend, approved by the SB as an appropriation ordinance."
        fil="Magkano ang maaaring gastusin ng bawat opisina, inaprubahan ng SB bilang appropriation ordinance."
        ilo="Mano ti mabalin a gastuen ti tunggal opisina, inaprobaran ti SB kas appropriation ordinance."
      />
    ),
  },
  {
    icon: 'bi-bar-chart-line-fill',
    title: <L en="Receipts and Expenditures" fil="Kita at Gastos" ilo="Sapul ken Gastos" />,
    text: (
      <L
        en="What the LGU actually collected and spent, reported every quarter and year."
        fil="Ang aktwal na nakolekta at ginastos ng LGU, iniuulat kada quarter at taon."
        ilo="Ti pudno a naurnong ken nagastos ti LGU, mairreport iti tunggal quarter ken tawen."
      />
    ),
  },
  {
    icon: 'bi-hammer',
    title: <L en="Bids and Awards" fil="Bidding at Paggawad" ilo="Bidding ken Panangited" />,
    text: (
      <L
        en="Which contractors won public projects and for how much."
        fil="Aling kontratista ang nanalo sa mga proyekto ng bayan at sa halagang magkano."
        ilo="Ania a kontratista ti nangabak kadagiti proyekto ti ili ken iti mano a gatad."
      />
    ),
  },
  {
    icon: 'bi-search',
    title: <L en="Audit Report" fil="Ulat ng Audit" ilo="Report ti Audit" />,
    text: (
      <L
        en="COA's yearly findings on how the LGU used its funds."
        fil="Taunang natuklasan ng COA sa paggamit ng LGU ng pondo nito."
        ilo="Tinawen a nasarakan ti COA maipapan iti panangusar ti LGU iti pondona."
      />
    ),
  },
  {
    icon: 'bi-people-fill',
    title: (
      <L en="Trust and Special Funds" fil="Trust at Special Funds" ilo="Trust ken Special Funds" />
    ),
    text: (
      <L
        en="Use of the 20% development fund, disaster fund and gender and development fund."
        fil="Paggamit ng 20% development fund, disaster fund at gender and development fund."
        ilo="Panangusar iti 20% development fund, disaster fund ken gender and development fund."
      />
    ),
  },
];

const where = {
  en: (
    <ul>
      <li>
        <strong>DILG Full Disclosure Policy Portal:</strong> LGUs must post their budget, receipts
        and expenditures, bid results and trust fund reports there. Search for Ramon, Isabela.
      </li>
      <li>
        <strong>Commission on Audit:</strong> annual audit reports of LGUs are published on the COA
        website.
      </li>
      <li>
        <strong>Municipal Hall bulletin board:</strong> the same documents must be posted in
        conspicuous places in the Municipal Hall.
      </li>
      <li>
        <strong>Ask the office:</strong> the Municipal Budget Office, Treasurer and Accountant keep
        these records. Bring a written request with your name, the document and the year.
      </li>
    </ul>
  ),
  fil: (
    <ul>
      <li>
        <strong>DILG Full Disclosure Policy Portal:</strong> dapat ilagay dito ng mga LGU ang
        kanilang badyet, kita at gastos, resulta ng bidding at ulat ng trust fund. Hanapin ang
        Ramon, Isabela.
      </li>
      <li>
        <strong>Commission on Audit:</strong> inilalathala sa website ng COA ang taunang ulat ng
        audit ng mga LGU.
      </li>
      <li>
        <strong>Bulletin board ng Municipal Hall:</strong> dapat ding nakapaskil ang mga dokumentong
        ito sa kita-kitang lugar sa Municipal Hall.
      </li>
      <li>
        <strong>Magtanong sa opisina:</strong> hawak ng Municipal Budget Office, Treasurer at
        Accountant ang mga rekord na ito. Magdala ng sulat na may pangalan mo, ang dokumento at ang
        taon.
      </li>
    </ul>
  ),
  ilo: (
    <ul>
      <li>
        <strong>DILG Full Disclosure Policy Portal:</strong> masapul nga ikabil dagiti LGU ditoy ti
        badyet, sapul ken gastos, resulta ti bidding ken report ti trust fund. Biroken ti Ramon,
        Isabela.
      </li>
      <li>
        <strong>Commission on Audit:</strong> maipablaak iti website ti COA dagiti tinawen a report
        ti audit dagiti LGU.
      </li>
      <li>
        <strong>Bulletin board ti Municipal Hall:</strong> masapul met a naipaskil dagitoy a
        dokumento iti makita a lugar iti Municipal Hall.
      </li>
      <li>
        <strong>Agsaludsod iti opisina:</strong> iggem ti Municipal Budget Office, Treasurer ken
        Accountant dagitoy a rekord. Mangiyeg iti surat nga addaan iti naganmo, ti dokumento ken ti
        tawen.
      </li>
    </ul>
  ),
};

export default function BudgetPage() {
  return (
    <PageShell page={page}>
      <p>
        <L
          en="Every peso LGU Ramon collects and spends is public money. These are the official documents that show it, and where to find them."
          fil="Bawat pisong kinokolekta at ginagastos ng LGU Ramon ay pera ng bayan. Ito ang mga opisyal na dokumentong nagpapakita nito, at kung saan sila makikita."
          ilo="Tunggal piso nga ur-urnongen ken gastuen ti LGU Ramon ket kuarta ti publiko. Dagitoy dagiti opisial a dokumento a mangipakita iti daytoy, ken no sadino ti pakasarakan da."
        />
      </p>

      <h2>
        <L
          en="Ramon’s fiscal documents (2025 onward)"
          fil="Mga dokumentong pampinansyal ng Ramon (mula 2025)"
          ilo="Dagiti dokumento ti pinansia ti Ramon (manipud 2025)"
        />
      </h2>
      {fiscalDocs.length === 0 ? (
        <p className="empty-state">
          <i className="bi bi-inbox" aria-hidden="true"></i>{' '}
          <L
            en="We have not yet collected Ramon’s 2025 documents. Use the official sources below in the meantime."
            fil="Hindi pa namin nakokolekta ang mga dokumento ng Ramon para sa 2025. Gamitin muna ang mga opisyal na pinagkunan sa ibaba."
            ilo="Saan pay a naurnong mi dagiti dokumento ti Ramon para iti 2025. Usaren pay ti opisial a nagtaudan iti baba."
          />
        </p>
      ) : (
        <ul>
          {fiscalDocs.map((d) => (
            <li key={d.href}>
              <a href={d.href} target="_blank" rel="noopener noreferrer">
                {d.title} ({d.year})
              </a>{' '}
              <small>{d.source}</small>
            </li>
          ))}
        </ul>
      )}

      <h2>
        <L en="What to look for" fil="Ano ang hahanapin" ilo="Ania ti birokan" />
      </h2>
      <div className="grid grid-3">
        {docs.map((d) => (
          <div key={d.icon} className="service-item-card">
            <h3 className="service-item-title">
              <i className={`bi ${d.icon}`} aria-hidden="true"></i> {d.title}
            </h3>
            <p>{d.text}</p>
          </div>
        ))}
      </div>

      <h2>
        <L en="Where to find them" fil="Saan makikita" ilo="Sadino ti pakasarakan" />
      </h2>
      <L en={where.en} fil={where.fil} ilo={where.ilo} />
    </PageShell>
  );
}
