import { useLang, type Text } from '@/i18n/context'

type FaqType = {
  question: Text
  answer: Text
}

const faqsData: FaqType[] = [
  {
    question: {
      mn: 'PowerGrid юуг хамрах, юуг хамрахгүй вэ?',
      en: 'What does PowerGrid cover, and what does it not?',
    },
    answer: {
      mn: 'Тоолуур, хэмжилтийн цэг, топологийн бүртгэл, заалт цуглуулалт, VEE, хувилбартай MDM, трансформаторын баланс, дохиолол, тариф ба төлбөр, баталгаатай алсын команд, эрх ба зөвшөөрөл, хэрэглэгчийн портал, аналитикийг хамарна. SCADA, хамгаалалтын реле, ADMS-ийн шуурхай шийдвэр, тоолуурын hardware ба холбооны сүлжээ хамрах хүрээнд ороогүй.',
      en: 'It covers the meter, metering point and topology registry, reading collection, VEE, versioned MDM, transformer balance, alarms, tariffs and billing, verified remote commands, permissions and consent, the customer portal and analytics. SCADA, protection relays, real-time ADMS decisions, meter hardware and the communications network are out of scope.',
    },
  },
  {
    question: {
      mn: 'Ямар тоолуур, протоколыг дэмжих вэ?',
      en: 'Which meters and protocols are supported?',
    },
    answer: {
      mn: 'DLMS/COSEM тоолуурт Gurux адаптерыг лабораторид туршиж (лицензийн шийдвэр ADR-д), одоогийн TEAMI системээс pull адаптераар уншихаар төлөвлөж байна. Тоолуурыг «DLMS дэмждэг» гэсэн шошгоор бус, үйлдвэрлэгч, загвар, firmware, OBIS mapping тус бүрийн лабораторийн туршилтаар баталгаажуулна. Зөвхөн уншдаг тоолуурт таслах товч хэзээ ч идэвхжихгүй.',
      en: 'For DLMS/COSEM meters we are lab-testing a Gurux adapter (the licensing decision is recorded in an ADR), and we plan to read from the existing TEAMI system through a pull adapter. Meters are qualified not by a "supports DLMS" label but by lab tests per vendor, model, firmware and OBIS mapping. A read-only meter never shows a disconnect button.',
    },
  },
  {
    question: {
      mn: 'Хэрэгжүүлэлт хэр удаан үргэлжлэх вэ?',
      en: 'How long does implementation take?',
    },
    answer: {
      mn: 'Үе 0 (суурь ба PoC) 2–3 долоо хоног, Үе 1 (ingestion ба MDM) болон Үе 2 (баланс ба ажиллагаа) тус бүр 4–6 долоо хоног, Үе 3 (тариф ба портал) дор хаяж 2 billing мөчлөг үргэлжилнэ. Энэ нь 6–8 хүний үндсэн баг, тоолуур ба TEAMI-ийн эрх бэлэн байх нөхцөлд тооцсон ажлын жишиг бөгөөд гэрээний амлалт биш.',
      en: 'Phase 0 (foundation and PoC) takes 2–3 weeks, Phase 1 (ingestion and MDM) and Phase 2 (balance and operations) take 4–6 weeks each, and Phase 3 (tariffs and portal) runs for at least 2 billing cycles. These are planning estimates assuming a core team of 6–8 people with meters and TEAMI access ready, not contractual commitments.',
    },
  },
  {
    question: {
      mn: 'Хувийн мэдээлэл хэрхэн хамгаалагдах вэ?',
      en: 'How is personal data protected?',
    },
    answer: {
      mn: 'Эрхийг PostgreSQL Row Level Security ба scope cell-ээр өгөгдлийн сан өөрөө хэрэгжүүлнэ. Аналитик нэгтгэл k ≥ 10 босготой, дэлгэрэнгүй хандалт бүр хэн, юу, хэзээ, ямар үндэслэлээр гэж аудитлагдана. Иргэн өөрийн өгөгдлийг татаж, гуравдагч талд хугацаатай зөвшөөрөл олгож, хүссэн үедээ цуцална.',
      en: 'Permissions are enforced by the database itself through PostgreSQL Row Level Security and scope cells. Analytics aggregates use a k ≥ 10 threshold, and every detailed access is audited: who, what, when and on which grant. Customers can export their own data, grant time-limited access to third parties, and revoke it at will.',
    },
  },
  {
    question: {
      mn: 'Хуучин billing системээс хэрхэн шилжих вэ?',
      en: 'How do we migrate from the legacy billing system?',
    },
    answer: {
      mn: 'Дор хаяж хоёр мөчлөг shadow billing явуулж, хуучин системтэй тулгана. Санхүүгийн баг баталсан golden dataset дээр 100% зөв тооцоо гарч, зөрүү бүрэн шийдэгдэх хүртэл автомат таслалт идэвхжихгүй.',
      en: 'We run shadow billing for at least two cycles and reconcile it with the legacy system. Automatic disconnection stays off until the golden dataset approved by the finance team calculates 100% correctly and every difference is resolved.',
    },
  },
]

const Faqs = () => {
  const { t } = useLang()

  return (
    <section className="py-15 md:py-25 lg:py-27.5">
      <div className="container max-w-250!">
        <div className="mb-12.5 text-center">
          <div className="text-default-950 mb-2 text-sm">{t('Түгээмэл асуулт', 'FAQ')}</div>
          <h2 className="mb-2.5 text-3xl md:text-4xl lg:text-5xl">{t('Асуулт ба хариулт', 'Questions and answers')}</h2>
          <p className="mx-auto lg:max-w-3/4">
            {t(
              'PowerGrid-ийн хамрах хүрээ, тоолуурын нийцэл, хугацаа, нууцлалын талаар хамгийн их асуудаг асуултууд.',
              "The questions we hear most about PowerGrid's scope, meter compatibility, timeline and privacy.",
            )}
          </p>
        </div>

        <div>
          {faqsData.map((faq, index) => (
            <div key={index}>
              {index > 0 && <hr className="border-default-200 my-5" />}
              <div className={`hs-accordion p-5 ${index === 0 ? 'active' : ''}`}>
                <button className="hs-accordion-toggle flex w-full items-center justify-between gap-2.5 text-start">
                  <h3 className="text-xl font-semibold">{t(faq.question)}</h3>
                  <div className="relative flex size-4.5 shrink-0 items-center justify-center">
                    <i className="bg-default-950 hs-accordion-active:rotate-90 absolute flex h-4.5 w-0.5 transition duration-500"></i>
                    <i className="bg-default-950 flex h-0.5 w-4.5"></i>
                  </div>
                </button>
                <div
                  className={`hs-accordion-content w-full ${index !== 0 ? 'hidden' : ''} overflow-hidden text-start transition-[height] duration-300`}
                >
                  <p className="mt-5">{t(faq.answer)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faqs
