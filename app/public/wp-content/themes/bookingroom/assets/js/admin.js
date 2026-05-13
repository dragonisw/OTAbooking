jQuery(document).ready(function($) {
    var frame;
    $('#upload-banner-btn').on('click', function(e) {
        e.preventDefault();

        if (frame) {
            frame.open();
            return;
        }

        frame = wp.media({
            title: 'Chọn ảnh banner',
            button: {
                text: 'Dùng ảnh này'
            },
            multiple: true
        });

        frame.on('select', function() {
            var selections = frame.state().get('selection');
            var ids = $('#home_banner_ids').val() ? $('#home_banner_ids').val().split(',') : [];
            
            selections.map(function(attachment) {
                attachment = attachment.toJSON();
                if (ids.indexOf(attachment.id.toString()) === -1) {
                    ids.push(attachment.id);
                    $('#banner-images-container').append(
                        '<div class="banner-image-preview" data-id="' + attachment.id + '" style="position: relative; border: 1px solid #ccc; padding: 2px;">' +
                        '<img src="' + attachment.sizes.thumbnail.url + '" style="width: 80px; height: 80px; object-fit: cover; display: block;">' +
                        '<a href="#" class="remove-banner-img" style="position: absolute; top: -5px; right: -5px; background: red; color: white; border-radius: 50%; width: 18px; height: 18px; text-align: center; line-height: 16px; text-decoration: none; font-size: 12px;">×</a>' +
                        '</div>'
                    );
                }
            });
            
            $('#home_banner_ids').val(ids.join(','));
        });

        frame.open();
    });

    $(document).on('click', '.remove-banner-img', function(e) {
        e.preventDefault();
        var id = $(this).parent().data('id');
        var ids = $('#home_banner_ids').val().split(',');
        var index = ids.indexOf(id.toString());
        
        if (index > -1) {
            ids.splice(index, 1);
            $('#home_banner_ids').val(ids.join(','));
            $(this).parent().remove();
        }
    });

    // Destination Picker
    var dest_frame;
    $('#upload-dest-btn').on('click', function(e) {
        e.preventDefault();
        if (dest_frame) {
            dest_frame.open();
            return;
        }
        dest_frame = wp.media({
            title: 'Chọn ảnh Điểm đến',
            button: { text: 'Dùng ảnh này' },
            multiple: true
        });
        dest_frame.on('select', function() {
            var selections = dest_frame.state().get('selection');
            var ids = $('#home_destination_ids').val() ? $('#home_destination_ids').val().split(',') : [];
            selections.map(function(attachment) {
                attachment = attachment.toJSON();
                if (ids.indexOf(attachment.id.toString()) === -1) {
                    ids.push(attachment.id);
                    $('#destination-images-container').append(
                        '<div class="destination-image-preview" data-id="' + attachment.id + '" style="position: relative; border: 1px solid #ccc; padding: 5px; width: 100px; text-align: center; background: #f9f9f9;">' +
                        '<img src="' + attachment.sizes.thumbnail.url + '" style="width: 80px; height: 80px; object-fit: cover; display: block; margin: 0 auto 5px;">' +
                        '<span style="font-size: 10px; display: block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">' + attachment.title + '</span>' +
                        '<a href="#" class="remove-dest-img" style="position: absolute; top: -5px; right: -5px; background: red; color: white; border-radius: 50%; width: 18px; height: 18px; text-align: center; line-height: 16px; text-decoration: none; font-size: 12px;">×</a>' +
                        '</div>'
                    );
                }
            });
            $('#home_destination_ids').val(ids.join(','));
        });
        dest_frame.open();
    });

    $(document).on('click', '.remove-dest-img', function(e) {
        e.preventDefault();
        var id = $(this).parent().data('id');
        var ids = $('#home_destination_ids').val().split(',');
        var index = ids.indexOf(id.toString());
        if (index > -1) {
            ids.splice(index, 1);
            $('#home_destination_ids').val(ids.join(','));
            $(this).parent().remove();
        }
    });
});
