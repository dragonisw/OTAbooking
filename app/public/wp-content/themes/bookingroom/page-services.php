<?php /* Template Name: Services */ ?>
<?php get_header(); ?>

<main class="bg-slate-50 min-h-screen pb-20">
    <!-- Hero Header -->
    <section class="relative py-24 bg-blue-600 overflow-hidden">
        <div class="absolute inset-0 z-0 opacity-20">
            <svg class="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
            </svg>
        </div>
        <div class="container mx-auto px-4 relative z-10 text-center">
            <h1 class="text-4xl md:text-5xl font-bold text-white mb-6">Dịch vụ Đặc quyền</h1>
            <p class="text-blue-100 max-w-2xl mx-auto text-lg leading-relaxed">
                Chúng tôi không chỉ cung cấp chỗ ở, chúng tôi mang đến những trải nghiệm đáng nhớ với tiêu chuẩn dịch vụ cao nhất.
            </p>
        </div>
    </section>

    <!-- Services Grid -->
    <section class="container mx-auto px-4 -mt-12 relative z-20">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <!-- Service 1 -->
            <div class="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all group">
                <div class="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4a2 2 0 012 2v2M8 7h8m0 0V5a2 2 0 012-2h4a2 2 0 012 2v2"></path></svg>
                </div>
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Đưa đón Sân bay</h3>
                <p class="text-slate-500 leading-relaxed mb-6">Dịch vụ xe sang trọng đón tiễn tại sân bay giúp bạn tiết kiệm thời gian và di chuyển thoải mái.</p>
                <ul class="space-y-3 text-sm text-slate-600">
                    <li class="flex items-center"><svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Tài xế chuyên nghiệp</li>
                    <li class="flex items-center"><svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Xe đời mới 2024</li>
                </ul>
            </div>

            <!-- Service 2 -->
            <div class="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all group">
                <div class="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-500">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                </div>
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Tour Tham quan</h3>
                <p class="text-slate-500 leading-relaxed mb-6">Khám phá văn hóa bản địa với các chương trình tour được thiết kế riêng theo yêu cầu của bạn.</p>
                <ul class="space-y-3 text-sm text-slate-600">
                    <li class="flex items-center"><svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Hướng dẫn viên đa ngôn ngữ</li>
                    <li class="flex items-center"><svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Lịch trình linh hoạt</li>
                </ul>
            </div>

            <!-- Service 3 -->
            <div class="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all group">
                <div class="w-16 h-16 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-500">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                </div>
                <h3 class="text-2xl font-bold text-slate-900 mb-4">Hỗ trợ Thủ tục</h3>
                <p class="text-slate-500 leading-relaxed mb-6">Chúng tôi hỗ trợ bạn tối đa trong việc gia hạn visa, đặt vé máy bay và các thủ tục hành chính khác.</p>
                <ul class="space-y-3 text-sm text-slate-600">
                    <li class="flex items-center"><svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Xử lý nhanh trong 24h</li>
                    <li class="flex items-center"><svg class="w-4 h-4 mr-2 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Tư vấn miễn phí</li>
                </ul>
            </div>
        </div>
    </section>

    <!-- Detailed Features -->
    <section class="py-24">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row items-center gap-16">
                <div class="w-full md:w-1/2">
                    <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800" class="rounded-3xl shadow-2xl" alt="Concierge Service">
                </div>
                <div class="w-full md:w-1/2">
                    <h2 class="text-3xl font-bold text-slate-900 mb-6">Chu đáo từng chi tiết</h2>
                    <p class="text-slate-600 mb-8 leading-relaxed">
                        Từ giây phút bạn đặt chân đến, đội ngũ quản gia và lễ tân của chúng tôi luôn sẵn sàng phục vụ với nụ cười và sự tận tâm nhất. Chúng tôi hiểu rằng mỗi kỳ nghỉ là một hành trình cảm xúc.
                    </p>
                    <div class="space-y-6">
                        <div class="flex gap-4">
                            <div class="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-blue-600 font-bold">01</div>
                            <div>
                                <h4 class="font-bold text-slate-900">Tiêu chuẩn quốc tế</h4>
                                <p class="text-slate-500 text-sm">Toàn bộ nhân viên đều được đào tạo theo chuẩn phục vụ 5 sao.</p>
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <div class="flex-shrink-0 w-12 h-12 bg-white rounded-xl shadow-md flex items-center justify-center text-blue-600 font-bold">02</div>
                            <div>
                                <h4 class="font-bold text-slate-900">Hỗ trợ 24/7</h4>
                                <p class="text-slate-500 text-sm">Mọi thắc mắc của bạn sẽ được giải quyết chỉ trong vài phút.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php get_footer(); ?>
