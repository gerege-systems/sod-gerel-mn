import team1 from '@/assets/images/team/domain.jpg'
import team2 from '@/assets/images/team/backend.jpg'
import team3 from '@/assets/images/team/frontend.jpg'
import team4 from '@/assets/images/team/qa.jpg'
import team5 from '@/assets/images/team/devops.jpg'
import { useLang, type Text } from '@/i18n/context'

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
    <section className="py-15 md:py-25 lg:py-27.5">
      <div className="container">
        <div className="mb-12.5 text-center">
          <div className="text-default-950 mb-2.5 text-sm">{t('Багийн бүрэлдэхүүн', 'Team composition')}</div>
          <h1 className="mb-2.5 text-3xl md:text-4xl lg:text-5xl">
            {t('Платформыг бүтээх чадамжууд', 'The capabilities that build the platform')}
          </h1>
          <p className="text-default-600 mx-auto lg:max-w-1/2">
            {t(
              '6–8 хүний үндсэн баг, талбайн цахилгааны инженер ба billing мэргэжилтэнтэй хамтран ажиллана. Командын баталгаажуулалт ба төлбөрийн жишиг тооцоо эзэнгүй үлдэхгүй.',
              'A core team of 6–8 people works alongside a field electrical engineer and a billing specialist. Command verification and reference billing calculations never go without an owner.',
            )}
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-5">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="group relative flex flex-col items-center overflow-hidden rounded-lg"
            >
              <img
                src={member.image}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                alt={t(member.title)}
              />
              <div className="absolute inset-x-3 bottom-5 flex flex-col items-center gap-1.5 overflow-hidden rounded bg-white px-4 py-2.5 text-center">
                <h3 className="text-lg">{t(member.title)}</h3>
                <div className="text-default-700 text-sm">{t(member.role)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
