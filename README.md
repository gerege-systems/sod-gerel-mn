# PowerGrid — танилцуулга сайт

Ухаалаг тоолуурын үндэсний платформ **PowerGrid**-ийн нийтэд нээлттэй, хоёр хэлтэй (MN/EN)
танилцуулга сайт. Бодит систем (нэвтрэлт, ажлын орчин) нь
[`gerege-systems/power-grid-mn`](https://github.com/gerege-systems/power-grid-mn) — Gerege Nexus
distribution — дээр `powergrid.mn` хаягаар ажиллана. Энэ сайт тэр системийг тайлбарлаж,
«Нэвтрэх» товчоор тэр систем рүү шилжүүлнэ.

React 19 · TypeScript · Vite 8 · Tailwind CSS 4 · React Router 7 · Preline · Iconify.

## Ажиллуулах

```sh
npm install
npm run dev        # http://localhost:5173
npm run build      # dist/ — статик файлууд
npm run preview    # build-ийг шалгах
npx tsc -b         # төрөл шалгах
npm run lint
```

## Тохиргоо

| Юу | Хаана |
| --- | --- |
| Системийн хаяг, нэвтрэх хаяг, операторын консол | [`src/config.ts`](src/config.ts) — `APP_URL`, `LOGIN_URL`, `ADMIN_URL` |
| Холбоо барих имэйл (сайт даяар) | `src/config.ts` — `CONTACT_EMAIL` (**бодит хаягаар солих**) |
| Формын хүлээн авагч | `.env` — `VITE_CONTACT_ENDPOINT` (жишээг [`.env.example`](.env.example)-аас) |
| Брэнд өнгө | [`src/assets/css/_config.css`](src/assets/css/_config.css) — `--color-primary`, `--color-accent` |
| Лого | `src/assets/images/powergrid-logo*.svg`, `public/powergrid-icon.svg` |
| SEO, хуваалцах зураг | [`index.html`](index.html), `public/og-image.jpg`, `public/robots.txt`, `public/sitemap.xml` |

**Форм:** `VITE_CONTACT_ENDPOINT` (Formspree г.м.) тохируулбал холбоо барих ба бүртгүүлэх форм
JSON-оор шууд илгээнэ. Хоосон бол хэрэглэгчийн имэйл програм бөглөсөн захидалтай нээгдэнэ.
Логик: [`src/lib/submitForm.ts`](src/lib/submitForm.ts).

## Хоёр хэл

`src/i18n/` — `useLang()` нь `t('Монгол', 'English')` эсвэл `t({ mn, en })` буцаана. Сонголт
`localStorage`-д (`powergrid-lang`) хадгалагдана. Шинэ текст нэмэхдээ хоёр хэлийг зэрэг бичнэ;
өгөгдлийн массивт `Text = { mn, en }` төрөл ашиглана. Англи нэр томьёо нь
`power-grid-mn/brand/copy.json`-тэй нийцсэн.

## Хуудсууд

| Хаяг | Агуулга |
| --- | --- |
| `/` | Нүүр (`/home` → `/`) |
| `/platform` | Платформ, «Хаана явна» (`#roadmap`), давуу тал, нэвтрүүлэлт, FAQ |
| `/architecture` | Архитектурын нийтлэл |
| `/trust` | Эрх ба нууцлал, нэвтрэх аргууд, үүргийн хүснэгт |
| `/experience`, `/knowledge` | Олон улсын туршлага, мэдлэгийн сан |
| `/about`, `/contact`, `/privacy` | Бидний тухай, холбоо барих (форм), нууцлалын бодлого |
| бусад | `/error-404` |

## Байршуулах (Gerege Nexus)

- `npm run build` → `dist/` бүхэлдээ статик. Аль ч статик сервер / CDN-д тавьж болно.
- **SPA fallback заавал:** бүртгэлгүй замыг `index.html` руу чиглүүлнэ (nginx: `try_files $uri /index.html;`).
- `/assets/*` нь hash-тай — урт хугацааны cache (`immutable`) тавьж болно; `index.html`-д cache бүү тавь.
- **Зам давхцал:** Nexus frontend `powergrid.mn` дээр `/architecture`, `/platform`, `/trust`, `/login`
  замыг аль хэдийн үйлчилдэг. Энэ сайтыг тэр домэйн дээр Nexus-тэй зэрэг ажиллуулбал замууд
  мөргөлдөнө — тусдаа дэд домэйн (жишээ нь `www.` эсвэл `about.`) эсвэл Nexus-ийн нүүр хуудсыг
  энэ сайтаар солих шийдвэр хэрэгтэй.
- Дэд зам (`/site/`) дээр байрлуулбал `vite.config.ts`-д `base: '/site/'` тохируулна.
- `index.html`-ийн `og:image` ба `public/sitemap.xml`, `robots.txt` нь `https://powergrid.mn`
  гэж үзсэн — эцсийн домэйноор солино.
- Гадагш хандалт: Google Fonts (фонт), `api.iconify.design` (icon), `powergrid.mn/login`.
  CSP тохируулж байгаа бол эдгээрийг зөвшөөрнө.

## Зураг ба эх сурвалж

Гэрэл зургууд [Pexels](https://www.pexels.com/license/)-ээс (арилжааны хэрэглээ үнэгүй, эх
сурвалж заавал биш). Агуулга нь `power-grid-mn/docs/` (архитектур, хэрэгжүүлэх төлөвлөгөө,
олон улсын судалгаа v1.3) ба `brand/copy.json`-д тулгуурласан.

## Нийтлэхийн өмнө баталгаажуулах

- [ ] `CONTACT_EMAIL` бодит эсэх; `VITE_CONTACT_ENDPOINT` тохируулах
- [ ] Нууцлалын бодлого (`/privacy`) — хуулийн зөвлөхөөр хянуулах
- [ ] Эцсийн домэйн ба Nexus-тэй замын шийдвэр
- [ ] Багийн хэсгийн зургууд (одоо stock) — бодит зургаар солих эсвэл хэвээр үлдээх
