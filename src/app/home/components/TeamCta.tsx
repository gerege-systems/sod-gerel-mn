import { Link } from 'react-router-dom'
import ctaImage from '@/assets/images/other/pylons-dusk.jpg'
import member1 from '@/assets/images/team/domain.jpg'
import member2 from '@/assets/images/team/backend.jpg'
import member3 from '@/assets/images/team/qa.jpg'
import member4 from '@/assets/images/team/devops.jpg'
import { Icon } from '@iconify/react'
import { useLang, type Text } from '@/i18n/context'

type MemberType = {
  image: ImageSrc
  alt: string
  name: Text
}

const membersData: MemberType[] = [
  {
    image: member1,
    alt: 'avatar',
    name: { mn: 'Домэйн ба бүтээгдэхүүн', en: 'Domain and product' },
  },
  {
    image: member2,
    alt: 'avatar-1',
    name: { mn: 'Backend ба интеграц', en: 'Backend and integration' },
  },
  {
    image: member3,
    alt: 'avatar-1',
    name: { mn: 'Өгөгдлийн чанар (QA)', en: 'Data quality (QA)' },
  },
  {
    image: member4,
    alt: 'avatar-1',
    name: { mn: 'DevOps ба аюулгүй байдал', en: 'DevOps and security' },
  },
]

const TeamCta = () => {
  const { t } = useLang()
  return (
    <section className="py-15 md:py-25 lg:py-27.5">
      <div className="container max-w-315!">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <div className="border-default-200 flex h-full flex-col items-center justify-between gap-12 rounded-xl border p-5 pb-12 text-center md:items-start lg:p-10 lg:pb-16 lg:text-start">
              <h4 className="text-2xl lg:text-3xl">
                {t(
                  'Нэг трансформаторын бүлгээс эхэлж, нэг сая тоолуурт хүрье',
                  "Let's start with one transformer group and reach a million meters",
                )}
              </h4>
              <div className="inline-flex items-center gap-3">
                <div className="text-sm">{t('Мэргэжлийн багтай ярилцах', 'Talk to our team')}</div>
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
                  className="group text-primary inline-flex items-center justify-center rounded-lg bg-white px-10 py-5 font-medium text-nowrap transition-all"
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
