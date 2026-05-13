<?php
/**
 * Recommended way to include parent theme styles.
 * (Please see http://codex.wordpress.org/Child_Themes#How_to_Create_a_Child_Theme)
 *
 */

add_action('wp_enqueue_scripts', 'bookingroom_style');
function bookingroom_style()
{
    wp_enqueue_style('parent-style', get_template_directory_uri() . '/style.css');
    wp_enqueue_style('child-style', get_stylesheet_directory_uri() . '/style.css', array('parent-style'));

    // Add Google Fonts
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

    // Enqueue Booking Script
    wp_enqueue_script('booking-script', get_stylesheet_directory_uri() . '/assets/js/main.js', array('jquery'), '1.0', true);
    wp_localize_script('booking-script', 'booking_ajax', array(
        'ajax_url' => admin_url('admin-ajax.php'),
        'nonce' => wp_create_nonce('booking_nonce')
    ));

    // Google Maps API
    $api_key = get_theme_mod('google_maps_api_key', '');
    if (!empty($api_key)) {
        wp_enqueue_script('google-maps', 'https://maps.googleapis.com/maps/api/js?key=' . $api_key . '&libraries=places', array(), null, true);
    }

    // Swiper.js for sliders
    wp_enqueue_style('swiper-css', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css');
    wp_enqueue_script('swiper-js', 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js', array(), null, true);
}

/**
 * Enqueue Admin Scripts for Media Uploader
 */
function bookingroom_admin_scripts($hook) {
    if ('post.php' != $hook && 'post-new.php' != $hook) {
        return;
    }
    wp_enqueue_media();
    wp_enqueue_script('bookingroom-admin-js', get_stylesheet_directory_uri() . '/assets/js/admin.js', array('jquery'), '1.0', true);
}
add_action('admin_enqueue_scripts', 'bookingroom_admin_scripts');

/**
 * Register navigation menus
 */
function bookingroom_register_menus()
{
    register_nav_menus(
        array(
            'primary-menu' => __('Primary Menu', 'bookingroom'),
        )
    );
}
add_action('init', 'bookingroom_register_menus');

add_theme_support('title-tag');
add_theme_support('custom-logo', array(
    'height'      => 100,
    'width'       => 400,
    'flex-height' => true,
    'flex-width'  => true,
    'header-text' => array('site-title', 'site-description'),
));

/**
 * Register Custom Post Types
 */
function bookingroom_register_cpts()
{
    // Hotel Post Type
    register_post_type('hotel', array(
        'labels' => array(
            'name' => __('Khách sạn', 'bookingroom'),
            'singular_name' => __('Khách sạn', 'bookingroom'),
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-building',
        'rewrite' => array('slug' => 'hotels'),
    ));

    // Room Post Type
    register_post_type('room', array(
        'labels' => array(
            'name' => __('Phòng', 'bookingroom'),
            'singular_name' => __('Phòng', 'bookingroom'),
        ),
        'public' => true,
        'has_archive' => true,
        'supports' => array('title', 'editor', 'thumbnail', 'excerpt'),
        'menu_icon' => 'dashicons-admin-home',
        'rewrite' => array('slug' => 'rooms'),
    ));

    // Booking Post Type
    register_post_type('booking', array(
        'labels' => array(
            'name' => __('Đặt phòng', 'bookingroom'),
            'singular_name' => __('Đặt phòng', 'bookingroom'),
        ),
        'public' => false,
        'show_ui' => true,
        'supports' => array('title', 'custom-fields'),
        'menu_icon' => 'dashicons-calendar-alt',
    ));

    // Room Category Taxonomy
    register_taxonomy('room_category', 'room', array(
        'labels' => array(
            'name' => __('Loại phòng', 'bookingroom'),
            'singular_name' => __('Loại phòng', 'bookingroom'),
        ),
        'hierarchical' => true,
        'show_admin_column' => true,
        'show_in_rest' => true,
        'rewrite' => array('slug' => 'room-type'),
    ));
}
add_action('init', 'bookingroom_register_cpts');

/**
 * AJAX Handler for Bookings
 */
function bookingroom_process_booking()
{
    check_ajax_referer('booking_nonce', 'nonce');

    $room_id = intval($_POST['room_id']);
    $check_in = sanitize_text_field($_POST['check_in']);
    $check_out = sanitize_text_field($_POST['check_out']);
    $guests = isset($_POST['guests']) ? intval($_POST['guests']) : 1;
    $name = sanitize_text_field($_POST['name']);
    $phone = sanitize_text_field($_POST['phone']);
    $email = sanitize_email($_POST['email']);
    $user_id = get_current_user_id();

    if (!$room_id || !$check_in || !$check_out || !$phone) {
        wp_send_json_error(array('message' => 'Dữ liệu không hợp lệ. Vui lòng điền đầy đủ các thông tin bắt buộc.'));
    }

    // Create Booking Post
    $booking_id = wp_insert_post(array(
        'post_type' => 'booking',
        'post_status' => 'publish',
        'post_title' => 'Đặt phòng #' . time() . ' - ' . $name,
        'post_author' => $user_id ?: 1, // Default to admin if guest
    ));

    if (!is_wp_error($booking_id)) {
        update_post_meta($booking_id, '_room_id', $room_id);
        update_post_meta($booking_id, '_check_in', $check_in);
        update_post_meta($booking_id, '_check_out', $check_out);
        update_post_meta($booking_id, '_guests', $guests);
        update_post_meta($booking_id, '_customer_name', $name);
        update_post_meta($booking_id, '_phone', $phone);
        update_post_meta($booking_id, '_email', $email);
        update_post_meta($booking_id, '_status', 'pending');

        wp_send_json_success(array(
            'message' => 'Đặt phòng thành công! Mã đặt phòng của bạn là: ' . $booking_id,
            'booking_id' => $booking_id
        ));
    } else {
        wp_send_json_error(array('message' => 'Lỗi hệ thống, vui lòng thử lại.'));
    }
}
add_action('wp_ajax_process_booking', 'bookingroom_process_booking');
add_action('wp_ajax_nopriv_process_booking', 'bookingroom_process_booking');

/**
 * AJAX Handler for Booking Lookup
 */
function bookingroom_lookup_booking()
{
    check_ajax_referer('booking_nonce', 'nonce');

    $phone = sanitize_text_field($_POST['phone']);
    $booking_id = intval($_POST['booking_id']);

    if (!$phone || !$booking_id) {
        wp_send_json_error(array('message' => 'Vui lòng nhập đầy đủ thông tin.'));
    }

    $booking = get_post($booking_id);

    if (!$booking || $booking->post_type !== 'booking') {
        wp_send_json_error(array('message' => 'Không tìm thấy mã đặt phòng này.'));
    }

    $stored_phone = get_post_meta($booking_id, '_phone', true);

    if ($stored_phone !== $phone) {
        wp_send_json_error(array('message' => 'Thông tin số điện thoại không khớp với mã đặt phòng.'));
    }

    $room_id = get_post_meta($booking_id, '_room_id', true);
    $check_in = get_post_meta($booking_id, '_check_in', true);
    $check_out = get_post_meta($booking_id, '_check_out', true);
    $status = get_post_meta($booking_id, '_status', true) ?: $booking->post_status;
    $customer_name = get_post_meta($booking_id, '_customer_name', true) ?: 'Khách hàng';

    wp_send_json_success(array(
        'booking_id' => $booking_id,
        'customer_name' => $customer_name,
        'room_title' => get_the_title($room_id),
        'check_in' => $check_in,
        'check_out' => $check_out,
        'status' => $status
    ));
}
add_action('wp_ajax_lookup_booking', 'bookingroom_lookup_booking');
add_action('wp_ajax_nopriv_lookup_booking', 'bookingroom_lookup_booking');

/**
 * Add Room Meta Boxes
 */
function bookingroom_add_room_meta_boxes()
{
    add_meta_box(
        'room_details',
        __('Thông tin phòng', 'bookingroom'),
        'bookingroom_room_details_callback',
        'room',
        'normal',
        'high'
    );
}
add_action('add_meta_boxes', 'bookingroom_add_room_meta_boxes');

function bookingroom_room_details_callback($post)
{
    wp_nonce_field('bookingroom_save_room_details', 'bookingroom_room_details_nonce');

    $price = get_post_meta($post->ID, '_price', true);
    $capacity = get_post_meta($post->ID, '_capacity', true);
    $room_label = get_post_meta($post->ID, '_room_label', true);
    $engine_room_id = get_post_meta($post->ID, '_engine_room_id', true);

    ?>
    <p>
        <label for="room_price"><?php _e('Giá phòng (VNĐ):', 'bookingroom'); ?></label>
        <input type="number" id="room_price" name="room_price" value="<?php echo esc_attr($price); ?>" class="widefat" />
    </p>
    <p>
        <label for="room_capacity"><?php _e('Sức chứa (người):', 'bookingroom'); ?></label>
        <input type="text" id="room_capacity" name="room_capacity" value="<?php echo esc_attr($capacity); ?>"
            class="widefat" />
    </p>
    <p>
        <label for="room_label"><?php _e('Nhãn hiển thị (ví dụ: Lux Room):', 'bookingroom'); ?></label>
        <input type="text" id="room_label" name="room_label" value="<?php echo esc_attr($room_label); ?>" class="widefat" />
    </p>
    <hr>
    <p>
        <label for="engine_room_id"><?php _e('ID Phòng trên Booking Engine (nếu có):', 'bookingroom'); ?></label>
        <input type="text" id="engine_room_id" name="engine_room_id" value="<?php echo esc_attr($engine_room_id); ?>"
            class="widefat" />
        <span class="description">Dùng để trỏ trực tiếp đến loại phòng này trên ezCloud/Cloudbeds...</span>
    </p>
    <?php

}

function bookingroom_save_room_details($post_id)
{
    if (!isset($_POST['bookingroom_room_details_nonce'])) {
        return;
    }

    if (!wp_verify_nonce($_POST['bookingroom_room_details_nonce'], 'bookingroom_save_room_details')) {
        return;
    }

    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
        return;
    }

    if (!current_user_can('edit_post', $post_id)) {
        return;
    }

    if (isset($_POST['room_price'])) {
        update_post_meta($post_id, '_price', sanitize_text_field($_POST['room_price']));
    }

    if (isset($_POST['room_capacity'])) {
        update_post_meta($post_id, '_capacity', sanitize_text_field($_POST['room_capacity']));
    }

    if (isset($_POST['room_label'])) {
        update_post_meta($post_id, '_room_label', sanitize_text_field($_POST['room_label']));
    }

    if (isset($_POST['engine_room_id'])) {
        update_post_meta($post_id, '_engine_room_id', sanitize_text_field($_POST['engine_room_id']));
    }
}

add_action('save_post', 'bookingroom_save_room_details');

/**
 * Add Home Page Meta Boxes (Classic Editor Style)
 */
function bookingroom_add_home_meta_boxes()
{
    $post_id = isset($_GET['post']) ? $_GET['post'] : (isset($_POST['post_ID']) ? $_POST['post_ID'] : false);
    if (!$post_id)
        return;

    $template = get_post_meta($post_id, '_wp_page_template', true);
    if ($template == 'page-trang-chu.php' || $template == 'page-destination.php') {
        if ($template == 'page-trang-chu.php') {
            add_meta_box('home_hero_section', 'Thông tin Hero (Đầu trang)', 'bookingroom_home_hero_callback', 'page', 'normal', 'high');
            add_meta_box('home_why_us_section', 'Thông tin Tại sao chọn chúng tôi', 'bookingroom_home_why_us_callback', 'page', 'normal', 'high');
        }
        add_meta_box('home_destinations_section', 'Danh sách Điểm đến (Chọn từ Gallery)', 'bookingroom_home_destinations_callback', 'page', 'normal', 'high');
    }
}
add_action('add_meta_boxes', 'bookingroom_add_home_meta_boxes');

function bookingroom_home_hero_callback($post)
{
    wp_nonce_field('bookingroom_save_home_meta', 'bookingroom_home_meta_nonce');
    $title = get_post_meta($post->ID, '_home_hero_title', true);
    $subtitle = get_post_meta($post->ID, '_home_hero_subtitle', true);
    ?>
    <p><strong>Tiêu đề lớn (Dùng <span class="text-blue-400">...</span> để đổi màu):</strong></p>
    <?php wp_editor($title, 'home_hero_title', array('textarea_name' => 'home_hero_title', 'media_buttons' => false, 'textarea_rows' => 3)); ?>
    <p style="margin-top: 15px;"><strong>Mô tả ngắn:</strong></p>
    <?php wp_editor($subtitle, 'home_hero_subtitle', array('textarea_name' => 'home_hero_subtitle', 'media_buttons' => false, 'textarea_rows' => 5)); ?>
    <hr>
    <p style="margin-top: 15px;"><strong>Ảnh Banner (Có thể chọn nhiều ảnh để tạo banner động/slider):</strong></p>
    <?php $banner_ids = get_post_meta($post->ID, '_home_banner_ids', true); ?>
    <div id="banner-images-container" style="display: flex; gap: 10px; margin-bottom: 10px; flex-wrap: wrap;">
        <?php 
        if ($banner_ids) {
            $ids = explode(',', $banner_ids);
            foreach ($ids as $id) {
                $url = wp_get_attachment_image_url($id, 'thumbnail');
                if ($url) {
                    echo '<div class="banner-image-preview" data-id="' . $id . '" style="position: relative; border: 1px solid #ccc; padding: 2px;">';
                    echo '<img src="' . $url . '" style="width: 80px; height: 80px; object-fit: cover; display: block;">';
                    echo '<a href="#" class="remove-banner-img" style="position: absolute; top: -5px; right: -5px; background: red; color: white; border-radius: 50%; width: 18px; height: 18px; text-align: center; line-height: 16px; text-decoration: none; font-size: 12px;">×</a>';
                    echo '</div>';
                }
            }
        }
        ?>
    </div>
    <input type="hidden" name="home_banner_ids" id="home_banner_ids" value="<?php echo esc_attr($banner_ids); ?>">
    <button type="button" class="button" id="upload-banner-btn">Chọn ảnh từ Gallery</button>
    <p class="description">Nếu chọn nhiều ảnh, banner sẽ tự động chuyển động (Slider).</p>
    <?php
}

function bookingroom_home_destinations_callback($post)
{
    $dest_ids = get_post_meta($post->ID, '_home_destination_ids', true);
    ?>
    <p><strong>Chọn các hình ảnh đại diện cho các Điểm đến (Tiêu đề ảnh sẽ là tên Điểm đến, Mô tả ảnh là số lượng khách sạn):</strong></p>
    <div id="destination-images-container" style="display: flex; gap: 15px; margin-bottom: 15px; flex-wrap: wrap;">
        <?php 
        if ($dest_ids) {
            $ids = explode(',', $dest_ids);
            foreach ($ids as $id) {
                $url = wp_get_attachment_image_url($id, 'thumbnail');
                $title = get_the_title($id);
                if ($url) {
                    echo '<div class="destination-image-preview" data-id="' . $id . '" style="position: relative; border: 1px solid #ccc; padding: 5px; width: 100px; text-align: center; background: #f9f9f9;">';
                    echo '<img src="' . $url . '" style="width: 80px; height: 80px; object-fit: cover; display: block; margin: 0 auto 5px;">';
                    echo '<span style="font-size: 10px; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">' . esc_html($title) . '</span>';
                    echo '<a href="#" class="remove-dest-img" style="position: absolute; top: -5px; right: -5px; background: red; color: white; border-radius: 50%; width: 18px; height: 18px; text-align: center; line-height: 16px; text-decoration: none; font-size: 12px;">×</a>';
                    echo '</div>';
                }
            }
        }
        ?>
    </div>
    <input type="hidden" name="home_destination_ids" id="home_destination_ids" value="<?php echo esc_attr($dest_ids); ?>">
    <button type="button" class="button" id="upload-dest-btn">Chọn Điểm đến từ Gallery</button>
    <p class="description">Lưu ý: Để đổi tên điểm đến, hãy chỉnh sửa <b>Tiêu đề (Title)</b> của ảnh trong Thư viện media. Để đổi số lượng khách sạn, hãy chỉnh sửa <b>Mô tả (Caption)</b> của ảnh.</p>
    <?php
}

function bookingroom_home_why_us_callback($post)
{
    $content = get_post_meta($post->ID, '_home_why_us_content', true);
    ?>
        <p><strong>Nội dung phần "Tại sao chọn chúng tôi" (Nhập dưới dạng danh sách hoặc các khối văn bản):</strong></p>
        <?php wp_editor($content, 'home_why_us_content', array('textarea_name' => 'home_why_us_content', 'textarea_rows' => 10)); ?>
<?php
}

function bookingroom_save_home_meta($post_id)
{
    if (!isset($_POST['bookingroom_home_meta_nonce']) || !wp_verify_nonce($_POST['bookingroom_home_meta_nonce'], 'bookingroom_save_home_meta')) {
        return;
    }
    if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE)
        return;
    if (!current_user_can('edit_post', $post_id))
        return;

    if (isset($_POST['home_hero_title'])) {
        update_post_meta($post_id, '_home_hero_title', $_POST['home_hero_title']);
    }
    if (isset($_POST['home_hero_subtitle'])) {
        update_post_meta($post_id, '_home_hero_subtitle', $_POST['home_hero_subtitle']);
    }
    if (isset($_POST['home_banner_ids'])) {
        update_post_meta($post_id, '_home_banner_ids', sanitize_text_field($_POST['home_banner_ids']));
    }
    if (isset($_POST['home_destination_ids'])) {
        update_post_meta($post_id, '_home_destination_ids', sanitize_text_field($_POST['home_destination_ids']));
    }
    if (isset($_POST['home_why_us_content'])) {
        update_post_meta($post_id, '_home_why_us_content', $_POST['home_why_us_content']);
    }
}
add_action('save_post', 'bookingroom_save_home_meta');

/**
 * Your code goes below.
 */

/**
 * Booking Engine Settings in Customizer
 */
function bookingroom_customize_register($wp_customize)
{
    // Section
    $wp_customize->add_section('booking_engine_section', array(
        'title' => __('Cấu hình Booking Engine & API', 'bookingroom'),
        'priority' => 30,
    ));

    // Setting: Enable External Engine
    $wp_customize->add_setting('use_external_booking', array(
        'default' => 'no',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('use_external_booking', array(
        'label' => __('Sử dụng Booking Engine bên ngoài', 'bookingroom'),
        'section' => 'booking_engine_section',
        'type' => 'select',
        'choices' => array(
            'no' => __('Không (Dùng hệ thống nội bộ)', 'bookingroom'),
            'yes' => __('Có (Dùng link bên ngoài)', 'bookingroom'),
        ),
    ));

    // Setting: Booking Engine URL
    $wp_customize->add_setting('booking_engine_url', array(
        'default' => '',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('booking_engine_url', array(
        'label' => __('Link Booking Engine (ezCloud, Cloudbeds...)', 'bookingroom'),
        'description' => __('VD: https://booking.ezcloud.vn/your-hotel-id', 'bookingroom'),
        'section' => 'booking_engine_section',
        'type' => 'url',
    ));

    // Setting: Google Maps API Key
    $wp_customize->add_setting('google_maps_api_key', array(
        'default' => '',
        'transport' => 'refresh',
    ));
    $wp_customize->add_control('google_maps_api_key', array(
        'label' => __('Google Maps API Key', 'bookingroom'),
        'description' => __('Dùng cho tính năng tự động gợi ý địa điểm (Autocomplete).', 'bookingroom'),
        'section' => 'booking_engine_section',
        'type' => 'text',
    ));

    // Add Logo Height setting to Site Identity
    $wp_customize->add_setting('logo_height', array(
        'default' => 70,
        'transport' => 'refresh',
        'sanitize_callback' => 'absint',
    ));
    $wp_customize->add_control('logo_height', array(
        'label' => __('Chiều cao Logo (px)', 'bookingroom'),
        'section' => 'title_tagline',
        'type' => 'number',
        'input_attrs' => array(
            'min' => 20,
            'max' => 200,
            'step' => 5,
        ),
    ));
}
add_action('customize_register', 'bookingroom_customize_register');

/**
 * Get Booking URL based on settings
 */
function bookingroom_get_booking_url($params = array())
{
    $use_external = get_theme_mod('use_external_booking', 'no');
    $external_url = get_theme_mod('booking_engine_url', '');

    if ($use_external === 'yes' && !empty($external_url)) {
        // If room_id is passed, try to get the room-specific engine ID
        if (isset($params['room_id'])) {
            $engine_room_id = get_post_meta($params['room_id'], '_engine_room_id', true);
            if (!empty($engine_room_id)) {
                $params['room_type'] = $engine_room_id; // Standard param for many engines
            }
            unset($params['room_id']);
        }

        return add_query_arg($params, $external_url);
    }

    // Default local rooms page
    return home_url('/rooms');
}


/**
 * Override front page template to use page-trang-chu.php
 */
add_filter('template_include', function ($template) {
    if (is_front_page() || is_home()) {
        $new_template = locate_template(array('page-trang-chu.php'));
        if (!empty($new_template)) {
            return $new_template;
        }
    }
    return $template;
});

