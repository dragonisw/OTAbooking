jQuery(document).ready(function($) {
    "use strict";

    console.log("Main JS Loaded");

    // Form submission for booking
    $('#booking-form').on('submit', function(e) {
        e.preventDefault();
        
        var formData = $(this).serialize();
        var $submitBtn = $(this).find('button[type="submit"]');
        var $message = $('#booking-message');

        $submitBtn.prop('disabled', true).text('Đang xử lý...');

        $.ajax({
            url: booking_ajax.ajax_url,
            type: 'POST',
            data: formData + '&action=process_booking&nonce=' + booking_ajax.nonce,
            success: function(response) {
                if(response.success) {
                    $message.html('<div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">' + response.data.message + '</div>');
                    $('#booking-form')[0].reset();
                } else {
                    $message.html('<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">' + response.data.message + '</div>');
                }
            },
            error: function() {
                $message.html('<div class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">Lỗi kết nối server.</div>');
            },
            complete: function() {
                $submitBtn.prop('disabled', false).text('Đặt phòng ngay');
            }
        });
    });

    // Sticky Header
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('header').addClass('sticky-nav bg-white/90 backdrop-blur-md shadow-md');
        } else {
            $('header').removeClass('sticky-nav bg-white/90 backdrop-blur-md shadow-md');
        }
    });

    // Search form validation
    $('#search-form').on('submit', function(e) {
        var checkIn = $('#check-in-date').val();
        var checkOut = $('#check-out-date').val();
        
        if (!checkIn) {
            e.preventDefault();
            alert('Vui lòng chọn ngày nhận phòng!');
            $('#check-in-date').focus();
            return;
        }
        
        if (!checkOut) {
            e.preventDefault();
            alert('Vui lòng chọn ngày trả phòng!');
            $('#check-out-date').focus();
            return;
        }

        if (new Date(checkOut) <= new Date(checkIn)) {
            e.preventDefault();
            alert('Ngày trả phòng phải sau ngày nhận phòng!');
            $('#check-out-date').focus();
            return;
        }
    });
});
