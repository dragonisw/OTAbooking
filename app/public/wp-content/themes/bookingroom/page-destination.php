<?php /* Template Name: Destinations */ ?>
<?php get_header(); ?>

<main class="bg-slate-50 min-h-screen">
    <!-- Header -->
    <section class="bg-white border-b border-slate-200">
        <div class="container mx-auto px-4 py-16 text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Khám phá các Điểm đến</h1>
            <p class="text-slate-500 max-w-2xl mx-auto">Tìm kiếm khách sạn tuyệt vời tại những thành phố du lịch hàng
                đầu Việt Nam và thế giới.</p>
        </div>
    </section>

    <!-- Grid -->
    <section class="py-16">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <?php
                $dest_ids = get_post_meta(get_the_ID(), '_home_destination_ids', true);
                $destinations = array();

                if ($dest_ids) {
                    $ids = explode(',', $dest_ids);
                    foreach ($ids as $id) {
                        $destinations[] = array(
                            'name' => get_the_title($id),
                            'image' => wp_get_attachment_image_url($id, 'large'),
                            'count' => get_post_field('post_excerpt', $id) ?: '0'
                        );
                    }
                } else {
                    // Fallback to mock data
                    $destinations = array(
                        array('name' => 'Đà Nẵng', 'image' => 'https://images.unsplash.com/photo-1520260397531-11404e54c05c?auto=format&fit=crop&w=600', 'count' => 124),
                        array('name' => 'Phú Quốc', 'image' => 'https://images.unsplash.com/photo-1549144866-d9938c74826f?auto=format&fit=crop&w=600', 'count' => 86),
                        array('name' => 'Hội An', 'image' => 'https://images.unsplash.com/photo-1528127269322-539815df45d6?auto=format&fit=crop&w=600', 'count' => 112),
                        array('name' => 'Hà Nội', 'image' => 'https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=600', 'count' => 245),
                        array('name' => 'Sapa', 'image' => 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=600', 'count' => 45),
                        array('name' => 'Nha Trang', 'image' => 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=600', 'count' => 92),
                    );
                }

                foreach ($destinations as $dest): ?>
                    <div
                        class="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 relative">
                        <div class="relative h-64 overflow-hidden">
                            <img src="<?php echo $dest['image']; ?>" alt="<?php echo $dest['name']; ?>"
                                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                            <div class="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-colors">
                            </div>
                        </div>
                        <div class="p-8">
                            <h3 class="text-2xl font-bold text-slate-900 mb-1"><?php echo $dest['name']; ?></h3>
                            <p class="text-slate-500 mb-6"><?php echo (strpos($dest['count'], 'Khách sạn') !== false) ? $dest['count'] : $dest['count'] . ' Khách sạn có sẵn'; ?></p>
                            <a href="<?php echo esc_url(add_query_arg('s', $dest['name'], home_url('/rooms'))); ?>"
                                class="inline-flex items-center text-blue-600 font-bold hover:space-x-2 transition-all after:absolute after:inset-0">
                                <span>Khám phá ngay</span>
                                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>