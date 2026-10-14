import { useLang, type Text } from '@/i18n/context'
import { SectionHeading, Tile } from '@/components/site/ui'
import { icon3d } from '@/components/site/icons3d'

type AdvantageType = {
  icon: string
  title: Text
  body: Text
}

const advantagesData: AdvantageType[] = [
  {
    icon: icon3d.completeness,
    title: { mn: 'Холбоо тасарсан ч алдагдахгүй', en: 'Survives lost connections' },
    body: {
      mn: 'Шалтгаанаас хамаарсан retry, exponential backoff, тусдаа backfill квот. 72 цагийн нөхөн таталтаар 99.9% бүрэн байдлыг зорьдог; сервер хадгалаагүй заалтыг «хүлээн авсан» гэж хэзээ ч хариулахгүй.',
      en: 'Cause-aware retries, exponential backoff and a separate backfill quota. It targets 99.9% completeness after 72-hour catch-up, and never acknowledges a reading it has not durably stored.',
    },
  },
  {
    icon: icon3d.invoice,
    title: { mn: 'Тайлбарлагдах төлбөр', en: 'Billing you can explain' },
    body: {
      mn: 'Нэхэмжлэх бүр ашигласан заалт ба тарифын хувилбарыг заана. Төлбөрийн callback давтагдсан ч данс нэг удаа цэнэглэгдэнэ. Хоцорсон заалт хуучин нэхэмжлэхийг чимээгүй өөрчлөхгүй — засварын баримт үүснэ.',
      en: 'Every invoice names the reading and tariff versions it used. A repeated payment callback credits once, and a late reading never silently changes an old invoice: it raises a correction.',
    },
  },
  {
    icon: icon3d.customer,
    title: { mn: 'Иргэн өөрийн өгөгдлийн эзэн', en: 'Customers own their data' },
    body: {
      mn: 'Иргэн хэрэглээгээ татаж, банк, ESCO зэрэг гуравдагч талд хугацаатай зөвшөөрөл олгож, хүссэн үедээ цуцална. Цуцалмагц хандалт тэр даруй зогсоно.',
      en: 'Customers export their usage, grant time-limited access to banks or ESCOs, and revoke it at will — access stops on the next request.',
    },
  },
  {
    icon: icon3d.monitoring,
    title: { mn: 'Тасралтыг хурдан илрүүлэх', en: 'Outages found faster' },
    body: {
      mn: 'Нэг фидерийн олон тоолуурын дохиоллыг нэг incident болгон бүлэглэнэ. Холбоо тасарсныг цахилгаан тасарсан гэж андуурахгүй; сэргэлтийг тоолуураас шалгаж батална.',
      en: 'Alarms from many meters on one feeder collapse into one incident. A lost link is never mistaken for an outage, and restoration is confirmed from the meters.',
    },
  },
  {
    icon: icon3d.certified,
    title: { mn: 'Нийцлийг нотолгоогоор', en: 'Compatibility by evidence' },
    body: {
      mn: 'Тоолуурыг «DLMS дэмждэг» гэсэн шошгоор бус, үйлдвэрлэгч, загвар, firmware, OBIS mapping тус бүрийн лабораторийн туршилтаар баталгаажуулна. Зөвхөн уншдаг тоолуурт таслах товч идэвхжихгүй.',
      en: 'Meters are qualified not by a "supports DLMS" label but by lab tests per vendor, model, firmware and OBIS mapping. A read-only meter never shows a disconnect button.',
    },
  },
  {
    icon: icon3d.kpi,
    title: { mn: 'Өдөр бүрийн хэмжигдэх KPI', en: 'KPIs measured every day' },
    body: {
      mn: 'D+1 бодит заалтын бүрэн байдал ≥99%, давхардсан төлбөр 0, худал VERIFIED команд 0, сэргэлт RPO ≤15 минут, RTO ≤4 цаг. Суурилуулсан, холбогдсон, төлбөрт бэлэн тоолуурыг тусад нь тоолно.',
      en: 'D+1 actual-read completeness ≥99%, zero duplicate payments, zero false VERIFIED commands, recovery RPO ≤15 minutes and RTO ≤4 hours. Installed, communicating and billing-ready meters are counted separately.',
    },
  },
]

const Advantages = () => {
  const { t } = useLang()

  return (
    <section className="pgl-section pgl-section--sky">
      <div className="pgl-container">
        <SectionHeading
          align="center"
          label={t('Давуу тал', 'WHY POWERGRID')}
          title={t('Дэлхийн шилдэг туршлагыг Монголд тохируулсан', "The world's best practice, fitted to Mongolia")}
          body={t(
            'Нэг бүтээгдэхүүнийг хуулбарласангүй. Улс бүрээс хамгийн сайн шийдлийг нь авч, Монголын тариф, хууль, сүлжээнд тохируулан нэг платформд нэгтгэв.',
            "We did not copy one product. We took the best answer from each country and fitted it to Mongolia's tariffs, laws and grid in one platform.",
          )}
        />
        <div className="pgl-feature-grid">
          {advantagesData.map((item, index) => (
            <article key={item.icon} className="pgl-feature-card" data-tilt>
              <Tile image={item.icon} />
              <span className="pgl-feature-card__num">{String(index + 1).padStart(2, '0')}</span>
              <h3>{t(item.title)}</h3>
              <p>{t(item.body)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Advantages
