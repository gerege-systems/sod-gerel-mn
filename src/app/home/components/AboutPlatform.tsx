import { Link } from 'react-router-dom'
import aboutImage from '@/assets/images/other/about-image.jpg'
import { useLang, type Text } from '@/i18n/context'

type StatType = {
  label: Text
  value: Text
  description: Text
}

const statsData: StatType[] = [
  {
    label: { mn: 'Тоолуурын багтаамж', en: 'Meter capacity' },
    value: { mn: '1M', en: '1M' },
    description: {
      mn: 'Монгол Улсын бүх цахилгааны тоолуурт зориулсан.',
      en: 'Built for every electricity meter in Mongolia.',
    },
  },
  {
    label: { mn: 'D+1 бүрэн байдал', en: 'D+1 completeness' },
    value: { mn: '≥99%', en: '≥99%' },
    description: {
      mn: 'Дараа өдрийн бодит заалтын сарын дундаж зорилт.',
      en: 'Monthly average target for next-day actual readings.',
    },
  },
  {
    label: { mn: 'Өдөрт цуглах бичлэг', en: 'Records collected per day' },
    value: { mn: '96 сая', en: '96 million' },
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
        <div className="grid gap-7.5 md:grid-cols-2 lg:grid-cols-3 lg:gap-50">
          {statsData.map((stat, index) => (
            <div key={index}>
              <span className="bg-default-100 inline-block rounded-md px-2.5 py-1 text-sm">
                {t(stat.label)}
              </span>
              <div className="mt-4 flex items-start gap-4">
                <h3 className="text-3xl text-nowrap">{t(stat.value)}</h3>
                <p>{t(stat.description)}</p>
              </div>
            </div>
          ))}
        </div>
        <hr className="border-default-200 my-5 md:my-12.5 lg:my-17.5" />
        <div className="grid gap-7.5 lg:grid-cols-2">
          <div className="flex h-full flex-col gap-10 md:gap-25 lg:gap-50">
            <div>
              <div className="text-default-950 mb-2.5 text-sm">
                {t('PowerGrid-ийн тухай', 'About PowerGrid')}
              </div>
              <h1 className="mb-2.5 text-3xl md:text-4xl lg:text-5xl">
                {t('Улсын хэмжээнд өргөжинө.', 'Scales nationally.')} <br />{' '}
                {t('Нэг ч заалт алдахгүй', 'Never loses a single reading')}
              </h1>
              <p className="text-default-600">
                {t(
                  'Төхөөрөмжтэй харилцах ажил бүхэлдээ дарааллаар, тусдаа worker-оор явна. UI хэзээ ч тоолуур руу шууд хүрэхгүй; Core, бүлэглэл, аналитик тус тусын хилтэй.',
                  'All device work runs through queues on separate workers. The UI never touches a meter directly, and Core, grouping and analytics each keep their own boundary.',
                )}
              </p>
              <div className="mt-11 inline-flex items-center gap-4 md:gap-20 lg:gap-7.5">
                <Link
                  to="/about"
                  className="group bg-primary inline-flex items-center justify-center gap-5 rounded-lg px-10 py-5 font-medium text-white transition-all"
                >
                  <span className="relative block overflow-hidden">
                    <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                      {t('Дэлгэрэнгүй', 'Learn more')}
                    </span>
                    <span className="absolute inset-s-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                      {t('Дэлгэрэнгүй', 'Learn more')}
                    </span>
                  </span>
                </Link>
              </div>
            </div>
            <div className="mt-auto">
              <Link
                to="/architecture"
                className="bg-default-100 text-default-950 inline-flex items-center gap-3 rounded-lg px-5 py-4"
              >
                <span className="text-sm">
                  {t('Gerege Nexus суурь · Go · PostgreSQL', 'Built on Gerege Nexus · Go · PostgreSQL')}
                </span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
          <div className="w-full md:h-100 lg:h-full">
            <img src={aboutImage} alt="PowerGrid" className="size-full rounded-xl object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPlatform
