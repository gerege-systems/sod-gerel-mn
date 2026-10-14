import PageMeta from '@/components/PageMeta'
import SiteShell from '@/components/site/SiteShell'
import { Pill } from '@/components/site/ui'
import { useLang } from '@/i18n/context'

const Index = () => {
  const { t } = useLang()

  return (
    <SiteShell>
      <PageMeta title={{ mn: 'Хуудас олдсонгүй - 404', en: 'Page not found - 404' }} />
      <section className="pgl-404">
        <div className="pgl-enter">
          <b aria-hidden>404</b>
          <h1>{t('Хуудас олдсонгүй', 'Page not found')}</h1>
          <p>{t('Таны хайсан хуудас байхгүй эсвэл өөр хаяг руу шилжсэн байна.', "The page you're looking for doesn't exist or has moved to a different address.")}</p>
          <Pill to="/" variant="solid" size="lg">
            {t('Нүүр хуудас руу буцах', 'Back to home')}
          </Pill>
        </div>
      </section>
    </SiteShell>
  )
}

export default Index
