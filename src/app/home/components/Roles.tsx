import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { useLang, type Text } from '@/i18n/context'
import { site } from '@/i18n/site'
import Reveal from '@/components/site/Reveal'
import { SectionHeading, Tile } from '@/components/site/ui'
import { icon3d } from '@/components/site/icons3d'

/**
 * Дөрвөн оролцогч, нэг өгөгдөл. Карт бүр холбоос, холбоос бүр байгаа хуудас;
 * оролцогч бүр сайтын 3D дүрстэй. Голд нь өргөгдсөн карт — түгээх компани:
 * системийг өдөр бүр ажиллуулдаг нь.
 */
const ROLES: { icon: string; title: Text; body: Text; action: Text; href: string; featured?: boolean }[] = [
  { icon: icon3d.customer, title: site.roles_citizen_title, body: site.roles_citizen_body, action: site.roles_citizen_action, href: '/trust' },
  { icon: icon3d.organisation, title: site.roles_company_title, body: site.roles_company_body, action: site.roles_company_action, href: '/platform', featured: true },
  { icon: icon3d.engineer, title: site.roles_engineer_title, body: site.roles_engineer_body, action: site.roles_engineer_action, href: '/architecture' },
  { icon: icon3d.audit, title: site.roles_regulator_title, body: site.roles_regulator_body, action: site.roles_regulator_action, href: '/experience' },
]

const Roles = () => {
  const { t } = useLang()

  return (
    <section className="pgl-roles" id="roles">
      <div className="pgl-container">
        <SectionHeading align="center" label={t(site.roles_tag)} title={t(site.roles_title)} body={t(site.roles_lede)} />

        <Reveal stagger className="pgl-roles__grid">
          {ROLES.map(({ icon, title, body, action, href, featured }) => (
            <Link key={href} to={href} className={`pgl-role${featured ? ' is-featured' : ''}`} data-tilt>
              <Tile image={icon} />
              <h3>{t(title)}</h3>
              <p>{t(body)}</p>
              <span className="pgl-role__action">
                {t(action)} <Icon icon="lucide:arrow-right" aria-hidden />
              </span>
            </Link>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export default Roles
