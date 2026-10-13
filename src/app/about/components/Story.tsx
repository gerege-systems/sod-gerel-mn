import aboutImage2 from '@/assets/images/other/field-engineer.jpg'
import storyControlRoom from '@/assets/images/other/story-control-room.jpg'
import logoIcon from '@/assets/images/powergrid-icon.svg'
import { useLang } from '@/i18n/context'
import SectionMeta from '@/components/SectionMeta'

const Story = () => {
  const { t } = useLang()
  return (
    <section className="bg-stage py-15 md:py-25 lg:py-27.5">
      <div className="container">
        <SectionMeta left={t('Бидний тухай', 'About')} right="01 — 04" />
        <h2 className="h-section mixed mt-10 mb-12 max-w-[52rem] lg:mt-14 lg:mb-16">
          <b>{t('Судалгаанаас төрсөн платформ', 'A platform born from research')}</b>{' '}
          {t('— бидний тухай', '— about us')}
          <span className="accent">.</span>
        </h2>
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-24">
          <div>
            <p className="text-ink mb-7 text-xl font-medium tracking-[-0.015em]">
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
            <div className="grid grid-cols-2 gap-4">
              <img
                src={aboutImage2}
                alt={t('Талбайн инженер', 'Field engineer')}
                className="rounded-card size-full object-cover"
              />
              <img
                src={storyControlRoom}
                alt={t('Удирдлагын төв', 'Control centre')}
                className="rounded-card size-full object-cover"
              />
            </div>
            <div className="border-hair mt-8 flex items-center gap-4 border-t pt-6">
              <img src={logoIcon} alt="PowerGrid" className="size-10" />
              <div>
                <h3 className="text-lg">Gerege Systems</h3>
                <div className="meta mt-1">{t('PowerGrid-ийн хөгжүүлэгч', 'Developer of PowerGrid')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Story
