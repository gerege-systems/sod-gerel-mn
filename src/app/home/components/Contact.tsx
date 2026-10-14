import { Link } from 'react-router-dom'
import { APP_URL, CONTACT_EMAIL } from '@/config'
import { useLang } from '@/i18n/context'
import { site } from '@/i18n/site'
import Reveal, { RevealText } from '@/components/site/Reveal'
import { Tile } from '@/components/site/ui'
import { icon3d } from '@/components/site/icons3d'
import ContactForm from '@/app/contact/components/ContactForm'

/**
 * Хэрхэн эхлэх, хэрхэн асуух. Форм нь /contact хуудасныхтай нэг компонент
 * (`submitForm`: endpoint тохируулсан бол илгээнэ, үгүй бол имэйл програм нээнэ).
 */
const Contact = () => {
  const { t } = useLang()

  const steps = [
    { n: '01', title: t(site.contact_step1_title), body: t(site.contact_step1_body) },
    { n: '02', title: t(site.contact_step2_title), body: t(site.contact_step2_body) },
    { n: '03', title: t(site.contact_step3_title), body: t(site.contact_step3_body) },
  ]

  return (
    <section className="pgl-contact" id="contact">
      <div className="pgl-contact__grid">
        <Reveal className="pgl-contact__copy">
          <span className="pgl-tag">{t(site.contact_tag)}</span>
          <h2 className="pgl-h2">
            <RevealText>{t(site.contact_title)}</RevealText>
          </h2>
          <p>{t(site.contact_lede)}</p>

          <ol className="pgl-contact__steps">
            {steps.map((step) => (
              <li key={step.n}>
                <span>{step.n}</span>
                <div>
                  <b>{step.title}</b>
                  <small>{step.body}</small>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal effect="rise" delay={80} className="pgl-contact__side">
          <ul className="pgl-contact__rows">
            <li>
              <Tile image={icon3d.message} size="sm" />
              <div>
                <small>{t(site.contact_email)}</small>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </div>
            </li>
            <li>
              <Tile image={icon3d.signIn} size="sm" />
              <div>
                <small>{t(site.contact_system)}</small>
                <a href={APP_URL}>powergrid.mn</a>
              </div>
            </li>
            <li>
              <Tile image={icon3d.docs} size="sm" />
              <div>
                <small>{t(site.contact_docs)}</small>
                <Link to="/architecture">{t(site.contact_docs_note)}</Link>
              </div>
            </li>
          </ul>
          <ContactForm title={t(site.contact_form_title)} />
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
