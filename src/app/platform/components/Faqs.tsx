import { useLang, type Text } from '@/i18n/context'
import Faq from '@/components/site/Faq'

const faqsData: { q: Text; a: Text }[] = [
  {
    q: { mn: 'PowerGrid юуг хамрах, юуг хамрахгүй вэ?', en: 'What does PowerGrid cover, and what does it not?' },
    a: {
      mn: 'Тоолуур, хэмжилтийн цэг, топологийн бүртгэл, заалт цуглуулалт, VEE, хувилбартай MDM, трансформаторын баланс, дохиолол, тариф ба төлбөр, баталгаатай алсын команд, эрх ба зөвшөөрөл, хэрэглэгчийн портал, аналитикийг хамарна. SCADA, хамгаалалтын реле, ADMS-ийн шуурхай шийдвэр, тоолуурын hardware ба холбооны сүлжээ хамрах хүрээнд ороогүй.',
      en: 'It covers the meter, metering point and topology registry, reading collection, VEE, versioned MDM, transformer balance, alarms, tariffs and billing, verified remote commands, permissions and consent, the customer portal and analytics. SCADA, protection relays, real-time ADMS decisions, meter hardware and the communications network are out of scope.',
    },
  },
  {
    q: { mn: 'Ямар тоолуур, протоколыг дэмжих вэ?', en: 'Which meters and protocols are supported?' },
    a: {
      mn: 'DLMS/COSEM тоолуурт Gurux адаптерыг лабораторид туршиж (лицензийн шийдвэр ADR-д), одоогийн TEAMI системээс pull адаптераар уншихаар төлөвлөж байна. Тоолуурыг «DLMS дэмждэг» гэсэн шошгоор бус, үйлдвэрлэгч, загвар, firmware, OBIS mapping тус бүрийн лабораторийн туршилтаар баталгаажуулна. Зөвхөн уншдаг тоолуурт таслах товч хэзээ ч идэвхжихгүй.',
      en: 'For DLMS/COSEM meters we are lab-testing a Gurux adapter (the licensing decision is recorded in an ADR), and we plan to read from the existing TEAMI system through a pull adapter. Meters are qualified not by a "supports DLMS" label but by lab tests per vendor, model, firmware and OBIS mapping. A read-only meter never shows a disconnect button.',
    },
  },
  {
    q: { mn: 'Хэрэгжүүлэлт хэр удаан үргэлжлэх вэ?', en: 'How long does implementation take?' },
    a: {
      mn: 'Үе 0 (суурь ба PoC) 2–3 долоо хоног, Үе 1 (ingestion ба MDM) болон Үе 2 (баланс ба ажиллагаа) тус бүр 4–6 долоо хоног, Үе 3 (тариф ба портал) дор хаяж 2 billing мөчлөг үргэлжилнэ. Энэ нь 6–8 хүний үндсэн баг, тоолуур ба TEAMI-ийн эрх бэлэн байх нөхцөлд тооцсон ажлын жишиг бөгөөд гэрээний амлалт биш.',
      en: 'Phase 0 (foundation and PoC) takes 2–3 weeks, Phase 1 (ingestion and MDM) and Phase 2 (balance and operations) take 4–6 weeks each, and Phase 3 (tariffs and portal) runs for at least 2 billing cycles. These are planning estimates assuming a core team of 6–8 people with meters and TEAMI access ready, not contractual commitments.',
    },
  },
  {
    q: { mn: 'Хувийн мэдээлэл хэрхэн хамгаалагдах вэ?', en: 'How is personal data protected?' },
    a: {
      mn: 'Эрхийг PostgreSQL Row Level Security ба scope cell-ээр өгөгдлийн сан өөрөө хэрэгжүүлнэ. Аналитик нэгтгэл k ≥ 10 босготой, дэлгэрэнгүй хандалт бүр хэн, юу, хэзээ, ямар үндэслэлээр гэж аудитлагдана. Иргэн өөрийн өгөгдлийг татаж, гуравдагч талд хугацаатай зөвшөөрөл олгож, хүссэн үедээ цуцална.',
      en: 'Permissions are enforced by the database itself through PostgreSQL Row Level Security and scope cells. Analytics aggregates use a k ≥ 10 threshold, and every detailed access is audited: who, what, when and on which grant. Customers can export their own data, grant time-limited access to third parties, and revoke it at will.',
    },
  },
  {
    q: { mn: 'Хуучин billing системээс хэрхэн шилжих вэ?', en: 'How do we migrate from the legacy billing system?' },
    a: {
      mn: 'Дор хаяж хоёр мөчлөг shadow billing явуулж, хуучин системтэй тулгана. Санхүүгийн баг баталсан golden dataset дээр 100% зөв тооцоо гарч, зөрүү бүрэн шийдэгдэх хүртэл автомат таслалт идэвхжихгүй.',
      en: 'We run shadow billing for at least two cycles and reconcile it with the legacy system. Automatic disconnection stays off until the golden dataset approved by the finance team calculates 100% correctly and every difference is resolved.',
    },
  },
]

const Faqs = () => {
  const { t } = useLang()
  return <Faq id="platform-faq" title={t('Асуулт ба хариулт', 'Questions and answers')} items={faqsData} />
}

export default Faqs
