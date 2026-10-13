import { Link } from 'react-router-dom'
import workStep from '@/assets/images/other/tower-crew.jpg'
import { useLang } from '@/i18n/context'
import SectionMeta from '@/components/SectionMeta'

const tabs = [
  { id: 'understand', label: { mn: 'Цуглуулах', en: 'Collect' } },
  { id: 'strategize', label: { mn: 'Шалгах', en: 'Validate' } },
  { id: 'execute', label: { mn: 'Тооцоолох', en: 'Calculate' } },
  { id: 'optimize', label: { mn: 'Удирдах', en: 'Control' } },
]

const Process = () => {
  const { t } = useLang()
  return (
    <section className="on-ink bg-ink relative overflow-hidden py-15 md:py-25 lg:py-27.5">
      <div className="rails" aria-hidden="true">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
      <div className="container relative max-w-315!">
        <SectionMeta dark left={t('Хэрхэн ажилладаг вэ', 'How it works')} right="03 — 08" className="mb-12 lg:mb-16" />
        <div className="grid gap-12 lg:grid-cols-7 lg:gap-20">
          <div className="lg:col-span-3">
            <div className="relative size-full overflow-hidden rounded-card md:h-100 lg:h-full">
              <Link to="/platform" className="absolute inset-0 z-1" aria-label={t('Платформ', 'Platform')}></Link>
              <img src={workStep} alt="Image" className="rounded-card size-full object-cover" />
              <div className="absolute inset-x-5 bottom-5 text-center">
                <div className="text-default-950 inline-block rounded-full bg-white/90 px-4 py-2.5 text-sm backdrop-blur">
                  {t('PowerGrid-ийг танай байгууллагад?', 'PowerGrid for your organisation?')}{' '}
                  <Link to="/contact" className="relative z-2 font-semibold underline underline-offset-2">
                    {t('Холбогдох', 'Contact')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-10 md:gap-20 lg:gap-28">
              <div>
                <h2 className="h-section mixed on-ink mb-6">
                  <b>{t('Тоолуураас нэхэмжлэх хүртэл', 'Four steps')}</b>{' '}
                  {t('дөрвөн алхам', 'from meter to invoice')}
                  <span className="text-accent-bright">.</span>
                </h2>
                <p className="max-w-[36rem] text-white/60">
                  {t(
                    'Заалт бүр ижил баталгаатай замаар явна: эх төхөөрөмжөөс цуглуулж, хувилбартайгаар шалгаж, баланс ба төлбөрт ашиглаж, командыг тоолуураас дахин уншиж батална. Алхам бүрийг эх заалт руу нь буцааж мөрдөж болно.',
                    'Every reading follows the same verified path: collected from its source device, validated with versioning, used for balance and billing, with commands confirmed by reading the meter back. Every step traces back to its source reading.',
                  )}
                </p>
              </div>
              <div className="mt-auto">
                <nav className="flex flex-wrap gap-2" role="tablist">
                  {tabs.map((tab, index) => (
                    <button
                      key={tab.id}
                      type="button"
                      className={`hs-tab-active:bg-white hs-tab-active:text-ink hs-tab-active:border-white group inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white ${index === 0 ? 'active' : ''}`}
                      id={`tab-${tab.id}`}
                      data-hs-tab={`#tab-pane-${tab.id}`}
                      aria-controls={`tab-pane-${tab.id}`}
                      role="tab"
                    >
                      <span className="hs-tab-active:scale-100 bg-accent-bright flex size-1.5 scale-0 rounded-full transition-transform duration-300 ease-spring group-hover:scale-100"></span>
                      <span className="text-white/40 tabular-nums">0{index + 1}</span>
                      {t(tab.label)}
                    </button>
                  ))}
                </nav>
                <div className="mt-10">
                  <div id="tab-pane-understand" role="tabpanel" aria-labelledby="tab-understand">
                    <p className="text-lg text-white/80">
                      {t(
                        'Бүсчилсэн DLMS/COSEM болон TEAMI адаптерууд заалтыг эх төхөөрөмжөөс авна. Багц бүр source ID, receipt ID, checksum, хүлээн авсан цагтайгаа түүхий архивт орно. Ижил заалт хэд дахин ирсэн ч нэг л удаа бүртгэгдэнэ.',
                        'Regional DLMS/COSEM and TEAMI adapters take readings from the source device. Every batch enters the raw archive with its source ID, receipt ID, checksum and arrival time. The same reading delivered twice is recorded once.',
                      )}
                    </p>
                  </div>
                  <div
                    id="tab-pane-strategize"
                    className="hidden"
                    role="tabpanel"
                    aria-labelledby="tab-strategize"
                  >
                    <p className="text-lg text-white/80">
                      {t(
                        'VEE дүрмүүд заалт бүрийг шалгана. Бодит, тооцоолсон, орлуулсан утгыг ялгаж, засвар бүрийг шалтгаан, дүрэм, гүйцэтгэгчтэй нь шинэ хувилбараар хадгална — түүхий заалт хэзээ ч дарагдахгүй.',
                        'VEE rules check every reading. Actual, estimated and substituted values stay distinct, and every correction is a new version with its reason, rule and author — raw readings are never overwritten.',
                      )}
                    </p>
                  </div>
                  <div
                    id="tab-pane-execute"
                    className="hidden"
                    role="tabpanel"
                    aria-labelledby="tab-execute"
                  >
                    <p className="text-lg text-white/80">
                      {t(
                        'Трансформаторын баланс оролт, гаралтыг ижил хугацаа, ижил заагт тулгана. Нэхэмжлэх бүр ашигласан заалт ба тарифын хувилбарыг заана; мөнгийг decimal-аар тооцож, давтагдсан callback данс нэг л удаа цэнэглэнэ.',
                        'Transformer balance reconciles input and output over the same period and the same boundary. Every invoice names the reading and tariff versions it used; money is decimal, and a repeated callback credits the account once.',
                      )}
                    </p>
                  </div>
                  <div
                    id="tab-pane-optimize"
                    className="hidden"
                    role="tabpanel"
                    aria-labelledby="tab-optimize"
                  >
                    <p className="text-lg text-white/80">
                      {t(
                        'Таслах, залгах команд REQUESTED → QUEUED → SENT → ACKNOWLEDGED → VERIFIED замаар явна. Тоолуурын төлөвийг дахин уншиж батлахаас нааш «амжилттай» гэж хэзээ ч харуулахгүй; таслах командад хоёр түлхүүрийн дүрэм үйлчилнэ.',
                        "Disconnect and reconnect commands move REQUESTED → QUEUED → SENT → ACKNOWLEDGED → VERIFIED. Nothing shows as done until the meter's state has been read back, and disconnects follow the two-person rule.",
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="pointer-events-none absolute -bottom-[40%] -left-[10%] aspect-square w-[46vw] max-w-[720px] rounded-full"
        style={{
          background:
            'radial-gradient(closest-side, color-mix(in oklab, var(--color-accent-bright) 16%, transparent), transparent 72%)',
        }}
        aria-hidden="true"
      ></div>
    </section>
  )
}

export default Process
