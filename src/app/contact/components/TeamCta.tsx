import ctaImage from '@/assets/images/other/pylons-dusk.jpg'
import member1 from '@/assets/images/team/domain.jpg'
import member2 from '@/assets/images/team/backend.jpg'
import member3 from '@/assets/images/team/qa.jpg'
import member4 from '@/assets/images/team/devops.jpg'
import { Icon } from '@iconify/react'
import { useLang, type Text } from '@/i18n/context'
import PillButton from '@/components/PillButton'
import SectionMeta from '@/components/SectionMeta'

type MemberType = {
  image: ImageSrc
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
    <section className="pb-15 md:pb-25 lg:pb-27.5">
      <div className="container">
        <SectionMeta left={t('Мэргэжлийн багтай ярилцах', 'Talk to the team')} right="02 — 02" className="mb-10 lg:mb-14" />
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <div className="bg-stage rounded-card flex h-full flex-col justify-between gap-12 p-7 lg:p-10">
              <h2 className="h-section mixed">
                <b>{t('Нэг трансформаторын бүлгээс эхэлж,', "Let's start with one transformer group")}</b>{' '}
                {t('нэг сая тоолуурт хүрье', 'and reach one million meters')}
                <span className="accent">.</span>
              </h2>
              <div className="inline-flex flex-wrap items-center gap-3">
                <div className="meta">{t('Мэргэжлийн багтай ярилцах', 'Talk to the team')}</div>
                <Icon icon="tabler:circle-plus" className="text-accent size-5" aria-hidden="true" />
                <div className="flex -space-x-2">
                  {membersData.map((member, index) => (
                    <div key={index} className="group relative inline-block">
                      <img
                        src={member.image}
                        alt={member.alt}
                        className="size-9 rounded-full object-cover ring-2 ring-white transition duration-300 hover:scale-110"
                      />
                      <div className="bg-ink pointer-events-none absolute top-full end-0 mt-3 rounded-full px-2.5 py-1 text-xs font-medium whitespace-nowrap text-white opacity-0 shadow-sm transition duration-200 group-hover:opacity-100">
                        {t(member.name)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-card relative h-full min-h-80 overflow-hidden">
              <img src={ctaImage} className="absolute inset-0 h-full w-full object-cover" alt="PowerGrid" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <PillButton to="/contact" variant="ghost">
                  {t('Эхлэх', 'Get started')}
                </PillButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamCta
