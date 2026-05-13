<?php /* Template Name: trang chủ*/ ?>
<?php get_header(); ?>

<main>
    <!-- Hero Section with Swiper Slider -->
    <section class="relative min-h-[550px] md:h-[650px] overflow-hidden transition-all duration-300">
        <?php
        $banner_ids = get_post_meta(get_the_ID(), '_home_banner_ids', true);
        $banners = $banner_ids ? explode(',', $banner_ids) : array();
        ?>
        
        <div class="swiper main-hero-swiper h-full w-full">
            <div class="swiper-wrapper">
                <?php if (!empty($banners)): ?>
                    <?php foreach ($banners as $id): ?>
                        <div class="swiper-slide relative">
                            <?php $img_url = wp_get_attachment_image_url($id, 'full'); ?>
                            <img src="<?php echo esc_url($img_url); ?>" alt="Banner" class="w-full h-full object-cover">
                            <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-[1px]"></div>
                        </div>
                    <?php endforeach; ?>
                <?php else: ?>
                    <!-- Default Fallback Banner -->
                    <div class="swiper-slide relative">
                        <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=2000"
                            alt="Luxury Hotel" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-slate-900/40 backdrop-blur-[2px]"></div>
                    </div>
                <?php endif; ?>
            </div>
        </div>

        <div class="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
            <div class="container mx-auto px-4 text-center pointer-events-auto pt-24 md:pt-12">
                <?php
                $hero_title = get_post_meta(get_the_ID(), '_home_hero_title', true) ?: 'Khám phá Kỳ nghỉ <br><span class="text-blue-400">Hoàn hảo</span> của Bạn';
                $hero_subtitle = get_post_meta(get_the_ID(), '_home_hero_subtitle', true) ?: 'Hơn 500.000 khách sạn và resort sang trọng trên toàn thế giới đang chờ đón bạn với giá ưu đãi nhất.';
                ?>
                <h1 class="text-3xl sm:text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6 animate-fade-in-up drop-shadow-lg leading-tight">
                    <?php echo $hero_title; ?>
                </h1>
                <div class="text-base md:text-xl text-slate-100 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed opacity-90 drop-shadow-md px-4">
                    <?php echo $hero_subtitle; ?>
                </div>

                <!-- Search Bar -->
                <div class="bg-white p-5 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl max-w-[1400px] mx-auto pointer-events-auto mt-4">
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
                            <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Địa
                                điểm</label>
                            <div class="relative">
                                <input type="text" id="location-input" name="s" placeholder="Bạn muốn đi đâu?"
                                    class="w-full bg-slate-50 border-none rounded-xl py-3.5 pl-4 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all">
                            </div>
                        </div>

                        <div class="text-left col-span-1">
                            <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Nhận
                                phòng</label>
                            <input type="date" id="check-in-date"
                                name="<?php echo ($use_external === 'yes') ? 'checkin' : 'check_in'; ?>"
                                class="w-full bg-slate-50 border-none rounded-xl py-3.5 px-4 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all">
                        </div>


                        <div class="text-left col-span-1">
                            <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Trả
                                phòng</label>
                            <input type="date" id="check-out-date"
                                name="<?php echo ($use_external === 'yes') ? 'checkout' : 'check_out'; ?>"
                                class="w-full bg-slate-50 border-none rounded-xl py-3.5 px-4 focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all">
                        </div>


                        <div class="text-left col-span-1">
                            <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Người
                                lớn</label>
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
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div class="text-left col-span-1">
                            <label class="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2 ml-1">Trẻ
                                em</label>
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
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div class="text-left col-span-2 md:col-span-1">
                            <label
                                class="hidden md:block text-xs font-bold text-transparent uppercase tracking-wider mb-2 ml-1 select-none">Tìm
                                kiếm</label>
                            <button type="submit"
                                class="w-full bg-blue-600 text-white font-bold py-[15px] rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200/50 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                Tìm kiếm
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Destinations -->
    <section class="py-24 bg-white">
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
                                        Lượt xem: <?php echo rand(1000, 9999); // Placeholder for views ?>
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

        // Initialize Swiper for Hero Banner
        if (typeof Swiper !== 'undefined') {
            new Swiper('.main-hero-swiper', {
                loop: true,
                speed: 1500,
                autoplay: {
                    delay: 5000,
                    disableOnInteraction: false,
                },
                effect: 'fade',
                fadeEffect: {
                    crossFade: true
                }
            });
        }
    });
</script>

<?php get_footer(); ?>