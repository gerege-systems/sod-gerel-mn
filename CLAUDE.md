# CLAUDE.md

Gerege Systems-ийн 3 бүтээгдэхүүний танилцуулга сайт. Хэрэглэгчтэй монголоор ярина.

## Бүтэц

- `gerege-contract/` (:3000), `gerege-enotary/` (:3001), `gerege-appstore/` (:3002) — **гурав бие даасан сайт**. Нэг сайтыг засахад нөгөө хоёрт автоматаар орохгүй; нийтлэг хэсэг (partials, CSS) засвал хэрэгтэй сайт бүрт тус тусад нь хийнэ.
- PHP + Vite (`vite-plugin-php`), Tailwind CSS 4, FastRoute. Хуудас нь `pages/*.php`, давтагддаг хэсэг `partials/*.php`.
- Сайтын нэр, лого, холбоос, текст: `configs/sites.php`. Partial-ууд `$site` массиваас уншина — текстийг partial-д шууд бичихгүй.
- Шинэ хуудас нэмэх: `pages/x.php` үүсгээд `configs/routes.php`-д route нэмнэ.

## Ажиллуулах

`npm install && php ./bin/composer.phar install && npm run dev` — тухайн сайтын хавтсанд. Хэд хэдэн сайтыг **нэг нэгээр нь** асаа: зэрэг асаавал vite-plugin-php-ийн PHP port (6535-аас эхэлдэг) давхцана.

## Дизайны дүрэм

- Light / dark хоёулаа заавал ажиллана. Өнгө зөвхөн CSS хувьсагчаар: `--accent`, `--on-accent`, `--accent-2`, `--bg`, `--surface`, `--surface-2`, `--fg`, `--muted`, `--inv`, `--inv-fg` (`src/css/_config.css`). Hex-ийг markup-д шууд бичихгүй.
- Брэнд өнгө: Contract `#1531FD`, e-Notary `#224BB2` (+ туслах `#00F0FF`), App Store `#3E43BB`. Accent нь товч, идэвхтэй төлөв, нэг тодруулсан үгэнд л — дэлгэцийн ~10%-аас хэтрэхгүй.
- Туслах цэнхэр-ногоон (`--accent-2`) нь цагаан дэвсгэр дээр текстэд уншигдахгүй — зөвхөн дэвсгэр, glow-д.
- Typography: Inter Tight. Том lowercase wordmark (`.wordmark`), хоёр өнгөтэй гарчиг (2 дахь хэсэг `text-muted`), 2 мөрт uppercase `.label`, `.pill`.
- 3D icon: зөвхөн **цагаан/цэнхэр шилэн** icon (`public/images/icons3d-white/`, `public/images/icons3d/`-ийн `*-glass` болон цэнхэр нь). Хар icon (aggregation, audit, balance, citizen, collection, database-guard, operator, organisation, two-person, verified-command, versioned-data) **ашиглахгүй**.
- Мөр/карт доторх icon-ыг ижил хэмжээтэй дөрвөлжин хүрээнд (`size-11 rounded-xl bg-bg`) төвлөрүүлнэ.
- Текстийг бодит сайтаас (contract.mn, enotary.mn, appstore.gerege.mn) авна; шинээр зохиосон текст бол хэрэглэгчид хэлнэ.
- Шалгахдаа 375px утас ба desktop, light ба dark хоёуланд нь харна.
