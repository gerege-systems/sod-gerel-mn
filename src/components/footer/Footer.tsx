import exp1 from '@/assets/images/experience/1.webp'
import exp2 from '@/assets/images/experience/2.webp'
import exp3 from '@/assets/images/experience/3.webp'
import exp4 from '@/assets/images/experience/4.webp'
import logoLight from '@/assets/images/powergrid-logo-light.svg'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { CONTACT_EMAIL, LOGIN_URL } from '@/config'
import NewsletterForm from './NewsletterForm'
import LanguageSwitch from '@/components/LanguageSwitch'
import { useLang, type Text } from '@/i18n/context'

type ThumbType = {
  image: StaticImageData
  link: string
}

type FooterLinkType = {
  label: Text
  route: string
  external?: boolean
}

const experienceThumbs: ThumbType[] = [
  { image: exp1, link: '/experience' },
  { image: exp2, link: '/experience' },
  { image: exp3, link: '/experience' },
  { image: exp4, link: '/experience' },
]

const pagesData: FooterLinkType[] = [
  { label: { mn: 'Платформ', en: 'Platform' }, route: '/platform' },
  { label: { mn: 'Архитектур', en: 'Architecture' }, route: '/architecture' },
  { label: { mn: 'Эрх ба нууцлал', en: 'Access & privacy' }, route: '/trust' },
  { label: { mn: 'Олон улсын туршлага', en: 'International experience' }, route: '/experience' },
  { label: { mn: 'Мэдлэг', en: 'Knowledge' }, route: '/knowledge' },
]

const otherPagesData: FooterLinkType[] = [
  { label: { mn: 'Бидний тухай', en: 'About' }, route: '/about' },
  { label: { mn: 'Холбоо барих', en: 'Contact' }, route: '/contact' },
  { label: { mn: 'Нууцлалын бодлого', en: 'Privacy policy' }, route: '/privacy' },
  { label: { mn: 'Нэвтрэх', en: 'Sign in' }, route: LOGIN_URL, external: true },
]

const FooterLinks = ({ title, links }: { title: string; links: FooterLinkType[] }) => {
  const { t } = useLang()
  return (
  <div className="flex flex-wrap items-start gap-2.5 md:flex-row lg:flex-col">
    <h3 className="text-default-400 mb-1.5 w-full text-sm">{title}</h3>
    {links.map((link) => (
      <Link
        key={link.route}
        to={link.route}
        target={link.external ? '_blank' : undefined}
        className="hover:text-default-400 inline-flex text-white transition duration-300"
      >
        {t(link.label)}
      </Link>
    ))}
  </div>
  )
}

const Footer = () => {
  const { t } = useLang()
  return (
    <footer className="bg-default-950 pt-20 pb-10 md:pt-8 lg:pt-27.5">
      <div className="container">
        <div className="grid gap-7.5 lg:grid-cols-9 lg:gap-20">
          <div className="lg:col-span-2">
            <div className="flex h-full flex-wrap items-start justify-between gap-12 md:flex-row lg:flex-col">
              <img src={logoLight} className="h-12 w-auto" alt="PowerGrid" />
              <div className="space-y-3">
                <h3 className="text-default-400 text-sm">{t('Бидэнтэй холбогдох', 'Get in touch')}</h3>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-default-400 block text-white transition duration-300"
                >
                  {CONTACT_EMAIL}
                </a>
                <a
                  href="https://powergrid.mn"
                  className="hover:text-default-400 block text-white transition duration-300"
                >
                  powergrid.mn
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div>
              <div className="grid gap-7.5 lg:grid-cols-2">
                <FooterLinks title={t('Хуудсууд', 'Pages')} links={pagesData} />
                <FooterLinks title={t('Бусад', 'More')} links={otherPagesData} />
              </div>
            </div>

            <div className="mt-7.5 flex flex-wrap items-center gap-6 lg:mt-15 lg:gap-10">
              <h3 className="text-xl text-white">{t('Шинэ мэдээлэл авах', 'Stay informed')}</h3>
              <NewsletterForm />
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="mb-4 font-medium text-white">{t('Олон улсын туршлага', 'International experience')}</h3>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-2">
              {experienceThumbs.map((work, index) => (
                <Link
                  key={index}
                  to={work.link}
                  className="group relative overflow-hidden rounded-lg lg:h-27.5"
                >
                  <img
                    src={work.image}
                    className="size-full object-cover transition duration-400 group-hover:scale-105"
                    alt={t('Олон улсын туршлага', 'International experience')}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon
                      icon="tabler:circle-arrow-right-filled"
                      className="size-6 text-white opacity-0 transition duration-300 group-hover:-rotate-30 group-hover:opacity-100"
                    />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-default-800 my-10" />

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-wrap items-center gap-5">
            <LanguageSwitch dark />
            <Link
              to="/privacy"
              className="text-default-400 text-sm transition duration-300 hover:text-white"
            >
              {t('Нууцлалын бодлого', 'Privacy policy')}
            </Link>
          </div>
          <p className="text-center text-sm text-white md:text-right">
            © {new Date().getFullYear()} PowerGrid ·{' '}
            {t('Ухаалаг тоолуурын үндэсний платформ', 'National Smart Metering Platform')} ·{' '}
            <a href="https://github.com/gerege-systems" target="_blank" className="underline">
              Gerege Systems
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
