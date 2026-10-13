import { CONTACT_EMAIL, LOGIN_URL } from '@/config'
import contactInfo from '@/assets/images/other/ulaanbaatar-winter.jpg'
import { Icon } from '@iconify/react'
import { useLang } from '@/i18n/context'

const ContactInfo = () => {
  const { t } = useLang()
  return (
    <section className="py-15 md:py-25 lg:py-27.5">
      <div className="container">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <div className="relative size-full overflow-hidden rounded-xl">
              <img
                src={contactInfo}
                className="h-full w-full object-cover"
                alt="PowerGrid"
              />
            </div>
          </div>
          <div>
            <div className="border-default-200 flex h-full flex-col items-center justify-center gap-12 rounded-xl border p-10 text-center lg:py-20">
              <h4 className="text-2xl lg:max-w-4/5 lg:text-3xl">
                {t(
                  'PowerGrid · Ухаалаг тоолуурын үндэсний платформ',
                  'PowerGrid · National Smart Metering Platform for Mongolia',
                )}
              </h4>
              <p className="lg:max-w-3/5">{t('Улаанбаатар хот, Монгол Улс', 'Ulaanbaatar, Mongolia')}</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-default-950 hover:text-default-400 underline transition duration-300"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>
        </div>

        <div className="bg-default-950 mt-5 rounded-xl p-5 text-white lg:p-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div className="flex flex-wrap items-center gap-6">
              <h3 className="text-xl text-white md:text-2xl">{t('Холбоо барих:', 'Contact:')}</h3>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-white/80 transition hover:text-white"
              >
                {CONTACT_EMAIL}
              </a>
              <span className="hidden h-6 w-px bg-white/30 md:block"></span>
              <a href="https://powergrid.mn" className="text-white/80 transition hover:text-white">
                powergrid.mn
              </a>
            </div>

            <a
              href={LOGIN_URL}
              className="text-default-950 inline-flex w-fit items-center gap-2 rounded-lg bg-white px-5 py-3 font-medium"
            >
              <Icon icon="tabler:fingerprint" className="size-5" />
              {t('Систем рүү нэвтрэх', 'Sign in to the platform')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
