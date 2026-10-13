import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import PageMeta from '@/components/PageMeta'
import SectionMeta from '@/components/SectionMeta'
import { APP_URL, CONTACT_EMAIL } from '@/config'
import { useLang, type Text } from '@/i18n/context'
import { Link } from 'react-router-dom'

type SectionType = {
  title: Text
  items: Text[]
}

const sectionsData: SectionType[] = [
  {
    title: { mn: 'Бид юу цуглуулдаг вэ', en: 'What we collect' },
    items: [
      {
        mn: 'Холбоо барих форм: таны нэр, имэйл хаяг, утасны дугаар (заавал биш), сонирхож буй чиглэл ба мессеж.',
        en: 'Contact form: your name, email address, phone number (optional), area of interest and message.',
      },
      {
        mn: 'Мэдээллийн бүртгэл: зөвхөн таны имэйл хаяг.',
        en: 'Newsletter sign-up: your email address only.',
      },
      {
        mn: 'Хэлний сонголт (MN/EN) таны хөтчийн localStorage-д хадгалагдана. Энэ нь серверт илгээгддэггүй.',
        en: 'Your language choice (MN/EN) is stored in your browser’s localStorage. It is never sent to a server.',
      },
      {
        mn: 'Энэ танилцуулга сайт cookie, зар сурталчилгааны tracker, аналитик ашигладаггүй.',
        en: 'This information site uses no cookies, advertising trackers or analytics.',
      },
      {
        mn: 'Үсгийн фонтыг Google Fonts-оос, icon-уудыг Iconify-аас ачаална. Эдгээр үйлчилгээ техникийн шаардлагаар таны IP хаягийг хүлээн авна.',
        en: 'Fonts load from Google Fonts and icons from Iconify. These services receive your IP address as a technical necessity.',
      },
    ],
  },
  {
    title: { mn: 'Яагаад ашигладаг вэ', en: 'Why we use it' },
    items: [
      {
        mn: 'Зөвхөн таны асуултад хариулах, туршилт ба хамтын ажиллагааны талаар холбогдох, мэдээлэл илгээх зорилгоор.',
        en: 'Only to answer your enquiry, contact you about pilots and cooperation, and send the updates you asked for.',
      },
      {
        mn: 'Таны мэдээллийг гуравдагч талд худалдахгүй, зар сурталчилгаанд ашиглахгүй.',
        en: 'We never sell your data to third parties or use it for advertising.',
      },
    ],
  },
  {
    title: { mn: 'Хаана хадгалагдах вэ', en: 'Where it is kept' },
    items: [
      {
        mn: 'Формын мэдээлэл PowerGrid-ийн холбоо барих имэйл рүү, эсвэл тохируулсан бол формын үйлчилгээ (жишээ нь Formspree) дамжин хүрнэ.',
        en: 'Form data reaches the PowerGrid contact mailbox, either directly or, where configured, through a form service (such as Formspree).',
      },
      {
        mn: 'Асуулт хаагдсаны дараа шаардлагагүй болсон мэдээллийг устгана.',
        en: 'Data that is no longer needed is deleted once the enquiry is closed.',
      },
    ],
  },
  {
    title: { mn: 'Таны эрх', en: 'Your rights' },
    items: [
      {
        mn: 'Хүний хувийн мэдээлэл хамгаалах тухай хуулийн дагуу та өөрийн мэдээллийг харах, засуулах, устгуулах, мэдээлэл авахаас татгалзах эрхтэй.',
        en: 'Under Mongolia’s Law on Personal Data Protection you may see, correct or delete your data, and unsubscribe at any time.',
      },
      {
        mn: 'Хүсэлтээ доорх имэйл хаяг руу бичнэ үү.',
        en: 'Send your request to the email address below.',
      },
    ],
  },
]

const Index = () => {
  const { t } = useLang()

  return (
    <>
      <PageMeta title={{ mn: 'Нууцлалын бодлого', en: 'Privacy policy' }} />
      <Navbar />
      <section className="py-10 md:py-14.5">
        <div className="container max-w-245!">
          <SectionMeta
            left={t('Нууцлалын бодлого', 'Privacy policy')}
            right={t('Хүчинтэй: 2026.10.13', 'Effective: 2026-10-13')}
            year={false}
            className="mb-10 md:mb-14"
          />
          <div className="mb-12 lg:mb-16">
            <h1 className="display">
              {t('Нууцлалын бодлого', 'Privacy policy')}
              <span className="accent">.</span>
            </h1>
            <p className="mt-6 max-w-[40rem] text-lg">
              {t(
                'Энэ бодлого нь PowerGrid-ийн танилцуулга сайтад хамаарна. Ухаалаг тоолуурын платформ дахь хэмжилтийн өгөгдлийн эрх, нууцлалын хамгаалалтыг «Эрх ба нууцлал» хуудаснаас үзнэ үү.',
                'This policy covers the PowerGrid information site. For how the metering platform itself protects metering data, see the Access & privacy page.',
              )}{' '}
              <Link to="/trust" className="text-ink underline underline-offset-4">
                {t('Эрх ба нууцлал', 'Access & privacy')}
              </Link>
            </p>
          </div>

          <div className="space-y-12">
            {sectionsData.map((section, index) => (
              <div key={section.title.en} className="grid gap-4 md:grid-cols-[6rem_1fr] md:gap-8">
                <span className="meta pt-2">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h2 className="mb-4 text-2xl">{t(section.title)}</h2>
                  <ul className="border-hair border-t">
                    {section.items.map((item) => (
                      <li key={item.en} className="border-hair border-b py-3">
                        {t(item)}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            <div className="card p-7 lg:p-9">
              <h2 className="mb-2.5 text-2xl">{t('Холбоо барих', 'Contact')}</h2>
              <p>
                {t('Нууцлалтай холбоотой асуулт, хүсэлт: ', 'Privacy questions and requests: ')}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-ink font-medium underline underline-offset-4">
                  {CONTACT_EMAIL}
                </a>
              </p>
              <p className="mt-2.5 text-sm">
                {t(
                  'PowerGrid платформд нэвтэрсний дараах өгөгдлийн боловсруулалт тухайн системийн нөхцөлөөр зохицуулагдана: ',
                  'Data processing after you sign in to the PowerGrid platform is governed by that system’s own terms: ',
                )}
                <a href={APP_URL} className="underline underline-offset-4">
                  powergrid.mn
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Index
