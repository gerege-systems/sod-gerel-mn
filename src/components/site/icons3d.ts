/**
 * Сайтын нэг 3D дүрсний гэр бүл — цэнхэр шилэн (blue-glass) багц.
 *
 * Нэг утга = нэг дүрс, сайт даяар. Шинэ газарт дүрс хэрэгтэй бол эхлээд
 * энд утгаар нь нэрлэж нэмнэ; файлын нэрээр шууд импортлохгүй. Ингэснээр
 * «тоолуур» хаана ч нэг дүрстэй, нэг дүрс хоёр өөр утгаар давхцахгүй.
 *
 * Зураг: `zasvariin file/icons3d/*.webp` (256px, alpha). Засвар дууссаны
 * дараа src/assets руу зөөнө.
 */
import meter from '@zasvar/icons3d/dashboard.webp'
import network from '@zasvar/icons3d/spheres-glass.webp'
import platform from '@zasvar/icons3d/puzzle-glass.webp'
import customer from '@zasvar/icons3d/phone-shield.webp'
import generation from '@zasvar/icons3d/bulb.webp'
import transmission from '@zasvar/icons3d/link.webp'
import substation from '@zasvar/icons3d/box.webp'
import balance from '@zasvar/icons3d/scale-glass.webp'
import invoice from '@zasvar/icons3d/scroll.webp'
import archive from '@zasvar/icons3d/folder-docs.webp'
import rules from '@zasvar/icons3d/checklist-glass.webp'
import versions from '@zasvar/icons3d/doc-pen.webp'
import national from '@zasvar/icons3d/map.webp'
import screens from '@zasvar/icons3d/glasses.webp'
import message from '@zasvar/icons3d/clipboard-pen.webp'
import signIn from '@zasvar/icons3d/phone-fingerprint.webp'
import docs from '@zasvar/icons3d/folder.webp'
import location from '@zasvar/icons3d/pin.webp'
import start from '@zasvar/icons3d/rocket-glass.webp'
import completeness from '@zasvar/icons3d/calendar-check-glass.webp'
import twoKeys from '@zasvar/icons3d/keys.webp'
import guard from '@zasvar/icons3d/shield-check-glass.webp'
import aggregation from '@zasvar/icons3d/pie-glass.webp'
import organisation from '@zasvar/icons3d/briefcase-glass.webp'
import engineer from '@zasvar/icons3d/compass.webp'
import audit from '@zasvar/icons3d/doc-search.webp'
import monitoring from '@zasvar/icons3d/heart-pulse-glass.webp'
import certified from '@zasvar/icons3d/badge-glass.webp'
import kpi from '@zasvar/icons3d/bar-up.webp'
import console from '@zasvar/icons3d/lock.webp'

export const icon3d = {
  /** Тоолуур, заалт, эх төхөөрөмж. */
  meter,
  /** Холбооны сүлжээ (өгөгдлийн зам). */
  network,
  /** PowerGrid платформ. */
  platform,
  /** Иргэн, хэрэглэгч, хэрэглэгчийн апп. */
  customer,
  /** Үйлдвэрлэл (станц). */
  generation,
  /** Дамжуулалт (шугам). */
  transmission,
  /** Дэд станц. */
  substation,
  /** Тэнцэл, трансформаторын баланс. */
  balance,
  /** Нэхэмжлэх, төлбөр, тариф. */
  invoice,
  /** Түүхий архив. */
  archive,
  /** VEE дүрмүүд, шалгах жагсаалт. */
  rules,
  /** Хувилбар — дарж бичихгүй. */
  versions,
  /** Улс даяар нэг систем. */
  national,
  /** Вэб дэлгэцүүд — хэн юуг хардаг вэ. */
  screens,
  /** Бидэнд бичих (и-мэйл). */
  message,
  /** Систем рүү нэвтрэх (eID). */
  signIn,
  /** Баримт бичиг. */
  docs,
  /** Байршил. */
  location,
  /** Эхлэх, туршилт эхлүүлэх. */
  start,
  /** D+1 бүрэн байдал, заалт цуглуулалт. */
  completeness,
  /** Хоёр түлхүүртэй команд, баталгаажуулалт. */
  twoKeys,
  /** Өгөгдлийн сан өөрөө хамгаална (RLS). */
  guard,
  /** k-босготой нэгтгэл. */
  aggregation,
  /** Байгууллага, түгээх компани. */
  organisation,
  /** Талбайн инженер. */
  engineer,
  /** Аудит, зохицуулагч. */
  audit,
  /** Тасралт, эрүүл мэндийн хяналт. */
  monitoring,
  /** Нотолгоотой нийцэл. */
  certified,
  /** KPI, аналитик. */
  kpi,
  /** Операторын консол (хаалттай хандалт). */
  console,
} as const

export type Icon3d = (typeof icon3d)[keyof typeof icon3d]
