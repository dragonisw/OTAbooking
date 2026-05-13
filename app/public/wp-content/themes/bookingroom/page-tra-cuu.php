<?php /* Template Name: Tra cứu thông tin */ ?>
<?php get_header(); ?>

<main class="bg-slate-50 min-h-[70vh] py-20">
    <div class="container mx-auto px-4">
        <div class="max-w-2xl mx-auto">
            <!-- Header -->
            <div class="text-center mb-12">
                <h1 class="text-3xl font-bold text-slate-900 mb-4">TRA CỨU THÔNG TIN ĐẶT PHÒNG</h1>
                <p class="text-slate-500">Vui lòng nhập số điện thoại và mã đặt phòng để kiểm tra trạng thái.</p>
            </div>

            <!-- Lookup Form -->
            <div class="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
                <!-- Decorative element -->
                <div class="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-16 -mt-16 opacity-50"></div>
                
                <form id="lookup-form" class="relative z-10 space-y-6">
                    <div class="space-y-2">
                        <label for="lookup_phone" class="block text-sm font-bold text-slate-700 ml-1">Số điện thoại</label>
                        <div class="relative">
                            <input type="tel" id="lookup_phone" name="phone" required
                                class="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all placeholder:text-slate-400 text-lg"
                                placeholder="Nhập số điện thoại khi đặt phòng">
                            <div class="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                            </div>
                        </div>
                    </div>

                    <div class="space-y-2">
                        <label for="lookup_id" class="block text-sm font-bold text-slate-700 ml-1">Mã đặt phòng</label>
                        <div class="relative">
                            <input type="text" id="lookup_id" name="booking_id" required
                                class="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 px-6 focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all placeholder:text-slate-400 text-lg"
                                placeholder="Ví dụ: 1234">
                            <div class="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 11h.01M7 15h.01M11 7h.01M11 11h.01M11 15h.01M15 7h.01M15 11h.01M15 15h.01M19 7h.01M19 11h.01M19 15h.01M7 19h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                            </div>
                        </div>
                    </div>

                    <div class="pt-4">
                        <button type="submit"
                            class="w-full bg-blue-600 text-white font-bold py-5 rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 hover:shadow-blue-300 transform hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center text-lg">
                            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            Tra cứu ngay
                        </button>
                    </div>
                </form>

                <!-- Results Area -->
                <div id="lookup-results" class="hidden mt-12 pt-8 border-t border-slate-100 animate-fade-in">
                    <!-- Result content will be injected here -->
                </div>

                <!-- Loading State -->
                <div id="lookup-loading" class="hidden absolute inset-0 bg-white/80 backdrop-blur-sm z-20 flex items-center justify-center rounded-[2.5rem]">
                    <div class="flex flex-col items-center">
                        <div class="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                        <p class="mt-4 font-bold text-slate-600">Đang kiểm tra...</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>

<script>
jQuery(document).ready(function($) {
    $('#lookup-form').on('submit', function(e) {
        e.preventDefault();
        
        const $form = $(this);
        const $results = $('#lookup-results');
        const $loading = $('#lookup-loading');
        
        const phone = $('#lookup_phone').val();
        const bookingId = $('#lookup_id').val();
        
        performLookup(phone, bookingId);
    });

    function performLookup(phone, bookingId) {
        const $results = $('#lookup-results');
        const $loading = $('#lookup-loading');

        $loading.removeClass('hidden');
        $results.addClass('hidden');
        
        $.ajax({
            url: booking_ajax.ajax_url,
            type: 'POST',
            data: {
                action: 'lookup_booking',
                phone: phone,
                booking_id: bookingId,
                nonce: booking_ajax.nonce
            },
            success: function(response) {
                if (response.success) {
                    const data = response.data;
                    let statusHtml = '';
                    
                    switch(data.status) {
                        case 'publish':
                        case 'confirmed':
                            statusHtml = '<span class="bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-bold">Đã xác nhận</span>';
                            break;
                        case 'pending':
                            statusHtml = '<span class="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-bold">Chờ xử lý</span>';
                            break;
                        default:
                            statusHtml = '<span class="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-bold">' + data.status + '</span>';
                    }

                    $results.html(`
                        <div class="space-y-6">
                            <div class="flex items-center justify-between">
                                <h3 class="text-xl font-bold text-slate-900">Kết quả tìm thấy</h3>
                                ${statusHtml}
                            </div>
                            
                            <div class="grid grid-cols-2 gap-6 bg-slate-50 p-6 rounded-3xl border border-slate-100">
                                <div>
                                    <p class="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Khách hàng</p>
                                    <p class="font-bold text-slate-800">${data.customer_name}</p>
                                </div>
                                <div>
                                    <p class="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Phòng</p>
                                    <p class="font-bold text-slate-800">${data.room_title}</p>
                                </div>
                                <div>
                                    <p class="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Ngày nhận</p>
                                    <p class="font-bold text-slate-800">${data.check_in}</p>
                                </div>
                                <div>
                                    <p class="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Ngày trả</p>
                                    <p class="font-bold text-slate-800">${data.check_out}</p>
                                </div>
                            </div>
                            
                            <div class="flex items-center gap-4 text-sm text-slate-500 bg-blue-50 p-4 rounded-2xl">
                                <svg class="w-5 h-5 text-blue-500 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
                                <p>Nếu có bất kỳ thắc mắc nào, vui lòng liên hệ hotline <strong>1900 6067</strong> để được hỗ trợ.</p>
                            </div>
                        </div>
                    `).removeClass('hidden');
                } else {
                    $results.html(`
                        <div class="text-center py-8">
                            <div class="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </div>
                            <h3 class="text-lg font-bold text-slate-900 mb-1">Không tìm thấy thông tin</h3>
                            <p class="text-slate-500">${response.data.message}</p>
                        </div>
                    `).removeClass('hidden');
                }
            },
            error: function() {
                alert('Có lỗi xảy ra trong quá trình kết nối.');
            },
            complete: function() {
                $loading.addClass('hidden');
            }
        });
    }

    // Check for URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const urlBookingId = urlParams.get('booking_id');
    const urlPhone = urlParams.get('phone');
    
    if (urlBookingId && urlPhone) {
        $('#lookup_id').val(urlBookingId);
        $('#lookup_phone').val(urlPhone);
        performLookup(urlPhone, urlBookingId);
    }
});
</script>

<style>
@keyframes fade-in {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
    animation: fade-in 0.4s ease-out forwards;
}
</style>

<?php get_footer(); ?>
