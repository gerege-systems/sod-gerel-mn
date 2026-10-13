import { Link } from 'react-router-dom'
import module2 from '@/assets/images/platform/servers.jpg'
import module3 from '@/assets/images/platform/substation.jpg'
import module4 from '@/assets/images/platform/control-panel.jpg'
import { useLang, type Text } from '@/i18n/context'

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
        <h2 className="mb-12.5 text-3xl md:text-4xl lg:text-5xl">{t('Бусад модуль', 'Other modules')}</h2>
        <div className="grid grid-cols-2 gap-7.5 lg:grid-cols-3">
          {modulesData.map((module, index) => (
            <div key={index} className="group relative h-100 w-full overflow-hidden rounded-lg">
              <Link to={module.link} className="absolute inset-0 z-1"></Link>
              <img
                src={module.image}
                alt={t(module.title)}
                className="size-full rounded-lg object-cover transition-all duration-300 group-hover:scale-105"
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
    </section>
  )
}

export default OtherModules
