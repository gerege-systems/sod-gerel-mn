import { Link } from 'react-router-dom'
import PageMeta from '@/components/PageMeta'
import { useLang } from '@/i18n/context'

const Index = () => {
  const { t } = useLang()
  return (
    <>
      <PageMeta title={{ mn: 'Хуудас олдсонгүй - 404', en: 'Page not found - 404' }} />
      <section className="relative bg-white py-25 lg:py-50">
        <div className="container">
          <div className="border-default-300 relative z-10 mx-auto w-150 overflow-hidden rounded border bg-white">
            <div className="flex flex-col gap-5 p-10 text-center lg:p-15">
              <h2 className="text-4xl lg:text-6xl">404</h2>
              <h3 className="text-2xl lg:text-3xl">{t('Хуудас олдсонгүй', 'Page not found')}</h3>
              <p className="text-default-600 mb-4">
                {t(
                  'Таны хайсан хуудас байхгүй эсвэл өөр хаяг руу шилжсэн байна.',
                  "The page you're looking for doesn't exist or has moved to a different address.",
                )}
              </p>
              <div className="grid">
                <Link
                  to="/home"
                  className="group bg-primary inline-flex items-center justify-center gap-5 rounded-lg px-10 py-5 font-medium text-white transition-all"
                >
                  <span className="relative block overflow-hidden">
                    <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                      {t('Нүүр хуудас руу буцах', 'Back to home')}
                    </span>
                    <span className="absolute inset-s-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                      {t('Нүүр хуудас руу буцах', 'Back to home')}
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Index
