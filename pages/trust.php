<?php $site_key = $site_key ?? 'contract'; ?>
<!DOCTYPE html>
<html lang="mn" data-site="<?php echo $site_key; ?>">

<head>
    <?php $title = 'Аюулгүй байдал'; include('./partials/title-meta.php'); ?>

    <?php include('./partials/head-css.php'); ?>
</head>

<body>

    <?php include('./partials/navbar.php'); ?>

    <?php $hero = $site['trust_hero']; ?>
    <!-- Hero Section -->
    <section class="relative overflow-hidden lg:pt-44 pt-32">
        <div class="absolute inset-0 glow-top -z-1"></div>

        <div class="container">
            <div class="hidden md:flex justify-between mb-14">
                <div class="label"><?php echo $hero['labels'][0][0]; ?><span><?php echo $hero['labels'][0][1]; ?></span></div>
                <div class="label text-center"><?php echo $hero['labels'][1][0]; ?><span><?php echo $hero['labels'][1][1]; ?></span></div>
                <div class="label text-end"><?php echo $hero['labels'][2][0]; ?><span><?php echo $hero['labels'][2][1]; ?></span></div>
            </div>

            <!-- Lock stage -->
            <div class="relative mx-auto mb-12 size-[min(86vw,480px)]" aria-hidden="true" data-aos="zoom-in">
                <div class="absolute inset-[18%] rounded-full glow-accent blur-2xl"></div>
                <div class="absolute inset-0 rounded-full border border-dashed border-fg/15 spin-slow"></div>
                <div class="absolute inset-[14%] rounded-full border border-fg/8"></div>
                <div class="absolute inset-x-0 top-1/2 h-px dashed-h"></div>
                <div class="absolute inset-y-0 start-1/2 w-px dashed-v"></div>

                <img src="%BASE%/images/home/lock-hero.webp" alt="" class="absolute inset-[12%] size-[76%] object-contain float hero-icon-shadow">

                <img src="%BASE%/images/icons3d-white/safe.webp" alt="" class="absolute top-[4%] start-[6%] md:size-22 size-16 float [animation-delay:-1.5s]">
                <img src="%BASE%/images/icons3d-white/phone-face-id.webp" alt="" class="absolute top-[2%] end-[8%] md:size-22 size-16 float [animation-delay:-3s]">
                <img src="%BASE%/images/icons3d-white/phone-qr.webp" alt="" class="absolute bottom-[6%] start-[4%] md:size-22 size-16 float [animation-delay:-4.5s]">
                <img src="%BASE%/images/icons3d-white/safe-package.webp" alt="" class="absolute bottom-[4%] end-[6%] md:size-22 size-16 float [animation-delay:-2s]">

                <span class="pill absolute top-1/2 -translate-y-1/2 -start-2 bg-bg">PIN2</span>
                <span class="pill absolute top-1/2 -translate-y-1/2 -end-2 bg-bg">PAdES-LT</span>
            </div>

            <div class="text-center" data-aos="fade-up">
                <div class="flex flex-wrap justify-center gap-2 mb-7">
                    <span class="pill"><span class="size-1.5 rounded-full bg-accent"></span> Баталгаа</span>
                </div>

                <h1 class="display max-w-4xl mx-auto mb-6"><?php echo $hero['heading'][0]; ?><span class="text-muted"><?php echo $hero['heading'][1]; ?></span></h1>

                <p class="text-muted md:text-lg max-w-xl mx-auto"><?php echo $hero['text']; ?></p>
            </div>
        </div>

        <div class="relative mt-10 -mb-[4vw] text-center pointer-events-none" aria-hidden="true">
            <div class="wordmark bg-linear-to-b from-fg/90 to-fg/0 bg-clip-text text-transparent">trust</div>
        </div>
    </section>

    <?php include('./partials/trust-block.php'); ?>

    <?php include('./partials/cta.php'); ?>

    <?php include('./partials/footer.php'); ?>

</body>

</html>
