import { Link } from 'react-router-dom'
import controlRoom from '@/assets/images/other/control-room.jpg'
import { Icon } from '@iconify/react'
import { useLang } from '@/i18n/context'

const Kpis = () => {
  const { t } = useLang()
  return (
    <section className="py-15 md:py-25 lg:py-27.5">
      <div className="container">
        <div className="mb-12.5 text-center">
          <div className="text-default-950 mb-2.5 text-sm">
            {t('Хүлээн авах босго', 'Acceptance thresholds')}
          </div>
          <h1 className="mb-2.5 text-3xl md:text-4xl lg:text-5xl">
            {t('Өдөр бүр хэмжигдэх үр дүн', 'Results measured every day')}
          </h1>
          <p className="text-default-600 mx-auto mb-7.5 lg:max-w-1/3">
            {t(
              'Нэвтрүүлэлтийн шат бүрд дараагийн шат руу шилжихээс өмнө эдгээр босгыг нотолгоотойгоор хангана.',
              'At every rollout stage, these thresholds are met with evidence before moving to the next stage.',
            )}
          </p>
          <div className="inline-flex items-center gap-2">
            <Icon icon="tabler:bolt-filled" className="text-accent-bright size-6" />
            <Icon icon="tabler:bolt-filled" className="text-accent-bright size-6" />
            <Icon icon="tabler:bolt-filled" className="text-accent-bright size-6" />
            <Icon icon="tabler:bolt-filled" className="text-accent-bright size-6" />
            <Icon icon="tabler:bolt-filled" className="text-accent-bright size-6" />
            <div className="ms-2">{t('9 хүлээн авах босго', '9 acceptance thresholds')}</div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-10">
          <div className="lg:col-span-3">
            <div className="bg-default-950 flex h-full flex-col justify-between rounded-xl p-8">
              <div className="space-y-6">
                <div>
                  <h4 className="mb-1.5 text-lg text-white">
                    {t('Баталгаатай команд', 'Verified commands')}
                  </h4>
                  <p className="text-default-400 text-sm">{t('Үе 4 · FN-08', 'Phase 4 · FN-08')}</p>
                </div>
                <p className="text-white">
                  {t(
                    'Өгөгдлийн сан шинэчлэгдсэн нь төхөөрөмж дээр биелсэн гэсэн үг биш.',
                    'A database update does not mean the device has carried it out.',
                  )}
                </p>
              </div>
              <div className="mt-10 flex flex-wrap justify-between gap-12">
                <div>
                  <h3 className="text-4xl font-semibold text-white">0</h3>
                  <p className="text-default-100">{t('Худал VERIFIED төлөв', 'False VERIFIED states')}</p>
                </div>
                <div>
                  <h3 className="text-4xl font-semibold text-white">≥99%</h3>
                  <p className="text-default-100">{t('Баталгаажсан амжилт', 'Verified success')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={controlRoom}
                className="h-full w-full object-cover"
                alt={t('Ажиллагааны төв', 'Operations centre')}
                width={400}
                height={300}
              />
              <div className="absolute inset-s-1/2 bottom-6 flex -translate-x-1/2 items-center gap-2 rounded bg-white px-4 py-2 text-nowrap shadow">
                <Icon icon="tabler:activity-heartbeat" />
                <span className="font-medium">{t('Ажиллагааны төв', 'Operations centre')}</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-3">
            <div className="border-default-200 flex h-full flex-col justify-between rounded-xl border p-6">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-primary flex size-12 shrink-0 items-center justify-center rounded-full text-white">
                  <Icon icon="tabler:database-heart" className="size-6" />
                </div>
                <div>
                  <h4 className="mb-1 font-medium">
                    {t('Сэргэлт ба бүрэн байдал', 'Recovery and completeness')}
                  </h4>
                  <p className="text-default-500 text-sm">
                    {t('MDM RPO ≤ 15 мин · RTO ≤ 4 цаг', 'MDM RPO ≤ 15 min · RTO ≤ 4 h')}
                  </p>
                </div>
              </div>
              <p className="text-default-600 leading-relaxed">
                {t(
                  '72 цагийн нөхөн таталтаар заалтын ≥99.9% бүрэн байдал. Давхардсан өгөгдөл ба төлбөр 0, golden dataset дээрх төлбөрийн тооцоо 100% зөв.',
                  '≥99.9% reading completeness after 72-hour catch-up. Zero duplicate data and payments, and 100% correct billing on the golden dataset.',
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12.5">
          <div className="bg-default-100 flex items-center justify-between gap-2.5 rounded-lg p-2 md:ps-6">
            <div className="font-medium">
              {t(
                'Туршилтын трансформаторын бүлэг дээр эхлэх талаар ярилцъя.',
                "Let's talk about starting with a pilot transformer group.",
              )}
            </div>
            <Link
              to="/contact"
              className="group text-primary inline-flex items-center justify-center rounded-lg bg-white px-10 py-5 font-medium text-nowrap transition-all"
            >
              <span className="relative block overflow-hidden">
                <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                  {t('Ярилцах', "Let's talk")}
                </span>
                <span className="absolute inset-s-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                  {t('Ярилцах', "Let's talk")}
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Kpis
