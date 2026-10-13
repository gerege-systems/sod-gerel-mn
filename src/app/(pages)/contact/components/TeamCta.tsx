import { Link } from 'react-router-dom'
import ctaImage from '@/assets/images/other/cta-bg.jpg'
import member1 from '@/assets/images/team/1.jpg'
import member2 from '@/assets/images/team/2.jpg'
import member3 from '@/assets/images/team/4.jpg'
import member4 from '@/assets/images/team/5.jpg'
import { Icon } from '@iconify/react'
import { useLang, type Text } from '@/i18n/context'

type MemberType = {
  image: StaticImageData
  name: Text
  alt: string
}

const membersData: MemberType[] = [
  { image: member1, name: { mn: 'Домэйн ба бүтээгдэхүүн', en: 'Domain & product' }, alt: 'avatar' },
  { image: member2, name: { mn: 'Backend ба интеграц', en: 'Backend & integration' }, alt: 'avatar-1' },
  { image: member3, name: { mn: 'Өгөгдлийн чанар (QA)', en: 'QA & data quality' }, alt: 'avatar-1' },
  { image: member4, name: { mn: 'DevOps ба аюулгүй байдал', en: 'DevOps & security' }, alt: 'avatar-1' },
]

const TeamCta = () => {
  const { t } = useLang()
  return (
    <section className="pb-20 md:pb-25 lg:pb-27.5">
      <div className="container max-w-315!">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <div className="border-default-200 flex h-full flex-col items-center justify-between gap-12 rounded-xl border p-5 pb-12 text-center md:items-start lg:p-10 lg:pb-16 lg:text-start">
              <h4 className="text-2xl lg:text-3xl">
                {t(
                  'Нэг трансформаторын бүлгээс эхэлж, нэг сая тоолуурт хүрье',
                  "Let's start with one transformer group and reach one million meters",
                )}
              </h4>
              <div className="inline-flex items-center gap-3">
                <div className="text-sm">{t('Мэргэжлийн багтай ярилцах', 'Talk to the team')}</div>
                <Icon icon="tabler:circle-plus" className="size-5" />
                <div className="flex -space-x-2">
                  {membersData.map((member, index) => (
                    <div key={index} className="group relative inline-block">
                      <img
                        src={member.image}
                        alt={member.alt}
                        className="size-9 rounded-full object-cover transition duration-300 hover:scale-110"
                      />
                      <div className="bg-default-100 pointer-events-none absolute top-full end-0 mt-4 rounded px-2.5 py-1 text-xs font-medium whitespace-nowrap opacity-0 shadow-sm transition duration-200 group-hover:opacity-100">
                        {t(member.name)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="relative overflow-hidden rounded-xl">
              <img src={ctaImage} className="h-full w-full object-cover" alt="PowerGrid" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <Link
                  to="/contact"
                  className="group text-primary inline-flex items-center justify-center rounded-lg bg-white px-10 py-5 font-medium transition-all"
                >
                  <span className="relative block overflow-hidden">
                    <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                      {t('Эхлэх', 'Get started')}
                    </span>
                    <span className="absolute inset-s-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                      {t('Эхлэх', 'Get started')}
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamCta
