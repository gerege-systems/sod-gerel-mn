import { Link } from 'react-router-dom'
import aboutImage from '@/assets/images/other/pylons-sunset.jpg'
import { useLang, type Text } from '@/i18n/context'
import PillButton from '@/components/PillButton'
import SectionMeta from '@/components/SectionMeta'

type StatType = {
  label: Text
  value: Text
  suffix: Text
  description: Text
}

// Утга = том тоо, suffix = жижиг саарал дагавар (1M → 1 + M, 96 сая → 96 + сая).
const statsData: StatType[] = [
  {
    label: { mn: 'Тоолуурын багтаамж', en: 'Meter capacity' },
    value: { mn: '1', en: '1' },
    suffix: { mn: 'M', en: 'M' },
    description: {
      mn: 'Монгол Улсын бүх цахилгааны тоолуурт зориулсан.',
      en: 'Built for every electricity meter in Mongolia.',
    },
  },
  {
    label: { mn: 'D+1 бүрэн байдал', en: 'D+1 completeness' },
    value: { mn: '≥99', en: '≥99' },
    suffix: { mn: '%', en: '%' },
    description: {
      mn: 'Дараа өдрийн бодит заалтын сарын дундаж зорилт.',
      en: 'Monthly average target for next-day actual readings.',
    },
  },
  {
    label: { mn: 'Өдөрт цуглах бичлэг', en: 'Records collected per day' },
    value: { mn: '96', en: '96' },
    suffix: { mn: 'сая', en: 'million' },
    description: {
      mn: '15 минутын интервалаар — жилд 35 тэрбум бичлэг.',
      en: 'At 15-minute intervals — 35 billion records a year.',
    },
  },
]

const AboutPlatform = () => {
  const { t } = useLang()
  return (
    <section className="py-15 md:py-25 lg:py-27.5">
      <div className="container">
        <SectionMeta left={t('PowerGrid-ийн тухай', 'About PowerGrid')} right="02 — 08" />
        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-14 lg:gap-12">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className={`${index > 0 ? 'md:border-hair md:border-s md:ps-8 lg:ps-12' : ''}`}
            >
              <span className="chip chip--up">{t(stat.label)}</span>
              <div className="num mt-6">
                {t(stat.value)}
                <span className="num-sfx">{t(stat.suffix)}</span>
              </div>
              <p className="mt-5 max-w-[30ch] text-sm">{t(stat.description)}</p>
            </div>
          ))}
        </div>
        <hr className="border-hair my-12 md:my-16 lg:my-20" />
        <div className="grid gap-7.5 lg:grid-cols-2 lg:gap-16">
          <div className="flex h-full flex-col gap-10 md:gap-16 lg:gap-24">
            <div>
              <h2 className="h-section mixed mb-5">
                <b>{t('Улсын хэмжээнд өргөжинө.', 'Scales nationally.')}</b> <br />
                {t('Нэг ч заалт алдахгүй', 'Never loses a single reading')}
                <span className="accent">.</span>
              </h2>
              <p className="max-w-[34rem]">
                {t(
                  'Төхөөрөмжтэй харилцах ажил бүхэлдээ дарааллаар, тусдаа worker-оор явна. UI хэзээ ч тоолуур руу шууд хүрэхгүй; Core, бүлэглэл, аналитик тус тусын хилтэй.',
                  'All device work runs through queues on separate workers. The UI never touches a meter directly, and Core, grouping and analytics each keep their own boundary.',
                )}
              </p>
              <div className="mt-9">
                <PillButton to="/about" variant="dark">
                  {t('Дэлгэрэнгүй', 'Learn more')}
                </PillButton>
              </div>
            </div>
            <div className="mt-auto">
              <Link to="/architecture" className="chip">
                <span>
                  {t('Gerege Nexus суурь · Go · PostgreSQL', 'Built on Gerege Nexus · Go · PostgreSQL')}
                </span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="w-full md:h-100 lg:h-full">
            <img src={aboutImage} alt="PowerGrid" className="rounded-card size-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPlatform
