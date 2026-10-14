import PageMeta from '@/components/PageMeta'
import SiteShell from '@/components/site/SiteShell'
import Faq from '@/components/site/Faq'
import { useLang } from '@/i18n/context'
import { site } from '@/i18n/site'
import Hero from './components/Hero'
import Bento from './components/Bento'
import About from './components/About'
import Trust from './components/Trust'
import Chain from './components/Chain'
import ReportLoop from './components/ReportLoop'
import Roles from './components/Roles'
import Band from './components/Band'
import Contact from './components/Contact'

/**
 * Нүүр хуудас — асуултын дараалал. Энэ юу вэ (hero). Юу нь баталгаатай вэ
 * (bento). Хэн бэ (about). Яагаад тоонд нь итгэх вэ (trust — navy самбар).
 * Цахилгаан хаанаас хаашаа явдаг вэ (chain). Заалт яаж шалгагддаг вэ (report —
 * цайвар самбар). Би энд хэн бэ (roles). Хаанаас эхлэх вэ (band, contact).
 *
 * Хэсэг бүр өөрийн илрэлтээ (гарчгийн үгс, ээлжлэн гарах картууд, өргөгдөх
 * төхөөрөмж) өөртөө агуулна — тиймээс энд нэмэлт боодол байхгүй.
 *
 * Хоёр дүрэм: (1) амьд тоо байхгүй — PowerGrid Үе 0-д байгаа тул энд зөвхөн
 * баримтад бичигдсэн төлөвлөлтийн тоо, зорилтууд, тэгж тэмдэглэгдсэн;
 * (2) зурсан дэлгэц бүр «жишээ» гэж тэмдэглэгдэнэ — утас, incident жагсаалт,
 * тоолуурын төлөв, заалтын багцын карт.
 */
const Index = () => {
  const { t } = useLang()

  return (
    <SiteShell>
      <PageMeta title={{ mn: 'Нүүр', en: 'Home' }} />
      <Hero />
      <Bento />
      <About />
      <Trust />
      <Chain />
      <ReportLoop />
      <Roles />
      <Band />
      <Faq label={t(site.faq_tag)} title={t(site.faq_title)} items={site.faq} />
      <Contact />
    </SiteShell>
  )
}

export default Index
