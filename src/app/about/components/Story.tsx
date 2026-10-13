import aboutImage2 from '@/assets/images/other/field-engineer.jpg'
import storyControlRoom from '@/assets/images/other/story-control-room.jpg'
import logoIcon from '@/assets/images/powergrid-icon.svg'
import { useLang } from '@/i18n/context'

const Story = () => {
  const { t } = useLang()
  return (
    <section className="bg-default-100 py-15 md:py-25 lg:py-27.5">
      <div className="container mb-12.5">
        <div className="mb-12.5">
          <h5 className="text-3xl md:text-4xl lg:text-5xl">
            {t('Судалгаанаас төрсөн платформ — бидний тухай', 'A platform born from research — about us')}
          </h5>
        </div>
        <div className="grid gap-7.5 lg:grid-cols-2 lg:gap-30">
          <div>
            <p className="text-default-800 mb-7.5 text-xl">
              {t(
                'PowerGrid нэг бүтээгдэхүүнийг хуулбарлахаас эхэлсэнгүй. Финландын өгөгдөл солилцоо, Австралийн заалтын чанар ба хувилбарын түүх, Францын өгөгдөлд хандах зохицуулалт, Японы байнгын ашиглалт, Энэтхэгийн хэрэглэгчийн хамгаалалт — улс бүрийн хамгийн сайн шийдлийг судалж, Монголын тариф, хууль, сүлжээнд тохируулсан.',
                "PowerGrid did not start by copying one product. Finland's data exchange, Australia's reading quality and version history, France's data-access rules, Japan's continuous operation, India's consumer protection — we studied the best answer from each country and fitted it to Mongolia's tariffs, laws and grid.",
              )}
            </p>
            <p>
              {t(
                'Эхний хөрөнгө оруулалтыг бодит заалт цуглуулах, өгөгдлийн чанар, тоолуурын бүртгэл, сүлжээний холбоос, баланс, командын баталгаажуулалтад төвлөрүүлнэ. Төлбөр болон хэрэглэгчийн үйлчилгээ эдгээр баталгаатай өгөгдөл дээр нэмэгдэнэ. Нэвтрүүлэлт нэг бүтэн трансформаторын бүлгээс (~1,000 тоолуур) эхэлж, 10,000 → 100,000 → 500,000 → 1,000,000 гэсэн шатаар өргөжих бөгөөд шат бүрд хүлээн авах босгыг нотолгоотойгоор хангасны дараа л дараагийнх руу шилжинэ.',
                'The first investment goes into real meter collection, data quality, the meter registry, grid connectivity, balance and command verification. Billing and customer service are built on top of that verified data. Rollout starts with one complete transformer group (~1,000 meters) and expands in stages of 10,000 → 100,000 → 500,000 → 1,000,000, moving to the next stage only once each stage has met its acceptance thresholds with evidence.',
              )}
            </p>
          </div>
          <div>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <img src={aboutImage2} alt={t('Талбайн инженер', 'Field engineer')} className="size-full rounded-lg object-cover" />
              </div>
              <div className="relative size-full overflow-hidden rounded-lg">
                <img
                  src={storyControlRoom}
                  alt={t('Удирдлагын төв', 'Control centre')}
                  className="size-full rounded-lg object-cover"
                />
              </div>
            </div>
            <div className="mt-7.5">
              <img src={logoIcon} alt="PowerGrid" className="size-10" />
              <div className="mt-2.5">
                <h3 className="mb-2.5 text-lg">Gerege Systems</h3>
                <div className="text-default-600">{t('PowerGrid-ийн хөгжүүлэгч', 'Developer of PowerGrid')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
