import type { Text } from '@/i18n/context'

export type NavItem = { href: string; label: Text }

/**
 * Нэг жагсаалт, хоёр газар: толгой ба хөл хоёулаа үүнийг уншина — сайтад хуудас
 * нэмэхэд хоёуланд нь зэрэг гарна. Дараалал нь уншигчийн асуултын дараалал:
 * юу вэ, яаж баригдсан бэ, хэн юу харах вэ, бусад хаанаас сурсан бэ, нэмж унших,
 * хэзээ ирэх вэ.
 */
export const PUBLIC_NAV: NavItem[] = [
  { href: '/platform', label: { mn: 'Платформ', en: 'Platform' } },
  { href: '/architecture', label: { mn: 'Архитектур', en: 'Architecture' } },
  { href: '/trust', label: { mn: 'Эрх ба нууцлал', en: 'Access & privacy' } },
  { href: '/experience', label: { mn: 'Олон улсын туршлага', en: 'International experience' } },
  { href: '/knowledge', label: { mn: 'Мэдлэг', en: 'Knowledge' } },
  { href: '/platform#roadmap', label: { mn: 'Нэвтрүүлэлт', en: 'Rollout' } },
]

/** Бүтээгдэхүүний биш, сайтын тухай хуудсууд — цэсний доод хэсэг ба хөлийн багана. */
export const ABOUT_NAV: NavItem[] = [
  { href: '/about', label: { mn: 'Бидний тухай', en: 'About us' } },
  { href: '/contact', label: { mn: 'Холбогдох', en: 'Contact' } },
  { href: '/privacy', label: { mn: 'Нууцлалын бодлого', en: 'Privacy policy' } },
]
