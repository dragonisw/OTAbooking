<?php /* Template Name: Contact */ ?>
<?php get_header(); ?>

<main class="bg-slate-50 min-h-screen">
    <!-- Hero Header -->
    <section class="bg-white border-b border-slate-200">
        <div class="container mx-auto px-4 py-20 text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Liên hệ với Chúng tôi</h1>
            <p class="text-slate-500 max-w-2xl mx-auto">Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy để lại lời nhắn hoặc liên hệ trực tiếp qua hotline.</p>
        </div>
    </section>

    <section class="py-20">
        <div class="container mx-auto px-4">
            <div class="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
                <!-- Info Section -->
                <div class="w-full md:w-1/3 bg-blue-600 p-12 text-white">
                    <h2 class="text-2xl font-bold mb-8">Thông tin Liên hệ</h2>
                    <div class="space-y-8">
                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </div>
                            <div>
                                <h4 class="font-bold mb-1">Địa chỉ</h4>
                                <p class="text-blue-100 text-sm leading-relaxed">123 Đường Trần Hưng Đạo, Quận 1, TP. Hồ Chí Minh</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            </div>
                            <div>
                                <h4 class="font-bold mb-1">Điện thoại</h4>
                                <p class="text-blue-100 text-sm leading-relaxed">0123 456 789<br>1900 1234</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4">
                            <div class="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <div>
                                <h4 class="font-bold mb-1">Email</h4>
                                <p class="text-blue-100 text-sm leading-relaxed">support@bookingroom.com<br>info@bookingroom.com</p>
                            </div>
                        </div>
                    </div>

                    <div class="mt-20">
                        <h4 class="font-bold mb-4">Theo dõi chúng tôi</h4>
                        <div class="flex gap-4">
                            <!-- Social icons placeholder -->
                        </div>
                    </div>
                </div>

                <!-- Form Section -->
                <div class="w-full md:w-2/3 p-12">
                    <form action="#" method="POST">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div>
                                <label class="block text-sm font-bold text-slate-700 mb-2">Họ và tên</label>
                                <input type="text" placeholder="Nguyễn Văn A" class="w-full border-slate-200 rounded-xl px-4 py-3.5 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all">
                            </div>
                            <div>
                                <label class="block text-sm font-bold text-slate-700 mb-2">Địa chỉ Email</label>
                                <input type="email" placeholder="example@gmail.com" class="w-full border-slate-200 rounded-xl px-4 py-3.5 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all">
                            </div>
                        </div>
                        <div class="mb-8">
                            <label class="block text-sm font-bold text-slate-700 mb-2">Chủ đề</label>
                            <input type="text" placeholder="Tôi cần hỗ trợ về đặt phòng..." class="w-full border-slate-200 rounded-xl px-4 py-3.5 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all">
                        </div>
                        <div class="mb-8">
                            <label class="block text-sm font-bold text-slate-700 mb-2">Lời nhắn</label>
                            <textarea rows="6" placeholder="Viết nội dung tin nhắn của bạn ở đây..." class="w-full border-slate-200 rounded-xl px-4 py-3.5 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 outline-none transition-all resize-none"></textarea>
                        </div>
                        <button type="submit" class="bg-blue-600 text-white font-bold px-10 py-4 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200/50">
                            Gửi tin nhắn ngay
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Map Placeholder -->
    <section class="h-96 bg-slate-200 relative grayscale hover:grayscale-0 transition-all duration-700">
        <div class="absolute inset-0 flex items-center justify-center">
            <span class="text-slate-400 font-bold uppercase tracking-widest">Bản đồ vệ tinh (Google Maps Integration)</span>
        </div>
    </section>

    <!-- Page Editor Content -->
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>
        <?php if (!empty(get_the_content())) : ?>
            <section class="py-24 bg-white border-t border-slate-100">
                <div class="container mx-auto px-4">
                    <div class="prose prose-slate max-w-none prose-lg">
                        <?php the_content(); ?>
                    </div>
                </div>
            </section>
        <?php endif; ?>
    <?php endwhile; endif; ?>
</main>

<?php get_footer(); ?>
