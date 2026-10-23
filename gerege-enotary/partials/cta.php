<?php [$before, $accent, $after] = $site['cta']['heading']; ?>
<section class="relative lg:pb-30 pb-20 overflow-hidden">
    <div class="absolute inset-x-0 bottom-0 h-[70%] -z-1" style="background: radial-gradient(50% 60% at 50% 100%, color-mix(in srgb, var(--accent) 20%, transparent), transparent 70%)"></div>

    <div class="container text-center">
        <img src="%BASE%/images/icons3d-white/rocket.webp" alt="" class="size-28 mx-auto mb-6" loading="lazy">
        <div class="label mb-6">Эхлэх<span>start</span></div>
        <h2 class="display max-w-4xl mx-auto mb-6"><?php echo $before; ?><span class="text-accent"><?php echo $accent; ?></span><?php echo $after; ?></h2>
        <p class="text-muted md:text-lg mb-10"><?php echo $site['cta']['text']; ?></p>

        <a href="<?php echo $site['login']; ?>" class="btn-accent">Эхлэх <i class="iconify tabler--arrow-up-right size-5"></i></a>
    </div>
</section>
