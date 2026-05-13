<?php
/**
 * Plugin Name: Booking Agency Blocks
 * Description: Thêm block Gutenberg cho trang Home Đại Lý, cho phép chỉnh sửa nội dung động trên editor.
 * Version: 1.0
 * Author: Booking Agency
 */

// Đăng ký block
add_action('init', function() {
    // Đăng ký script cho block
    wp_register_script(
        'booking-agency-blocks',
        plugins_url('blocks.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor'),
        filemtime(plugin_dir_path(__FILE__) . 'blocks.js')
    );

    // Đăng ký block
    register_block_type('booking-agency/home-feature', array(
        'editor_script' => 'booking-agency-blocks',
        'render_callback' => function($attributes) {
            $title = esc_html($attributes['title'] ?? '');
            $desc = esc_html($attributes['desc'] ?? '');
            return "<div class='feature-block bg-white rounded-lg shadow p-8 text-center'><h2 class='text-xl font-bold mb-2'>{$title}</h2><p>{$desc}</p></div>";
        },
        'attributes' => array(
            'title' => array(
                'type' => 'string',
                'default' => ''
            ),
            'desc' => array(
                'type' => 'string',
                'default' => ''
            ),
        ),
    ));
});
