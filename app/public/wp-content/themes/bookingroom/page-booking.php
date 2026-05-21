<?php /* Template Name: Booking Page */ ?>
<?php get_header(); ?>

<main class="bg-slate-50 min-h-screen pt-12 pb-24">
    <div class="container mx-auto px-4">
        <!-- Page Header -->
        <div class="max-w-4xl mx-auto text-center mb-16">
            <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Đặt phòng ngay</h1>
            <p class="text-lg text-slate-600">Lựa chọn kỳ nghỉ hoàn hảo của bạn tại Sonata Resort & Spa. Chúng tôi cam kết mang lại trải nghiệm tốt nhất.</p>
        </div>

        <!-- Booking Interface -->
        <div class="max-w-6xl mx-auto">
            <div class="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
                <div class="grid grid-cols-1 lg:grid-cols-3">
                    
                    <!-- Left: Info & Benefits -->
                    <div class="lg:col-span-1 bg-blue-600 p-8 md:p-12 text-white">
                        <h2 class="text-2xl font-bold mb-8">Tại sao đặt trực tiếp?</h2>
                        <ul class="space-y-6">
                            <li class="flex items-start gap-4">
                                <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-bold text-lg mb-1">Giá tốt nhất</h4>
                                    <p class="text-blue-100 text-sm">Cam kết giá thấp nhất so với các trang OTA.</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-4">
                                <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-bold text-lg mb-1">Xác nhận tức thì</h4>
                                    <p class="text-blue-100 text-sm">Nhận ngay thông tin đặt phòng qua Email & SMS.</p>
                                </div>
                            </li>
                            <li class="flex items-start gap-4">
                                <div class="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center shrink-0">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 class="font-bold text-lg mb-1">Thanh toán an toàn</h4>
                                    <p class="text-blue-100 text-sm">Hỗ trợ nhiều hình thức chuyển khoản & thẻ nội địa.</p>
                                </div>
                            </li>
                        </ul>

                        <div class="mt-16 pt-8 border-t border-white/20">
                            <p class="text-sm text-blue-100 mb-2">Hỗ trợ đặt phòng 24/7:</p>
                            <p class="text-2xl font-bold">0123 456 789</p>
                        </div>
                    </div>

                    <!-- Right: Booking Form -->
                    <div class="lg:col-span-2 p-8 md:p-12">
                        <?php
                        $use_external = get_theme_mod('use_external_booking', 'no');
                        $engine_url = get_theme_mod('booking_engine_url', '');
                        $form_action = ($use_external === 'yes' && !empty($engine_url)) ? $engine_url : home_url('/rooms');
                        ?>
                        
                        <form action="<?php echo esc_url($form_action); ?>" method="get" class="space-y-8">
                            <?php if ($use_external !== 'yes'): ?>
                                <input type="hidden" name="post_type" value="room">
                            <?php endif; ?>

                            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <!-- Check-in -->
                                <div class="space-y-2">
                                    <label class="block text-sm font-bold text-slate-700 uppercase tracking-wider">Ngày nhận phòng</label>
                                    <div class="relative">
                                        <input type="date" id="booking-check-in" name="<?php echo ($use_external === 'yes') ? 'checkin' : 'check_in'; ?>" required
                                            class="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all text-lg">
                                    </div>
                                </div>

                                <!-- Check-out -->
                                <div class="space-y-2">
                                    <label class="block text-sm font-bold text-slate-700 uppercase tracking-wider">Ngày trả phòng</label>
                                    <div class="relative">
                                        <input type="date" id="booking-check-out" name="<?php echo ($use_external === 'yes') ? 'checkout' : 'check_out'; ?>" required
                                            class="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all text-lg">
                                    </div>
                                </div>

                                <!-- Adults -->
                                <div class="space-y-2">
                                    <label class="block text-sm font-bold text-slate-700 uppercase tracking-wider">Người lớn</label>
                                    <select name="adults" class="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all text-lg appearance-none cursor-pointer">
                                        <option value="1">1 Người lớn</option>
                                        <option value="2" selected>2 Người lớn</option>
                                        <option value="3">3 Người lớn</option>
                                        <option value="4">4 Người lớn</option>
                                        <option value="5">5+ Người lớn</option>
                                    </select>
                                </div>

                                <!-- Children -->
                                <div class="space-y-2">
                                    <label class="block text-sm font-bold text-slate-700 uppercase tracking-wider">Trẻ em</label>
                                    <select name="children" class="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all text-lg appearance-none cursor-pointer">
                                        <option value="0">0 Trẻ em</option>
                                        <option value="1">1 Trẻ em</option>
                                        <option value="2">2 Trẻ em</option>
                                        <option value="3">3+ Trẻ em</option>
                                    </select>
                                </div>
                            </div>

                            <!-- Location/Hotel Select (Optional if only one hotel) -->
                            <div class="space-y-2">
                                <label class="block text-sm font-bold text-slate-700 uppercase tracking-wider">Chọn loại phòng (Không bắt buộc)</label>
                                <select name="s" class="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all text-lg appearance-none cursor-pointer">
                                    <option value="">Tất cả các loại phòng</option>
                                    <?php
                                    $rooms = get_posts(array('post_type' => 'room', 'posts_per_page' => -1));
                                    foreach ($rooms as $room) {
                                        echo '<option value="' . esc_attr($room->post_title) . '">' . esc_html($room->post_title) . '</option>';
                                    }
                                    ?>
                                </select>
                            </div>

                            <div class="pt-4">
                                <button type="submit" class="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl hover:bg-blue-700 transition-all shadow-xl hover:shadow-blue-200/50 text-xl flex items-center justify-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                    Kiểm tra phòng trống
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <!-- Trust Badges -->
            <div class="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
                <div class="flex flex-col items-center text-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ba/Tripadvisor_Logo.svg/1200px-Tripadvisor_Logo.svg.png" alt="Tripadvisor" class="h-8 md:h-12 object-contain mb-4">
                </div>
                <div class="flex flex-col items-center text-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Booking.com_logo.svg/2560px-Booking.com_logo.svg.png" alt="Booking.com" class="h-8 md:h-12 object-contain mb-4">
                </div>
                <div class="flex flex-col items-center text-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Agoda_logo.svg/1200px-Agoda_logo.svg.png" alt="Agoda" class="h-8 md:h-12 object-contain mb-4">
                </div>
                <div class="flex flex-col items-center text-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Expedia_Logo_2023.svg/1200px-Expedia_Logo_2023.svg.png" alt="Expedia" class="h-8 md:h-12 object-contain mb-4">
                </div>
            </div>
        </div>
    </div>
</main>

<script>
    document.addEventListener('DOMContentLoaded', function () {
        const checkInInput = document.getElementById('booking-check-in');
        const checkOutInput = document.getElementById('booking-check-out');

        if (checkInInput && checkOutInput) {
            const today = new Date();

            const formatDate = (date) => {
                if (!date || isNaN(date.getTime())) return '';
                const year = date.getFullYear();
                const month = String(date.getMonth() + 1).padStart(2, '0');
                const day = String(date.getDate()).padStart(2, '0');
                return `${year}-${month}-${day}`;
            };
            
            checkInInput.min = formatDate(today);

            checkInInput.addEventListener('change', function () {
                const checkIn = new Date(this.value);
                if (isNaN(checkIn.getTime())) return;

                const checkOut = new Date(checkOutInput.value);
                if (!isNaN(checkOut.getTime()) && checkOut <= checkIn) {
                    const nextDay = new Date(checkIn);
                    nextDay.setDate(nextDay.getDate() + 1);
                    checkOutInput.value = formatDate(nextDay);
                }
                checkOutInput.min = formatDate(new Date(checkIn.getTime() + 86400000));
            });
        }
    });
</script>

<?php get_footer(); ?>
