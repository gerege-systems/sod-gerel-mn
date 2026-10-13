import { useState, type FormEvent } from 'react'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import contactBg from '@/assets/images/other/ulaanbaatar-night.jpg'
import { CONTACT_EMAIL } from '@/config'
import { useLang, type Text } from '@/i18n/context'
import { submitForm, type SubmitResult } from '@/lib/submitForm'
import PillButton from '@/components/PillButton'
import SectionMeta from '@/components/SectionMeta'

type Status = 'idle' | 'sending' | SubmitResult | 'error'
type Field = 'name' | 'email' | 'message'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const interestOptions: { value: string; label: Text }[] = [
  { value: 'pilot', label: { mn: 'Туршилтын нэвтрүүлэлт', en: 'Pilot rollout' } },
  { value: 'meters', label: { mn: 'Тоолуур ба HES интеграц', en: 'Meter & HES integration' } },
  { value: 'billing', label: { mn: 'Тариф ба төлбөр', en: 'Tariffs & billing' } },
  { value: 'data-access', label: { mn: 'Өгөгдөлд хандах эрх', en: 'Data access rights' } },
]

const inputClass = 'u-input'
const labelClass = 'meta mb-1 block'

const ContactForm = () => {
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
      <p className="mt-1.5 text-sm text-red-600" role="alert">
        {t(errors[field])}
      </p>
    )

  return (
    <section className="bg-stage relative overflow-hidden py-10 md:py-14.5">
      <div className="rails" aria-hidden="true">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </div>
      <div className="container relative">
        <SectionMeta
          left={t('Холбоо барих', 'Contact')}
          right={t('Улаанбаатар', 'Ulaanbaatar')}
          className="mb-10 md:mb-14"
        />
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h1 className="display mixed">
              <b>{t('PowerGrid-ийг танай байгууллагад', 'Bringing PowerGrid')}</b>{' '}
              {t('нэвтрүүлэх үү', 'to your organisation')}
              <span className="accent">?</span>
            </h1>
            <p className="mt-6 max-w-[32rem]">
              {t(
                'Түгээх компани, зохицуулагч, тоолуур нийлүүлэгч эсвэл гуравдагч тал — туршилтын бүлэг, протоколын баримт, өгөгдөлд хандах эрхийн талаар бидэнд бичээрэй.',
                'Distribution company, regulator, meter vendor or third party — write to us about a pilot group, protocol documentation or data-access rights.',
              )}
            </p>
            <div className="meta mt-8">{t('Эсвэл шууд', 'Or directly')}</div>
            <div className="mt-2 flex flex-wrap gap-2">
              <a href={`mailto:${CONTACT_EMAIL}`} className="chip">
                <Icon icon="tabler:mail" className="size-4" aria-hidden="true" />
                {CONTACT_EMAIL}
              </a>
            </div>
            <div className="group rounded-card mt-10 hidden overflow-hidden lg:block">
              <img
                className="h-72 w-full object-cover transition-transform duration-500 ease-soft group-hover:scale-[1.03]"
                src={contactBg}
                alt="PowerGrid"
              />
            </div>
          </div>

          <div className="lg:col-span-7">
            {status === 'sent' ? (
              <div className="card p-7 lg:p-9" role="status">
                <div className="bg-accent/10 text-accent mb-5 flex size-12 items-center justify-center rounded-full">
                  <Icon icon="tabler:circle-check-filled" className="size-6" aria-hidden="true" />
                </div>
                <h2 className="mb-2 text-2xl">{t('Мессеж илгээгдлээ', 'Message sent')}</h2>
                <p>
                  {t(
                    'Баярлалаа! Бид удахгүй таны имэйл хаяг руу хариу бичнэ.',
                    'Thank you! We will reply to your email address shortly.',
                  )}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="text-ink mt-6 text-sm font-medium underline underline-offset-4"
                >
                  {t('Өөр мессеж илгээх', 'Send another message')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="card p-6 md:p-8 lg:p-10">
                <div className="grid gap-6 md:grid-cols-2 md:gap-x-8">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      {t('Таны нэр*', 'Your name*')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      aria-invalid={!!errors.name}
                      className={inputClass}
                    />
                    {fieldError('name')}
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      {t('Имэйл хаяг*', 'Email address*')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      aria-invalid={!!errors.email}
                      className={inputClass}
                    />
                    {fieldError('email')}
                  </div>
                  <div>
                    <label htmlFor="phone-number" className={labelClass}>
                      {t('Утасны дугаар', 'Phone number')}
                    </label>
                    <input
                      type="tel"
                      id="phone-number"
                      name="phone"
                      autoComplete="tel"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="interest" className={labelClass}>
                      {t('Сонирхож буй чиглэл', 'Area of interest')}
                    </label>
                    <select id="interest" name="interest" className={inputClass}>
                      <option value="">{t('Сонгоно уу...', 'Please select...')}</option>
                      {interestOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {t(option.label)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="mt-6">
                  <label htmlFor="message" className={labelClass}>
                    {t('Мессеж*', 'Message*')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    aria-invalid={!!errors.message}
                    className={inputClass}
                    rows={5}
                  ></textarea>
                  {fieldError('message')}
                </div>

                {/* Spam хамгаалалт: хүнд харагдахгүй */}
                <input
                  type="text"
                  name="company_website"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="absolute -left-[9999px] h-0 w-0 opacity-0"
                />

                {status === 'error' && (
                  <p className="mt-6 rounded-2xl bg-red-50 p-4 text-sm text-red-700" role="alert">
                    {t(
                      'Илгээж чадсангүй. Дахин оролдох эсвэл шууд имэйл бичнэ үү: ',
                      'Could not send. Please try again or email us directly: ',
                    )}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium underline">
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                )}
                {status === 'mailto' && (
                  <p className="bg-stage mt-6 rounded-2xl p-4 text-sm" role="status">
                    {t(
                      'Таны имэйл програм бөглөсөн захидалтай нээгдлээ — тэндээс илгээнэ үү. Нээгдээгүй бол шууд бичнэ үү: ',
                      'Your email app has opened with the message filled in — send it from there. If it did not open, write to: ',
                    )}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium underline">
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                )}

                <div className="mt-8 flex flex-col-reverse gap-6 md:flex-row md:items-center md:justify-between">
                  <p className="text-default-500 max-w-[28rem] text-xs">
                    {t(
                      'Илгээснээр та мэдээллээ зөвхөн энэ хүсэлтэд хариулахад ашиглахыг зөвшөөрч байна. ',
                      'By sending, you agree that we use your details only to answer this enquiry. ',
                    )}
                    <Link to="/privacy" className="underline">
                      {t('Нууцлалын бодлого', 'Privacy policy')}
                    </Link>
                  </p>
                  <PillButton type="submit" variant="dark" disabled={status === 'sending'}>
                    {status === 'sending' ? (
                      <>
                        <Icon icon="tabler:loader-2" className="size-4.5 animate-spin" aria-hidden="true" />
                        {t('Илгээж байна...', 'Sending...')}
                      </>
                    ) : (
                      t('Илгээх', 'Send')
                    )}
                  </PillButton>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
