<?php
$home = $site['base'] . '/';
$links = $site['nav'];
?>
<!-- Navbar -->
<header class="fixed top-0 inset-x-0 z-140 md:pt-5 pt-3 px-4">
    <div class="max-w-260 mx-auto">
        <div class="flex items-center justify-between gap-4 py-2.5 ps-5 pe-2.5 rounded-full border border-fg/10 bg-surface-2/80 backdrop-blur-xl">
            <a href="<?php echo $home; ?>" class="flex items-center gap-2.5 shrink-0">
                <?php $logo_class = 'h-7'; include('./partials/logo.php'); ?>
                <span class="text-base font-medium tracking-[-0.02em] text-fg"><?php echo $site['wordmark'][0]; ?><span class="text-muted"><?php echo $site['wordmark'][1]; ?></span></span>
            </a>

            <nav id="navbar" class="hidden lg:flex items-center gap-1">
                <?php foreach ($links as [$href, $label]) : ?>
                    <a href="<?php echo $href; ?>" class="py-2 px-4 rounded-full text-sm text-muted transition-colors hover:text-fg"><?php echo $label; ?></a>
                <?php endforeach; ?>
            </nav>

            <div class="flex items-center gap-2">
                <button type="button" data-theme-toggle aria-label="Light / dark горим солих" class="inline-flex size-11 items-center justify-center rounded-full border border-fg/15 text-fg transition-colors hover:bg-fg/5">
                    <i class="iconify tabler--moon size-5 theme-icon-dark"></i>
                    <i class="iconify tabler--sun size-5 theme-icon-light"></i>
                </button>

                <a href="<?php echo $site['login']; ?>" class="md:inline-flex hidden items-center gap-2 h-11 px-5 rounded-full bg-accent text-on-accent text-sm font-medium">
                    Нэвтрэх <i class="iconify tabler--arrow-up-right size-4"></i>
                </a>

                <button type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="mobile-menu" data-hs-overlay="#mobile-menu" class="lg:hidden inline-flex size-11 items-center justify-center rounded-full border border-fg/15 text-fg">
                    <i class="iconify tabler--menu-2 size-5"></i>
                </button>
            </div>
        </div>
    </div>

    <div id="mobile-menu" class="hs-overlay hs-overlay-open:translate-y-0 hs-overlay-open:opacity-100 opacity-0 hs-overlay-open:top-auto [--body-scroll:true] fixed inset-x-0 top-0 z-140 -translate-y-full transform transition-all duration-300 lg:hidden px-4" role="dialog" tabindex="-1" aria-labelledby="mobile-menu-label">
        <div class="max-w-260 mx-auto mt-2 p-2 rounded-3xl border border-fg/10 bg-surface-2">
            <div class="flex flex-col">
                <?php foreach ($links as [$href, $label]) : ?>
                    <a href="<?php echo $href; ?>" class="py-3.5 px-4 rounded-2xl text-fg hover:bg-fg/5"><?php echo $label; ?></a>
                <?php endforeach; ?>
                <a href="<?php echo $site['login']; ?>" class="mt-2 h-13 inline-flex items-center justify-center rounded-2xl bg-accent text-on-accent font-medium">Нэвтрэх</a>
            </div>
        </div>
    </div>
</header>
