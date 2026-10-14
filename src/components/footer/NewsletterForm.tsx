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

  const tone = status === 'sent' ? 'ok' : status === 'mailto' ? 'info' : 'err'

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <input
          type="email"
          name="email"
          autoComplete="email"
          aria-label={t('Имэйл хаяг', 'Email address')}
          placeholder={t('Имэйл хаягаа оруулна уу', 'Enter your email address')}
        />
        <button type="submit" disabled={status === 'sending'} aria-label={t('Бүртгүүлэх', 'Subscribe')}>
          <Icon
            icon={status === 'sending' ? 'lucide:loader-2' : 'lucide:arrow-right'}
            className={status === 'sending' ? 'animate-spin' : undefined}
          />
        </button>
      </form>
      {message && (
        <p role={status === 'sent' || status === 'mailto' ? 'status' : 'alert'} data-tone={tone}>
          {message}
        </p>
      )}
    </>
  )
}

export default NewsletterForm
