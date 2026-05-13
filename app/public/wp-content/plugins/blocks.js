wp.blocks.registerBlockType('booking-agency/home-feature', {
    title: 'Home Feature',
    icon: 'star-filled',
    category: 'widgets',
    attributes: {
        title: { type: 'string', default: '' },
        desc: { type: 'string', default: '' },
    },
    edit: function(props) {
        return (
            wp.element.createElement('div', { className: 'feature-block' },
                wp.element.createElement(wp.blockEditor.RichText, {
                    tagName: 'h2',
                    className: 'text-xl font-bold mb-2',
                    value: props.attributes.title,
                    onChange: function(val) { props.setAttributes({ title: val }); },
                    placeholder: 'Tiêu đề...'
                }),
                wp.element.createElement(wp.blockEditor.RichText, {
                    tagName: 'p',
                    value: props.attributes.desc,
                    onChange: function(val) { props.setAttributes({ desc: val }); },
                    placeholder: 'Mô tả...'
                })
            )
        );
    },
    save: function() { return null; } // Sử dụng render_callback PHP
});
