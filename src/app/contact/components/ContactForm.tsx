import { useState, type FormEvent } from 'react'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import { CONTACT_EMAIL } from '@/config'
import { useLang, type Text } from '@/i18n/context'
import { submitForm, type SubmitResult } from '@/lib/submitForm'

type Status = 'idle' | 'sending' | SubmitResult | 'error'
type Field = 'name' | 'email' | 'message'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const interestOptions: { value: string; label: Text }[] = [
  { value: 'pilot', label: { mn: 'Туршилтын нэвтрүүлэлт', en: 'Pilot rollout' } },
  { value: 'meters', label: { mn: 'Тоолуур ба HES интеграц', en: 'Meter & HES integration' } },
  { value: 'billing', label: { mn: 'Тариф ба төлбөр', en: 'Tariffs & billing' } },
  { value: 'data-access', label: { mn: 'Өгөгдөлд хандах эрх', en: 'Data access rights' } },
]

/**
 * Холбоо барих форм — нэг карт. /contact хуудас ба нүүрийн «Холбогдох» хэсэг
 * хоёулаа үүнийг зурна. Илгээх логик (`submitForm`): endpoint тохируулсан бол
 * JSON-оор илгээнэ, үгүй бол имэйл програмыг бөглөсөн захидалтай нээнэ.
 */
const ContactForm = ({ title }: { title?: string }) => {
  const { t } = useLang()
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Partial<Record<Field, Text>>>({})

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const value = (key: string) => String(data.get(key) ?? '').trim()

    // Bot-ууд л бөглөдөг далд талбар.
    if (value('company_website')) return

    const nextErrors: Partial<Record<Field, Text>> = {}
    if (!value('name')) nextErrors.name = { mn: 'Нэрээ оруулна уу', en: 'Please enter your name' }
    if (!EMAIL_PATTERN.test(value('email')))
      nextErrors.email = { mn: 'Зөв имэйл хаяг оруулна уу', en: 'Please enter a valid email address' }
    if (value('message').length < 10)
      nextErrors.message = { mn: 'Мессежээ бичнэ үү (10+ тэмдэгт)', en: 'Please write a message (10+ characters)' }
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length) return

    const interest = interestOptions.find((option) => option.value === value('interest'))
    setStatus('sending')
    try {
      const result = await submitForm('contact', `PowerGrid — ${value('name')}`, {
        Name: value('name'),
        Email: value('email'),
        Phone: value('phone'),
        Interest: interest ? interest.label.en : '',
        Message: value('message'),
      })
      setStatus(result)
      if (result === 'sent') form.reset()
    } catch {
      setStatus('error')
    }
  }

  const fieldError = (field: Field) =>
    errors[field] && (
      <span className="pgl-contact__error" role="alert">
        {t(errors[field])}
      </span>
    )

  if (status === 'sent') {
    return (
      <div className="pgl-contact__panel" role="status">
        <div className="pgl-contact__fallback">
          <span className="pgl-report__badge" style={{ justifySelf: 'start' }}>
            <Icon icon="lucide:check" aria-hidden /> {t('Мессеж илгээгдлээ', 'Message sent')}
          </span>
          <h3>{t('Баярлалаа!', 'Thank you!')}</h3>
          <p>{t('Бид удахгүй таны имэйл хаяг руу хариу бичнэ.', 'We will reply to your email address shortly.')}</p>
          <button type="button" className="pgl-pill pgl-pill--outline" onClick={() => setStatus('idle')}>
            {t('Өөр мессеж илгээх', 'Send another message')}
          </button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="pgl-contact__panel">
      <h3>{title ?? t('Хүсэлт бичих', 'Write to us')}</h3>
      <div className="pgl-contact__two">
        <label>
          {t('Таны нэр*', 'Your name*')}
          <input type="text" name="name" autoComplete="name" aria-invalid={!!errors.name} placeholder={t('бүтэн нэр', 'your full name')} />
          {fieldError('name')}
        </label>
        <label>
          {t('Имэйл хаяг*', 'Email address*')}
          <input type="email" name="email" autoComplete="email" aria-invalid={!!errors.email} placeholder="name@example.mn" />
          {fieldError('email')}
        </label>
      </div>
      <div className="pgl-contact__two">
        <label>
          {t('Утасны дугаар', 'Phone number')}
          <input type="tel" name="phone" autoComplete="tel" />
        </label>
        <label>
          {t('Сонирхож буй чиглэл', 'Area of interest')}
          <select name="interest" defaultValue="">
            <option value="">{t('Сонгоно уу...', 'Please select...')}</option>
            {interestOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {t(option.label)}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label>
        {t('Мессеж*', 'Message*')}
        <textarea
          name="message"
          rows={4}
          aria-invalid={!!errors.message}
          placeholder={t('туршилтын бүлэг, тоолуурын тоо, одоогийн систем…', 'pilot group, number of meters, current system…')}
        />
        {fieldError('message')}
      </label>

      {/* Spam хамгаалалт: хүнд харагдахгүй */}
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="pgl-contact__honeypot" />

      {status === 'error' && (
        <p className="pgl-contact__alert pgl-contact__alert--err" role="alert">
          {t('Илгээж чадсангүй. Дахин оролдох эсвэл шууд имэйл бичнэ үү: ', 'Could not send. Please try again or email us directly: ')}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      )}
      {status === 'mailto' && (
        <p className="pgl-contact__alert pgl-contact__alert--info" role="status">
          {t(
            'Таны имэйл програм бөглөсөн захидалтай нээгдлээ — тэндээс илгээнэ үү. Нээгдээгүй бол шууд бичнэ үү: ',
            'Your email app has opened with the message filled in — send it from there. If it did not open, write to: ',
          )}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      )}

      <button type="submit" className="pgl-pill pgl-pill--solid pgl-pill--block" disabled={status === 'sending'}>
        {status === 'sending' ? (
          <>
            <Icon icon="lucide:loader-2" className="animate-spin" aria-hidden /> {t('Илгээж байна...', 'Sending...')}
          </>
        ) : (
          <>
            {t('Хүсэлт илгээх', 'Send the request')} <Icon icon="lucide:arrow-right" aria-hidden />
          </>
        )}
      </button>
      <small className="pgl-contact__note">
        {t(
          'Илгээснээр та мэдээллээ зөвхөн энэ хүсэлтэд хариулахад ашиглахыг зөвшөөрч байна. ',
          'By sending, you agree that we use your details only to answer this enquiry. ',
        )}
        <Link to="/privacy" className="underline">
          {t('Нууцлалын бодлого', 'Privacy policy')}
        </Link>
      </small>
    </form>
  )
}

export default ContactForm
