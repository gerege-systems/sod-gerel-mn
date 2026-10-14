import team1 from '@/assets/images/team/domain.jpg'
import team2 from '@/assets/images/team/backend.jpg'
import team3 from '@/assets/images/team/frontend.jpg'
import team4 from '@/assets/images/team/qa.jpg'
import team5 from '@/assets/images/team/devops.jpg'
import { useLang, type Text } from '@/i18n/context'
import { SectionHeading } from '@/components/site/ui'

type MemberType = { image: ImageSrc; title: Text; role: Text }

const teamData: MemberType[] = [
  { image: team1, title: { mn: 'Домэйн ба бүтээгдэхүүн', en: 'Domain & product' }, role: { mn: 'Эрчим хүчний домэйн хариуцагч', en: 'Energy domain lead' } },
  { image: team2, title: { mn: 'Backend ба интеграц', en: 'Backend & integration' }, role: { mn: 'HES, MDM, TEAMI инженер', en: 'HES, MDM, TEAMI engineer' } },
  { image: team3, title: { mn: 'Frontend', en: 'Frontend' }, role: { mn: 'Портал ба ажиллагааны төв', en: 'Portal & operations centre' } },
  { image: team4, title: { mn: 'QA ба өгөгдлийн чанар', en: 'QA & data quality' }, role: { mn: 'VEE, golden dataset, pgTAP', en: 'VEE, golden dataset, pgTAP' } },
  { image: team5, title: { mn: 'DevOps ба аюулгүй байдал', en: 'DevOps & security' }, role: { mn: 'Deploy, backup, threat model', en: 'Deploy, backup, threat model' } },
]

const Team = () => {
  const { t } = useLang()

  return (
    <section className="pgl-section pgl-section--sky">
      <div className="pgl-container">
        <SectionHeading
          align="center"
          label={t('Багийн бүрэлдэхүүн', 'TEAM COMPOSITION')}
          title={t('Платформыг бүтээх чадамжууд', 'The capabilities that build the platform')}
          body={t(
            '6–8 хүний үндсэн баг, талбайн цахилгааны инженер ба billing мэргэжилтэнтэй хамтран ажиллана. Командын баталгаажуулалт ба төлбөрийн жишиг тооцоо эзэнгүй үлдэхгүй.',
            'A core team of 6–8 people works alongside a field electrical engineer and a billing specialist. Command verification and reference billing calculations never go without an owner.',
          )}
        />
        <div className="pgl-cards pgl-cards--5">
          {teamData.map((member, index) => (
            <div key={member.title.en} className="pgl-team-card">
              <img src={member.image} alt={t(member.title)} width={800} height={1000} loading="lazy" decoding="async" />
              <div>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{t(member.title)}</h3>
                <small>{t(member.role)}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
