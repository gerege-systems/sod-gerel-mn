import { Link } from 'react-router-dom'
import workStep from '@/assets/images/other/work-step.jpg'
import { useLang } from '@/i18n/context'

const Process = () => {
  const { t } = useLang()
  return (
    <section className="bg-default-950 py-15 md:py-25 lg:py-27.5">
      <div className="container max-w-315!">
        <div className="grid gap-25 lg:grid-cols-7">
          <div className="lg:col-span-3">
            <div className="relative size-full overflow-hidden rounded-lg md:h-100 lg:h-full">
              <Link to="/platform" className="absolute inset-0 z-1"></Link>
              <img src={workStep} alt="Image" className="size-full rounded-lg object-cover" />
              <div className="absolute inset-x-5 bottom-5 text-center">
                <div className="text-default-950 inline-block rounded bg-white px-4 py-2">
                  {t('PowerGrid-ийг танай байгууллагад?', 'PowerGrid for your organisation?')}{' '}
                  <Link to="/contact" className="text-body-color underline">
                    {t('Холбогдох', 'Contact')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-4">
            <div className="flex flex-col gap-10 md:gap-25 lg:gap-37.5">
              <div>
                <div className="mb-2.5 text-sm text-white">
                  {t('Хэрхэн ажилладаг вэ', 'How it works')}
                </div>
                <h1 className="mb-5 text-3xl text-white md:text-4xl lg:text-5xl">
                  {t('Тоолуураас нэхэмжлэх хүртэл дөрвөн алхам', 'Four steps from meter to invoice')}
                </h1>
                <p className="text-default-400">
                  {t(
                    'Заалт бүр ижил баталгаатай замаар явна: эх төхөөрөмжөөс цуглуулж, хувилбартайгаар шалгаж, баланс ба төлбөрт ашиглаж, командыг тоолуураас дахин уншиж батална. Алхам бүрийг эх заалт руу нь буцааж мөрдөж болно.',
                    'Every reading follows the same verified path: collected from its source device, validated with versioning, used for balance and billing, with commands confirmed by reading the meter back. Every step traces back to its source reading.',
                  )}
                </p>
              </div>
              <div className="mt-auto">
                <div>
                  <nav className="flex flex-wrap justify-between gap-3 md:gap-x-6" role="tablist">
                    <button
                      type="button"
                      className="hs-tab-active:text-white group text-default-400 active relative inline-flex items-center gap-2 px-1 py-2 text-lg md:py-5"
                      id="tab-understand"
                      data-hs-tab="#tab-pane-understand"
                      aria-controls="tab-pane-understand"
                      role="tab"
                    >
                      <span className="hs-tab-active:scale-100 mb-0.5 flex size-1.75 scale-0 rounded-full bg-white transition-all duration-300 group-hover:scale-100"></span>
                      {t('Цуглуулах', 'Collect')}
                    </button>
                    <button
                      type="button"
                      className="hs-tab-active:text-white group text-default-400 relative inline-flex items-center gap-2 px-1 py-2 text-lg md:py-5"
                      id="tab-strategize"
                      data-hs-tab="#tab-pane-strategize"
                      aria-controls="tab-pane-strategize"
                      role="tab"
                    >
                      <span className="hs-tab-active:scale-100 mb-0.5 flex size-1.75 scale-0 rounded-full bg-white transition-all duration-300 group-hover:scale-100"></span>
                      {t('Шалгах', 'Validate')}
                    </button>
                    <button
                      type="button"
                      className="hs-tab-active:text-white group text-default-400 relative inline-flex items-center gap-2 px-1 py-2 text-lg md:py-5"
                      id="tab-execute"
                      data-hs-tab="#tab-pane-execute"
                      aria-controls="tab-pane-execute"
                      role="tab"
                    >
                      <span className="hs-tab-active:scale-100 mb-0.5 flex size-1.75 scale-0 rounded-full bg-white transition-all duration-300 group-hover:scale-100"></span>
                      {t('Тооцоолох', 'Calculate')}
                    </button>
                    <button
                      type="button"
                      className="hs-tab-active:text-white group text-default-400 relative inline-flex items-center gap-2 px-1 py-2 text-lg md:py-5"
                      id="tab-optimize"
                      data-hs-tab="#tab-pane-optimize"
                      aria-controls="tab-pane-optimize"
                      role="tab"
                    >
                      <span className="hs-tab-active:scale-100 mb-0.5 flex size-1.75 scale-0 rounded-full bg-white transition-all duration-300 group-hover:scale-100"></span>
                      {t('Удирдах', 'Control')}
                    </button>
                  </nav>
                </div>
                <div className="mt-12.5">
                  <div id="tab-pane-understand" role="tabpanel" aria-labelledby="tab-understand">
                    <p className="text-default-400">
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
                    <p className="text-default-400">
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
                    <p className="text-default-400">
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
                    <p className="text-default-400">
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
    </section>
  )
}

export default Process
