<?php /* Template Name: trang chủ*/ ?>
<?php get_header(); ?>

<style>
    /* ===== DYNAMIC HERO BANNER STYLES ===== */

    /* Hero section full-height */
    .hero-banner-section {
        position: relative;
        min-height: 600px;
        height: 100vh;
        max-height: 850px;
        overflow: hidden;
    }

    /* Swiper fills section */
    .main-hero-swiper {
        width: 100%;
        height: 100%;
        position: absolute;
        inset: 0;
    }

    /* Ken Burns zoom animation on each slide image */
    .hero-slide-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform-origin: center center;
        animation: none;
        transition: transform 0.5s ease;
    }

    .swiper-slide-active .hero-slide-img {
        animation: kenBurns 7s ease-out forwards;
    }

    @keyframes kenBurns {
        0%   { transform: scale(1.08) translateX(0px); }
        100% { transform: scale(1) translateX(0px); }
    }

    /* Gradient overlays */
    .hero-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(
            to bottom,
            rgba(10, 20, 40, 0.35) 0%,
            rgba(10, 20, 40, 0.25) 40%,
            rgba(10, 20, 40, 0.65) 100%
        );
        z-index: 1;
    }

    /* Shimmer particle overlay */
    .hero-particles {
        position: absolute;
        inset: 0;
        z-index: 2;
        overflow: hidden;
        pointer-events: none;
    }

    .hero-particles::before {
        content: '';
        position: absolute;
        width: 200%;
        height: 200%;
        top: -50%;
        left: -50%;
        background-image:
            radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px),
            radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px);
        background-size: 50px 50px, 90px 90px;
        background-position: 0 0, 25px 25px;
        animation: particleDrift 30s linear infinite;
    }

    @keyframes particleDrift {
        0%   { transform: translate(0, 0); }
        100% { transform: translate(50px, 50px); }
    }

    /* Hero content container - chỉ chứa text, căn giữa */
    .hero-content-wrapper {
        position: absolute;
        inset: 0;
        bottom: 160px; /* để lại chỗ cho search bar ở dưới */
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        pointer-events: none;
    }

    .hero-content-inner {
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
        padding: 0 1.5rem;
        text-align: center;
        pointer-events: auto;
        padding-top: 5rem;
    }

    /* Search bar floating at bottom of banner */
    .hero-search-outer {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 15;
        padding: 0 1rem 2.5rem;
        display: flex;
        justify-content: center;
        pointer-events: auto;
    }

    .hero-search-outer .hero-search-wrapper {
        width: 100%;
        max-width: 1200px;
    }

    @media (max-width: 767px) {
        .hero-content-wrapper {
            bottom: 200px;
        }
        .hero-search-outer {
            padding: 0 0.75rem 1.5rem;
        }
    }

    /* Badge above title */
    .hero-badge {
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
        background: rgba(255,255,255,0.15);
        backdrop-filter: blur(8px);
        border: 1px solid rgba(255,255,255,0.25);
        color: #fff;
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        padding: 0.4rem 1rem;
        border-radius: 9999px;
        margin-bottom: 1.25rem;
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s;
    }

    .hero-badge .badge-dot {
        width: 6px;
        height: 6px;
        background: #60a5fa;
        border-radius: 50%;
        animation: pulseDot 1.5s ease-in-out infinite;
    }

    @keyframes pulseDot {
        0%, 100% { opacity: 1; transform: scale(1); }
        50%       { opacity: 0.5; transform: scale(1.4); }
    }

    /* Hero title animation */
    .hero-title {
        font-size: clamp(2.2rem, 6vw, 5.5rem);
        font-weight: 800;
        color: #ffffff;
        line-height: 1.1;
        margin-bottom: 1.25rem;
        text-shadow: 0 4px 24px rgba(0,0,0,0.4);
        opacity: 0;
        transform: translateY(35px);
        transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s,
                    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s;
    }

    /* Hero subtitle animation */
    .hero-subtitle {
        font-size: clamp(0.95rem, 2vw, 1.25rem);
        color: rgba(255,255,255,0.88);
        max-width: 640px;
        margin: 0 auto 2.5rem;
        line-height: 1.7;
        text-shadow: 0 2px 10px rgba(0,0,0,0.3);
        opacity: 0;
        transform: translateY(25px);
        transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s,
                    transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s;
    }

    /* Search bar wrapper - now standalone, no animation needed */
    .hero-search-wrapper {
        pointer-events: auto;
    }

    /* Active slide triggers text animations */
    .banner-text-visible .hero-badge,
    .banner-text-visible .hero-title,
    .banner-text-visible .hero-subtitle {
        opacity: 1;
        transform: translateY(0);
    }

    /* Navigation Arrows */
    .hero-nav-btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 20;
        width: 52px;
        height: 52px;
        background: rgba(255,255,255,0.15);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255,255,255,0.3);
        border-radius: 50%;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 20px rgba(0,0,0,0.2);
    }

    .hero-nav-btn:hover {
        background: rgba(255,255,255,0.28);
        transform: translateY(-50%) scale(1.08);
        box-shadow: 0 8px 30px rgba(0,0,0,0.3);
    }

    .hero-nav-prev { left: 20px; }
    .hero-nav-next { right: 20px; }

    @media (min-width: 768px) {
        .hero-nav-prev { left: 36px; }
        .hero-nav-next { right: 36px; }
    }

    /* Pagination & Progress - above search bar */
    .hero-pagination-wrap {
        position: absolute;
        bottom: 160px; /* above search bar */
        left: 50%;
        transform: translateX(-50%);
        z-index: 20;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .hero-dot {
        width: 8px;
        height: 8px;
        border-radius: 9999px;
        background: rgba(255,255,255,0.4);
        cursor: pointer;
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        border: 1px solid rgba(255,255,255,0.3);
    }

    .hero-dot.active {
        width: 32px;
        background: #ffffff;
        box-shadow: 0 0 10px rgba(255,255,255,0.5);
    }

    /* Slide counter - above search bar */
    .hero-counter {
        position: absolute;
        bottom: 155px;
        right: 36px;
        z-index: 20;
        color: rgba(255,255,255,0.7);
        font-size: 0.8rem;
        font-weight: 600;
        letter-spacing: 0.05em;
    }

    .hero-counter span.current {
        color: #fff;
        font-size: 1.1rem;
        font-weight: 700;
    }

    /* Progress bar */
    .hero-progress-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(to right, #60a5fa, #a78bfa);
        z-index: 20;
        width: 0%;
        transition: none;
        box-shadow: 0 0 10px rgba(96, 165, 250, 0.6);
    }

    .hero-progress-bar.animating {
        transition: width 5s linear;
        width: 100%;
    }

    /* Scroll hint */
    .hero-scroll-hint {
        position: absolute;
        bottom: 32px;
        left: 36px;
        z-index: 20;
        display: flex;
        align-items: center;
        gap: 8px;
        color: rgba(255,255,255,0.65);
        font-size: 0.7rem;
        font-weight: 600;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }

    .scroll-mouse {
        width: 20px;
        height: 32px;
        border: 2px solid rgba(255,255,255,0.5);
        border-radius: 10px;
        display: flex;
        justify-content: center;
        padding-top: 5px;
    }

    .scroll-mouse::before {
        content: '';
        width: 3px;
        height: 7px;
        background: rgba(255,255,255,0.8);
        border-radius: 2px;
        animation: scrollBounce 1.8s ease-in-out infinite;
    }

    @keyframes scrollBounce {
        0%, 100% { transform: translateY(0); opacity: 1; }
        50%       { transform: translateY(6px); opacity: 0.4; }
    }

    @media (max-width: 767px) {
        .hero-scroll-hint,
        .hero-counter { display: none; }
        .hero-nav-btn { width: 40px; height: 40px; }
        .hero-banner-section { min-height: 640px; height: 100vh; max-height: 780px; }
        .hero-content-wrapper { bottom: 230px; }
        .hero-search-outer { padding: 0 0.75rem 1rem; }
        .hero-pagination-wrap { bottom: 210px; }
    }
</style>

<main>
    <!-- Hero Section - Dynamic Banner -->
    <section class="hero-banner-section" id="hero-banner">
        <?php
        $banner_ids = get_post_meta(get_the_ID(), '_home_banner_ids', true);
        $banners = $banner_ids ? explode(',', $banner_ids) : array();
        ?>

        <!-- Swiper Slider -->
        <div class="swiper main-hero-swiper">
            <div class="swiper-wrapper">
                <?php if (!empty($banners)): ?>
                    <?php foreach ($banners as $id): ?>
                        <div class="swiper-slide">
                            <?php $img_url = wp_get_attachment_image_url($id, 'full'); ?>
                            <img src="<?php echo esc_url($img_url); ?>" alt="Banner" class="hero-slide-img">
                            <div class="hero-overlay"></div>
                        </div>
                    <?php endforeach; ?>
                <?php else: ?>
                    <!-- Default Fallback Banners -->
                    <div class="swiper-slide">
                        <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000"
                            alt="Luxury Hotel" class="hero-slide-img">
                        <div class="hero-overlay"></div>
                    </div>
                    <div class="swiper-slide">
                        <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&q=80&w=2000"
                            alt="Resort Pool" class="hero-slide-img">
                        <div class="hero-overlay"></div>
                    </div>
                    <div class="swiper-slide">
                        <img src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=2000"
                            alt="Luxury Room" class="hero-slide-img">
                        <div class="hero-overlay"></div>
                    </div>
                <?php endif; ?>
            </div>
        </div>

        <!-- Particle Shimmer Overlay -->
        <div class="hero-particles"></div>

        <!-- Navigation Arrows -->
        <button class="hero-nav-btn hero-nav-prev" id="hero-prev" aria-label="Slide trước">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="15 18 9 12 15 6"/>
            </svg>
        </button>
        <button class="hero-nav-btn hero-nav-next" id="hero-next" aria-label="Slide tiếp theo">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="9 18 15 12 9 6"/>
            </svg>
        </button>

 
        
        <!-- Hero Content -->
        <div class="hero-content-wrapper">
            <div class="hero-content-inner" id="hero-text-block">
                <?php
                $hero_title = get_post_meta(get_the_ID(), '_home_hero_title', true) ?: 'Khám phá Kỳ nghỉ <br><span style="color:#60a5fa">Hoàn hảo</span> của Bạn';
                $hero_subtitle = get_post_meta(get_the_ID(), '_home_hero_subtitle', true) ?: 'Hơn 500.000 khách sạn và resort sang trọng trên toàn thế giới đang chờ đón bạn với giá ưu đãi nhất.';
                ?>

                <!-- Animated Badge -->
                <div class="hero-badge">
                    <span class="badge-dot"></span>
                    <span>✦ Trải nghiệm đẳng cấp 5 sao</span>
                </div>

                <!-- Animated Title -->
                <h1 class="hero-title">
                    <?php echo $hero_title; ?>
                </h1>

                <!-- Animated Subtitle -->
                <p class="hero-subtitle">
                    <?php echo wp_strip_all_tags($hero_subtitle); ?>
                </p>

            </div><!-- /.hero-content-inner -->
        </div><!-- /.hero-content-wrapper -->

        <!-- Search Bar - Fixed at bottom of banner -->
        <div class="hero-search-outer">
            <div class="hero-search-wrapper">
            <div class="bg-white/95 backdrop-blur-sm p-5 md:p-6 rounded-2xl shadow-2xl w-full">
                <?php
                $use_external = get_theme_mod('use_external_booking', 'no');
                $engine_url = get_theme_mod('booking_engine_url', '');
                $form_action = ($use_external === 'yes' && !empty($engine_url)) ? $engine_url : home_url('/rooms');
                ?>
                <form id="search-form" action="<?php echo esc_url($form_action) ?>" method="get"
                    class="grid grid-cols-2 md:grid-cols-7 gap-3 md:gap-4 items-start">
                    <?php if ($use_external !== 'yes'): ?>
                        <input type="hidden" name="post_type" value="room">
                    <?php endif; ?>

                    <div class="text-left col-span-2 md:col-span-2">
                        <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Địa điểm</label>
                        <div class="relative">
                            <input type="text" id="location-input" name="s" placeholder="Bạn muốn đi đâu?"
                                class="w-full bg-slate-50 border-none rounded-xl py-3.5 pl-4 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all">
                        </div>
                    </div>

                    <div class="text-left col-span-1">
                        <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Nhận phòng</label>
                        <input type="date" id="check-in-date"
                            name="<?php echo ($use_external === 'yes') ? 'checkin' : 'check_in'; ?>"
                            class="w-full bg-slate-50 border-none rounded-xl py-3.5 px-4 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all">
                    </div>

                    <div class="text-left col-span-1">
                        <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Trả phòng</label>
                        <input type="date" id="check-out-date"
                            name="<?php echo ($use_external === 'yes') ? 'checkout' : 'check_out'; ?>"
                            class="w-full bg-slate-50 border-none rounded-xl py-3.5 px-4 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all">
                    </div>

                    <div class="text-left col-span-1">
                        <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Người lớn</label>
                        <div class="relative">
                            <select name="adults"
                                class="w-full bg-slate-50 border-none rounded-xl py-3.5 px-4 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all appearance-none cursor-pointer">
                                <option value="1">1 Người lớn</option>
                                <option value="2" selected>2 Người lớn</option>
                                <option value="3">3 Người lớn</option>
                                <option value="4">4 Người lớn</option>
                                <option value="5">5+ Người lớn</option>
                            </select>
                            <div class="absolute right-3 bottom-4 pointer-events-none text-slate-400">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="text-left col-span-1">
                        <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Trẻ em</label>
                        <div class="relative">
                            <select name="children"
                                class="w-full bg-slate-50 border-none rounded-xl py-3.5 px-4 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all appearance-none cursor-pointer">
                                <option value="0">0 Trẻ em</option>
                                <option value="1">1 Trẻ em</option>
                                <option value="2">2 Trẻ em</option>
                                <option value="3">3+ Trẻ em</option>
                            </select>
                            <div class="absolute right-3 bottom-4 pointer-events-none text-slate-400">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div class="text-left col-span-2 md:col-span-1">
                        <label class="hidden md:block text-xs font-bold text-transparent uppercase tracking-wider mb-2 ml-1 select-none">Tìm kiếm</label>
                        <button type="submit"
                            class="w-full bg-blue-600 text-white font-bold py-[15px] rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200/50 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            Tìm kiếm
                        </button>
                    </div>
                </form>
            </div>
            </div><!-- /.hero-search-wrapper -->
        </div><!-- /.hero-search-outer -->

    </section><!-- /.hero-banner-section -->

    <!-- Featured Destinations -->
    <section class="pt-16 pb-24 bg-white">
        <div class="container mx-auto px-4">
            <div class="flex items-end justify-between mb-12">
                <div>
                    <h2 class="text-3xl font-bold text-slate-900 mb-2">Điểm đến hàng đầu</h2>
                    <p class="text-slate-500">Khám phá những địa điểm được yêu thích nhất trong mùa này</p>
                </div>
                <a href="<?php echo esc_url(home_url('/destination')); ?>"
                    class="text-blue-600 font-bold hover:underline flex items-center">
                    Xem tất cả <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                <?php
                $dest_ids = get_post_meta(get_the_ID(), '_home_destination_ids', true);
                if ($dest_ids) {
                    $ids = explode(',', $dest_ids);
                    foreach ($ids as $id) {
                        $img_url = wp_get_attachment_image_url($id, 'large');
                        $title = get_the_title($id);
                        $count = get_post_field('post_excerpt', $id) ?: '0 Khách sạn'; // Use Caption for count
                        ?>
                        <a href="<?php echo esc_url(add_query_arg('s', $title, home_url('/rooms'))); ?>" class="group cursor-pointer relative overflow-hidden rounded-2xl h-80 block">
                            <img src="<?php echo esc_url($img_url); ?>"
                                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                            <div class="absolute bottom-6 left-6">
                                <h3 class="text-xl font-bold text-white mb-1"><?php echo esc_html($title); ?></h3>
                                <p class="text-slate-300 text-sm"><?php echo esc_html($count); ?></p>
                            </div>
                        </a>
                        <?php
                    }
                } else {
                    // Default Fallback
                    $defaults = array(
                        array('name' => 'Đà Nẵng', 'img' => 'https://images.unsplash.com/photo-1520260397531-11404e54c05c?auto=format&fit=crop&w=400', 'count' => '124 Khách sạn'),
                        array('name' => 'Phú Quốc', 'img' => 'https://images.unsplash.com/photo-1549144866-d9938c74826f?auto=format&fit=crop&w=400', 'count' => '86 Khách sạn'),
                        array('name' => 'Hội An', 'img' => 'https://images.unsplash.com/photo-1528127269322-539815df45d6?auto=format&fit=crop&w=400', 'count' => '112 Khách sạn'),
                        array('name' => 'Hà Nội', 'img' => 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=400', 'count' => '245 Khách sạn'),
                    );
                    foreach ($defaults as $item) {
                        ?>
                        <a href="<?php echo esc_url(add_query_arg('s', $item['name'], home_url('/rooms'))); ?>" class="group cursor-pointer relative overflow-hidden rounded-2xl h-80 block">
                            <img src="<?php echo $item['img']; ?>"
                                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                            <div class="absolute bottom-6 left-6">
                                <h3 class="text-xl font-bold text-white mb-1"><?php echo $item['name']; ?></h3>
                                <p class="text-slate-300 text-sm"><?php echo $item['count']; ?></p>
                            </div>
                        </a>
                        <?php
                    }
                }
                ?>
            </div>
        </div>
    </section>

    <!-- Premium Rooms Section -->
    <section class="py-24 bg-slate-50">
        <div class="container mx-auto px-4">
            <div class="flex items-end justify-between mb-12">
                <div>
                    <h2 class="text-3xl font-bold text-slate-900 mb-2">Phòng nghỉ sang trọng</h2>
                    <p class="text-slate-500">Trải nghiệm không gian sống đẳng cấp với tiện nghi hiện đại</p>
                </div>
                <a href="<?php echo esc_url(home_url('/rooms')) ?>"
                    class="text-blue-600 font-bold hover:underline flex items-center">
                    Xem tất cả phòng <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <?php
                $rooms_query = new WP_Query(array(
                    'post_type' => 'room',
                    'posts_per_page' => 3,
                ));

                if ($rooms_query->have_posts()):
                    while ($rooms_query->have_posts()):
                        $rooms_query->the_post();
                        $price = get_post_meta(get_the_ID(), '_price', true) ?: 1500000;
                        $room_label = get_post_meta(get_the_ID(), '_room_label', true) ?: 'Lux Room';
                        ?>
                        <div
                            class="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-slate-100">
                            <div class="relative h-64 overflow-hidden">
                                <a href="<?php the_permalink(); ?>" class="block h-full">
                                    <?php if (has_post_thumbnail()): ?>
                                        <?php the_post_thumbnail('large', array('class' => 'w-full h-full object-cover group-hover:scale-110 transition-transform duration-700')); ?>
                                    <?php else: ?>
                                        <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800"
                                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                                    <?php endif; ?>
                                </a>
                                <div
                                    class="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-blue-600 shadow-sm">
                                    Ưu đãi nhất
                                </div>
                            </div>
                            <div class="p-8">
                                <div class="flex items-center gap-2 mb-3">
                                    <div class="flex text-orange-400">
                                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                            </path>
                                        </svg>
                                    </div>
                                    <span
                                        class="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none pt-0.5"><?php echo esc_html($room_label); ?></span>
                                </div>
                                <a href="<?php the_permalink(); ?>">
                                    <h3
                                        class="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                                        <?php the_title(); ?>
                                    </h3>
                                </a>
                                <div class="flex items-center justify-between pt-6 border-t border-slate-100">
                                    <div>
                                        <p class="text-xs text-slate-500 uppercase font-bold tracking-wider mb-1">Giá từ</p>
                                        <p class="text-xl font-bold text-slate-900"><?php echo number_format($price); ?>đ<span
                                                class="text-sm font-normal text-slate-500">/đêm</span></p>
                                    </div>
                                    <a href="<?php the_permalink(); ?>"
                                        class="bg-slate-900 text-white p-3 rounded-xl hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-200">
                                        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M14 5l7 7-7 7M3 12h18"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <?php
                    endwhile;
                    wp_reset_postdata();
                else:
                    ?>
                    <div class="col-span-3 text-center py-20 bg-white rounded-3xl border-2 border-dashed border-slate-200">
                        <div
                            class="w-16 h-16 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
                                </path>
                            </svg>
                        </div>
                        <h3 class="text-lg font-bold text-slate-900 mb-1">Chưa có phòng nghỉ</h3>
                        <p class="text-slate-500">Chúng tôi đang cập nhật thêm các lựa chọn phòng nghỉ sang trọng.</p>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </section>

    <!-- Why Choose Us -->
    <?php
    $why_us_content = get_post_meta(get_the_ID(), '_home_why_us_content', true);
    if (!empty($why_us_content)):
        ?>
        <section class="py-24 bg-white">
            <div class="container mx-auto px-4">
                <div class="prose prose-slate max-w-none">
                    <?php echo apply_filters('the_content', $why_us_content); ?>
                </div>
            </div>
        </section>
    <?php else: ?>
        <section class="py-24 bg-white">
            <div class="container mx-auto px-4">
                <div class="max-w-3xl mx-auto text-center mb-16">
                    <h2 class="text-3xl font-bold text-slate-900 mb-6">Tại sao nên đặt phòng với chúng tôi?</h2>
                    <p class="text-slate-500">Chúng tôi cam kết mang lại giá trị tốt nhất cho kỳ nghỉ của bạn với dịch vụ
                        khách hàng 24/7 và quy trình đặt phòng minh bạch.</p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow text-center">
                        <div
                            class="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                                </path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold mb-4">Giá tốt nhất</h3>
                        <p class="text-slate-500 leading-relaxed">Luôn có các chương trình ưu đãi và giảm giá đặc biệt dành
                            cho thành viên.</p>
                    </div>

                    <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow text-center">
                        <div
                            class="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                                </path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold mb-4">Đặt phòng an toàn</h3>
                        <p class="text-slate-500 leading-relaxed">Mọi thông tin cá nhân và thanh toán đều được mã hóa bảo
                            mật tuyệt đối.</p>
                    </div>

                    <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow text-center">
                        <div
                            class="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z">
                                </path>
                            </svg>
                        </div>
                        <h3 class="text-xl font-bold mb-4">Hỗ trợ 24/7</h3>
                        <p class="text-slate-500 leading-relaxed">Đội ngũ hỗ trợ nhiệt tình, giải quyết mọi vấn đề của bạn
                            bất cứ lúc nào.</p>
                    </div>
                </div>
            </div>
        </section>
    <?php endif; ?>

    <!-- Testimonials & News Section -->
    <section class="flex flex-col md:flex-row min-h-[600px] overflow-hidden py-24">
        <!-- Left: Testimonials -->
        <div class="w-full md:w-[45%] relative py-20 px-8 md:px-16 flex flex-col justify-between overflow-hidden group">
            <!-- Background Image -->
            <div class="absolute inset-0 z-0">
                <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1200"
                    alt="Testimonial Background" class="w-full h-full object-cover">
                <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px]"></div>
            </div>

            <div class="relative z-10">
                <h2 class="text-4xl font-serif italic text-white mb-2">Cảm nhận của khách hàng</h2>
                <p class="text-slate-100 text-lg mb-12">Hãy xem khách hàng nói gì về chúng tôi nhé !</p>

                <!-- Testimonial Card -->
                <div class="bg-white/90 backdrop-blur-sm p-8 rounded-sm shadow-2xl max-w-lg relative">
                    <div class="flex gap-6">
                        <div class="flex-1">
                            <p class="text-slate-600 italic leading-relaxed text-sm">
                                "Tôi và gia đình đã có một kỳ nghỉ tuyệt vời tại đây. Dịch vụ chuyên nghiệp, không gian
                                yên tĩnh và trong lành. Chúng tôi đặc biệt ấn tượng với các món ăn tại nhà hàng, rất
                                tươi ngon và đậm đà hương vị địa phương."
                            </p>
                        </div>
                        <div class="w-24 shrink-0">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150"
                                class="w-full h-24 object-cover rounded-sm shadow-md mb-3">
                            <h4 class="font-bold text-slate-800 text-sm">Elena</h4>
                            <p class="text-blue-600 text-xs font-semibold">Khách du lịch</p>
                        </div>
                    </div>

                    <!-- Slider Dots -->
                    <div class="flex gap-2 mt-8">
                        <div class="w-2 h-2 rounded-full bg-slate-300"></div>
                        <div class="w-2 h-2 rounded-full bg-blue-600"></div>
                        <div class="w-2 h-2 rounded-full bg-slate-300"></div>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div
                class="relative z-10 mt-12 bg-black/60 backdrop-blur-md p-4 -mx-16 px-16 flex items-center justify-between">
                <p class="text-white text-sm">Chúng tôi cảm ơn sự quan tâm và tin tưởng của khách hàng dành cho chúng
                    tôi.</p>
                <div class="bg-white p-2 rounded-md">
                    <img src="<?php echo get_stylesheet_directory_uri(); ?>/assets/images/logo-small.png" alt="Logo"
                        class="h-8" onerror="this.onerror=null; this.src='https://via.placeholder.com/50x50?text=Logo'">
                </div>
            </div>
        </div>

        <!-- Right: Travel Guide -->
        <div class="w-full md:w-[55%] bg-slate-50 py-20 px-8 md:px-16">
            <div class="max-w-2xl">
                <h2 class="text-4xl font-serif italic text-blue-700 mb-4">Cẩm nang du lịch</h2>
                <p class="text-slate-600 mb-12 text-lg leading-relaxed">
                    Hãy cùng chúng tôi khám phá về chuyên mục du lịch, văn hóa, ẩm thực, các sự kiện, lễ hội, những điểm
                    đến hấp dẫn không thể bỏ qua.
                </p>

                <div class="space-y-8">
                    <?php
                    $news_query = new WP_Query(array(
                        'post_type' => 'post',
                        'posts_per_page' => 3,
                    ));

                    if ($news_query->have_posts()):
                        while ($news_query->have_posts()):
                            $news_query->the_post();
                            ?>
                            <article class="flex gap-6 group cursor-pointer">
                                <div class="w-32 h-24 shrink-0 overflow-hidden rounded-sm shadow-sm">
                                    <?php if (has_post_thumbnail()): ?>
                                        <?php the_post_thumbnail('thumbnail', array('class' => 'w-full h-full object-cover group-hover:scale-110 transition-transform duration-500')); ?>
                                    <?php else: ?>
                                        <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=300"
                                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                                    <?php endif; ?>
                                </div>
                                <div class="flex-1">
                                    <h3
                                        class="font-bold text-slate-800 group-hover:text-blue-600 transition-colors mb-1 line-clamp-1">
                                        <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                                    </h3>
                                    <div class="flex items-center gap-2 text-slate-400 text-xs mb-2">
                                        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                            </path>
                                        </svg>
                                        Lượt xem: <?php echo get_post_meta(get_the_ID(), 'post_views_count', true) ?: '0'; ?>
                                    </div>
                                    <p class="text-slate-500 text-sm line-clamp-2 leading-snug">
                                        <?php echo wp_trim_words(get_the_excerpt(), 15); ?>
                                    </p>
                                </div>
                            </article>
                            <?php
                        endwhile;
                        wp_reset_postdata();
                    endif;
                    ?>
                </div>

                <div class="mt-12">
                    <a href="<?php echo get_permalink(get_option('page_for_posts')) ?: home_url('/blog'); ?>"
                        class="inline-flex items-center text-blue-600 font-bold hover:gap-2 transition-all">
                        Xem thêm tất cả <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7">
                            </path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <!-- Page Editor Content -->

    <?php if (have_posts()):
        while (have_posts()):
            the_post(); ?>
            <?php if (!empty(get_the_content())): ?>
                <section class="py-24 bg-slate-50">
                    <div class="container mx-auto px-4">
                        <div class="prose prose-slate max-w-none prose-lg">
                            <?php the_content(); ?>
                        </div>
                    </div>
                </section>
            <?php endif; ?>
        <?php endwhile; endif; ?>
</main>

<script>
    document.addEventListener('DOMContentLoaded', function () {
        const checkInInput = document.getElementById('check-in-date');
        const checkOutInput = document.getElementById('check-out-date');

        if (checkInInput && checkOutInput) {
            // Initialize dates (today and tomorrow)
            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(tomorrow.getDate() + 1);

            // Format to YYYY-MM-DD
            const formatDate = (date) => {
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                return `${year}-${month}-${day}`;
            };

            checkInInput.value = formatDate(today);
            checkOutInput.value = formatDate(tomorrow);

            // Ensure check-out is after check-in
            checkInInput.addEventListener('change', function () {
                const checkIn = new Date(this.value);
                const checkOut = new Date(checkOutInput.value);

                if (checkOut <= checkIn) {
                    const nextDay = new Date(checkIn);
                    nextDay.setDate(nextDay.getDate() + 1);
                    checkOutInput.value = formatDate(nextDay);
                }
            });

            checkOutInput.addEventListener('change', function () {
                const checkIn = new Date(checkInInput.value);
                const checkOut = new Date(this.value);

                if (checkOut <= checkIn) {
                    const prevDay = new Date(checkOut);
                    prevDay.setDate(prevDay.getDate() - 1);
                    checkInInput.value = formatDate(prevDay);
                }
            });
        }

        // Google Maps Autocomplete
        const locationInput = document.getElementById('location-input');
        if (locationInput && typeof google !== 'undefined' && google.maps && google.maps.places) {
            const autocomplete = new google.maps.places.Autocomplete(locationInput, {
                types: ['(cities)'], // Or remove this to search for everything
                componentRestrictions: { country: 'vn' } // Restrict to Vietnam
            });

            // Prevent form submission on Enter when selecting from dropdown
            locationInput.addEventListener('keydown', function (e) {
                if (e.key === 'Enter' && document.querySelector('.pac-container:not([style*="display: none"])')) {
                    e.preventDefault();
                }
            });
        }

        // ===== Dynamic Hero Banner Initialization =====

        // Always trigger text animation on load (regardless of Swiper)
        function triggerTextAnim() {
            const block = document.getElementById('hero-text-block');
            if (block) {
                block.classList.remove('banner-text-visible');
                void block.offsetWidth; // force reflow
                block.classList.add('banner-text-visible');
            }
        }

        // Trigger immediately on page load
        setTimeout(triggerTextAnim, 150);

        if (typeof Swiper !== 'undefined') {
            const heroAutoplayDelay = 5000;

            // Count real slides (not duplicates)
            const realSlideCount = document.querySelectorAll('.main-hero-swiper .swiper-slide').length;
            const useLoop = realSlideCount > 1;

            const heroSwiper = new Swiper('.main-hero-swiper', {
                loop: useLoop,
                speed: 1200,
                autoplay: useLoop ? {
                    delay: heroAutoplayDelay,
                    disableOnInteraction: false,
                } : false,
                effect: 'fade',
                fadeEffect: { crossFade: true },
                allowTouchMove: useLoop,
                grabCursor: useLoop,
                navigation: useLoop ? {
                    prevEl: '#hero-prev',
                    nextEl: '#hero-next',
                } : false,
                on: {
                    init: function() {
                        updateHeroUI(this);
                        if (useLoop) {
                            startHeroProgress();
                        }
                        // Hide nav arrows if only 1 slide
                        if (!useLoop) {
                            document.getElementById('hero-prev') && (document.getElementById('hero-prev').style.display = 'none');
                            document.getElementById('hero-next') && (document.getElementById('hero-next').style.display = 'none');
                            document.getElementById('hero-pagination') && (document.getElementById('hero-pagination').style.display = 'none');
                            document.getElementById('hero-counter') && (document.getElementById('hero-counter').style.display = 'none');
                            document.getElementById('hero-progress') && (document.getElementById('hero-progress').style.display = 'none');
                        }
                    },
                    slideChangeTransitionStart: function() {
                        const block = document.getElementById('hero-text-block');
                        if (block) block.classList.remove('banner-text-visible');
                        resetHeroProgress();
                    },
                    slideChangeTransitionEnd: function() {
                        updateHeroUI(this);
                        startHeroProgress();
                        triggerTextAnim();
                    }
                }
            });

            // Build pagination dots
            function buildPagination(swiper) {
                const pag = document.getElementById('hero-pagination');
                if (!pag) return;
                const slideCount = document.querySelectorAll('.main-hero-swiper .swiper-slide:not(.swiper-slide-duplicate)').length;
                pag.innerHTML = '';
                for (let i = 0; i < slideCount; i++) {
                    const dot = document.createElement('div');
                    dot.className = 'hero-dot' + (i === 0 ? ' active' : '');
                    dot.dataset.index = i;
                    dot.addEventListener('click', function() {
                        heroSwiper.slideToLoop(parseInt(this.dataset.index));
                    });
                    pag.appendChild(dot);
                }
            }

            function updatePagination(swiper) {
                const dots = document.querySelectorAll('.hero-dot');
                const realIdx = swiper.realIndex;
                dots.forEach((d, i) => {
                    d.classList.toggle('active', i === realIdx);
                });
            }

            function updateHeroUI(swiper) {
                const current = document.getElementById('hero-current');
                const total = document.getElementById('hero-total');
                const slideCount = document.querySelectorAll('.main-hero-swiper .swiper-slide:not(.swiper-slide-duplicate)').length;
                if (current) current.textContent = String(swiper.realIndex + 1).padStart(2, '0');
                if (total) total.textContent = String(slideCount).padStart(2, '0');
                const pag = document.getElementById('hero-pagination');
                if (pag && pag.children.length === 0) buildPagination(swiper);
                updatePagination(swiper);
            }

            // Progress bar
            let progressTimeout;
            function startHeroProgress() {
                const bar = document.getElementById('hero-progress');
                if (!bar) return;
                bar.style.transition = 'none';
                bar.style.width = '0%';
                clearTimeout(progressTimeout);
                progressTimeout = setTimeout(() => {
                    bar.style.transition = 'width ' + heroAutoplayDelay + 'ms linear';
                    bar.style.width = '100%';
                }, 50);
            }

            function resetHeroProgress() {
                const bar = document.getElementById('hero-progress');
                if (!bar) return;
                bar.style.transition = 'none';
                bar.style.width = '0%';
                clearTimeout(progressTimeout);
            }

            // Pause on hover
            const heroSection = document.getElementById('hero-banner');
            if (heroSection && useLoop) {
                heroSection.addEventListener('mouseenter', () => {
                    heroSwiper.autoplay.stop();
                    resetHeroProgress();
                });
                heroSection.addEventListener('mouseleave', () => {
                    heroSwiper.autoplay.start();
                    startHeroProgress();
                });
            }
        }
    });
</script>

<?php get_footer(); ?>