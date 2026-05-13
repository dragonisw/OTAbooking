<?php
// Enqueue Tailwind CSS
add_action('wp_enqueue_scripts', function() {
    wp_enqueue_style('tailwindcss', get_template_directory_uri() . '/dist/style.css', [], null);
});


function child_theme_styles() {
    wp_enqueue_style('child-style', get_stylesheet_uri());
}
add_action('wp_enqueue_scripts', 'child_theme_styles');

function add_tailwind() {
    wp_enqueue_script('tailwind', 'https://cdn.tailwindcss.com', [], null, false);
}
add_action('wp_enqueue_scripts', 'add_tailwind');

// Đăng ký template Home Đại Lý nếu cần
function booking_agency_add_home_template( $templates ) {
    $templates['page-home-dai-ly.php'] = 'Home Đại Lý';
    return $templates;
}
add_filter( 'theme_page_templates', 'booking_agency_add_home_template' );

// Đăng ký vị trí menu
add_action('after_setup_theme', function() {
    register_nav_menus([
        'primary' => __('Menu chính', 'booking-agency'),
    ]);
});
