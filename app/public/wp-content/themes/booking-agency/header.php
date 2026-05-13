<?php
/*
 * Header Template
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<header class="site-header bg-white shadow sticky top-0 z-50">
    <div class="container mx-auto px-6 flex items-center justify-between py-6">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center space-x-2">
            <img class="w-16 h-10" src="<?php echo get_template_directory_uri(); ?>/assets/logo.png" alt="Logo">
        </a>
        <nav class="main-nav">
            <?php
            wp_nav_menu([
                'theme_location' => 'primary',
                'menu_class' => 'flex space-x-6 font-semibold',
                'container' => false,
            ]);
            ?>
        </nav>

        <nav class="main-nav">
            <?php
            wp_nav_menu([
                'theme_location' => 'primary',
                'menu_class' => 'flex space-x-6 font-semibold',
                'container' => false,
            ]);
            ?>
        </nav>
    </div>
</header>

