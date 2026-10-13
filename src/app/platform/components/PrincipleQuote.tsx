import logoLight from '@/assets/images/powergrid-logo-light.svg'
import { Icon } from '@iconify/react'
import { useLang } from '@/i18n/context'
import SectionMeta from '@/components/SectionMeta'

const PrincipleQuote = () => {
  const { t } = useLang()

  return (
    <section className="py-15 md:py-25 lg:py-27.5">
      <div className="container max-w-315!">
        <SectionMeta left={t('Бүтээгдэхүүний зарчим', 'Product principle')} right="05 — 08" className="mb-10 lg:mb-14" />
        <div className="card card--ink on-ink relative overflow-hidden p-8 lg:p-16">
          <div
            className="pointer-events-none absolute -top-[30%] -right-[10%] aspect-square w-[40vw] max-w-[560px] rounded-full"
            style={{
              background:
                'radial-gradient(closest-side, color-mix(in oklab, var(--color-accent-bright) 18%, transparent), transparent 72%)',
            }}
            aria-hidden="true"
          ></div>
          <div className="relative grid items-center gap-10 md:grid-cols-3">
            <div className="flex flex-col items-start gap-6">
              <div className="text-primary flex size-16 items-center justify-center rounded-full bg-white">
                <Icon icon="tabler:shield-check" className="size-8" aria-hidden="true" />
              </div>
              <div>
                <h3 className="mb-1.5 text-2xl text-white">{t('Бүтээгдэхүүний зарчим', 'Product principle')}</h3>
                <p className="meta on-ink">{t('PowerGrid архитектур', 'PowerGrid architecture')}</p>
              </div>
              <img src={logoLight} className="h-8 w-auto opacity-90" alt="PowerGrid" />
            </div>
            <blockquote className="md:col-span-2">
              <p className="text-2xl font-semibold tracking-[-0.03em] text-white md:text-3xl md:leading-[1.15]">
                {t(
                  'Өгөгдлийн сангийн төлөв өөрчлөгдсөн нь төхөөрөмж дээр биелсэн гэсэн үг биш. Тоолуурын төлөвийг дахин уншиж батлахаас нааш бид командыг «амжилттай» гэж хэзээ ч харуулахгүй — дутуу өгөгдлийг ч хулгай гэж хэзээ ч дүгнэхгүй.',
                  'A changed state in the database does not mean it happened on the device. We never show a command as successful until the meter\'s state has been read back — and we never mistake missing data for theft.',
                )}
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrincipleQuote
