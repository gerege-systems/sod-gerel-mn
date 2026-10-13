import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import module1 from '@/assets/images/platform/smart-meter.jpg'
import module2 from '@/assets/images/platform/servers.jpg'
import module3 from '@/assets/images/platform/substation.jpg'
import module4 from '@/assets/images/platform/control-panel.jpg'
import { useLang, type Text } from '@/i18n/context'

type ModuleType = {
  image: ImageSrc
  title: Text
  url: string
}

const standardsData: Text[] = [
  { mn: 'DLMS/COSEM', en: 'DLMS/COSEM' },
  { mn: 'IEC 62351-8', en: 'IEC 62351-8' },
  { mn: 'ЕХ 2023/1162', en: 'EU 2023/1162' },
  { mn: 'IEC CIM', en: 'IEC CIM' },
  { mn: 'PostgreSQL + RLS', en: 'PostgreSQL + RLS' },
  { mn: 'Gerege Nexus', en: 'Gerege Nexus' },
  { mn: 'eID Mongolia', en: 'eID Mongolia' },
  { mn: 'OIDC / SSO', en: 'OIDC / SSO' },
  { mn: 'TEAMI', en: 'TEAMI' },
]

const modulesData: ModuleType[] = [
  {
    image: module1,
    title: { mn: 'Бодит заалт цуглуулалт', en: 'Real meter collection' },
    url: '/platform',
  },
  {
    image: module2,
    title: { mn: 'Хувилбартай MDM ба VEE', en: 'Versioned MDM and VEE' },
    url: '/platform',
  },
  {
    image: module3,
    title: { mn: 'Трансформаторын баланс', en: 'Transformer balance' },
    url: '/platform',
  },
  {
    image: module4,
    title: { mn: 'Баталгаатай алсын команд', en: 'Verified remote commands' },
    url: '/platform',
  },
]

const Modules = () => {
  const { t } = useLang()
  return (
    <section className="bg-default-100 py-15 md:py-25 lg:py-27.5">
      <div className="container mb-12.5 lg:max-w-[70%]!">
        <p className="text-default-950 mb-12.5 text-center text-lg font-medium md:text-xl">
          {t(
            'Олон улсын стандарт ба технологи дээр суурилсан',
            'Built on international standards and technology',
          )}
        </p>
        <div className="relative flex w-full flex-nowrap gap-5 overflow-hidden md:gap-16">
          <div className="from-default-100 absolute inset-0 end-auto z-10 hidden w-25 bg-linear-to-tr from-18% to-transparent lg:flex"></div>
          <div className="marquee inline-flex gap-5 md:gap-16">
            {standardsData.map((item, index) => (
              <div key={index} className="inline-flex items-center">
                <span className="text-default-700 text-base font-semibold text-nowrap md:text-lg">{t(item)}</span>
              </div>
            ))}
          </div>
          <div className="marquee inline-flex gap-5 md:gap-16">
            {standardsData.map((item, index) => (
              <div key={index} className="inline-flex items-center">
                <span className="text-default-700 text-base font-semibold text-nowrap md:text-lg">{t(item)}</span>
              </div>
            ))}
          </div>
          <div className="from-default-100 absolute inset-0 start-auto z-10 hidden w-25 bg-linear-to-l from-18% to-transparent lg:flex"></div>
        </div>
      </div>
      <div className="container">
        <div className="text-center">
          <div className="mb-15 lg:mb-25">
            <div className="text-default-950 inline-flex flex-wrap justify-center gap-1 rounded bg-white p-2 text-xs shadow md:gap-2.5 md:rounded-full md:px-4 md:py-1.25 md:text-sm">
              <span>{t('Хэмжилт', 'Metering')}</span>
              <Icon icon="tabler:bolt-filled" className="text-accent-bright size-4 self-center" />
              <span>
                {t(
                  'Нэг ч заалт алдахгүй, давхардуулахгүй.',
                  'No reading lost, none duplicated.',
                )}
              </span>
              <Icon icon="tabler:shield-check-filled" className="text-primary size-4 self-center" />
              <span>{t('Итгэл', 'Trust')}</span>
            </div>
          </div>
          <div className="mb-15 lg:mb-12.5">
            <div className="text-default-950 mb-2 text-sm">{t('Юу хийдэг вэ', 'What it does')}</div>
            <h2 className="mb-2.5 text-3xl md:text-4xl lg:text-5xl">
              {t('Тоолуураас нэхэмжлэх хүртэл нотлогдох урсгал', 'A provable path from meter to invoice')}
            </h2>
            <p className="mx-auto lg:max-w-2/5">
              {t(
                'Заалт ирсэн мөчөөс эхлэн хаанаас, хэзээ, ямар дүрмээр, ямар хувилбараар ирснийг нь хадгална. Нэхэмжлэл, баланс, команд бүрийг эх заалт руу нь буцааж мөрдөж болно.',
                'From the moment a reading arrives, PowerGrid keeps where it came from, when, under which rule and in which version. Every invoice, balance and command traces back to its source reading.',
              )}
            </p>
          </div>
          <div className="grid gap-2.5 md:grid-cols-2 md:gap-7.5 lg:grid-cols-4">
            {modulesData.map((module, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg">
                <Link to={module.url} className="absolute inset-0 z-1"></Link>
                <img
                  src={module.image}
                  alt={t(module.title)}
                  className="rounded-lg object-cover transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-5 text-center">
                  <div className="text-default-950 inline-flex rounded bg-white px-4 py-2">
                    {t(module.title)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Modules
