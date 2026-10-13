import { useState, type FormEvent } from 'react'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom'
import contactBg from '@/assets/images/other/ulaanbaatar-night.jpg'
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

const inputClass =
  'bg-default-100 focus:border-default-200 flex h-11.25 w-full items-center rounded-lg border-transparent px-5 py-2'
const errorInputClass = 'border-red-400! bg-red-50!'

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
    <section className="relative size-full overflow-hidden py-10 md:py-14.5">
      <div className="container">
        <h1 className="text-default-950 mb-15 text-4xl md:text-5xl lg:text-[56px]">
          {t('PowerGrid-ийг танай байгууллагад нэвтрүүлэх үү?', 'Bringing PowerGrid to your organisation?')}
        </h1>
        <div className="grid gap-7.5 md:gap-12.5 lg:grid-cols-5 lg:gap-17.5">
          <div className="lg:col-span-3">
            <div className="mb-10">
              {t(
                'Түгээх компани, зохицуулагч, тоолуур нийлүүлэгч эсвэл гуравдагч тал — туршилтын бүлэг, протоколын баримт, өгөгдөлд хандах эрхийн талаар бидэнд бичээрэй.',
                'Distribution company, regulator, meter vendor or third party — write to us about a pilot group, protocol documentation or data-access rights.',
              )}
            </div>

            {status === 'sent' ? (
              <div className="rounded-xl border border-green-200 bg-green-50 p-6" role="status">
                <div className="mb-2 flex items-center gap-2 text-lg font-medium text-green-800">
                  <Icon icon="tabler:circle-check-filled" className="size-6" />
                  {t('Мессеж илгээгдлээ', 'Message sent')}
                </div>
                <p className="text-green-900">
                  {t(
                    'Баярлалаа! Бид удахгүй таны имэйл хаяг руу хариу бичнэ.',
                    'Thank you! We will reply to your email address shortly.',
                  )}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-sm font-medium text-green-800 underline"
                >
                  {t('Өөр мессеж илгээх', 'Send another message')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-7.5 grid gap-7.5 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-sm">
                      {t('Таны нэр*', 'Your name*')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      autoComplete="name"
                      aria-invalid={!!errors.name}
                      className={`${inputClass} ${errors.name ? errorInputClass : ''}`}
                    />
                    {fieldError('name')}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-sm">
                      {t('Имэйл хаяг*', 'Email address*')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      aria-invalid={!!errors.email}
                      className={`${inputClass} ${errors.email ? errorInputClass : ''}`}
                    />
                    {fieldError('email')}
                  </div>
                  <div>
                    <label htmlFor="phone-number" className="mb-1.5 block text-sm">
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
                    <label htmlFor="interest" className="mb-1.5 block text-sm">
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
                <div className="mb-5">
                  <label htmlFor="message" className="mb-1.5 block text-sm">
                    {t('Мессеж*', 'Message*')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    aria-invalid={!!errors.message}
                    className={`bg-default-100 focus:border-default-200 flex w-full items-center rounded-lg border-transparent px-5 py-2 ${errors.message ? errorInputClass : ''}`}
                    rows={8}
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
                  <p className="mb-5 rounded-lg bg-red-50 p-4 text-sm text-red-700" role="alert">
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
                  <p className="bg-default-100 mb-5 rounded-lg p-4 text-sm" role="status">
                    {t(
                      'Таны имэйл програм бөглөсөн захидалтай нээгдлээ — тэндээс илгээнэ үү. Нээгдээгүй бол шууд бичнэ үү: ',
                      'Your email app has opened with the message filled in — send it from there. If it did not open, write to: ',
                    )}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="font-medium underline">
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                )}

                <p className="text-default-500 mb-5 text-sm">
                  {t(
                    'Илгээснээр та мэдээллээ зөвхөн энэ хүсэлтэд хариулахад ашиглахыг зөвшөөрч байна. ',
                    'By sending, you agree that we use your details only to answer this enquiry. ',
                  )}
                  <Link to="/privacy" className="underline">
                    {t('Нууцлалын бодлого', 'Privacy policy')}
                  </Link>
                </p>

                <div className="lg:-mb-14">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group bg-primary inline-flex items-center justify-center gap-3 rounded-lg px-5 py-3.5 font-medium text-white transition-all disabled:opacity-60"
                  >
                    {status === 'sending' ? (
                      <>
                        <Icon icon="tabler:loader-2" className="size-5 animate-spin" />
                        {t('Илгээж байна...', 'Sending...')}
                      </>
                    ) : (
                      <span className="relative block overflow-hidden">
                        <span className="block duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-7">
                          {t('Илгээх', 'Send')}
                        </span>
                        <span className="absolute inset-s-0 top-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:top-0">
                          {t('Илгээх', 'Send')}
                        </span>
                      </span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
          <div className="lg:col-span-2">
            <div className="group size-full overflow-hidden rounded-lg">
              <img
                className="size-full rounded-lg object-cover transition-all duration-300 group-hover:scale-105"
                src={contactBg}
                alt="PowerGrid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
