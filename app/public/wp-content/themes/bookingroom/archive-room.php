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
    </section>

    <!-- Filter & List Section -->
    <div class="container mx-auto px-4 -mt-10 relative z-20">
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
                <?php
                    endwhile;
                ?>

                    <?php else : ?>
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
    animation: fade-in-up 0.8s ease-out forwards;
}
</style>

<script>
document.addEventListener('DOMContentLoaded', function() {
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
