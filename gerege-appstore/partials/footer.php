<?php $home = $site['base'] . '/'; ?>
<!-- Footer -->
<footer id="footer" class="relative overflow-hidden border-t border-fg/8 pt-20">
    <div class="container">
        <div class="flex flex-col items-center text-center mb-16">
            <?php $logo_class = 'h-14 mb-5'; include('./partials/logo.php'); ?>
            <p class="text-muted"><?php echo $site['tagline']; ?></p>
        </div>

        <div class="grid md:grid-cols-3 gap-10 pb-12 border-b border-fg/8">
            <div>
                <div class="label mb-5">Цэс<span>menu</span></div>
                <div class="space-y-3 *:block *:text-muted *:hover:text-fg *:transition-colors">
                    <?php foreach ($site['nav'] as [$href, $label]) : ?>
                        <?php if (!str_ends_with($href, '/trust')) : ?>
                            <a href="<?php echo $href; ?>"><?php echo $label; ?></a>
                        <?php endif; ?>
                    <?php endforeach; ?>
                </div>
            </div>

            <div class="md:text-center">
                <div class="label mb-5">Платформ<span>platform</span></div>
                <div class="space-y-3 *:block *:text-muted *:hover:text-fg *:transition-colors">
                    <a href="<?php echo $site['base']; ?>/trust">Аюулгүй байдал</a>
                    <?php if ($site['verify']['url']) : ?>
                        <a href="<?php echo $site['verify']['url']; ?>" target="_blank">Шалгах</a>
                    <?php endif; ?>
                    <a href="<?php echo $site['login']; ?>">Нэвтрэх</a>
                </div>
            </div>

            <div class="md:text-end">
                <div class="label mb-5">Gerege<span>systems</span></div>
                <p class="text-muted">Gerege Nexus дээр суурилсан</p>
            </div>
        </div>

        <div class="flex md:flex-row flex-col justify-between gap-2 py-6 text-xs text-muted">
            <div>© <?php echo date('Y'); ?> Gerege Systems · <?php echo $site['name']; ?></div>
            <div><span>BUILT ON</span> <span class="text-fg font-bold">GEREGE NEXUS</span></div>
        </div>
    </div>

    <div class="text-center -mb-[6vw] pointer-events-none" aria-hidden="true">
        <div class="wordmark bg-linear-to-b from-accent/70 via-accent/20 to-transparent bg-clip-text text-transparent">gerege</div>
    </div>
</footer>
