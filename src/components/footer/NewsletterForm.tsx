import { useState, type FormEvent } from 'react'
import { Icon } from '@iconify/react'
import { useLang } from '@/i18n/context'
import { submitForm, type SubmitResult } from '@/lib/submitForm'

type Status = 'idle' | 'sending' | 'invalid' | SubmitResult | 'error'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const NewsletterForm = () => {
  const { t } = useLang()
  const [status, setStatus] = useState<Status>('idle')

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const email = String(new FormData(form).get('email') ?? '').trim()
    if (!EMAIL_PATTERN.test(email)) {
      setStatus('invalid')
      return
    }
    setStatus('sending')
    try {
      const result = await submitForm('newsletter', 'PowerGrid — subscribe', { Email: email })
      setStatus(result)
      if (result === 'sent') form.reset()
    } catch {
      setStatus('error')
    }
  }

  const message = {
    invalid: t('Зөв имэйл хаяг оруулна уу', 'Please enter a valid email address'),
    sent: t('Бүртгэгдлээ. Баярлалаа!', 'Subscribed. Thank you!'),
    mailto: t('Имэйл програм нээгдлээ — тэндээс илгээнэ үү.', 'Your email app has opened — send it from there.'),
    error: t('Бүртгэж чадсангүй. Дахин оролдоно уу.', 'Could not subscribe. Please try again.'),
  }[status as 'invalid' | 'sent' | 'mailto' | 'error']

  return (
    <div className="grow">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="flex items-center rounded-full border border-white/15 p-1.5 ps-5 transition-colors focus-within:border-white/40"
      >
        <input
          type="email"
          name="email"
          autoComplete="email"
          aria-label={t('Имэйл хаяг', 'Email address')}
          placeholder={t('Имэйл хаягаа оруулна уу', 'Enter your email address')}
          className="placeholder-default-500 h-10 w-full border-0 bg-transparent p-0 text-white outline-none"
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          aria-label={t('Бүртгүүлэх', 'Subscribe')}
          className="text-ink hover:bg-accent-bright flex size-10 shrink-0 items-center justify-center rounded-full bg-white transition-colors duration-300 ease-soft hover:text-white disabled:opacity-60"
        >
          <Icon
            icon={status === 'sending' ? 'tabler:loader-2' : 'tabler:arrow-up-right'}
            className={`size-5 ${status === 'sending' ? 'animate-spin' : ''}`}
          />
        </button>
      </form>
      {message && (
        <p
          role={status === 'sent' || status === 'mailto' ? 'status' : 'alert'}
          className={`mt-2 text-sm ${status === 'sent' ? 'text-green-400' : status === 'mailto' ? 'text-default-400' : 'text-red-400'}`}
        >
          {message}
        </p>
      )}
    </div>
  )
}

export default NewsletterForm
