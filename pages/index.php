<?php $site_key = 'notary'; ?>
<!DOCTYPE html>
<html lang="mn" data-site="notary">

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
                <div class="label">Цахим<span>нотариат</span></div>
                <div class="label text-center">eID<span>Mongolia</span></div>
                <div class="label text-end">Gerege<span>Systems</span></div>
            </div>

            <div class="grid lg:grid-cols-12 items-center gap-10">
                <div class="lg:col-span-6" data-aos="fade-up">
                    <div class="flex flex-wrap gap-2 mb-7">
                        <span class="pill"><span class="size-1.5 rounded-full bg-accent"></span> eID Mongolia</span>
                        <span class="pill">PAdES</span>
                        <span class="pill">Бүртгэлийн дугаар</span>
                    </div>

                    <h1 class="display text-[clamp(40px,4.4vw,64px)] mb-6">Нотариатын <span class="text-accent">цахим</span> платформ. <span class="text-muted">Акт бүр бүртгэлийн дугаар, шалгах кодтой.</span></h1>

                    <p class="text-muted md:text-lg max-w-xl mb-9">e-Notary — нотариатын үйлчилгээг цахимаар авах платформ. eID-ээр нэвтэрч хүсэлтээ илгээж, баримтаа хавсаргаж, нотариатчийн бэлтгэсэн актад утсаараа гарын үсэг зурна.</p>

                    <div class="flex flex-wrap items-center gap-3">
                        <a href="https://enotary.mn/login" class="btn-accent">Эхлэх <i class="iconify tabler--arrow-up-right size-5"></i></a>
                        <a href="#how" class="btn-ghost">Хэрхэн ажилладаг</a>
                    </div>
                </div>

                <div class="lg:col-span-6 relative flex justify-center" data-aos="fade-up" data-aos-delay="150">
                    <!-- construction lines -->
                    <div class="absolute inset-y-[-12%] start-[10%] w-px dashed-v"></div>
                    <div class="absolute inset-y-[-12%] end-[10%] w-px dashed-v"></div>
                    <div class="absolute inset-x-[-6%] top-[14%] h-px dashed-h"></div>
                    <div class="absolute inset-[12%] rounded-full glow-accent blur-2xl"></div>

                    <img src="%BASE%/images/home/notary-laptop.webp" alt="e-Notary — нотариатчийн хяналтын самбар" class="relative w-full max-w-150 h-auto">

                    <!-- floating glass icons -->
                    <img src="%BASE%/images/icons3d-white/checkmark.webp" alt="" aria-hidden="true" class="absolute start-0 top-[2%] md:size-18 size-12 float [animation-delay:-2s]">
                    <img src="%BASE%/images/icons3d-white/phone-face-id.webp" alt="" aria-hidden="true" class="absolute end-0 bottom-[8%] md:size-18 size-12 float [animation-delay:-4s]">
                </div>
            </div>
        </div>

        <!-- Giant cropped wordmark -->
        <div class="relative mt-6 -mb-[4vw] text-center pointer-events-none" aria-hidden="true">
            <div class="wordmark bg-linear-to-b from-fg/90 to-fg/0 bg-clip-text text-transparent">notary</div>
        </div>
    </section>

    <!-- Services -->
    <section class="relative lg:pt-30 pt-20">
        <div class="container">
            <div class="flex md:flex-row flex-col md:items-end justify-between gap-6 mb-10">
                <div>
                    <div class="label text-accent mb-4">Онлайн<span>хүсэлт</span></div>
                    <h2 class="h2 max-w-3xl">Гэрээ, итгэмжлэл, <span class="text-muted">хуулбар, орчуулга</span></h2>
                </div>
                <p class="text-muted md:max-w-sm">Баримтаа хавсаргаад нотариатын газраа сонгоно.</p>
            </div>

            <div class="grid lg:grid-cols-4 grid-cols-2 gap-4">
                <div class="group rounded-3xl bg-surface border border-fg/8 p-6 flex flex-col items-start gap-10" data-aos="fade-up">
                    <img src="%BASE%/images/icons3d-white/task-clipboard.webp" alt="" class="size-20 -ms-2 transition-transform duration-500 group-hover:-translate-y-1" loading="lazy">
                    <h3 class="text-2xl">Гэрээ</h3>
                </div>
                <div class="group rounded-3xl bg-surface border border-fg/8 p-6 flex flex-col items-start gap-10" data-aos="fade-up" data-aos-delay="80">
                    <img src="%BASE%/images/icons3d-white/checklist.webp" alt="" class="size-20 -ms-2 transition-transform duration-500 group-hover:-translate-y-1" loading="lazy">
                    <h3 class="text-2xl">Итгэмжлэл</h3>
                </div>
                <div class="group rounded-3xl bg-surface border border-fg/8 p-6 flex flex-col items-start gap-10" data-aos="fade-up" data-aos-delay="160">
                    <img src="%BASE%/images/icons3d-white/folder-files.webp" alt="" class="size-20 -ms-2 transition-transform duration-500 group-hover:-translate-y-1" loading="lazy">
                    <h3 class="text-2xl">Хуулбар</h3>
                </div>
                <div class="group rounded-3xl bg-accent text-on-accent p-6 flex flex-col items-start gap-10" data-aos="fade-up" data-aos-delay="240">
                    <img src="%BASE%/images/icons3d-white/globe.webp" alt="" class="size-20 -ms-2 transition-transform duration-500 group-hover:-translate-y-1" loading="lazy">
                    <h3 class="text-2xl">Орчуулга</h3>
                </div>
            </div>
        </div>
    </section>

    <!-- How It Works — step cards -->
    <section id="how" class="lg:py-40 py-24 scroll-mt-24">
        <div class="container">
            <div class="grid lg:grid-cols-12 gap-6 mb-12">
                <div class="lg:col-span-7">
                    <div class="label text-accent mb-4">Хэрхэн<span>ажилладаг</span></div>
                    <h2 class="h2">Хүсэлтээс бүртгэлтэй акт <span class="text-muted">хүртэл</span></h2>
                </div>
                <p class="lg:col-span-4 lg:col-start-9 self-end text-muted">Иргэн хүсэлтээ илгээж, нотариатч актыг бэлтгэнэ; талууд бүгд eID-ээр гарын үсэг зурж, акт нотариатын бүртгэлд орно.</p>
            </div>

            <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                <div class="group rounded-3xl bg-surface border border-fg/8 p-6 md:min-h-90 min-h-60 flex flex-col justify-between" data-aos="fade-up">
                    <img src="%BASE%/images/icons3d-white/paper-plane.webp" alt="" class="size-24 -ms-3 -mt-3 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-4deg]" loading="lazy">
                    <div>
                        <div class="text-xs text-muted mb-2">01</div>
                        <h3 class="text-2xl mb-3">Онлайн хүсэлт</h3>
                        <p class="text-sm text-muted">Гэрээ, итгэмжлэл, хуулбар, орчуулга — баримтаа хавсаргаад нотариатын газраа сонгоно.</p>
                    </div>
                </div>

                <div class="group rounded-3xl bg-inv text-inv-fg p-6 md:min-h-90 min-h-60 flex flex-col justify-between lg:mt-10" data-aos="fade-up" data-aos-delay="80">
                    <img src="%BASE%/images/icons3d-white/phone-face-id.webp" alt="" class="size-24 -ms-3 -mt-3 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-4deg]" loading="lazy">
                    <div>
                        <div class="text-xs text-inv-fg/50 mb-2">02</div>
                        <h3 class="text-2xl mb-3">Талууд eID-ээр</h3>
                        <p class="text-sm text-inv-fg/60">Тал бүр өөрийн eID-ээр зөвшөөрч, ээлжээрээ утсан дээрээ гарын үсэг зурна.</p>
                    </div>
                </div>

                <div class="group rounded-3xl bg-accent-2 text-on-accent-2 p-6 md:min-h-90 min-h-60 flex flex-col justify-between" data-aos="fade-up" data-aos-delay="160">
                    <img src="%BASE%/images/icons3d-white/video-player.webp" alt="" class="size-24 -ms-3 -mt-3 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-4deg]" loading="lazy">
                    <div>
                        <div class="text-xs text-on-accent-2/60 mb-2">03</div>
                        <h3 class="text-2xl mb-3">Зайн гэрчлэлт</h3>
                        <p class="text-sm text-on-accent-2/75">Нотариатч талуудыг платформын видео дуудлагаар таньж тэмдэглэнэ.</p>
                    </div>
                </div>

                <div class="group rounded-3xl bg-surface border border-fg/8 p-6 md:min-h-90 min-h-60 flex flex-col justify-between lg:mt-10" data-aos="fade-up" data-aos-delay="240">
                    <img src="%BASE%/images/icons3d-white/folder-chart.webp" alt="" class="size-24 -ms-3 -mt-3 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-4deg]" loading="lazy">
                    <div>
                        <div class="text-xs text-muted mb-2">04</div>
                        <h3 class="text-2xl mb-3">Нотариатын бүртгэл</h3>
                        <p class="text-sm text-muted">Акт бүр газрын бүртгэлд дугаартай орж, хэвлэх, CSV, жилийн тайлантай.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Three Steps — light rhythm break -->
    <section id="steps" class="scroll-mt-24 px-4">
        <div class="max-w-330 mx-auto rounded-[32px] bg-inv text-inv-fg lg:p-16 md:p-10 p-7" style="background-image: radial-gradient(55% 110% at 100% 50%, color-mix(in srgb, var(--accent-2) 32%, transparent), transparent 75%), linear-gradient(90deg, transparent 35%, color-mix(in srgb, var(--accent-2) 12%, transparent))">
            <div class="flex md:flex-row flex-col md:items-end justify-between gap-6 mb-14">
                <div>
                    <div class="label mb-4">Гурван<span class="text-inv-fg/45!">алхам</span></div>
                    <h2 class="h2 text-inv-fg">Хүсэлт, нотариатч, <span class="text-inv-fg/40">гарын үсэг</span></h2>
                </div>
                <p class="text-inv-fg/55">Акт бүр ижил замаар явна.</p>
            </div>

            <div class="grid md:grid-cols-3 border-t border-inv-fg/12">
                <div class="pt-8 md:pe-8 pb-6 md:border-e border-b md:border-b-0 border-inv-fg/12" data-aos="fade-up">
                    <div class="flex items-center justify-between mb-8"><div class="text-[clamp(64px,8vw,120px)] font-medium tracking-[-0.05em] leading-none">01</div><img src="%BASE%/images/icons3d-white/folder-files.webp" alt="" class="size-20" loading="lazy"></div>
                    <h3 class="text-2xl text-inv-fg mb-2">Хүсэлт</h3>
                    <p class="text-inv-fg/55">Баримтаа хавсаргаж газраа сонгоно</p>
                </div>
                <div class="pt-8 md:px-8 pb-6 md:border-e border-b md:border-b-0 border-inv-fg/12" data-aos="fade-up" data-aos-delay="100">
                    <div class="flex items-center justify-between mb-8"><div class="text-[clamp(64px,8vw,120px)] font-medium tracking-[-0.05em] leading-none">02</div><img src="%BASE%/images/icons3d-white/user-profile.webp" alt="" class="size-20" loading="lazy"></div>
                    <h3 class="text-2xl text-inv-fg mb-2">Нотариатч</h3>
                    <p class="text-inv-fg/55">Талуудыг таньж актыг бэлтгэнэ</p>
                </div>
                <div class="pt-8 md:ps-8 pb-6" data-aos="fade-up" data-aos-delay="200">
                    <div class="flex items-center justify-between mb-8"><div class="text-[clamp(64px,8vw,120px)] font-medium tracking-[-0.05em] leading-none">03</div><img src="%BASE%/images/icons3d-white/checkmark.webp" alt="" class="size-20" loading="lazy"></div>
                    <h3 class="text-2xl text-inv-fg mb-2">Гарын үсэг</h3>
                    <p class="text-inv-fg/55">Талууд, дараа нь нотариатч eID-ээр зурна</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Trust Section -->
    <?php include('./partials/trust-block.php'); ?>

    <!-- Call To Action Section -->
    <?php include('./partials/cta.php'); ?>

    <?php include('./partials/footer.php'); ?>

</body>

</html>
