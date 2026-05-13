jQuery(document).ready(function($) {
    $('#booking-form').on('submit', function(e) {
        e.preventDefault();

        var form = $(this);
        var messageBox = $('#booking-message');
        var submitBtn = form.find('button[type="submit"]');

        // Basic validation
        var checkIn = form.find('input[name="check_in"]').val();
        var checkOut = form.find('input[name="check_out"]').val();

        if (!checkIn || !checkOut) {
            showMessage('Vui lòng chọn ngày nhận và trả phòng.', 'error');
            return;
        }

        // Prepare data
        var formData = form.serialize();
        formData += '&action=process_booking';
        formData += '&nonce=' + booking_ajax.nonce;

        // UI Feedback
        submitBtn.prop('disabled', true).addClass('opacity-50').text('Đang xử lý...');
        messageBox.addClass('hidden');

        $.ajax({
            url: booking_ajax.ajax_url,
            type: 'POST',
            data: formData,
            success: function(response) {
                if (response.success) {
                    showMessage(response.data.message, 'success');
                    form[0].reset();
                } else {
                    showMessage(response.data.message || 'Có lỗi xảy ra, vui lòng thử lại.', 'error');
                }
            },
            error: function() {
                showMessage('Lỗi kết nối máy chủ.', 'error');
            },
            complete: function() {
                submitBtn.prop('disabled', false).removeClass('opacity-50').text('Đặt phòng ngay');
            }
        });

        function showMessage(msg, type) {
            messageBox.text(msg).removeClass('hidden bg-red-100 text-red-600 bg-green-100 text-green-600');
            if (type === 'error') {
                messageBox.addClass('bg-red-100 text-red-600');
            } else {
                messageBox.addClass('bg-green-100 text-green-600');
            }
        }
    });
});
