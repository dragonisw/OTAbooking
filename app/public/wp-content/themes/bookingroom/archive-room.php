<?php get_header(); ?>

<main class="bg-slate-50 min-h-screen pb-20">
    <!-- Header Section -->
    <section class="relative py-24 bg-slate-900 overflow-hidden">
        <div class="absolute inset-0 opacity-40">
            <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000" class="w-full h-full object-cover">
        </div>
        <div class="container mx-auto px-4 relative z-10 text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">Danh sách phòng nghỉ</h1>
            <nav class="flex justify-center items-center text-slate-300 text-sm gap-2 animate-fade-in-up" style="animation-delay: 0.1s">
                <a href="<?php echo home_url(); ?>" class="hover:text-white transition-colors">Trang chủ</a>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span class="text-white font-medium">Phòng nghỉ</span>
            </nav>
        </div>
    </s    <!-- Filter & List Section -->
    <div class="container mx-auto px-4 -mt-10 relative z-20">
        <?php
        $check_in = isset($_GET['check_in']) ? sanitize_text_field($_GET['check_in']) : '';
        $check_out = isset($_GET['check_out']) ? sanitize_text_field($_GET['check_out']) : '';
        $adults = isset($_GET['adults']) ? intval($_GET['adults']) : 2;
        $children = isset($_GET['children']) ? intval($_GET['children']) : 0;
        
        $has_dates = !empty($check_in) && !empty($check_out);
        $nights = 0;
        if ($has_dates) {
            $check_in_time = strtotime($check_in);
            $check_out_time = strtotime($check_out);
            if ($check_out_time > $check_in_time) {
                $nights = round(($check_out_time - $check_in_time) / 86400);
            } else {
                $nights = 1;
            }
        }
        ?>

        <?php if ($has_dates) : ?>
            <!-- STEP 2 LAYOUT: POSHANU RESORT STYLE -->
            <div class="bg-white rounded-3xl border border-slate-200 p-6 md:p-10 mb-10 shadow-sm">
                <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-slate-100 pb-8 mb-8">
                    <div class="space-y-4 flex-1">
                        <h2 class="text-2xl font-bold text-slate-900 tracking-tight uppercase">THÔNG TIN ĐẶT PHÒNG (BƯỚC 2)</h2>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3.5 text-sm md:text-base">
                            <div class="flex items-center gap-2">
                                <span class="text-slate-400 font-bold w-36 uppercase text-xs">SỐ ĐIỆN THOẠI</span>
                                <strong class="text-slate-800 font-semibold"><?php echo esc_html(get_theme_mod('bookingroom_hotline', '(84-252) 381 2233')); ?></strong>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="text-slate-400 font-bold w-36 uppercase text-xs">EMAIL</span>
                                <strong class="text-slate-800 font-semibold"><?php echo esc_html(get_theme_mod('bookingroom_email', 'reservation@poshanuresort.com.vn')); ?></strong>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="text-slate-400 font-bold w-36 uppercase text-xs">NGÀY ĐẾN</span>
                                <strong class="text-slate-800 font-semibold"><?php echo date('d/m/Y', $check_in_time); ?></strong>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="text-slate-400 font-bold w-36 uppercase text-xs">NGÀY ĐI</span>
                                <strong class="text-slate-800 font-semibold"><?php echo date('d/m/Y', $check_out_time); ?></strong>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="text-slate-400 font-bold w-36 uppercase text-xs">SỐ ĐÊM</span>
                                <strong class="text-[#d35400] font-bold"><?php echo $nights; ?> đêm</strong>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type="button" id="toggle-date-form-btn" class="w-full lg:w-auto bg-[#d35400] hover:bg-[#b84300] text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-md shadow-orange-700/10 flex items-center justify-center gap-2 group">
                            <svg class="w-4 h-4 transition-transform group-hover:rotate-180 duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            Thay đổi ngày
                        </button>
                    </div>
                </div>

                <!-- Collapsible Form -->
                <div id="date-change-form" class="hidden mt-6 bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200 animate-fade-in-up">
                    <form method="GET" action="" class="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                        <div>
                            <label class="block text-xs font-bold text-slate-700 uppercase mb-2">Ngày đến</label>
                            <input type="date" name="check_in" value="<?php echo esc_attr($check_in); ?>" required class="w-full bg-white border border-slate-300 rounded-xl py-3 px-4 focus:ring-2 focus:ring-[#d35400] outline-none text-slate-800 font-medium">
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-slate-700 uppercase mb-2">Ngày đi</label>
                            <input type="date" name="check_out" value="<?php echo esc_attr($check_out); ?>" required class="w-full bg-white border border-slate-300 rounded-xl py-3 px-4 focus:ring-2 focus:ring-[#d35400] outline-none text-slate-800 font-medium">
                        </div>
                        <div class="grid grid-cols-2 gap-2">
                            <div>
                                <label class="block text-xs font-bold text-slate-700 uppercase mb-2">Người lớn</label>
                                <select name="adults" class="w-full bg-white border border-slate-300 rounded-xl py-3 px-3 focus:ring-2 focus:ring-[#d35400] outline-none text-slate-800 font-medium">
                                    <?php for($i=1; $i<=6; $i++): ?>
                                        <option value="<?php echo $i; ?>" <?php selected($adults, $i); ?>><?php echo $i; ?></option>
                                    <?php endfor; ?>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-slate-700 uppercase mb-2">Trẻ em</label>
                                <select name="children" class="w-full bg-white border border-slate-300 rounded-xl py-3 px-3 focus:ring-2 focus:ring-[#d35400] outline-none text-slate-800 font-medium">
                                    <?php for($i=0; $i<=6; $i++): ?>
                                        <option value="<?php echo $i; ?>" <?php selected($children, $i); ?>><?php echo $i; ?></option>
                                    <?php endfor; ?>
                                </select>
                            </div>
                        </div>
                        <div>
                            <button type="submit" class="w-full bg-[#d35400] hover:bg-[#b84300] text-white font-bold py-3.5 px-6 rounded-xl transition-all duration-300 shadow-md shadow-orange-700/10">
                                Áp dụng thay đổi
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <!-- TABLE OF ROOMS -->
            <div class="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 p-6 md:p-12 border border-slate-100">
                <h3 class="text-xl md:text-2xl font-bold text-slate-900 mb-8 pb-4 border-b border-slate-100 uppercase tracking-tight">
                    DANH SÁCH THÔNG TIN PHÒNG THEO NGÀY QUÝ KHÁCH CHỌN
                </h3>

                <!-- Desktop Table -->
                <div class="hidden md:block overflow-x-auto">
                    <table class="w-full border-collapse border border-slate-100 rounded-2xl overflow-hidden">
                        <thead>
                            <tr class="bg-[#d35400] text-white text-sm">
                                <th class="py-4 px-6 text-left font-bold uppercase tracking-wider w-[15%]">Hình ảnh</th>
                                <th class="py-4 px-6 text-left font-bold uppercase tracking-wider w-[40%]">Tên phòng</th>
                                <th class="py-4 px-6 text-right font-bold uppercase tracking-wider w-[15%]">Giá phòng/Đêm</th>
                                <th class="py-4 px-6 text-center font-bold uppercase tracking-wider w-[10%]">Sức chứa</th>
                                <th class="py-4 px-6 text-center font-bold uppercase tracking-wider w-[10%]">Phòng trống</th>
                                <th class="py-4 px-6 text-center font-bold uppercase tracking-wider w-[10%]">Book</th>
                            </tr>
                        </thead>
                        <tbody class="divide-y divide-slate-100 bg-white">
                            <?php
                            if (have_posts()) :
                                while (have_posts()) : the_post();
                                    $price = get_post_meta(get_the_ID(), '_price', true) ?: 1500000;
                                    $capacity = get_post_meta(get_the_ID(), '_capacity', true) ?: '2';
                                    $capacity_text = is_numeric($capacity) ? $capacity . ' người' : $capacity;
                                    $available_rooms = bookingroom_get_available_rooms(get_the_ID(), $check_in, $check_out);
                            ?>
                                <tr class="hover:bg-slate-50/50 transition-colors">
                                    <td class="py-5 px-6">
                                        <div class="w-28 h-20 rounded-xl overflow-hidden shadow-sm group">
                                            <a href="<?php the_permalink(); ?>?check_in=<?php echo esc_attr($check_in); ?>&check_out=<?php echo esc_attr($check_out); ?>" class="block h-full">
                                                <?php if (has_post_thumbnail()) : ?>
                                                    <?php the_post_thumbnail('medium', array('class' => 'w-full h-full object-cover group-hover:scale-110 transition-transform duration-500')); ?>
                                                <?php else : ?>
                                                    <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=300" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                                                <?php endif; ?>
                                            </a>
                                        </div>
                                    </td>
                                    <td class="py-5 px-6">
                                        <a href="<?php the_permalink(); ?>?check_in=<?php echo esc_attr($check_in); ?>&check_out=<?php echo esc_attr($check_out); ?>" class="font-bold text-slate-800 text-lg hover:text-[#d35400] transition-colors block">
                                            <?php the_title(); ?>
                                        </a>
                                        <p class="text-xs text-slate-500 mt-1"><?php echo wp_trim_words(get_the_excerpt(), 15, '...'); ?></p>
                                    </td>
                                    <td class="py-5 px-6 text-right font-bold text-slate-900 text-base">
                                        <?php echo number_format($price); ?>đ
                                    </td>
                                    <td class="py-5 px-6 text-center text-slate-600 font-medium">
                                        <?php echo esc_html($capacity_text); ?>
                                    </td>
                                    <td class="py-5 px-6 text-center font-bold <?php echo $available_rooms > 0 ? 'text-blue-600' : 'text-red-500'; ?>">
                                        <?php echo $available_rooms; ?>
                                    </td>
                                    <td class="py-5 px-6 text-center">
                                        <?php if ($available_rooms > 0) : ?>
                                            <a href="<?php the_permalink(); ?>?check_in=<?php echo esc_attr($check_in); ?>&check_out=<?php echo esc_attr($check_out); ?>" class="inline-block bg-[#d35400] hover:bg-[#b84300] text-white font-bold py-2 px-6 rounded-lg text-sm transition-all shadow-md shadow-orange-700/10">
                                                Chọn
                                            </a>
                                        <?php else : ?>
                                            <span class="inline-block bg-slate-200 text-slate-400 font-bold py-2 px-6 rounded-lg text-sm cursor-not-allowed">
                                                Hết phòng
                                            </span>
                                        <?php endif; ?>
                                    </td>
                                </tr>
                            <?php endwhile; else: ?>
                                <tr>
                                    <td colspan="6" class="py-12 text-center text-slate-500">
                                        Không tìm thấy phòng nghỉ nào phù hợp.
                                    </td>
                                </tr>
                            <?php endif; ?>
                        </tbody>
                    </table>
                </div>

                <!-- Mobile Card Layout -->
                <div class="block md:hidden space-y-6">
                    <?php
                    if (have_posts()) :
                        while (have_posts()) : the_post();
                            $price = get_post_meta(get_the_ID(), '_price', true) ?: 1500000;
                            $capacity = get_post_meta(get_the_ID(), '_capacity', true) ?: '2';
                            $capacity_text = is_numeric($capacity) ? $capacity . ' người' : $capacity;
                            $available_rooms = bookingroom_get_available_rooms(get_the_ID(), $check_in, $check_out);
                    ?>
                        <div class="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden group">
                            <div class="relative h-48 overflow-hidden">
                                <a href="<?php the_permalink(); ?>?check_in=<?php echo esc_attr($check_in); ?>&check_out=<?php echo esc_attr($check_out); ?>" class="block h-full">
                                    <?php if (has_post_thumbnail()) : ?>
                                        <?php the_post_thumbnail('medium_large', array('class' => 'w-full h-full object-cover group-hover:scale-110 transition-transform duration-500')); ?>
                                    <?php else : ?>
                                        <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=600" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                                    <?php endif; ?>
                                </a>
                            </div>
                            <div class="p-6 space-y-4">
                                <div>
                                    <a href="<?php the_permalink(); ?>?check_in=<?php echo esc_attr($check_in); ?>&check_out=<?php echo esc_attr($check_out); ?>" class="font-bold text-slate-800 text-xl hover:text-[#d35400] transition-colors block">
                                        <?php the_title(); ?>
                                    </a>
                                    <p class="text-xs text-slate-500 mt-1"><?php echo wp_trim_words(get_the_excerpt(), 12, '...'); ?></p>
                                </div>
                                
                                <div class="grid grid-cols-2 gap-4 py-3 border-y border-slate-100 text-sm">
                                    <div>
                                        <span class="text-slate-400 block text-xs">Giá phòng/Đêm</span>
                                        <strong class="text-slate-900 text-base"><?php echo number_format($price); ?>đ</strong>
                                    </div>
                                    <div>
                                        <span class="text-slate-400 block text-xs">Sức chứa</span>
                                        <strong class="text-slate-700"><?php echo esc_html($capacity_text); ?></strong>
                                    </div>
                                </div>
                                
                                <div class="flex items-center justify-between">
                                    <div>
                                        <span class="text-slate-400 text-xs block">Phòng trống</span>
                                        <strong class="<?php echo $available_rooms > 0 ? 'text-blue-600' : 'text-red-500'; ?>"><?php echo $available_rooms; ?> phòng</strong>
                                    </div>
                                    <div>
                                        <?php if ($available_rooms > 0) : ?>
                                            <a href="<?php the_permalink(); ?>?check_in=<?php echo esc_attr($check_in); ?>&check_out=<?php echo esc_attr($check_out); ?>" class="inline-block bg-[#d35400] hover:bg-[#b84300] text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-all shadow-md shadow-orange-700/10">
                                                Chọn phòng
                                            </a>
                                        <?php else : ?>
                                            <span class="inline-block bg-slate-200 text-slate-400 font-bold py-2.5 px-6 rounded-xl text-sm cursor-not-allowed">
                                                Hết phòng
                                            </span>
                                        <?php endif; ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    <?php endwhile; endif; ?>
                </div>
            </div>

        <?php else : ?>
            <!-- STANDARD LAYOUT WITH NOTIFICATION BANNER -->
            <div class="bg-gradient-to-r from-orange-500 to-[#d35400] text-white rounded-[2rem] p-8 md:p-12 mb-12 shadow-xl shadow-orange-500/10 relative overflow-hidden">
                <div class="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-x-12 translate-y-12">
                    <svg class="w-96 h-96" fill="currentColor" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                </div>
                
                <div class="relative z-10 max-w-2xl space-y-4">
                    <span class="bg-white/20 backdrop-blur px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Đặt phòng trực tuyến</span>
                    <h2 class="text-3xl md:text-4xl font-bold tracking-tight leading-tight">Tìm phòng nghỉ hoàn hảo cho kỳ nghỉ của bạn</h2>
                    <p class="text-white/80 text-sm md:text-base">Vui lòng nhập ngày nhận phòng và ngày trả phòng mong muốn để kiểm tra giá phòng chính xác nhất, tình trạng phòng trống và tiến hành đặt phòng nghỉ ngay lập tức.</p>
                </div>
                
                <!-- Inline Date Picker Form -->
                <div class="mt-8 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
                    <form method="GET" action="" class="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                        <div>
                            <label class="block text-xs font-bold text-white uppercase mb-2">Ngày đến</label>
                            <input type="date" name="check_in" id="main_check_in" required class="w-full bg-white border border-transparent rounded-xl py-3.5 px-4 focus:ring-2 focus:ring-orange-300 outline-none text-slate-800 font-medium">
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-white uppercase mb-2">Ngày đi</label>
                            <input type="date" name="check_out" id="main_check_out" required class="w-full bg-white border border-transparent rounded-xl py-3.5 px-4 focus:ring-2 focus:ring-orange-300 outline-none text-slate-800 font-medium">
                        </div>
                        <div class="grid grid-cols-2 gap-2">
                            <div>
                                <label class="block text-xs font-bold text-white uppercase mb-2">Người lớn</label>
                                <select name="adults" class="w-full bg-white border border-transparent rounded-xl py-3.5 px-3 focus:ring-2 focus:ring-orange-300 outline-none text-slate-800 font-medium">
                                    <?php for($i=1; $i<=6; $i++): ?>
                                        <option value="<?php echo $i; ?>" <?php selected($i, 2); ?>><?php echo $i; ?></option>
                                    <?php endfor; ?>
                                </select>
                            </div>
                            <div>
                                <label class="block text-xs font-bold text-white uppercase mb-2">Trẻ em</label>
                                <select name="children" class="w-full bg-white border border-transparent rounded-xl py-3.5 px-3 focus:ring-2 focus:ring-orange-300 outline-none text-slate-800 font-medium">
                                    <?php for($i=0; $i<=6; $i++): ?>
                                        <option value="<?php echo $i; ?>"><?php echo $i; ?></option>
                                    <?php endfor; ?>
                                </select>
                            </div>
                        </div>
                        <div>
                            <button type="submit" class="w-full bg-[#d35400] hover:bg-[#b84300] text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg border border-orange-600/20 hover:scale-[1.02]">
                                Kiểm tra phòng trống
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <!-- Standard Category Filtering & Grid -->
            <div class="bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 p-6 md:p-12 border border-slate-100">
                <!-- Category Filter Tabs -->
                <div class="flex flex-wrap items-center justify-center gap-3 mb-16" id="room-filters">
                    <button data-filter="all" class="px-10 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 shadow-lg filter-btn active-filter">
                        Tất cả
                    </button>
                    <?php
                    $categories = get_terms(array(
                        'taxonomy' => 'room_category',
                        'hide_empty' => true,
                    ));
                    if (!empty($categories) && !is_wp_error($categories)) :
                        foreach ($categories as $cat) :
                    ?>
                        <button data-filter="<?php echo esc_attr($cat->slug); ?>" class="px-10 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 shadow-sm border border-slate-100 bg-slate-50 text-slate-600 hover:bg-white hover:border-blue-600 hover:text-blue-600 hover:shadow-xl filter-btn">
                            <?php echo esc_html($cat->name); ?>
                        </button>
                    <?php endforeach; endif; ?>
                </div>

                <!-- Room Grid -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10" id="room-grid">
                    <?php
                    if (have_posts()) :
                        while (have_posts()) : the_post();
                            $price = get_post_meta(get_the_ID(), '_price', true) ?: 1500000;
                            $room_label = get_post_meta(get_the_ID(), '_room_label', true) ?: 'Phòng nghỉ';
                            $capacity = get_post_meta(get_the_ID(), '_capacity', true) ?: '2 Khách';
                            $terms = get_the_terms(get_the_ID(), 'room_category');
                            $term_slugs = $terms ? array_map(function($t) { return $t->slug; }, $terms) : array();
                    ?>
                        <div class="room-item bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group border border-slate-100" data-category='<?php echo json_encode($term_slugs); ?>'>
                            <div class="relative h-72 overflow-hidden">
                                <a href="<?php the_permalink(); ?>" class="block h-full">
                                    <?php if (has_post_thumbnail()) : ?>
                                        <?php the_post_thumbnail('large', array('class' => 'w-full h-full object-cover group-hover:scale-110 transition-transform duration-700')); ?>
                                    <?php else : ?>
                                        <img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                                    <?php endif; ?>
                                </a>
                                
                                <!-- Category Badge -->
                                <div class="absolute top-5 left-5 flex flex-wrap gap-2">
                                    <?php if ($terms) : foreach ($terms as $term) : ?>
                                        <span class="bg-blue-600/90 backdrop-blur-md text-white text-[10px] uppercase font-bold px-4 py-1.5 rounded-full shadow-lg">
                                            <?php echo esc_html($term->name); ?>
                                        </span>
                                    <?php endforeach; endif; ?>
                                </div>

                                <!-- Price Floating -->
                                <div class="absolute bottom-5 right-5 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-white/20">
                                    <p class="text-sm font-bold text-slate-900"><?php echo number_format($price); ?>đ <span class="text-[10px] text-slate-500 font-medium">/ đêm</span></p>
                                </div>
                            </div>

                            <div class="p-8">
                                <a href="<?php the_permalink(); ?>">
                                    <h3 class="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight"><?php the_title(); ?></h3>
                                </a>
                                <div class="flex items-center gap-4 text-slate-500 text-sm mb-6">
                                    <span class="flex items-center gap-1.5">
                                        <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                                        <?php echo esc_html($room_label); ?>
                                    </span>
                                    <span class="flex items-center gap-1.5">
                                        <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                                        <?php echo esc_html($capacity); ?>
                                    </span>
                                </div>

                                <a href="<?php the_permalink(); ?>" class="block w-full text-center bg-slate-50 text-slate-900 py-4 rounded-2xl font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 border border-slate-100 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-200/50">
                                    Xem chi tiết
                                </a>
                            </div>
                        </div>
                    <?php endwhile; else: ?>
                        <div class="col-span-1 md:col-span-2 lg:col-span-3 text-center py-24 bg-slate-50 rounded-[2rem] border-2 border-dashed border-slate-200">
                             <div class="w-24 h-24 bg-white text-slate-300 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
                                <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                             </div>
                             <h3 class="text-2xl font-bold text-slate-900 mb-2">Đang cập nhật phòng...</h3>
                             <p class="text-slate-500 max-w-sm mx-auto">Chúng tôi hiện đang bổ sung thêm các lựa chọn phòng nghỉ mới. Vui lòng quay lại sớm!</p>
                             <div class="mt-8">
                                 <a href="<?php echo esc_url(home_url('/')); ?>" class="text-blue-600 font-bold hover:underline inline-flex items-center gap-2">
                                     Quay về Trang chủ <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                 </a>
                             </div>
                        </div>
                    <?php endif; ?>
                </div>
            </div>
        <?php endif; ?>
    </div>
</main>

<style>
.active-filter {
    background-color: #2563eb !important; /* blue-600 */
    color: white !important;
    box-shadow: 0 10px 15px -3px rgba(37, 99, 235, 0.2), 0 4px 6px -2px rgba(37, 99, 235, 0.1) !important;
}
.room-item {
    transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1), 
                transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
@keyframes fade-in-up {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
.animate-fade-in-up {
    animation: fade-in-up 0.5s ease-out forwards;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
    // 1. Handling Date Toggler for Step 2
    const toggleBtn = document.getElementById('toggle-date-form-btn');
    const collapsibleForm = document.getElementById('date-change-form');
    
    if (toggleBtn && collapsibleForm) {
        toggleBtn.addEventListener('click', function() {
            collapsibleForm.classList.toggle('hidden');
        });
    }

    // 2. Main dates in the banner picker are left empty by default
    const checkInInput = document.getElementById('main_check_in');
    const checkOutInput = document.getElementById('main_check_out');
    if (checkInInput && checkOutInput) {
        checkInInput.addEventListener('change', function() {
            const start = new Date(this.value);
            const end = new Date(checkOutInput.value);
            if (start && end && start >= end && !isNaN(start.getTime()) && !isNaN(end.getTime())) {
                const newEnd = new Date(start);
                newEnd.setDate(newEnd.getDate() + 1);
                checkOutInput.valueAsDate = newEnd;
            }
        });
    }

    // 3. Original Filtering logic for grid layout
    const filterBtns = document.querySelectorAll('.filter-btn');
    const roomItems = document.querySelectorAll('.room-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active-filter'));
            this.classList.add('active-filter');

            // Filtering with animation
            roomItems.forEach(item => {
                const categories = JSON.parse(item.getAttribute('data-category'));
                
                if (filter === 'all' || categories.includes(filter)) {
                    item.style.display = 'block';
                    // Trigger reflow for animation
                    item.offsetHeight; 
                    item.style.opacity = '1';
                    item.style.transform = 'scale(1)';
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 400);
                }
            });
        });
    });
});
</script>

<?php get_footer(); ?>
