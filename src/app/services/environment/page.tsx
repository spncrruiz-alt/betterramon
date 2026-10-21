import type { Metadata } from 'next';
import PageShell, { pageFor } from '@/components/PageShell';
import { GuideNotice } from '@/components/Guide';
import { pages } from '@/data/pages';
import L, { Tbv } from '@/components/L';

const page = pageFor('/services/environment', pages);
export const metadata: Metadata = { title: page.title, description: page.desc };

const en = (
  <>
    <h2>Segregate your waste</h2>
    <p>The law requires every household to separate waste at the source:</p>
    <ul>
      <li>
        <strong>Biodegradable:</strong> food scraps, leaves. Compost them if you can.
      </li>
      <li>
        <strong>Recyclable:</strong> clean plastic, paper, cans and bottles.
      </li>
      <li>
        <strong>Residual:</strong> waste that cannot be composted or recycled.
      </li>
      <li>
        <strong>Special or hazardous:</strong> batteries, bulbs, paint, chemicals. Keep them apart.
      </li>
    </ul>
    <p>
      Collection schedule for your barangay: <Tbv />.
    </p>
    <h2>Open burning is not allowed</h2>
    <p>
      Burning garbage in the open is prohibited under the Ecological Solid Waste Management Act and
      the Clean Air Act. Report it to your barangay.
    </p>
    <h2>Cutting trees</h2>
    <p>
      Cutting, moving or selling trees, even on private land, usually needs a permit from the DENR
      Community Environment and Natural Resources Office (CENRO) covering Ramon.
    </p>
  </>
);

const fil = (
  <>
    <h2>Ihiwalay ang iyong basura</h2>
    <p>Itinatakda ng batas na ihiwalay ng bawat sambahayan ang basura mula pa lang sa bahay:</p>
    <ul>
      <li>
        <strong>Nabubulok:</strong> tirang pagkain, dahon. I-compost kung kaya.
      </li>
      <li>
        <strong>Nare-recycle:</strong> malinis na plastik, papel, lata at bote.
      </li>
      <li>
        <strong>Residual:</strong> basurang hindi maku-compost o mare-recycle.
      </li>
      <li>
        <strong>Espesyal o mapanganib:</strong> baterya, bumbilya, pintura, kemikal. Ibukod ang mga
        ito.
      </li>
    </ul>
    <p>
      Iskedyul ng koleksyon sa iyong barangay: <Tbv />.
    </p>
    <h2>Bawal ang pagsusunog</h2>
    <p>
      Bawal ang pagsunog ng basura sa labas ayon sa Ecological Solid Waste Management Act at Clean
      Air Act. Isumbong ito sa iyong barangay.
    </p>
    <h2>Pagputol ng puno</h2>
    <p>
      Ang pagputol, paglipat o pagbebenta ng puno, kahit nasa pribadong lupa, ay kadalasang
      nangangailangan ng permit mula sa DENR Community Environment and Natural Resources Office
      (CENRO) na sakop ang Ramon.
    </p>
  </>
);

const ilo = (
  <>
    <h2>Isina ti basuram</h2>
    <p>
      Ibilin ti linteg nga isina ti tunggal sangakabbalayan ti basura manipud pay laeng iti balay:
    </p>
    <ul>
      <li>
        <strong>Marunot:</strong> natda a taraon, bulong. I-compost no kabaelan.
      </li>
      <li>
        <strong>Mabalin a ma-recycle:</strong> nadalus a plastik, papel, lata ken botelia.
      </li>
      <li>
        <strong>Residual:</strong> basura a saan a ma-compost wenno ma-recycle.
      </li>
      <li>
        <strong>Espesial wenno peggad:</strong> baterya, bombilia, pintura, kemikal. Isinam dagitoy.
      </li>
    </ul>
    <p>
      Iskedyul ti panagurnong iti barangaymo: <Tbv />.
    </p>
    <h2>Maiparit ti panagpuor</h2>
    <p>
      Maiparit ti panagpuor iti basura iti ruar segun iti Ecological Solid Waste Management Act ken
      Clean Air Act. Ireport daytoy iti barangaymo.
    </p>
    <h2>Panagpukan iti kayo</h2>
    <p>
      Ti panagpukan, panangiyakar wenno panaglako iti kayo, uray iti pribado a daga, ket kaaduan nga
      agkasapulan iti permiso manipud iti DENR Community Environment and Natural Resources Office
      (CENRO) a sakupenna ti Ramon.
    </p>
  </>
);

export default function EnvironmentGuide() {
  return (
    <PageShell page={page}>
      <GuideNotice>
        <L
          en="Solid waste is handled by the Municipal Environment and Natural Resources Office (MENRO) and your barangay."
          fil="Ang solid waste ay hawak ng Municipal Environment and Natural Resources Office (MENRO) at ng iyong barangay."
          ilo="Ti solid waste ket iggem ti Municipal Environment and Natural Resources Office (MENRO) ken ti barangaymo."
        />
      </GuideNotice>
      <L en={en} fil={fil} ilo={ilo} />
    </PageShell>
  );
}
