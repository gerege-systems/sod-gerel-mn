<?php $site_key = 'appstore'; ?>
<!DOCTYPE html>
<html lang="mn" data-site="appstore">

<head>
    <?php $title = 'Архитектур'; include('./partials/title-meta.php'); ?>

    <?php include('./partials/head-css.php'); ?>
</head>

<body>

    <?php include('./partials/navbar.php'); ?>

    <!-- Hero Section -->
    <section class="relative overflow-hidden lg:pt-44 pt-32">
        <div class="absolute inset-0 glow-top -z-1"></div>

        <div class="container">
            <div class="hidden md:flex justify-between mb-14">
                <div class="label">Архитектур<span>architecture</span></div>
                <div class="label text-center">Go<span>modules</span></div>
                <div class="label text-end">Gerege<span>Nexus</span></div>
            </div>

            <div class="text-center" data-aos="fade-up">
                <img src="%BASE%/images/icons3d-white/gears.webp" alt="" class="size-36 mx-auto mb-6 float hero-icon-shadow">

                <div class="flex flex-wrap justify-center gap-2 mb-7">
                    <span class="pill"><span class="size-1.5 rounded-full bg-accent"></span> Яагаад энэ архитектур</span>
                </div>

                <h1 class="display max-w-4xl mx-auto mb-6">Апп бүр Nexus-ийн <span class="text-accent">нэг гэрээг</span> дагана</h1>

                <p class="text-muted md:text-lg max-w-2xl mx-auto">Каталогийн апп бүр Nexus-д компиллогдсон модуль эсвэл гадаад OIDC апп байна. Аль байгууллагад аль нь идэвхтэйг тухайн байгууллагын суулгалт шийднэ.</p>
            </div>
        </div>

        <div class="relative mt-10 -mb-[4vw] text-center pointer-events-none" aria-hidden="true">
            <div class="wordmark bg-linear-to-b from-fg/90 to-fg/0 bg-clip-text text-transparent">nexus</div>
        </div>
    </section>

    <!-- Architecture pillars -->
    <section class="lg:py-40 py-24">
        <div class="container">
            <div class="grid md:grid-cols-2 gap-4">
                <div class="group rounded-3xl bg-surface border border-fg/8 lg:p-10 p-7 flex flex-col gap-10" data-aos="fade-up">
                    <img src="%BASE%/images/icons3d-white/gears.webp" alt="" class="size-20 -ms-2 transition-transform duration-500 group-hover:-translate-y-1" loading="lazy">
                    <div>
                        <div class="text-xs text-muted mb-2">01</div>
                        <h3 class="text-2xl mb-3">Компиллогдсон Go модулиуд</h3>
                        <p class="text-muted">Модуль бүр <code class="arch-code">pkg/nexus</code> Go гэрээг хэрэгжүүлж нэг API бинарид компиллогдоно. Маршрут, цэс, эрх, миграцаа module өөрөө бүртгэнэ.</p>
                    </div>
                </div>

                <div class="group rounded-3xl bg-inv text-inv-fg lg:p-10 p-7 flex flex-col gap-10" data-aos="fade-up" data-aos-delay="80">
                    <img src="%BASE%/images/icons3d-white/safe.webp" alt="" class="size-20 -ms-2 transition-transform duration-500 group-hover:-translate-y-1" loading="lazy">
                    <div>
                        <div class="text-xs text-inv-fg/50 mb-2">02</div>
                        <h3 class="text-2xl mb-3">Тенант бүрийн апп стор</h3>
                        <p class="text-inv-fg/60">Аль байгууллагад аль апп идэвхтэйг өгөгдлийн сан шийднэ. Суулгаагүй апп руу хандвал хориглоно — код нь байгаа ч хаалга нь хаалттай.</p>
                    </div>
                </div>

                <div class="group rounded-3xl bg-accent text-on-accent lg:p-10 p-7 flex flex-col gap-10" data-aos="fade-up" data-aos-delay="160">
                    <img src="%BASE%/images/icons3d-white/puzzle-check.webp" alt="" class="size-20 -ms-2 transition-transform duration-500 group-hover:-translate-y-1" loading="lazy">
                    <div>
                        <div class="text-xs text-on-accent/60 mb-2">03</div>
                        <h3 class="text-2xl mb-3">Хамаарал шийдвэрлэгч</h3>
                        <p class="text-on-accent/75">Рекурсив шийдвэрлэлт, мөчлөг илрүүлэлт, хувилбарын шалгалт. Апп суулгахад түүний хамаарал бүр тохирох хувилбартайгаа хамт орно.</p>
                    </div>
                </div>

                <div class="group rounded-3xl bg-surface border border-fg/8 lg:p-10 p-7 flex flex-col gap-10" data-aos="fade-up" data-aos-delay="240">
                    <img src="%BASE%/images/icons3d-white/globe.webp" alt="" class="size-20 -ms-2 transition-transform duration-500 group-hover:-translate-y-1" loading="lazy">
                    <div>
                        <div class="text-xs text-muted mb-2">04</div>
                        <h3 class="text-2xl mb-3">Гарын үсэгтэй remote каталог</h3>
                        <p class="text-muted">Nexus суулгац <code class="arch-code">APP_CATALOG_URL</code>-аар энэ дэлгүүрийн каталогийг татаж, <code class="arch-code">APPSTORE_PUBLIC_KEY</code>-ээр гарын үсгийг шалгана. Шалгалт унавал cache эсвэл bundled каталог руу аюулгүй буцна.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php include('./partials/cta.php'); ?>

    <?php include('./partials/footer.php'); ?>

</body>

</html>
