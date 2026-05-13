</div><!-- #content -->

<footer id="colophon" class="bg-slate-900 text-white pt-20 pb-10">
    <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            <!-- Branding -->
            <div class="col-span-1 md:col-span-1">
                <div class="flex items-center mb-6">
                    <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center">
                        <?php if (has_custom_logo()) : ?>
                            <div class="footer-logo-container" style="max-height: 50px; filter: brightness(0) invert(1);">
                                <?php the_custom_logo(); ?>
                            </div>
                        <?php else : ?>
                            <div class="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <span class="text-2xl font-bold tracking-tight text-white"><?php bloginfo('name'); ?></span>
                        <?php endif; ?>
                    </a>
                </div>
                <p class="text-slate-400 leading-relaxed mb-6">
                    Mang đến trải nghiệm đặt phòng khách sạn dễ dàng, nhanh chóng và tin cậy nhất cho kỳ nghỉ của bạn.
                </p>
                <div class="flex space-x-4">
                    <a href="#" class="text-slate-400 hover:text-white transition-colors">
                        <span class="sr-only">Facebook</span>
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                        </svg>
                    </a>
                    <a href="#" class="text-slate-400 hover:text-white transition-colors">
                        <span class="sr-only">Instagram</span>
                        <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                        </svg>
                    </a>
                </div>
            </div>

            <!-- Links 1 -->
            <div>
                <h3 class="text-lg font-bold mb-6">Khám phá</h3>
                <ul class="space-y-4 text-slate-400">
                    <li><a href="#" class="hover:text-white transition-colors">Địa điểm</a></li>
                    <li><a href="#" class="hover:text-white transition-colors">Dịch vụ</a></li>
                    <li><a href="#" class="hover:text-white transition-colors">Ưu đãi</a></li>
                    <li><a href="#" class="hover:text-white transition-colors">Blog</a></li>
                </ul>
            </div>

            <!-- Links 2 -->
            <div>
                <h3 class="text-lg font-bold mb-6">Hỗ trợ</h3>
                <ul class="space-y-4 text-slate-400">
                    <li><a href="#" class="hover:text-white transition-colors">Liên hệ</a></li>
                    <li><a href="#" class="hover:text-white transition-colors">Câu hỏi thường gặp</a></li>
                    <li><a href="#" class="hover:text-white transition-colors">Chính sách bảo mật</a></li>
                    <li><a href="#" class="hover:text-white transition-colors">Điều khoản dịch vụ</a></li>
                </ul>
            </div>

            <!-- Newsletter -->
            <div>
                <h3 class="text-lg font-bold mb-6">Đăng ký nhận tin</h3>
                <p class="text-slate-400 mb-6 font-sm">Nhận thông tin về các ưu đãi mới nhất.</p>
                <div class="flex">
                    <input type="email" placeholder="Email của bạn"
                        class="bg-slate-800 border-none rounded-l-lg px-4 py-3 w-full focus:ring-2 focus:ring-blue-600">
                    <button class="bg-blue-600 px-4 rounded-r-lg hover:bg-blue-700 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div
            class="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
            <p>&copy; <?php echo date('Y'); ?> <?php bloginfo('name'); ?>. All rights reserved.</p>
            <div class="flex space-x-6 mt-4 md:mt-0">
                <span>Designed with ❤️ by Antigravity</span>
            </div>
        </div>
    </div>
</footer>

<?php wp_footer(); ?>
</body>

</html>