import logoLight from '@/assets/images/powergrid-logo-light.svg'
import { Icon } from '@iconify/react'
import { useLang } from '@/i18n/context'

const PrincipleQuote = () => {
  const { t } = useLang()

  return (
    <section className="py-15 md:py-25 lg:py-27.5">
      <div className="container max-w-315!">
        <div className="bg-default-950 relative rounded-lg p-10 lg:p-17.5">
          <div className="grid items-center gap-10 md:grid-cols-3">
            <div className="flex flex-col items-start gap-5">
              <div className="text-primary flex size-17.5 items-center justify-center rounded-full bg-white">
                <Icon icon="tabler:shield-check" className="size-9" />
              </div>
              <div>
                <h3 className="mb-1.5 text-2xl text-white">{t('Бүтээгдэхүүний зарчим', 'Product principle')}</h3>
                <p className="text-default-400">{t('PowerGrid архитектур', 'PowerGrid architecture')}</p>
              </div>
              <img src={logoLight} className="h-8 w-auto opacity-90" alt="PowerGrid" />
            </div>
            <div className="md:col-span-2">
              <p className="text-2xl text-white">
                {t(
                  'Өгөгдлийн сангийн төлөв өөрчлөгдсөн нь төхөөрөмж дээр биелсэн гэсэн үг биш. Тоолуурын төлөвийг дахин уншиж батлахаас нааш бид командыг «амжилттай» гэж хэзээ ч харуулахгүй — дутуу өгөгдлийг ч хулгай гэж хэзээ ч дүгнэхгүй.',
                  'A changed state in the database does not mean it happened on the device. We never show a command as successful until the meter\'s state has been read back — and we never mistake missing data for theft.',
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PrincipleQuote
