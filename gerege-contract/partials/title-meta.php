<?php include_once('./configs/sites.php'); ?>
<title><?php echo ($title); ?> | <?php echo $site['name']; ?> — <?php echo rtrim($site['tagline'], '.'); ?></title>

<!-- Meta Tags -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="title" content="<?php echo $site['name']; ?> — <?php echo rtrim($site['tagline'], '.'); ?>">
<meta name="description" content="<?php echo $site['description']; ?>">
<meta name="keywords" content="<?php echo $site['keywords']; ?>">
<meta name="author" content="Gerege Systems">
<meta name="robots" content="index, follow">

<!-- Favicon -->
<link rel="shortcut icon" href="%BASE%<?php echo $site['logo']; ?>">
