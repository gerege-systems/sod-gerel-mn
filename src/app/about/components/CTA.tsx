import { Link } from 'react-router-dom'
import { useLang } from '@/i18n/context'

const CTA = () => {
  const { t } = useLang()
  return (
    <section className="py-15 md:py-25 lg:py-27.5">
      <div className="container max-w-315!">
        <div className="mt-12.5">
          <div className="bg-default-100 rounded-lg px-3 py-8 text-center lg:px-25 lg:py-17.5">
            <h2 className="mb-2.5 text-2xl md:text-3xl lg:text-4xl">
              {t(
                'Нэг сая тоолуурыг нэг баталгаатай платформд нэгтгэе',
                "Let's bring one million meters onto one verified platform",
              )}
            </h2>
            <p className="mx-auto mb-12.5 lg:w-3/5">
              {t(
                'Туршилтын трансформаторын бүлэг, тоолуурын протокол, TEAMI-ийн өгөгдлийн талаар бидэнтэй холбогдож, эхний шатыг хамтдаа төлөвлөе.',
                "Get in touch about a pilot transformer group, meter protocols or TEAMI data, and let's plan the first stage together.",
              )}
            </p>
            <Link
              to="/contact"
              className="group bg-primary inline-flex items-center justify-center rounded-lg px-10 py-5 font-medium text-white transition-all"
            >
              <span className="relative block overflow-hidden">
                <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                  {t('Холбогдох', 'Contact us')}
                </span>
                <span className="absolute inset-s-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                  {t('Холбогдох', 'Contact us')}
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
