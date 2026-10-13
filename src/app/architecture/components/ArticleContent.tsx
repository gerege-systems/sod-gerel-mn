import articleHero from '@/assets/images/knowledge/substation-aerial.webp'
import dataCenter from '@/assets/images/knowledge/data-center.webp'
import { useLang } from '@/i18n/context'

const ArticleContent = () => {
  const { t } = useLang()
  return (
    <section className="relative size-full overflow-hidden py-10 md:py-14.5">
      <div className="container max-w-245!">
        <div className="mb-7.5 space-y-7.5 text-center">
          <p>{t('2026.10.02 · Архитектур', '2026.10.02 · Architecture')}</p>
          <h1 className="text-default-950 text-5xl leading-[1.2em] md:text-[56px]">
            {t(
              'Яагаад гурван тусдаа систем: Core, Grouping, Analytics',
              'Why three separate systems: Core, Grouping, Analytics',
            )}
          </h1>
          <p className="mx-auto md:max-w-3/5">
            {t(
              'Хэн, юуг, ямар үндэслэлээр харахыг өгөгдлийн сан өөрөө хамгаалах ёстой. PowerGrid үүний тулд хэмжилт, бүлэглэл, аналитикийг тус тусын хилтэй гурван системд хуваасан.',
              'Who sees what, and why, must be enforced by the database itself. That is why PowerGrid splits metering, grouping and analytics into three systems, each with its own boundary.',
            )}
          </p>
        </div>
        <div className="lg:-mx-15">
          <img
            src={articleHero}
            alt={t('PowerGrid архитектур', 'PowerGrid architecture')}
            className="mb-12.5 size-full rounded-lg"
          />
        </div>
        <h2 className="mb-2.5 text-[32px]">
          {t(
            'Эрхийг засаг захиргаагаар бус, үүргээр олгоно',
            'Access is granted by role, not by administrative border',
          )}
        </h2>
        <p className="mb-12.5">
          {t(
            'Ухаалаг тоолуурын өгөгдлийг олон тал хэрэглэнэ: түгээх компани, Эрчим хүчний зохицуулах хороо, аймаг, дүүрэг, банк ба ESCO зэрэг гуравдагч тал, аудитор, хамгийн гол нь иргэн өөрөө. Эрхийг засаг захиргааны хилээр олгох нь энгийн мэт боловч нэг айлын хэрэглээ цөөн өрхтэй бүлгээс тодрох, шүүлтүүр санамсаргүйгээр эрхийг өргөтгөх эрсдэлтэй. Тиймээс PowerGrid эрхийг ЕХ-ны 2023/1162 журам ба IEC 62351-8-ийн үүрэг, хэмжилтийн цэгтэй холбоо хамаарлаар олгодог.',
            'Smart meter data serves many parties: distribution companies, the Energy Regulatory Commission, provinces and districts, third parties such as banks and ESCOs, auditors and, above all, citizens themselves. Granting access by administrative border looks simple, but it risks exposing a single household’s usage within a small group and lets a filter silently widen a permission. That is why PowerGrid grants access by EU 2023/1162 and IEC 62351-8 roles and by the relationship to a metering point.',
          )}
        </p>
        <ul className="mb-17.5 list-inside list-disc space-y-2.5" role="list">
          <li>
            <strong>Core</strong>{' '}
            {t(
              '(PostgreSQL + RLS) — хэмжилт, төлбөр, команд; owner_org, grid area, topology.',
              '(PostgreSQL + RLS) — readings, billing and commands; owner_org, grid area, topology.',
            )}
          </li>
          <li>
            <strong>Grouping</strong>{' '}
            {t(
              '— засаг захиргааны bitemporal мод ба дурын бүлэг, snapshot хувилбартай.',
              '— a bitemporal administrative tree and ad-hoc groups, with snapshot versions.',
            )}
          </li>
          <li>
            <strong>Analytics</strong>{' '}
            {t(
              '— k ≥ 10 босготой нэгтгэл, ялгавар халдлагаас хамгаалалт.',
              '— k ≥ 10 aggregation with protection against differencing attacks.',
            )}
          </li>
          <li>
            {t(
              'Нутгийн захиргаа түүхий хүснэгтэд хүрэх зам бүтцээрээ байхгүй.',
              'Local government has no path to raw tables by construction.',
            )}
          </li>
        </ul>
        <p className="mb-12.5">
          {t(
            'Эрх = байгууллагын grant-уудын нэгдэл ∩ үүргийн эрх ∩ хэрэглэгчийн хамрах хүрээ. Энэ тооцоог scope cell хэлбэрээр transaction бүрт нэг удаа хийж, PostgreSQL-ийн Row Level Security бодлогоор хэрэгжүүлнэ. Зөвшөөрөгдөөгүй мөр API, экспорт, тайлан, background job — аль ч замаар гарахгүй бөгөөд эрхийн матрицыг pgTAP тестээр баталгаажуулна.',
            'Access = union of the organisation’s grants ∩ role permissions ∩ user scope. This is computed once per transaction as a scope cell and enforced through PostgreSQL Row Level Security policies. An unauthorised row never leaves by any path — API, export, report or background job — and the permission matrix is verified with pgTAP tests.',
          )}
        </p>
        <div className="mb-10 overflow-hidden rounded-lg lg:-mx-15">
          <img
            src={dataCenter}
            alt={t('Өгөгдлийн төв', 'Data centre')}
            className="h-100 w-full object-cover md:h-150"
          />
        </div>
        <h2 className="mb-2.5 text-[32px]">{t('Заалт хэрхэн урсдаг вэ', 'How a reading flows')}</h2>
        <p className="mb-12.5">
          {t(
            'Тоолуур эсвэл TEAMI-аас ирсэн заалт HES адаптераар дамжин бүсийн дараалалд (эхний сонголт NATS JetStream, Kafka-тай харьцуулж батална) орно. Ingest consumer нь (source_system, source_record_id, checksum) idempotency түлхүүрээр raw receipt бичиж, давхардсан бол юу ч хийхгүй. Дараа нь VEE шалгалт — давхардал, интервалын цоорхой, хүрээнээс гарсан утга, индекс буурах, rollover, тоолуур солилт, цагийн зөрүү. Тэнцсэн заалт баланс, billing, порталд очно; унасан нь quarantine-д орж, төлбөрт автоматаар хэзээ ч орохгүй. Хожуу ирсэн бодит заалт шинэ хувилбар болж, нөлөөлсөн баланс ба нэхэмжлэхийг дахин тооцох жагсаалтад нэмнэ.',
            'A reading from a meter or from TEAMI passes through a HES adapter into a regional queue (NATS JetStream is the first choice, to be confirmed against Kafka). The ingest consumer writes a raw receipt keyed on (source_system, source_record_id, checksum) for idempotency, and does nothing if it is a duplicate. Then come the VEE checks: duplicates, interval gaps, out-of-range values, decreasing registers, rollover, meter exchange and clock drift. Readings that pass go on to balance, billing and the portal; those that fail go to quarantine and never reach billing automatically. A late actual reading becomes a new version, and the affected balances and invoices are queued for recalculation.',
          )}
        </p>
        <blockquote className="bg-default-950 mb-10 rounded-lg p-12.5 text-white lg:-mx-15">
          <em className="text-lg italic">
            {t(
              '"Түүхий заалтыг дарж засахгүй — засвар бүр шинэ хувилбар. Өгөгдлийн сангийн төлөв өөрчлөгдсөн нь төхөөрөмж дээр биелсэн гэсэн үг биш. «Exactly once»-д найдахгүй — хүлээн авагч бүр idempotent. Шинэ технологийг хэмжсэн нотолгоогоор нэмнэ; эхлээд PostgreSQL."',
              '"Raw readings are never overwritten — every correction is a new version. A changed database state does not mean the device has acted. Nothing relies on \'exactly once\' — every receiver is idempotent. New technology is added on measured evidence; PostgreSQL first."',
            )}
          </em>
          <div className="text-default-400 mt-5 text-sm">
            {t('— PowerGrid-ийн бүтээгдэхүүний зарчмууд', '— PowerGrid product principles')}
          </div>
        </blockquote>
        <p>
          {t(
            'Энэ архитектур одоогоор санал шатандаа бөгөөд шийдвэр бүрийг ADR-ээр батална. Эхний хувилбар Gerege Nexus суурь (нэвтрэлт, байгууллага, гишүүнчлэл, эрх) дээр ажиллаж, тоолуурын бүртгэл, заалт цуглуулалт, VEE, баланс, тариф, командын модулиуд үе шаттай нэмэгдэнэ.',
            'This architecture is still at the proposal stage, and every decision will be confirmed through an ADR. The first release runs on the Gerege Nexus foundation (sign-in, organisations, membership, permissions), with meter registry, ingestion, VEE, balance, tariff and command modules arriving in stages.',
          )}
        </p>
      </div>
    </section>
  )
}

export default ArticleContent
