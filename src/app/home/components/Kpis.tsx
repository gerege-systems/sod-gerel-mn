import controlRoom from '@/assets/images/other/control-room.jpg'
import { Icon } from '@iconify/react'
import { useLang } from '@/i18n/context'
import PillButton from '@/components/PillButton'
import SectionMeta from '@/components/SectionMeta'

const Kpis = () => {
  const { t } = useLang()
  return (
    <section className="bg-stage py-15 md:py-25 lg:py-27.5">
      <div className="container">
        <SectionMeta left={t('Хүлээн авах босго', 'Acceptance thresholds')} right="06 — 08" />
        <div className="mx-auto mt-10 mb-12 max-w-[52rem] text-center lg:mt-14 lg:mb-16">
          <h2 className="h-section mixed">
            <b>{t('Өдөр бүр', 'Results')}</b> {t('хэмжигдэх үр дүн', 'measured every day')}
            <span className="accent">.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[34rem]">
            {t(
              'Нэвтрүүлэлтийн шат бүрд дараагийн шат руу шилжихээс өмнө эдгээр босгыг нотолгоотойгоор хангана.',
              'At every rollout stage, these thresholds are met with evidence before moving to the next stage.',
            )}
          </p>
          <div className="mt-6 inline-flex items-center gap-2">
            <span className="chip">
              <Icon icon="tabler:bolt-filled" className="text-accent size-4" aria-hidden="true" />
              {t('9 хүлээн авах босго', '9 acceptance thresholds')}
            </span>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-10">
          <div className="lg:col-span-3">
            <div className="card card--ink on-ink flex h-full flex-col justify-between p-7 lg:p-9">
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-xl text-white">{t('Баталгаатай команд', 'Verified commands')}</h3>
                  <p className="meta on-ink">{t('Үе 4 · FN-08', 'Phase 4 · FN-08')}</p>
                </div>
                <p className="text-white/70">
                  {t(
                    'Өгөгдлийн сан шинэчлэгдсэн нь төхөөрөмж дээр биелсэн гэсэн үг биш.',
                    'A database update does not mean the device has carried it out.',
                  )}
                </p>
              </div>
              <div className="mt-12 grid grid-cols-2 gap-6">
                <div>
                  <div className="num num--md">0</div>
                  <p className="mt-3 text-sm text-white/60">{t('Худал VERIFIED төлөв', 'False VERIFIED states')}</p>
                </div>
                <div>
                  <div className="num num--md">
                    ≥99<span className="num-sfx">%</span>
                  </div>
                  <p className="mt-3 text-sm text-white/60">{t('Баталгаажсан амжилт', 'Verified success')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-card relative h-full min-h-72 overflow-hidden">
              <img
                src={controlRoom}
                className="absolute inset-0 h-full w-full object-cover"
                alt={t('Ажиллагааны төв', 'Operations centre')}
                width={400}
                height={300}
              />
              <div className="absolute inset-s-1/2 bottom-6 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/90 px-4 py-2.5 text-sm text-nowrap shadow backdrop-blur">
                <Icon icon="tabler:activity-heartbeat" className="text-accent" aria-hidden="true" />
                <span className="font-medium">{t('Ажиллагааны төв', 'Operations centre')}</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-2 lg:col-span-3">
            <div className="card flex h-full flex-col justify-between p-7 lg:p-9">
              <div className="mb-6 flex items-center gap-3">
                <div className="bg-accent/10 text-accent flex size-12 shrink-0 items-center justify-center rounded-full">
                  <Icon icon="tabler:database-heart" className="size-6" />
                </div>
                <div>
                  <h3 className="mb-1 text-lg">
                    {t('Сэргэлт ба бүрэн байдал', 'Recovery and completeness')}
                  </h3>
                  <p className="meta">
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

        <div className="mt-8">
          <div className="card flex flex-wrap items-center justify-between gap-4 p-3 ps-6 md:ps-8">
            <div className="text-ink max-w-[36rem] font-medium">
              {t(
                'Туршилтын трансформаторын бүлэг дээр эхлэх талаар ярилцъя.',
                "Let's talk about starting with a pilot transformer group.",
              )}
            </div>
            <PillButton to="/contact" variant="dark">
              {t('Ярилцах', "Let's talk")}
            </PillButton>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Kpis
