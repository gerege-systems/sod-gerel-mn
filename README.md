# Gerege web

Gerege Systems-ийн гурван бүтээгдэхүүний танилцуулга вэб сайт. Хавтас бүр **өөрөө бүтэн, бие даасан сайт** — хооронд нь хамааралгүй, тус тусад нь ажиллуулж, тус тусад нь байршуулна.

| Хавтас | Сайт | Бодит систем | Local |
| --- | --- | --- | --- |
| [`gerege-contract/`](gerege-contract) | Gerege Contract — eID-ээр гэрээ байгуулах платформ | contract.mn | http://localhost:3000 |
| [`gerege-enotary/`](gerege-enotary) | e-Notary — нотариатын цахим платформ | enotary.mn | http://localhost:3001 |
| [`gerege-appstore/`](gerege-appstore) | Gerege App Store — Gerege Nexus апп дэлгүүр | appstore.gerege.mn | http://localhost:3002 |

PHP 8 · Vite 6 · Tailwind CSS 4 · Preline · Iconify · FastRoute.

## Ажиллуулах

Шаардлага: Node.js 20+, PHP 8+.

```sh
cd gerege-enotary          # аль сайтаа сонгоно
npm install
php ./bin/composer.phar install
npm run dev
```

Хоёр, гурван сайтыг зэрэг ажиллуулах бол **нэгийгээ бүрэн асаасны дараа** дараагийнхаа `npm run dev`-ийг ажиллуулна. Зэрэг асаавал дотоод PHP серверүүдийн port (6535…) давхцаж, бүх хаяг нэг сайтыг харуулна.

## Сайт бүрийн бүтэц

| Юу | Хаана |
| --- | --- |
| Нэр, лого, нэвтрэх холбоос, баталгаа/CTA текст | `configs/sites.php` |
| Хаягууд (route) | `configs/routes.php` |
| Нүүр, Аюулгүй байдал (+ App Store: Архитектур) | `pages/` |
| Navbar, footer, баталгаа, CTA | `partials/` |
| Брэнд өнгө (light / dark) | `src/css/_config.css` — `--accent`, `--accent-2` |
| Загварын класс (wordmark, pill, товч, glow) | `src/css/_general.css` |
| Лого, hero зураг, шилэн 3D icon-ууд | `public/images/` |
| App Store-ийн каталог | `gerege-appstore/configs/catalog.php` |

## Build

```sh
npm run build              # dist/ — байршуулах файлууд
```
