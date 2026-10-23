<?php
// Usage: $logo_class = 'h-7'; include('./partials/logo.php');
// logo_tint: the mark is painted with --accent (matches buttons in light + dark).
// logo_mono: the mark turns white in dark mode.
?>
<?php if (!empty($site['logo_tint'])) : ?>
    <span role="img" aria-label="<?php echo $site['name']; ?>" class="logo-tint <?php echo $logo_class; ?>" style="--logo: url('%BASE%<?php echo $site['logo']; ?>')"></span>
<?php else : ?>
    <img src="%BASE%<?php echo $site['logo']; ?>" alt="<?php echo $site['name']; ?>" class="<?php echo $logo_class; ?><?php echo $site['logo_mono'] ? ' logo-mono' : ''; ?>">
<?php endif; ?>
