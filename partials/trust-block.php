<?php $trust = $site['trust']; ?>
<section id="trust" class="lg:py-40 py-24 scroll-mt-24">
    <div class="container">
        <div class="relative overflow-hidden rounded-[32px] bg-surface border border-fg/8 lg:p-16 md:p-10 p-7">
            <div class="absolute -top-40 -end-40 size-120 rounded-full glow-accent blur-3xl opacity-60 pointer-events-none"></div>

            <div class="relative grid lg:grid-cols-12 gap-12">
                <div class="lg:col-span-6">
                    <div class="label text-accent mb-4">Баталгаа<span>trust</span></div>
                    <h2 class="h2 mb-6"><?php echo $trust['heading'][0]; ?><span class="text-muted"><?php echo $trust['heading'][1]; ?></span></h2>
                    <p class="text-muted mb-10 max-w-lg"><?php echo $trust['text']; ?></p>

                    <div class="flex flex-wrap gap-2">
                        <?php foreach ($trust['pills'] as $pill) : ?>
                            <span class="pill"><?php echo $pill; ?></span>
                        <?php endforeach; ?>
                    </div>
                </div>

                <div class="lg:col-span-6 flex flex-col gap-2.5">
                    <?php foreach ($trust['chain'] as $i => [$icon, $label]) : ?>
                        <div class="flex items-center gap-4 h-16 ps-2.5 pe-4 rounded-2xl bg-surface-2" data-aos="fade-up" data-aos-delay="<?php echo $i * 80; ?>">
                            <span class="size-11 shrink-0 inline-flex items-center justify-center rounded-xl bg-bg border border-fg/8">
                                <img src="%BASE%<?php echo $icon; ?>" alt="" class="size-8 object-contain" loading="lazy">
                            </span>
                            <span class="flex-1 text-[15px] font-medium"><?php echo $label; ?></span>
                            <span class="text-xs text-muted"><?php echo sprintf('%02d', $i + 1); ?></span>
                        </div>
                    <?php endforeach; ?>
                    <?php $verify = $site['verify']; $tag = $verify['url'] ? 'a' : 'div'; ?>
                    <<?php echo $tag; ?><?php if ($verify['url']) : ?> href="<?php echo $verify['url']; ?>" target="_blank"<?php endif; ?> class="group flex items-center gap-4 h-16 ps-2.5 pe-4 rounded-2xl bg-accent text-on-accent" data-aos="fade-up" data-aos-delay="<?php echo count($trust['chain']) * 80; ?>">
                        <span class="size-11 shrink-0 inline-flex items-center justify-center rounded-xl bg-bg">
                            <img src="%BASE%<?php echo $verify['icon'] ?? '/images/icons3d-white/phone-qr.webp'; ?>" alt="" class="size-8 object-contain" loading="lazy">
                        </span>
                        <span class="flex-1 text-[15px] font-medium"><?php echo $verify['label']; ?></span>
                        <?php if ($verify['url']) : ?>
                            <i class="iconify tabler--arrow-up-right size-5 transition-transform group-hover:rotate-45"></i>
                        <?php else : ?>
                            <i class="iconify tabler--circle-check-filled size-5"></i>
                        <?php endif; ?>
                    </<?php echo $tag; ?>>

                    <div class="grid sm:grid-cols-2 gap-2.5 mt-6">
                        <?php foreach ($trust['points'] as $point) : ?>
                            <div class="flex items-start gap-3 p-4 rounded-2xl border border-fg/8">
                                <i class="iconify tabler--circle-check-filled size-5 text-accent shrink-0 mt-0.5"></i>
                                <p class="text-sm"><?php echo $point; ?></p>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
