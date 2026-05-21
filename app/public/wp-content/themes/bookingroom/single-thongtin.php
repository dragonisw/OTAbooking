<?php get_header(); ?>

<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>

<?php
// Lấy custom fields
$price      = get_post_meta(get_the_ID(), '_price', true);
$capacity   = get_post_meta(get_the_ID(), '_capacity', true) ?: 2;
$area       = get_post_meta(get_the_ID(), '_area', true);
$bed_type   = get_post_meta(get_the_ID(), '_bed_type', true);
$room_type  = get_post_meta(get_the_ID(), '_room_type', true);
$view       = get_post_meta(get_the_ID(), '_view', true);
$floor      = get_post_meta(get_the_ID(), '_floor', true);

// Lấy danh sách ảnh gallery (ACF hoặc custom field)
$gallery_ids = get_post_meta(get_the_ID(), '_gallery', true);
$gallery_images = array();
if (!empty($gallery_ids) && is_array($gallery_ids)) {
    foreach ($gallery_ids as $img_id) {
        $src = wp_get_attachment_image_url($img_id, 'large');
        if ($src) $gallery_images[] = $src;
    }
} elseif (!empty($gallery_ids) && is_string($gallery_ids)) {
    // Có thể lưu dạng chuỗi IDs phân cách bởi dấu phẩy
    $ids_arr = array_map('trim', explode(',', $gallery_ids));
    foreach ($ids_arr as $img_id) {
        $src = wp_get_attachment_image_url($img_id, 'large');
        if ($src) $gallery_images[] = $src;
    }
}

// Nếu không có gallery, dùng ảnh đại diện (thumbnail)
if (empty($gallery_images) && has_post_thumbnail()) {
    $gallery_images[] = get_the_post_thumbnail_url(get_the_ID(), 'large');
}

// Lấy ảnh đại diện chính
$main_thumb = has_post_thumbnail() ? get_the_post_thumbnail_url(get_the_ID(), 'large') : (count($gallery_images) > 0 ? $gallery_images[0] : 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200');

// URL đặt phòng
$booking_url = get_permalink() . '?book=1';
$single_room_url = get_permalink();
// Truyền check_in / check_out nếu có
$check_in  = isset($_GET['check_in'])  ? sanitize_text_field($_GET['check_in'])  : '';
$check_out = isset($_GET['check_out']) ? sanitize_text_field($_GET['check_out']) : '';
$query_str = '';
if ($check_in && $check_out) {
    $query_str = '?check_in=' . urlencode($check_in) . '&check_out=' . urlencode($check_out);
}
$book_link = get_permalink() . $query_str;

// Nếu single-room.php là trang đặt phòng, link đặt phòng trỏ về đó
$room_booking_link = str_replace('single-thongtin', 'single-room', get_permalink()) . $query_str;
// Thực ra nên dùng permalink gốc của post với single-room.php nếu post type là room
// Vì cùng post, permalink = the_permalink()
$room_booking_link = get_permalink() . ($query_str ? $query_str . '&step=book' : '?step=book');
?>

<style>
/* ===== Gallery Slider ===== */
.tt-gallery-slider {
    position: relative;
    overflow: hidden;
    border-radius: 1.5rem;
    background: #0f172a;
}
.tt-slides-track {
    display: flex;
    transition: transform 0.55s cubic-bezier(0.77,0,0.175,1);
    will-change: transform;
}
.tt-slide {
    min-width: 100%;
    position: relative;
}
.tt-slide img {
    width: 100%;
    height: 480px;
    object-fit: cover;
    display: block;
}
@media (max-width: 768px) {
    .tt-slide img { height: 260px; }
}
.tt-prev, .tt-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(255,255,255,0.92);
    backdrop-filter: blur(8px);
    border: none;
    width: 48px; height: 48px;
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer;
    z-index: 10;
    box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    transition: all 0.25s ease;
}
.tt-prev:hover, .tt-next:hover {
    background: #fff;
    box-shadow: 0 8px 30px rgba(0,0,0,0.25);
    transform: translateY(-50%) scale(1.08);
}
.tt-prev { left: 1rem; }
.tt-next { right: 1rem; }
.tt-dots {
    position: absolute;
    bottom: 1.25rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 6px;
    z-index: 10;
}
.tt-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: rgba(255,255,255,0.5);
    cursor: pointer;
    transition: all 0.3s;
    border: none;
    padding: 0;
}
.tt-dot.active {
    background: #fff;
    width: 24px;
    border-radius: 4px;
}
/* Thumbs */
.tt-thumbs {
    display: flex;
    gap: 10px;
    overflow-x: auto;
    padding: 4px 2px 8px;
    scrollbar-width: thin;
    scrollbar-color: #cbd5e1 transparent;
}
.tt-thumbs::-webkit-scrollbar { height: 4px; }
.tt-thumbs::-webkit-scrollbar-track { background: transparent; }
.tt-thumbs::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 4px; }
.tt-thumb {
    flex: 0 0 auto;
    width: 90px; height: 64px;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    border: 2px solid transparent;
    transition: all 0.25s;
    opacity: 0.65;
}
.tt-thumb:hover { opacity: 0.9; }
.tt-thumb.active { border-color: #2563eb; opacity: 1; }
.tt-thumb img { width: 100%; height: 100%; object-fit: cover; display: block; }

/* ===== Prose content từ WP Editor ===== */
.tt-wp-content {
    color: #475569;
    line-height: 1.85;
    font-size: 1rem;
}
.tt-wp-content h1, .tt-wp-content h2, .tt-wp-content h3, .tt-wp-content h4 {
    color: #0f172a;
    font-weight: 700;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
}
.tt-wp-content h2 { font-size: 1.4rem; }
.tt-wp-content h3 { font-size: 1.15rem; }
.tt-wp-content p { margin-bottom: 1rem; }
.tt-wp-content ul, .tt-wp-content ol {
    padding-left: 1.5rem;
    margin-bottom: 1rem;
}
.tt-wp-content ul li { list-style: disc; margin-bottom: 0.4rem; }
.tt-wp-content ol li { list-style: decimal; margin-bottom: 0.4rem; }
.tt-wp-content img {
    border-radius: 1rem;
    max-width: 100%;
    height: auto;
    margin: 1.25rem 0;
}
.tt-wp-content a { color: #2563eb; text-decoration: underline; }
.tt-wp-content blockquote {
    border-left: 4px solid #2563eb;
    padding-left: 1rem;
    color: #64748b;
    font-style: italic;
    margin: 1.5rem 0;
    background: #f1f5f9;
    border-radius: 0 0.5rem 0.5rem 0;
    padding: 1rem 1rem 1rem 1.25rem;
}
.tt-wp-content table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1rem;
}
.tt-wp-content th, .tt-wp-content td {
    border: 1px solid #e2e8f0;
    padding: 0.6rem 0.9rem;
    text-align: left;
    font-size: 0.9rem;
}
.tt-wp-content th { background: #f8fafc; font-weight: 700; color: #334155; }
/* ===== Badge star ===== */
.tt-stars { color: #f59e0b; }
/* Sticky sidebar */
@media (min-width: 1024px) {
    .tt-sidebar-sticky { position: sticky; top: 6rem; }
}
/* Nút đặt phòng */
.tt-book-btn {
    background: linear-gradient(135deg, #f97316 0%, #ef4444 100%);
    color: #fff;
    font-weight: 700;
    font-size: 1.1rem;
    border: none;
    border-radius: 1rem;
    padding: 1rem 2rem;
    width: 100%;
    cursor: pointer;
    box-shadow: 0 8px 20px rgba(249,115,22,0.35);
    transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    text-decoration: none;
}
.tt-book-btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 30px rgba(249,115,22,0.45);
    color: #fff;
}
/* Amenity icon grid */
.tt-amenity-icon {
    width: 44px; height: 44px;
    background: linear-gradient(135deg, #eff6ff, #dbeafe);
    border-radius: 12px;
    display: flex; align-items: center; justify-content: center;
    color: #2563eb;
    flex-shrink: 0;
}
/* Badge Ưu đãi */
.tt-promo-badge {
    background: linear-gradient(90deg, #f59e0b, #ef4444);
    color: #fff;
    font-size: 0.7rem;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 99px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
}
/* Section heading */
.tt-section-title {
    font-size: 1.25rem;
    font-weight: 800;
    color: #0f172a;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.25rem;
}
.tt-section-title::after {
    content: '';
    flex: 1;
    height: 2px;
    background: linear-gradient(90deg, #2563eb22, transparent);
    border-radius: 1px;
}
</style>

<main class="bg-slate-50 min-h-screen pb-20">

    <!-- Breadcrumb -->
    <div class="bg-white border-b border-slate-100 shadow-sm">
        <div class="container mx-auto px-4 py-3 flex items-center text-sm text-slate-500 gap-2 flex-wrap">
            <a href="<?php echo home_url(); ?>" class="hover:text-blue-600 transition-colors flex items-center gap-1">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                Trang chủ
            </a>
            <svg class="w-3.5 h-3.5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            <a href="<?php echo get_post_type_archive_link('room'); ?>" class="hover:text-blue-600 transition-colors">Phòng nghỉ</a>
            <svg class="w-3.5 h-3.5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            <span class="text-slate-800 font-semibold truncate max-w-[200px]"><?php the_title(); ?></span>
        </div>
    </div>

    <div class="container mx-auto px-4 py-10">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">

            <!-- ====== LEFT / MAIN (2/3) ====== -->
            <div class="lg:col-span-2 space-y-8">

                <!-- ===== GALLERY SLIDER ===== -->
                <div>
                    <div class="tt-gallery-slider" id="gallerySlider">
                        <div class="tt-slides-track" id="slidesTrack">
                            <?php if (!empty($gallery_images)): ?>
                                <?php foreach ($gallery_images as $idx => $img_url): ?>
                                    <div class="tt-slide">
                                        <img src="<?php echo esc_url($img_url); ?>" alt="<?php the_title(); ?> - Ảnh <?php echo $idx+1; ?>" loading="<?php echo $idx === 0 ? 'eager' : 'lazy'; ?>">
                                    </div>
                                <?php endforeach; ?>
                            <?php else: ?>
                                <div class="tt-slide">
                                    <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1200" alt="<?php the_title(); ?>">
                                </div>
                            <?php endif; ?>
                        </div>

                        <?php if (count($gallery_images) > 1): ?>
                            <button class="tt-prev" id="slidePrev" aria-label="Ảnh trước">
                                <svg class="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/></svg>
                            </button>
                            <button class="tt-next" id="slideNext" aria-label="Ảnh tiếp theo">
                                <svg class="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
                            </button>
                            <div class="tt-dots" id="slideDots"></div>
                        <?php endif; ?>

                        <!-- Photo count badge -->
                        <?php if (count($gallery_images) > 1): ?>
                        <div class="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                            <span id="photoCounter">1 / <?php echo count($gallery_images); ?></span>
                        </div>
                        <?php endif; ?>
                    </div>

                    <!-- Thumbnails -->
                    <?php if (count($gallery_images) > 1): ?>
                    <div class="tt-thumbs mt-3" id="thumbsTrack">
                        <?php foreach ($gallery_images as $idx => $img_url): ?>
                            <div class="tt-thumb <?php echo $idx === 0 ? 'active' : ''; ?>" data-index="<?php echo $idx; ?>">
                                <img src="<?php echo esc_url($img_url); ?>" alt="">
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <?php endif; ?>
                </div>

                <!-- ===== ROOM HEADER INFO ===== -->
                <div class="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
                    <!-- Type badge & stars -->
                    <div class="flex items-center gap-3 mb-4 flex-wrap">
                        <?php if ($room_type): ?>
                            <span class="bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide"><?php echo esc_html($room_type); ?></span>
                        <?php endif; ?>
                        <span class="tt-promo-badge">Ưu đãi nhất</span>
                        <div class="tt-stars flex items-center gap-0.5 ml-auto">
                            <?php for ($i = 0; $i < 5; $i++): ?>
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                            <?php endfor; ?>
                            <span class="text-xs text-slate-500 ml-1 font-medium">4.9 (124 đánh giá)</span>
                        </div>
                    </div>

                    <h1 class="text-3xl lg:text-4xl font-black text-slate-900 leading-tight mb-4"><?php the_title(); ?></h1>

                    <!-- Quick specs row -->
                    <div class="flex flex-wrap gap-5 text-sm text-slate-600 mb-6 pb-6 border-b border-slate-100">
                        <?php if ($area): ?>
                        <div class="flex items-center gap-2">
                            <span class="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
                            </span>
                            <div><span class="font-bold text-slate-800"><?php echo esc_html($area); ?> m²</span><br><span class="text-xs text-slate-400">Diện tích</span></div>
                        </div>
                        <?php endif; ?>
                        <div class="flex items-center gap-2">
                            <span class="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                            </span>
                            <div><span class="font-bold text-slate-800"><?php echo esc_html($capacity); ?> người</span><br><span class="text-xs text-slate-400">Sức chứa</span></div>
                        </div>
                        <?php if ($bed_type): ?>
                        <div class="flex items-center gap-2">
                            <span class="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12h18M3 6h18M3 18h18"/></svg>
                            </span>
                            <div><span class="font-bold text-slate-800"><?php echo esc_html($bed_type); ?></span><br><span class="text-xs text-slate-400">Loại giường</span></div>
                        </div>
                        <?php endif; ?>
                        <?php if ($view): ?>
                        <div class="flex items-center gap-2">
                            <span class="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                            </span>
                            <div><span class="font-bold text-slate-800"><?php echo esc_html($view); ?></span><br><span class="text-xs text-slate-400">Hướng nhìn</span></div>
                        </div>
                        <?php endif; ?>
                        <?php if ($floor): ?>
                        <div class="flex items-center gap-2">
                            <span class="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                            </span>
                            <div><span class="font-bold text-slate-800">Tầng <?php echo esc_html($floor); ?></span><br><span class="text-xs text-slate-400">Vị trí</span></div>
                        </div>
                        <?php endif; ?>
                    </div>

                    <!-- ===== NỘI DUNG TỪ WORDPRESS EDITOR ===== -->
                    <?php if (get_the_content()): ?>
                    <div class="tt-section-title">
                        <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
                        Mô tả phòng
                    </div>
                    <div class="tt-wp-content">
                        <?php the_content(); ?>
                    </div>
                    <?php endif; ?>
                </div>

                <!-- ===== TIỆN NGHI PHÒNG ===== -->
                <div class="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
                    <div class="tt-section-title">
                        <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
                        Tiện nghi phòng
                    </div>
                    <div class="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <?php
                        $amenities = array(
                            array('icon'=>'wifi',        'label'=>'Wi-Fi tốc độ cao'),
                            array('icon'=>'ac',          'label'=>'Điều hòa nhiệt độ'),
                            array('icon'=>'tv',          'label'=>'Smart TV 4K'),
                            array('icon'=>'bath',        'label'=>'Bồn tắm riêng'),
                            array('icon'=>'safe',        'label'=>'Két an toàn'),
                            array('icon'=>'minibar',     'label'=>'Minibar & Trà/Cà phê'),
                            array('icon'=>'phone',       'label'=>'Điện thoại phòng'),
                            array('icon'=>'window',      'label'=>'Ban công/Cửa sổ lớn'),
                            array('icon'=>'laundry',     'label'=>'Dịch vụ giặt là'),
                        );
                        $icons = array(
                            'wifi'    => '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.314 6.364c5.857-5.858 15.355-5.858 21.213 0"/>',
                            'ac'      => '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>',
                            'tv'      => '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>',
                            'bath'    => '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>',
                            'safe'    => '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>',
                            'minibar' => '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/>',
                            'phone'   => '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>',
                            'window'  => '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/>',
                            'laundry' => '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>',
                        );
                        foreach ($amenities as $am): ?>
                        <div class="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors group">
                            <div class="tt-amenity-icon group-hover:scale-110 transition-transform">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <?php echo $icons[$am['icon']]; ?>
                                </svg>
                            </div>
                            <span class="text-sm font-medium text-slate-700"><?php echo esc_html($am['label']); ?></span>
                        </div>
                        <?php endforeach; ?>
                    </div>
                </div>

                <!-- ===== CHÍNH SÁCH ===== -->
                <div class="bg-white rounded-3xl shadow-sm border border-slate-100 p-8">
                    <div class="tt-section-title">
                        <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
                        Chính sách phòng
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 text-sm">
                        <div class="flex gap-3">
                            <div class="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            </div>
                            <div>
                                <p class="font-bold text-slate-800 mb-0.5">Nhận phòng</p>
                                <p class="text-slate-500">Từ 14:00 (Check-in)</p>
                            </div>
                        </div>
                        <div class="flex gap-3">
                            <div class="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center text-red-500 flex-shrink-0">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                            </div>
                            <div>
                                <p class="font-bold text-slate-800 mb-0.5">Trả phòng</p>
                                <p class="text-slate-500">Trước 12:00 (Check-out)</p>
                            </div>
                        </div>
                        <div class="flex gap-3">
                            <div class="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-500 flex-shrink-0">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"/></svg>
                            </div>
                            <div>
                                <p class="font-bold text-slate-800 mb-0.5">Hủy đặt phòng</p>
                                <p class="text-slate-500">Miễn phí hủy trước 48 giờ</p>
                            </div>
                        </div>
                        <div class="flex gap-3">
                            <div class="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 flex-shrink-0">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/></svg>
                            </div>
                            <div>
                                <p class="font-bold text-slate-800 mb-0.5">Thanh toán</p>
                                <p class="text-slate-500">Tiền mặt & chuyển khoản</p>
                            </div>
                        </div>
                    </div>
                </div>

                
            </div><!-- end left -->

            <!-- ====== RIGHT / SIDEBAR (1/3) ====== -->
            <div class="lg:col-span-1">
                <div class="tt-sidebar-sticky space-y-6">

                    <!-- Price Card -->
                    <div class="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
                        <!-- Header gradient -->
                        <div class="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 p-6 text-white relative overflow-hidden">
                            <div class="absolute inset-0 opacity-10" style="background-image:radial-gradient(circle at 70% 20%, #60a5fa 0%, transparent 50%)"></div>
                            <p class="text-slate-300 text-xs font-semibold uppercase tracking-widest mb-1">Giá phòng từ</p>
                            <?php if ($price): ?>
                                <div class="flex items-end gap-2">
                                    <span class="text-3xl font-black"><?php echo number_format($price); ?>đ</span>
                                    <span class="text-slate-400 text-sm mb-1">/đêm</span>
                                </div>
                                <p class="text-xs text-green-400 mt-1 font-medium">✓ Đã bao gồm thuế & phí dịch vụ</p>
                            <?php else: ?>
                                <div class="text-2xl font-black">Liên hệ báo giá</div>
                            <?php endif; ?>
                        </div>

                        <div class="p-6 space-y-5">
                            <!-- Check-in / Check-out -->
                            <div class="grid grid-cols-2 gap-3">
                                <div class="space-y-1">
                                    <label class="text-xs font-bold text-slate-500 uppercase tracking-wide block">Nhận phòng</label>
                                    <input type="date" id="tt_checkin" value="<?php echo esc_attr($check_in); ?>"
                                        class="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-800 bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all cursor-pointer">
                                </div>
                                <div class="space-y-1">
                                    <label class="text-xs font-bold text-slate-500 uppercase tracking-wide block">Trả phòng</label>
                                    <input type="date" id="tt_checkout" value="<?php echo esc_attr($check_out); ?>"
                                        class="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-800 bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all cursor-pointer">
                                </div>
                            </div>

                            <!-- Guests -->
                            <div class="space-y-1">
                                <label class="text-xs font-bold text-slate-500 uppercase tracking-wide block">Số khách</label>
                                <select id="tt_guests" class="w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-medium text-slate-800 bg-slate-50 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all cursor-pointer">
                                    <?php for ($g = 1; $g <= $capacity; $g++): ?>
                                        <option value="<?php echo $g; ?>"><?php echo $g; ?> khách</option>
                                    <?php endfor; ?>
                                </select>
                            </div>

                            <!-- Price breakdown -->
                            <div id="tt_price_breakdown" class="bg-slate-50 rounded-2xl p-4 text-sm space-y-2 border border-slate-100" style="display:none">
                                <div class="flex justify-between text-slate-600">
                                    <span><?php if ($price) echo number_format($price); ?>đ × <span id="tt_nights">0</span> đêm</span>
                                    <span class="font-medium" id="tt_subtotal">0đ</span>
                                </div>
                                <div class="flex justify-between text-slate-600">
                                    <span>Phí dịch vụ (5%)</span>
                                    <span class="font-medium" id="tt_fee">0đ</span>
                                </div>
                                <div class="border-t border-slate-200 pt-2 flex justify-between font-bold text-slate-900">
                                    <span>Tổng cộng</span>
                                    <span class="text-orange-500 text-lg" id="tt_total">0đ</span>
                                </div>
                            </div>

                            <!-- CTA Button -->
                            <a href="<?php echo esc_url(get_permalink() . ($query_str ? rtrim($query_str,'&') . '&step=book' : '?step=book')); ?>" id="tt_book_link"
                               class="tt-book-btn">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
                                Đặt phòng ngay
                            </a>
                            <p class="text-center text-xs text-slate-400 -mt-2">Bạn sẽ chưa bị trừ tiền ngay lúc này</p>
                        </div>
                    </div>

                    <!-- Need help? -->
                    <div class="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 text-white shadow-lg">
                        <div class="flex items-start gap-4">
                            <div class="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                            </div>
                            <div>
                                <p class="font-bold mb-1">Cần hỗ trợ?</p>
                                <p class="text-blue-100 text-sm mb-3">Liên hệ chúng tôi để được tư vấn và đặt phòng tốt nhất.</p>
                                <a href="tel:0901234567" class="text-white font-bold text-lg hover:underline">0901 234 567</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div><!-- end sidebar -->

        </div><!-- end grid -->
    </div><!-- end container -->
</main>

<script>
document.addEventListener('DOMContentLoaded', function() {

    /* ===== GALLERY SLIDER ===== */
    const track    = document.getElementById('slidesTrack');
    const prevBtn  = document.getElementById('slidePrev');
    const nextBtn  = document.getElementById('slideNext');
    const dotsWrap = document.getElementById('slideDots');
    const counter  = document.getElementById('photoCounter');
    const thumbsEl = document.getElementById('thumbsTrack');
    const slides   = track ? track.querySelectorAll('.tt-slide') : [];
    const total    = slides.length;
    let current    = 0;

    if (total > 1) {
        // Tạo dots
        slides.forEach(function(_, i) {
            const dot = document.createElement('button');
            dot.className = 'tt-dot' + (i === 0 ? ' active' : '');
            dot.setAttribute('aria-label', 'Ảnh ' + (i+1));
            dot.addEventListener('click', function() { goTo(i); });
            dotsWrap.appendChild(dot);
        });

        function goTo(idx) {
            current = (idx + total) % total;
            track.style.transform = 'translateX(-' + (current * 100) + '%)';
            // Update dots
            dotsWrap.querySelectorAll('.tt-dot').forEach(function(d, i) {
                d.classList.toggle('active', i === current);
            });
            // Update counter
            if (counter) counter.textContent = (current + 1) + ' / ' + total;
            // Update thumbs
            if (thumbsEl) {
                thumbsEl.querySelectorAll('.tt-thumb').forEach(function(t, i) {
                    t.classList.toggle('active', i === current);
                });
                // Scroll thumb into view
                const activThumb = thumbsEl.querySelectorAll('.tt-thumb')[current];
                if (activThumb) activThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        }

        if (prevBtn) prevBtn.addEventListener('click', function() { goTo(current - 1); });
        if (nextBtn) nextBtn.addEventListener('click', function() { goTo(current + 1); });

        // Thumbnail click
        if (thumbsEl) {
            thumbsEl.querySelectorAll('.tt-thumb').forEach(function(t, i) {
                t.addEventListener('click', function() { goTo(i); });
            });
        }

        // Swipe/touch support
        let touchStartX = 0;
        const slider = document.getElementById('gallerySlider');
        if (slider) {
            slider.addEventListener('touchstart', function(e) { touchStartX = e.touches[0].clientX; }, { passive: true });
            slider.addEventListener('touchend', function(e) {
                const diff = touchStartX - e.changedTouches[0].clientX;
                if (Math.abs(diff) > 50) {
                    diff > 0 ? goTo(current + 1) : goTo(current - 1);
                }
            }, { passive: true });
        }

        // Auto-play (optional, 5s)
        // setInterval(function() { goTo(current + 1); }, 5000);
    }

    /* ===== PRICE CALCULATOR ===== */
    const basePrice = <?php echo intval($price) ?: 0; ?>;
    const checkInEl  = document.getElementById('tt_checkin');
    const checkOutEl = document.getElementById('tt_checkout');
    const breakdownEl = document.getElementById('tt_price_breakdown');
    const nightsEl   = document.getElementById('tt_nights');
    const subtotalEl = document.getElementById('tt_subtotal');
    const feeEl      = document.getElementById('tt_fee');
    const totalEl    = document.getElementById('tt_total');
    const bookLink   = document.getElementById('tt_book_link');
    const basePermalink = '<?php echo esc_js(get_permalink()); ?>';

    function fmt(n) {
        return new Intl.NumberFormat('vi-VN').format(n) + 'đ';
    }

    function calcPrice() {
        if (!checkInEl || !checkOutEl) return;
        const ci = new Date(checkInEl.value);
        const co = new Date(checkOutEl.value);
        if (!checkInEl.value || !checkOutEl.value || isNaN(ci) || isNaN(co) || co <= ci) {
            if (breakdownEl) breakdownEl.style.display = 'none';
            return;
        }
        const nights   = Math.ceil((co - ci) / 86400000);
        const subtotal = basePrice * nights;
        const fee      = Math.round(subtotal * 0.05);
        const total    = subtotal + fee;

        if (nightsEl)   nightsEl.textContent   = nights;
        if (subtotalEl) subtotalEl.textContent  = fmt(subtotal);
        if (feeEl)      feeEl.textContent       = fmt(fee);
        if (totalEl)    totalEl.textContent     = fmt(total);
        if (breakdownEl && basePrice > 0) breakdownEl.style.display = 'block';

        // Update book link với ngày
        if (bookLink) {
            bookLink.href = basePermalink + '?check_in=' + checkInEl.value + '&check_out=' + checkOutEl.value + '&step=book';
        }
    }

    if (checkInEl)  checkInEl.addEventListener('change', calcPrice);
    if (checkOutEl) checkOutEl.addEventListener('change', calcPrice);
    calcPrice();

    // Set min date for check-in = today
    const today = new Date().toISOString().split('T')[0];
    if (checkInEl) {
        checkInEl.min = today;
        checkInEl.addEventListener('change', function() {
            if (checkOutEl) checkOutEl.min = checkInEl.value;
        });
    }
});
</script>

<?php endwhile; endif; ?>

<?php get_footer(); ?>
