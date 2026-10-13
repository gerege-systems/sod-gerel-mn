import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import module2 from '@/assets/images/platform/servers.jpg'
import module3 from '@/assets/images/platform/substation.jpg'
import module4 from '@/assets/images/platform/control-panel.jpg'
import { useLang, type Text } from '@/i18n/context'
import SectionMeta from '@/components/SectionMeta'

type ModuleType = {
  image: ImageSrc
  title: Text
  link: string
}

const modulesData: ModuleType[] = [
  { image: module2, title: { mn: 'Хэрэглэгчийн портал', en: 'Customer portal' }, link: '/platform' },
  { image: module3, title: { mn: 'Эрх ба нууцлал', en: 'Access & privacy' }, link: '/architecture' },
  { image: module4, title: { mn: 'Бүлэглэл ба аналитик', en: 'Grouping and analytics' }, link: '/platform' },
]

const OtherModules = () => {
  const { t } = useLang()

  return (
    <section className="py-15 md:py-25 lg:py-27.5">
      <div className="container">
        <SectionMeta left={t('Бусад модуль', 'Other modules')} right="07 — 08" />
        <h2 className="h-section mt-10 mb-12 lg:mt-14">
          {t('Бусад модуль', 'Other modules')}
          <span className="accent">.</span>
        </h2>
        <div className="grid gap-4 md:grid-cols-3 lg:gap-6">
          {modulesData.map((module, index) => (
            <div key={index} className="group rounded-card relative h-80 w-full overflow-hidden lg:h-100">
              <Link to={module.link} className="absolute inset-0 z-1" aria-label={t(module.title)}></Link>
              <img
                src={module.image}
                alt=""
                className="size-full object-cover transition-transform duration-500 ease-soft group-hover:scale-[1.04]"
              />
              <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-full bg-white/92 py-2 ps-5 pe-2 backdrop-blur">
                <span className="text-ink text-sm font-medium">{t(module.title)}</span>
                <span className="arrow-chip" aria-hidden="true">
                  <Icon icon="tabler:arrow-up-right" className="size-5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OtherModules
