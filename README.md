# Gerege App Store

Gerege App Store — Gerege Nexus апп дэлгүүрийн вэб сайт.

## Ажиллуулах

```bash
npm install
php ./bin/composer.phar install
npm run dev
```

Сайт: http://localhost:3002

Gerege Contract (3000), e-Notary (3001), App Store (3002) гурвыг зэрэг ажиллуулах бол нэгийгээ бүрэн асаасны дараа дараагийнхаа `npm run dev`-ийг ажиллуулна — зэрэг асаавал дотоод PHP серверийн port давхцана.

## Бүтэц

- `pages/` — хуудсууд (`index.php`, `trust.php`, `architecture.php`)
- `partials/` — navbar, footer, баталгаа, CTA зэрэг давтагддаг хэсгүүд
- `configs/sites.php` — нэр, лого, холбоос, текст
- `configs/catalog.php` — каталогийн аппууд
- `configs/routes.php` — хаягууд
- `src/css/` — өнгө (light / dark), загвар
- `public/images/` — лого, зураг, 3D icon-ууд
