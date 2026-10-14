import type { ReactNode } from 'react'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'
import Aurora from '@/components/site/Aurora'
import { useTilt } from '@/lib/motion-hooks'

/**
 * Сайтын хүрээ: толгой, агуулга, хөл — бүх хуудсанд яг ижил.
 * `.pgl` анги нь `_site.css`-ийн токен ба дэвсгэрийг асаана; `Aurora` нь
 * агуулгын ард хөвөх гэрлийн давхарга; `useTilt` нь `[data-tilt]` картуудыг
 * заагч руу налуулна. Инерцтэй гүйлгээ (Lenis) нь AppProvidersWrapper-т.
 */
const SiteShell = ({ children }: { children: ReactNode }) => {
  useTilt()

  return (
    <div className="pgl" id="top">
      <Aurora />
      <Navbar />
      <main className="pgl-main">{children}</main>
      <Footer />
    </div>
  )
}

export default SiteShell
