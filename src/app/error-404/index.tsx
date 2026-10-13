import PageMeta from '@/components/PageMeta'
import PillButton from '@/components/PillButton'
import SectionMeta from '@/components/SectionMeta'
import { useLang } from '@/i18n/context'

const Index = () => {
  const { t } = useLang()
  return (
    <>
      <PageMeta title={{ mn: 'Хуудас олдсонгүй - 404', en: 'Page not found - 404' }} />
      <section className="bg-stage relative flex min-h-screen items-center overflow-hidden py-20">
        <div className="rails" aria-hidden="true">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </div>
        <div className="container relative">
          <SectionMeta left="PowerGrid" right="404" className="mb-12 lg:mb-16" />
          <div className="mx-auto max-w-[44rem] text-center">
            <div className="num">
              404<span className="accent">.</span>
            </div>
            <h1 className="h-section mt-8">{t('Хуудас олдсонгүй', 'Page not found')}</h1>
            <p className="mx-auto mt-5 max-w-[30rem]">
              {t(
                'Таны хайсан хуудас байхгүй эсвэл өөр хаяг руу шилжсэн байна.',
                "The page you're looking for doesn't exist or has moved to a different address.",
              )}
            </p>
            <div className="mt-10">
              <PillButton to="/" variant="dark">
                {t('Нүүр хуудас руу буцах', 'Back to home')}
              </PillButton>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Index
