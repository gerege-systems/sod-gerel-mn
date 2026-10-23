<!DOCTYPE html>
<html lang="mn" data-site="contract">

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
                <div class="label">Цахим<span>гэрээ</span></div>
                <div class="label text-center">eID<span>Mongolia</span></div>
                <div class="label text-end">Gerege<span>Systems</span></div>
            </div>

            <div class="grid lg:grid-cols-12 items-center gap-10">
                <div class="lg:col-span-7" data-aos="fade-up">
                    <div class="flex flex-wrap gap-2 mb-7">
                        <span class="pill"><span class="size-1.5 rounded-full bg-accent"></span> eID Mongolia</span>
                        <span class="pill">PAdES</span>
                        <span class="pill">PIN2</span>
                    </div>

                    <h1 class="display mb-6">Гэрээгээ <span class="text-accent whitespace-nowrap">eID-ээр</span> байгуул. <span class="text-muted">Уулзах, хэвлэх, скан хийх шаардлагагүй.</span></h1>

                    <p class="text-muted md:text-lg max-w-xl mb-9">Gerege Contract — загвараасаа гэрээ үүсгээд талуудаа регистрээр нэрлэнэ. Тал бүр eID Mongolia аппаараа ээлжээрээ тоон гарын үсэг зурна.</p>

                    <div class="flex flex-wrap items-center gap-3">
                        <a href="https://contract.mn/login" class="btn-accent">Эхлэх <i class="iconify tabler--arrow-up-right size-5"></i></a>
                        <a href="#how" class="btn-ghost">Хэрхэн ажилладаг</a>
                    </div>
                </div>

                <div class="lg:col-span-5 relative flex justify-center" data-aos="fade-up" data-aos-delay="150">
                    <!-- construction lines -->
                    <div class="absolute inset-y-[-10%] start-[18%] w-px dashed-v"></div>
                    <div class="absolute inset-y-[-10%] end-[18%] w-px dashed-v"></div>
                    <div class="absolute inset-x-[-10%] top-[22%] h-px dashed-h"></div>
                    <div class="absolute inset-[8%] rounded-full glow-accent blur-2xl"></div>

                    <img src="%BASE%/images/home/phone-hand.png" alt="eID Mongolia апп — найдвартай хамгаалалт" class="relative lg:max-h-150 max-h-105 w-auto">
                </div>
            </div>
        </div>

        <!-- Giant cropped wordmark -->
        <div class="relative mt-6 -mb-[4vw] text-center pointer-events-none" aria-hidden="true">
            <div class="wordmark bg-linear-to-b from-fg/90 to-fg/0 bg-clip-text text-transparent">contract</div>
        </div>
    </section>

    <!-- Problem / Solution -->
    <section class="relative lg:pt-30 pt-20">
        <div class="container">
            <div class="flex items-end justify-between gap-6 mb-10">
                <h2 class="h2 max-w-3xl">Гэрээ байгуулах <span class="text-muted">хамгийн энгийн арга</span></h2>
                <div class="label text-end hidden md:block">Асуудал<span>шийдэл</span></div>
            </div>

            <div class="grid md:grid-cols-2 gap-4">
                <div class="rounded-3xl bg-surface border border-fg/8 lg:p-10 p-7 min-h-70 flex flex-col justify-between" data-aos="fade-up">
                    <div class="flex items-start justify-between gap-4"><div class="label text-muted">Өмнө нь</div><img src="%BASE%/images/icons3d-white/folder-files.webp" alt="" class="size-20 -mt-2 -me-2 opacity-90" loading="lazy"></div>
                    <div>
                        <h3 class="text-3xl mb-3">Уулзах, хэвлэх, скан хийх</h3>
                        <p class="text-muted">Гэрээ бүрт талууд биечлэн уулзаж, цаасаар гарын үсэг зурж, дахин скан хийдэг.</p>
                    </div>
                </div>

                <div class="rounded-3xl bg-accent text-on-accent lg:p-10 p-7 min-h-70 flex flex-col justify-between" data-aos="fade-up" data-aos-delay="100">
                    <div class="flex items-start justify-between gap-4"><div class="label">Gerege Contract</div><img src="%BASE%/images/icons3d-white/phone-face-id.webp" alt="" class="size-20 -mt-2 -me-2" loading="lazy"></div>
                    <div>
                        <h3 class="text-3xl mb-3">Тал бүр утаснаасаа зурна</h3>
                        <p class="text-on-accent/75">Тал бүр eID Mongolia аппаараа ээлжээрээ тоон гарын үсэг зурна — хуулийн хүчинтэй (PAdES).</p>
                    </div>
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
                    <h2 class="h2">Загвараас гарын үсэг хүртэл <span class="text-muted">нэг урсгал</span></h2>
                </div>
                <p class="lg:col-span-4 lg:col-start-9 self-end text-muted">Гэрээ бүр нэг PDF: талууд дарааллаар нь гарын үсэг зурж, гарын үсэг бүр өмнөхийнхөө дээр давхарлагдана.</p>
            </div>

            <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-4">
                <div class="group rounded-3xl bg-surface border border-fg/8 p-6 md:min-h-90 min-h-60 flex flex-col justify-between" data-aos="fade-up">
                    <img src="%BASE%/images/icons3d-white/task-clipboard.webp" alt="" class="size-24 -ms-3 -mt-3 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-4deg]" loading="lazy">
                    <div>
                        <div class="text-xs text-muted mb-2">01</div>
                        <h3 class="text-2xl mb-3">Word загвар</h3>
                        <p class="text-sm text-muted">Өөрийн .docx загварт талбар (давхар угалзан хаалтанд) бичээд оруулна — гэрээ бүрт бөглөөд PDF болгоно, формат нь хэвээр.</p>
                    </div>
                </div>

                <div class="group rounded-3xl bg-inv text-inv-fg p-6 md:min-h-90 min-h-60 flex flex-col justify-between lg:mt-10" data-aos="fade-up" data-aos-delay="80">
                    <img src="%BASE%/images/icons3d-white/user-profile.webp" alt="" class="size-24 -ms-3 -mt-3 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-4deg]" loading="lazy">
                    <div>
                        <div class="text-xs text-inv-fg/50 mb-2">02</div>
                        <h3 class="text-2xl mb-3">Талуудыг eID-ээр таних</h3>
                        <p class="text-sm text-inv-fg/60">Регистрийг оруулахад тэр хүний утас руу eID хүсэлт очиж, баталгаажсан нэр нь гэрээнд орно.</p>
                    </div>
                </div>

                <div class="group rounded-3xl bg-accent text-on-accent p-6 md:min-h-90 min-h-60 flex flex-col justify-between" data-aos="fade-up" data-aos-delay="160">
                    <img src="%BASE%/images/icons3d-white/paper-plane.webp" alt="" class="size-24 -ms-3 -mt-3 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-4deg]" loading="lazy">
                    <div>
                        <div class="text-xs text-on-accent/60 mb-2">03</div>
                        <h3 class="text-2xl mb-3">Хүлээгдэж буй гарын үсэг</h3>
                        <p class="text-sm text-on-accent/75">Хүсэлт тал бүрийн eID апп руу ээлжээрээ очно. Нэг нь зурмагц дараагийнх руу автоматаар илгээгдэнэ.</p>
                    </div>
                </div>

                <div class="group rounded-3xl bg-surface border border-fg/8 p-6 md:min-h-90 min-h-60 flex flex-col justify-between lg:mt-10" data-aos="fade-up" data-aos-delay="240">
                    <img src="%BASE%/images/icons3d-white/hourglass.webp" alt="" class="size-24 -ms-3 -mt-3 transition-transform duration-500 group-hover:-translate-y-1 group-hover:rotate-[-4deg]" loading="lazy">
                    <div>
                        <div class="text-xs text-muted mb-2">04</div>
                        <h3 class="text-2xl mb-3">Хугацаа ба загвар бүртгэл</h3>
                        <p class="text-sm text-muted">Загвар бүр хэдэн тал оролцох, хэдэн хоногт зурах ёстойг бүртгэнэ; хугацаа хэтэрвэл гэрээ хаагдана.</p>
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
                    <h2 class="h2 text-inv-fg">Загвар, талууд, <span class="text-inv-fg/40">гарын үсэг</span></h2>
                </div>
                <p class="text-inv-fg/55">Гэрээ бүр ижил замаар явна.</p>
            </div>

            <div class="grid md:grid-cols-3 border-t border-inv-fg/12">
                <div class="pt-8 md:pe-8 pb-6 md:border-e border-b md:border-b-0 border-inv-fg/12" data-aos="fade-up">
                    <div class="flex items-center justify-between mb-8"><div class="text-[clamp(64px,8vw,120px)] font-medium tracking-[-0.05em] leading-none">01</div><img src="%BASE%/images/icons3d-white/folder-files.webp" alt="" class="size-20" loading="lazy"></div>
                    <h3 class="text-2xl text-inv-fg mb-2">Загвар</h3>
                    <p class="text-inv-fg/55">Word файлаа оруулж талбаруудаа бөглөнө</p>
                </div>
                <div class="pt-8 md:px-8 pb-6 md:border-e border-b md:border-b-0 border-inv-fg/12" data-aos="fade-up" data-aos-delay="100">
                    <div class="flex items-center justify-between mb-8"><div class="text-[clamp(64px,8vw,120px)] font-medium tracking-[-0.05em] leading-none">02</div><img src="%BASE%/images/icons3d-white/phone-face-id.webp" alt="" class="size-20" loading="lazy"></div>
                    <h3 class="text-2xl text-inv-fg mb-2">Талууд</h3>
                    <p class="text-inv-fg/55">Регистрээр нэрлэж eID-ээр баталгаажуулна</p>
                </div>
                <div class="pt-8 md:ps-8 pb-6" data-aos="fade-up" data-aos-delay="200">
                    <div class="flex items-center justify-between mb-8"><div class="text-[clamp(64px,8vw,120px)] font-medium tracking-[-0.05em] leading-none">03</div><img src="%BASE%/images/icons3d-white/checkmark.webp" alt="" class="size-20" loading="lazy"></div>
                    <h3 class="text-2xl text-inv-fg mb-2">Гарын үсэг</h3>
                    <p class="text-inv-fg/55">Тал бүр eID аппаараа PIN2-оор зурна</p>
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
