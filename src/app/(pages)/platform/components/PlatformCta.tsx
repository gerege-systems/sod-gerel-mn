import { Link } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useLang } from '@/i18n/context'

const PlatformCta = () => {
  const { t } = useLang()

  return (
    <section className="py-15 md:py-25 lg:py-27.5">
      <div className="container">
        <div className="text-center">
          <div className="mx-auto mb-12.5 lg:w-3/5">
            <h2 className="mb-2.5 text-2xl md:text-4xl lg:text-5xl">
              {t(
                'Нэг сая тоолуурын хэмжилтийг өнөөдрөөс төлөвлөе',
                "Let's plan metering for a million meters, starting today",
              )}
            </h2>
            <p>
              {t(
                'Туршилтын трансформатор, тоолуурын протокол, TEAMI-ийн эрхийн талаар ярилцъя.',
                "Let's talk about a pilot transformer, meter protocols and TEAMI access.",
              )}
            </p>
          </div>
          <div className="inline-flex items-center gap-7.5">
            <Link
              to="/contact"
              className="group bg-primary inline-flex items-center justify-center rounded-lg px-10 py-5 font-medium text-white transition-all"
            >
              <span className="relative block overflow-hidden">
                <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                  {t('Эхлэх', 'Get started')}
                </span>
                <span className="absolute inset-s-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                  {t('Эхлэх', 'Get started')}
                </span>
              </span>
            </Link>
            <Link to="/contact" className="text-default-950 flex items-center gap-1 underline">
              <div>{t('Холбоо барих', 'Contact us')}</div>
              <Icon icon="tabler:arrow-up-right" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PlatformCta
