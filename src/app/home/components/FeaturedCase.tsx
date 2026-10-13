import { Link } from 'react-router-dom'
import featuredCase from '@/assets/images/other/helsinki-harbour.webp'
import { Icon } from '@iconify/react'
import { useLang } from '@/i18n/context'
import SectionMeta from '@/components/SectionMeta'

const FeaturedCase = () => {
  const { t } = useLang()
  return (
    <section className="py-15 md:py-25 lg:py-27.5">
      <div className="container">
        <SectionMeta left={t('Олон улсын туршлага', 'International experience')} right="04 — 08" />
        <div className="mt-10 mb-12 grid gap-6 lg:mt-14 lg:grid-cols-12 lg:gap-12">
          <h2 className="h-section lg:col-span-6">
            {t('Онцлох жишиг', 'Featured reference')}
            <span className="accent">.</span>
          </h2>
          <p className="max-w-[34rem] lg:col-span-6 lg:pt-2">
            {t(
              'Нэг бүтээгдэхүүнийг хуулбарласангүй. Улс бүрээс хамгийн сайн шийдлийг нь авч, Монголын тариф, хууль, сүлжээнд тохируулан нэг платформд нэгтгэв.',
              "We did not copy one product. We took the best answer from each country and fitted it to Mongolia's tariffs, laws and grid in one platform.",
            )}
          </p>
        </div>
        <div className="group rounded-card relative overflow-hidden">
          <Link
            to="/experience"
            className="absolute inset-0 z-1"
            aria-label={t('Олон улсын туршлага', 'International experience')}
          ></Link>
          <img
            src={featuredCase}
            alt={t('Финландын Fingrid Datahub', "Finland's Fingrid Datahub")}
            className="rounded-card w-full object-cover transition-transform duration-500 ease-soft group-hover:scale-[1.03]"
          />
          <div className="inset-x-6 bottom-6 flex items-end justify-between gap-6 rounded-[22px] bg-white p-5 md:absolute md:p-6 lg:inset-x-8 lg:bottom-8">
            <div className="space-y-3">
              <span className="chip chip--up">{t('Финланд', 'Finland')}</span>
              <h3 className="max-w-[28rem] text-xl md:text-2xl">
                {t(
                  'Fingrid Datahub — зөвшөөрөгдсөн талуудын нэгдсэн өгөгдөл солилцоо',
                  'Fingrid Datahub — a single data exchange for authorised parties',
                )}
              </h3>
            </div>
            <span className="arrow-chip hidden md:inline-grid" aria-hidden="true">
              <Icon icon="tabler:arrow-up-right" className="size-5" />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCase
