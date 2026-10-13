import exp1 from '@/assets/images/experience/sydney.webp'
import exp2 from '@/assets/images/experience/london.webp'
import exp3 from '@/assets/images/experience/paris.webp'
import exp4 from '@/assets/images/experience/tashkent.webp'
import logoLight from '@/assets/images/powergrid-logo-light.svg'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { CONTACT_EMAIL, LOGIN_URL } from '@/config'
import NewsletterForm from './NewsletterForm'
import LanguageSwitch from '@/components/LanguageSwitch'
import SectionMeta from '@/components/SectionMeta'
import { useLang, type Text } from '@/i18n/context'

type ThumbType = {
  image: ImageSrc
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
      <h3 className="meta on-ink mb-2 w-full">{title}</h3>
      {links.map((link) => (
        <Link
          key={link.route}
          to={link.route}
          target={link.external ? '_blank' : undefined}
          rel={link.external ? 'noopener noreferrer' : undefined}
          className="inline-flex text-white/85 transition duration-300 hover:text-white hover:underline hover:underline-offset-4"
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
    <footer className="bg-ink pt-16 pb-10 md:pt-20 lg:pt-24">
      <div className="container">
        <SectionMeta
          dark
          left="PowerGrid"
          right={t('Ухаалаг тоолуурын үндэсний платформ', 'National Smart Metering Platform')}
          className="mb-12 lg:mb-16"
        />
        <div className="grid gap-10 lg:grid-cols-9 lg:gap-20">
          <div className="lg:col-span-2">
            <div className="flex h-full flex-wrap items-start justify-between gap-12 md:flex-row lg:flex-col">
              <img src={logoLight} className="h-11 w-auto" alt="PowerGrid" />
              <div className="space-y-3">
                <h3 className="meta on-ink">{t('Бидэнтэй холбогдох', 'Get in touch')}</h3>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="block text-white/85 transition duration-300 hover:text-white"
                >
                  {CONTACT_EMAIL}
                </a>
                <a
                  href="https://powergrid.mn"
                  className="block text-white/85 transition duration-300 hover:text-white"
                >
                  powergrid.mn
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid gap-10 lg:grid-cols-2">
              <FooterLinks title={t('Хуудсууд', 'Pages')} links={pagesData} />
              <FooterLinks title={t('Бусад', 'More')} links={otherPagesData} />
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 lg:mt-14 lg:gap-10">
              <h3 className="text-xl font-semibold tracking-[-0.02em] text-white">
                {t('Шинэ мэдээлэл авах', 'Stay informed')}
              </h3>
              <NewsletterForm />
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="meta on-ink mb-4">{t('Олон улсын туршлага', 'International experience')}</h3>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-2">
              {experienceThumbs.map((work, index) => (
                <Link
                  key={index}
                  to={work.link}
                  className="group relative overflow-hidden rounded-2xl lg:h-27.5"
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

        <hr className="my-10 border-white/10" />

        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-wrap items-center gap-5">
            <LanguageSwitch dark />
            <Link
              to="/privacy"
              className="text-sm text-white/60 transition duration-300 hover:text-white"
            >
              {t('Нууцлалын бодлого', 'Privacy policy')}
            </Link>
          </div>
          <p className="text-center text-sm text-white/70 md:text-right">
            © {new Date().getFullYear()} PowerGrid ·{' '}
            {t('Ухаалаг тоолуурын үндэсний платформ', 'National Smart Metering Platform')} ·{' '}
            <a
              href="https://github.com/gerege-systems"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white underline underline-offset-4"
            >
              Gerege Systems
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
