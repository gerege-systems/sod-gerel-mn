import team1 from '@/assets/images/team/domain.jpg'
import team2 from '@/assets/images/team/backend.jpg'
import team3 from '@/assets/images/team/frontend.jpg'
import team4 from '@/assets/images/team/qa.jpg'
import team5 from '@/assets/images/team/devops.jpg'
import { useLang, type Text } from '@/i18n/context'
import SectionMeta from '@/components/SectionMeta'

type MemberType = {
  image: ImageSrc
  title: Text
  role: Text
}

const teamData: MemberType[] = [
  {
    image: team1,
    title: { mn: 'Домэйн ба бүтээгдэхүүн', en: 'Domain & product' },
    role: { mn: 'Эрчим хүчний домэйн хариуцагч', en: 'Energy domain lead' },
  },
  {
    image: team2,
    title: { mn: 'Backend ба интеграц', en: 'Backend & integration' },
    role: { mn: 'HES, MDM, TEAMI инженер', en: 'HES, MDM, TEAMI engineer' },
  },
  {
    image: team3,
    title: { mn: 'Frontend', en: 'Frontend' },
    role: { mn: 'Портал ба ажиллагааны төв', en: 'Portal & operations centre' },
  },
  {
    image: team4,
    title: { mn: 'QA ба өгөгдлийн чанар', en: 'QA & data quality' },
    role: { mn: 'VEE, golden dataset, pgTAP', en: 'VEE, golden dataset, pgTAP' },
  },
  {
    image: team5,
    title: { mn: 'DevOps ба аюулгүй байдал', en: 'DevOps & security' },
    role: { mn: 'Deploy, backup, threat model', en: 'Deploy, backup, threat model' },
  },
]

const Team = () => {
  const { t } = useLang()
  return (
    <section className="bg-stage py-15 md:py-25 lg:py-27.5">
      <div className="container">
        <SectionMeta left={t('Багийн бүрэлдэхүүн', 'Team composition')} right="03 — 04" />
        <div className="mx-auto mt-10 mb-12 max-w-[52rem] text-center lg:mt-14 lg:mb-16">
          <h2 className="h-section mixed">
            <b>{t('Платформыг бүтээх', 'The capabilities')}</b> {t('чадамжууд', 'that build the platform')}
            <span className="accent">.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-[36rem]">
            {t(
              '6–8 хүний үндсэн баг, талбайн цахилгааны инженер ба billing мэргэжилтэнтэй хамтран ажиллана. Командын баталгаажуулалт ба төлбөрийн жишиг тооцоо эзэнгүй үлдэхгүй.',
              'A core team of 6–8 people works alongside a field electrical engineer and a billing specialist. Command verification and reference billing calculations never go without an owner.',
            )}
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-5">
          {teamData.map((member, index) => (
            <div key={index} className="group rounded-card relative aspect-[4/5] overflow-hidden">
              <img
                src={member.image}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-soft group-hover:scale-[1.05]"
                alt={t(member.title)}
              />
              <div className="absolute inset-x-3 bottom-3 rounded-[20px] bg-white/92 p-4 backdrop-blur">
                <span className="meta">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-1 text-base">{t(member.title)}</h3>
                <div className="text-default-600 mt-0.5 text-sm">{t(member.role)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
