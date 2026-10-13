import { CONTACT_EMAIL } from '@/config'

export type FormKind = 'contact' | 'newsletter'

/** 'sent' — үйлчилгээ рүү илгээгдсэн; 'mailto' — имэйл програм нээгдсэн. */
export type SubmitResult = 'sent' | 'mailto'

const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT?.trim()

const buildMailto = (subject: string, fields: Record<string, string>) => {
  const body = Object.entries(fields)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n')
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

/**
 * Формын өгөгдлийг VITE_CONTACT_ENDPOINT руу (Formspree зэрэг) илгээнэ.
 * Endpoint тохируулаагүй бол хэрэглэгчийн имэйл програмыг бөглөсөн захидалтай нээнэ.
 */
export const submitForm = async (
  kind: FormKind,
  subject: string,
  fields: Record<string, string>,
): Promise<SubmitResult> => {
  if (!endpoint) {
    window.location.href = buildMailto(subject, fields)
    return 'mailto'
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ _subject: subject, form: kind, ...fields }),
  })
  if (!response.ok) throw new Error(`Form submit failed: ${response.status}`)
  return 'sent'
}
