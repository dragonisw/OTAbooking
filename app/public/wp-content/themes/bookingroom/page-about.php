<?php /* Template Name: About Us */ ?>
<?php get_header(); ?>

<main class="bg-white overflow-hidden">
    <!-- Hero Section -->
    <section class="relative py-32 bg-slate-900 overflow-hidden">
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?auto=format&fit=crop&q=80&w=2000"
                alt="Travel with Sonata" class="w-full h-full object-cover opacity-30">
            <div class="absolute inset-0 bg-gradient-to-b from-slate-900/50 to-slate-900"></div>
        </div>

        <div class="container mx-auto px-4 relative z-10">
            <div class="max-w-3xl">
                <h1 class="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
                    <?php echo get_post_meta(get_the_ID(), '_about_hero_title', true) ?: 'Về <span class="text-blue-500">Sonata</span> Travel'; ?>
                </h1>
                <p class="text-xl text-slate-300 leading-relaxed animate-fade-in-up" style="animation-delay: 0.1s">
                    <?php echo get_post_meta(get_the_ID(), '_about_hero_subtitle', true) ?: 'Hành trình của chúng tôi bắt đầu từ niềm đam mê khám phá và khát khao mang lại những trải nghiệm nghỉ dưỡng đẳng cấp nhất cho mỗi khách hàng.'; ?>
                </p>
            </div>
        </div>
    </section>

    <!-- Our Story Section -->
    <section class="py-24 relative">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div class="relative">
                    <div class="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&q=80&w=1000"
                            alt="Sonata Experience">
                    </div>
                    <!-- Decorative Elements -->
                    <div class="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl -z-10">
                    </div>
                    <div class="absolute -top-10 -left-10 w-48 h-48 bg-slate-900/5 rounded-[2rem] -z-10"></div>

                    <!-- Stats Badge -->
                    <div
                        class="absolute -bottom-6 -left-6 bg-white p-8 rounded-3xl shadow-xl border border-slate-100 hidden md:block">
                        <div class="text-4xl font-bold text-blue-600 mb-1">10+</div>
                        <div class="text-slate-500 font-medium">Năm kinh nghiệm</div>
                    </div>
                </div>

                <div>
                    <div
                        class="inline-flex items-center space-x-2 text-blue-600 font-bold tracking-wider uppercase text-sm mb-4">
                        <span class="w-8 h-px bg-blue-600"></span>
                        <span>Câu chuyện của chúng tôi</span>
                    </div>
                    <h2 class="text-4xl font-bold text-slate-900 mb-8 leading-tight">
                        <?php echo get_post_meta(get_the_ID(), '_about_story_heading', true) ?: 'Kiến tạo những kỷ niệm <br> nghỉ dưỡng vô giá'; ?>
                    </h2>
                    <div class="space-y-6 text-slate-600 text-lg leading-relaxed prose prose-blue max-w-none">
                        <?php 
                        $story_content = get_post_meta(get_the_ID(), '_about_story_content', true);
                        if ($story_content) {
                            echo apply_filters('the_content', $story_content);
                        } else {
                            echo '<p>Được thành lập với sứ mệnh nâng tầm trải nghiệm du lịch Việt, **Sonata Travel** không chỉ đơn thuần là một đại lý đặt phòng. Chúng tôi là người bạn đồng hành, giúp bạn tìm kiếm những không gian sống đẳng cấp và tinh tế nhất.</p><p>Mỗi khách sạn, mỗi căn phòng trong hệ thống của chúng tôi đều được lựa chọn kỹ lưỡng dựa trên tiêu chuẩn khắt khe về chất lượng dịch vụ, phong cách kiến trúc và sự tiện nghi.</p>';
                        }
                        ?>
                    </div>

                    <div class="grid grid-cols-2 gap-8 mt-12">
                        <div>
                            <h4 class="text-3xl font-bold text-slate-900 mb-2"><?php echo esc_html(get_post_meta(get_the_ID(), '_about_stat1_num', true) ?: '500+'); ?></h4>
                            <p class="text-slate-500"><?php echo esc_html(get_post_meta(get_the_ID(), '_about_stat1_label', true) ?: 'Điểm đến cao cấp'); ?></p>
                        </div>
                        <div>
                            <h4 class="text-3xl font-bold text-slate-900 mb-2"><?php echo esc_html(get_post_meta(get_the_ID(), '_about_stat2_num', true) ?: '15k+'); ?></h4>
                            <p class="text-slate-500"><?php echo esc_html(get_post_meta(get_the_ID(), '_about_stat2_label', true) ?: 'Khách hàng hài lòng'); ?></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Core Values Section -->
    <section class="py-24 bg-slate-50">
        <div class="container mx-auto px-4">
            <div class="text-center max-w-2xl mx-auto mb-16">
                <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Giá trị cốt lõi của Sonata</h2>
                <p class="text-slate-500 text-lg">Chúng tôi cam kết mang lại những giá trị tốt nhất cho hành trình của
                    bạn.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Value 1 -->
                <div
                    class="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div class="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                            </path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-4"><?php echo esc_html(get_post_meta(get_the_ID(), '_about_val1_title', true) ?: 'Chất lượng hàng đầu'); ?></h3>
                    <p class="text-slate-500 leading-relaxed"><?php echo esc_html(get_post_meta(get_the_ID(), '_about_val1_desc', true) ?: 'Chúng tôi chỉ hợp tác với các đối tác khách sạn đạt tiêu chuẩn 4-5 sao quốc tế.'); ?></p>
                </div>

                <!-- Value 2 -->
                <div
                    class="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div class="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                            </path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-4"><?php echo esc_html(get_post_meta(get_the_ID(), '_about_val2_title', true) ?: 'Giá tốt nhất'); ?></h3>
                    <p class="text-slate-500 leading-relaxed"><?php echo esc_html(get_post_meta(get_the_ID(), '_about_val2_desc', true) ?: 'Nhờ mạng lưới đối tác rộng lớn, chúng tôi luôn có mức giá ưu đãi đặc quyền cho khách hàng.'); ?></p>
                </div>

                <!-- Value 3 -->
                <div
                    class="bg-white p-10 rounded-[2rem] shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div class="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z">
                            </path>
                        </svg>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 mb-4"><?php echo esc_html(get_post_meta(get_the_ID(), '_about_val3_title', true) ?: 'Hỗ trợ 24/7'); ?></h3>
                    <p class="text-slate-500 leading-relaxed"><?php echo esc_html(get_post_meta(get_the_ID(), '_about_val3_desc', true) ?: 'Đội ngũ chuyên viên của Sonata luôn sẵn sàng hỗ trợ bạn bất kể thời gian nào trong ngày.'); ?></p>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonial Section (Luxury Style) -->
    <section class="py-24">
        <div class="container mx-auto px-4">
            <div class="bg-slate-900 rounded-[3rem] overflow-hidden relative">
                <!-- Background Decoration -->
                <div class="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 translate-x-32"></div>

                <div class="relative z-10 p-12 md:p-20 flex flex-col md:flex-row items-center gap-12">
                    <div class="w-32 h-32 rounded-full overflow-hidden border-4 border-white/10 shrink-0">
                        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
                            alt="Customer">
                    </div>
                    <div>
                        <div class="flex text-yellow-400 mb-4">
                            <svg class="w-6 h-6 fill-current" viewBox="0 0 20 20">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                            </svg>
                            <svg class="w-6 h-6 fill-current" viewBox="0 0 20 20">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                            </svg>
                            <svg class="w-6 h-6 fill-current" viewBox="0 0 20 20">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                            </svg>
                            <svg class="w-6 h-6 fill-current" viewBox="0 0 20 20">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                            </svg>
                            <svg class="w-6 h-6 fill-current" viewBox="0 0 20 20">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                            </svg>
                        </div>
                        <blockquote class="text-2xl text-white font-medium italic mb-6 leading-relaxed">
                            <?php echo wp_kses_post(get_post_meta(get_the_ID(), '_about_testi_quote', true) ?: '"Dịch vụ của Sonata Travel thật sự vượt ngoài mong đợi. Họ không chỉ tìm cho tôi một căn phòng đẹp, mà còn tư vấn những điểm ăn uống, vui chơi rất tinh tế. Chắc chắn tôi sẽ quay lại."'); ?>
                        </blockquote>
                        <div class="text-white">
                            <div class="font-bold text-lg"><?php echo esc_html(get_post_meta(get_the_ID(), '_about_testi_name', true) ?: 'Anh Minh Nguyễn'); ?></div>
                            <div class="text-blue-400"><?php echo esc_html(get_post_meta(get_the_ID(), '_about_testi_role', true) ?: 'Giám đốc Điều hành, TechCorp'); ?></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Page Editor Content -->
    <?php if (have_posts()):
        while (have_posts()):
            the_post(); ?>
            <?php if (!empty(get_the_content())): ?>
                <section class="py-24 bg-white">
                    <div class="container mx-auto px-4">
                        <div class="prose prose-slate max-w-none prose-lg">
                            <?php the_content(); ?>
                        </div>
                    </div>
                </section>
            <?php endif; ?>
        <?php endwhile; endif; ?>
</main>

<style>
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

<?php get_footer(); ?>