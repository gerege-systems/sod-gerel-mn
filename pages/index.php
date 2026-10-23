<?php $site_key = 'appstore'; include_once('./configs/catalog.php'); ?>
<!DOCTYPE html>
<html lang="mn" data-site="appstore">

<head>
    <?php $title = 'Нүүр'; include('./partials/title-meta.php'); ?>

    <?php include('./partials/head-css.php'); ?>
</head>

<body>

    <?php include('./partials/navbar.php'); ?>

    <!-- Hero Section -->
    <section class="relative overflow-hidden lg:pt-44 pt-32">
        <div class="absolute inset-0 glow-top -z-1"></div>

        <div class="container relative">
            <!-- Corner meta labels -->
            <div class="hidden md:flex justify-between mb-14 text-fg">
                <div class="label">Апп<span>дэлгүүр</span></div>
                <div class="label text-center">Gerege<span>Nexus</span></div>
                <div class="label text-end">Gerege<span>Systems</span></div>
            </div>

            <div class="grid lg:grid-cols-12 items-center gap-10">
                <div class="lg:col-span-7" data-aos="fade-up">
                    <div class="flex flex-wrap gap-2 mb-7">
                        <span class="pill"><span class="size-1.5 rounded-full bg-accent"></span> eID Mongolia</span>
                        <span class="pill">Ed25519</span>
                        <span class="pill">Гарын үсэгтэй каталог</span>
                    </div>

                    <h1 class="display mb-6">Байгууллагын <span class="text-accent">аппууд</span> <span class="text-muted">нэг найдвартай дэлгүүрээс.</span></h1>

                    <p class="text-muted md:text-lg max-w-xl mb-6">Gerege App Store нь Gerege Nexus дээр ажилладаг аппуудын албан ёсны каталог. Хувилбар бүр хянагдаж нийтлэгдэх бөгөөд Nexus суулгац бүр каталогийн гарын үсгийг шалгасны дараа л апп суулгана.</p>

                    <div class="flex flex-col gap-2 mb-9 text-sm">
                        <span class="inline-flex items-center gap-2"><i class="iconify tabler--rosette-discount-check-filled size-5 text-accent"></i> Нийтлэгч бүр eID Mongolia-ээр баталгаажсан</span>
                        <span class="inline-flex items-center gap-2"><i class="iconify tabler--signature size-5 text-accent"></i> Гарын үсэгтэй каталог — суулгац бүр шалгана</span>
                    </div>

                    <div class="flex flex-wrap items-center gap-3">
                        <a href="https://appstore.gerege.mn/login" class="btn-accent">Эхлэх <i class="iconify tabler--arrow-up-right size-5"></i></a>
                        <a href="#catalog" class="btn-ghost">Каталог үзэх</a>
                    </div>
                </div>

                <div class="lg:col-span-5 relative flex justify-center" data-aos="fade-up" data-aos-delay="150">
                    <!-- construction lines -->
                    <div class="absolute inset-y-[-10%] start-[18%] w-px dashed-v"></div>
                    <div class="absolute inset-y-[-10%] end-[18%] w-px dashed-v"></div>
                    <div class="absolute inset-x-[-10%] top-[22%] h-px dashed-h"></div>
                    <div class="absolute inset-[8%] rounded-full glow-accent blur-2xl"></div>

                    <img src="%BASE%/images/home/hero.webp" alt="Гарт барьсан утсан дээр нээлттэй Gerege апп" class="relative lg:max-h-150 max-h-105 w-auto">
                </div>
            </div>
        </div>

        <!-- Giant cropped wordmark -->
        <div class="relative mt-6 -mb-[4vw] text-center pointer-events-none" aria-hidden="true">
            <div class="wordmark text-[clamp(90px,21vw,330px)] bg-linear-to-b from-fg/90 to-fg/0 bg-clip-text text-transparent">appstore</div>
        </div>
    </section>

    <!-- Catalog -->
    <section id="catalog" class="relative lg:pt-30 pt-20 scroll-mt-24">
        <div class="container">
            <div class="grid lg:grid-cols-12 gap-6 mb-10">
                <div class="lg:col-span-7">
                    <div class="label text-accent mb-4">Каталог<span>catalog</span></div>
                    <h2 class="h2">Нийтлэгдсэн <span class="text-muted">аппууд</span></h2>
                </div>
                <p class="lg:col-span-4 lg:col-start-9 self-end text-muted">Суулгацын администратор эдгээрийг Апп дэлгүүрээсээ шууд суулгана. Хувилбар бүр гарын үсэгтэй каталогоор тараагддаг.</p>
            </div>

            <!-- Category filter -->
            <div class="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Ангилал">
                <button type="button" data-filter="all" class="catalog-filter is-active">Бүгд <span><?php echo array_sum(array_map('count', $CATALOG)); ?></span></button>
                <?php foreach ($CATALOG as $cat => $apps) : ?>
                    <button type="button" data-filter="<?php echo htmlspecialchars($cat); ?>" class="catalog-filter"><?php echo $cat; ?> <span><?php echo count($apps); ?></span></button>
                <?php endforeach; ?>
            </div>

            <div class="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                <?php foreach ($CATALOG as $cat => $apps) : ?>
                    <?php foreach ($apps as $app) : ?>
                        <article data-cat="<?php echo htmlspecialchars($cat); ?>" class="catalog-card group rounded-3xl bg-surface border border-fg/8 p-6 flex flex-col gap-5 transition-colors hover:border-accent/40">
                            <div class="flex items-start justify-between gap-4">
                                <span class="size-16 shrink-0 inline-flex items-center justify-center rounded-2xl bg-bg border border-fg/8">
                                    <img src="%BASE%<?php echo $app['icon']; ?>" alt="" class="size-12 object-contain transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:rotate-[-4deg]" loading="lazy">
                                </span>
                                <span class="pill"><?php echo $app['version']; ?></span>
                            </div>

                            <div class="flex-1">
                                <div class="text-xs text-muted mb-1.5"><?php echo $cat; ?></div>
                                <h3 class="text-xl mb-2"><?php echo $app['name']; ?></h3>
                                <p class="text-sm text-muted"><?php echo $app['desc']; ?></p>
                            </div>

                            <div class="flex items-center justify-between gap-3 pt-4 border-t border-fg/8 text-xs">
                                <code class="text-muted truncate"><?php echo $app['pkg']; ?></code>
                                <span class="shrink-0 font-medium">Gerege Systems</span>
                            </div>
                        </article>
                    <?php endforeach; ?>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- How It Works — step cards -->
    <section id="how" class="lg:py-40 py-24 scroll-mt-24">
        <div class="container">
            <div class="grid lg:grid-cols-12 gap-6 mb-12">
                <div class="lg:col-span-7">
                    <div class="label text-accent mb-4">Хэрхэн<span>ажилладаг</span></div>
                    <h2 class="h2">Нийтлэхээс суулгах хүртэл <span class="text-muted">нэг урсгал</span></h2>
                </div>
                <p class="lg:col-span-4 lg:col-start-9 self-end text-muted">Нийтлэгч manifest илгээнэ, хянагч баталж нийтэлнэ, каталог гарын үсэгтэйгээр тарна, байгууллагын админ нэг товчоор суулгана.</p>
            </div>

            <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                <div class="group rounded-3xl bg-surface border border-fg/8 p-6 md:min-h-90 min-h-60 flex flex-col justify-between" data-aos="fade-up">
                    <img src="%BASE%/images/icons3d-white/megaphone.webp" alt="" class="size-24 -ms-3 -mt-3 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-4deg]" loading="lazy">
                    <div>
                        <div class="text-xs text-muted mb-2">01</div>
                        <h3 class="text-2xl mb-3">Нийтлэгчийн студи</h3>
                        <p class="text-sm text-muted">Байгууллага бүр аппаа бүртгэж, хувилбар бүрийн manifest-ийг — эрх, цэс, хамаарал, шаардах платформын хувилбар — илгээнэ.</p>
                    </div>
                </div>

                <div class="group rounded-3xl bg-inv text-inv-fg p-6 md:min-h-90 min-h-60 flex flex-col justify-between lg:mt-10" data-aos="fade-up" data-aos-delay="80">
                    <img src="%BASE%/images/icons3d-white/checklist.webp" alt="" class="size-24 -ms-3 -mt-3 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-4deg]" loading="lazy">
                    <div>
                        <div class="text-xs text-inv-fg/50 mb-2">02</div>
                        <h3 class="text-2xl mb-3">Хяналтын дараалал</h3>
                        <p class="text-sm text-inv-fg/60">Ирсэн хувилбар бүр хянагчийн дараалалд орно. Нийтлэх, татгалзах, буцаан татах шийдвэр бүр аудитад бичигдэнэ.</p>
                    </div>
                </div>

                <div class="group rounded-3xl bg-accent text-on-accent p-6 md:min-h-90 min-h-60 flex flex-col justify-between" data-aos="fade-up" data-aos-delay="160">
                    <img src="%BASE%/images/icons3d-white/safe-package.webp" alt="" class="size-24 -ms-3 -mt-3 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-4deg]" loading="lazy">
                    <div>
                        <div class="text-xs text-on-accent/60 mb-2">03</div>
                        <h3 class="text-2xl mb-3">Гарын үсэгтэй каталог</h3>
                        <p class="text-sm text-on-accent/75">Каталогт Ed25519 түлхүүрээр гарын үсэг зурна. Суулгац бүр нийтийн түлхүүрийг нь тогтоож, шалгалт давахгүй каталогийг хүлээж авахгүй.</p>
                    </div>
                </div>

                <div class="group rounded-3xl bg-surface border border-fg/8 p-6 md:min-h-90 min-h-60 flex flex-col justify-between lg:mt-10" data-aos="fade-up" data-aos-delay="240">
                    <img src="%BASE%/images/icons3d-white/phone-download.webp" alt="" class="size-24 -ms-3 -mt-3 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-4deg]" loading="lazy">
                    <div>
                        <div class="text-xs text-muted mb-2">04</div>
                        <h3 class="text-2xl mb-3">Нэг товчоор суулгана</h3>
                        <p class="text-sm text-muted">Байгууллагын админ Nexus-ийнхээ Апп дэлгүүрээс суулгана; хамаарал болон хувилбарын шалгалт автоматаар хийгдэнэ.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Three Steps — light rhythm break -->
    <section id="steps" class="scroll-mt-24 px-4">
        <div class="max-w-330 mx-auto rounded-[32px] bg-inv text-inv-fg lg:p-16 md:p-10 p-7">
            <div class="flex md:flex-row flex-col md:items-end justify-between gap-6 mb-14">
                <div>
                    <div class="label mb-4">Гурван<span class="text-inv-fg/45!">алхам</span></div>
                    <h2 class="h2 text-inv-fg">Нийтлэлээс суулгалт хүртэл <span class="text-inv-fg/40">гурван алхам</span></h2>
                </div>
                <p class="text-inv-fg/55 md:max-w-xs">Апп бүр ижил замаар явна: нийтлэгч, хяналт, дараа нь таны Nexus.</p>
            </div>

            <div class="grid md:grid-cols-3 border-t border-inv-fg/12">
                <div class="pt-8 md:pe-8 pb-6 md:border-e border-b md:border-b-0 border-inv-fg/12" data-aos="fade-up">
                    <div class="flex items-center justify-between mb-8"><div class="text-[clamp(64px,8vw,120px)] font-medium tracking-[-0.05em] leading-none">01</div><img src="%BASE%/images/icons3d-white/folder-files.webp" alt="" class="size-20" loading="lazy"></div>
                    <h3 class="text-2xl text-inv-fg mb-2">Нийтлэгч</h3>
                    <p class="text-inv-fg/55">Manifest, хувилбар, тайлбар</p>
                </div>
                <div class="pt-8 md:px-8 pb-6 md:border-e border-b md:border-b-0 border-inv-fg/12" data-aos="fade-up" data-aos-delay="100">
                    <div class="flex items-center justify-between mb-8"><div class="text-[clamp(64px,8vw,120px)] font-medium tracking-[-0.05em] leading-none">02</div><img src="%BASE%/images/icons3d-white/user-profile.webp" alt="" class="size-20" loading="lazy"></div>
                    <h3 class="text-2xl text-inv-fg mb-2">Хяналт</h3>
                    <p class="text-inv-fg/55">Баталгаажсан нийтлэгч, хянагчийн шийдвэр</p>
                </div>
                <div class="pt-8 md:ps-8 pb-6" data-aos="fade-up" data-aos-delay="200">
                    <div class="flex items-center justify-between mb-8"><div class="text-[clamp(64px,8vw,120px)] font-medium tracking-[-0.05em] leading-none">03</div><img src="%BASE%/images/icons3d-white/gears.webp" alt="" class="size-20" loading="lazy"></div>
                    <h3 class="text-2xl text-inv-fg mb-2">Таны Nexus</h3>
                    <p class="text-inv-fg/55">Гарын үсэгтэй каталог, нэг товчоор суулгах</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Trust Section -->
    <?php include('./partials/trust-block.php'); ?>

    <!-- Call To Action Section -->
    <?php include('./partials/cta.php'); ?>

    <?php include('./partials/footer.php'); ?>

    <script>
        // Catalog category filter
        document.querySelectorAll('.catalog-filter').forEach((btn) => {
            btn.addEventListener('click', () => {
                const cat = btn.dataset.filter;
                document.querySelectorAll('.catalog-filter').forEach((b) => b.classList.toggle('is-active', b === btn));
                document.querySelectorAll('.catalog-card').forEach((card) => {
                    card.hidden = cat !== 'all' && card.dataset.cat !== cat;
                });
            });
        });
    </script>

</body>

</html>
