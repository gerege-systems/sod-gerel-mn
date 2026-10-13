import { CONTACT_EMAIL, LOGIN_URL } from '@/config'
import contactInfo from '@/assets/images/other/ulaanbaatar-winter.jpg'
import { useLang } from '@/i18n/context'
import PillButton from '@/components/PillButton'
import SectionMeta from '@/components/SectionMeta'

const ContactInfo = () => {
  const { t } = useLang()
  return (
    <section className="py-15 md:py-25 lg:py-27.5">
      <div className="container">
        <SectionMeta left={t('Холбоо барих', 'Contact')} right="01 — 02" className="mb-10 lg:mb-14" />
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <div className="rounded-card relative min-h-72 overflow-hidden md:h-full">
              <img src={contactInfo} className="absolute inset-0 h-full w-full object-cover" alt="PowerGrid" />
            </div>
          </div>
          <div>
            <div className="card flex h-full flex-col justify-between gap-12 p-7 lg:p-10">
              <h2 className="h-section mixed">
                <b>PowerGrid</b>{' '}
                {t('· Ухаалаг тоолуурын үндэсний платформ', '· National Smart Metering Platform for Mongolia')}
                <span className="accent">.</span>
              </h2>
              <div className="border-hair divide-hair divide-y border-t">
                <div className="flex flex-wrap items-center justify-between gap-2 py-4">
                  <span className="meta">{t('Байршил', 'Location')}</span>
                  <span className="text-ink">{t('Улаанбаатар хот, Монгол Улс', 'Ulaanbaatar, Mongolia')}</span>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 py-4">
                  <span className="meta">{t('Имэйл', 'Email')}</span>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="text-ink hover:underline">
                    {CONTACT_EMAIL}
                  </a>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 py-4">
                  <span className="meta">{t('Систем', 'Platform')}</span>
                  <a href="https://powergrid.mn" className="text-ink hover:underline">
                    powergrid.mn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="card card--ink on-ink mt-5 p-7 lg:p-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <div className="meta on-ink mb-2">{t('Холбоо барих:', 'Contact:')}</div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-xl text-white hover:underline md:text-2xl">
                  {CONTACT_EMAIL}
                </a>
                <span className="hidden h-6 w-px bg-white/20 md:block" aria-hidden="true"></span>
                <a href="https://powergrid.mn" className="text-xl text-white/70 hover:text-white md:text-2xl">
                  powergrid.mn
                </a>
              </div>
            </div>
            <PillButton href={LOGIN_URL} variant="ghost" leadingIcon="tabler:fingerprint">
              {t('Систем рүү нэвтрэх', 'Sign in to the platform')}
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
