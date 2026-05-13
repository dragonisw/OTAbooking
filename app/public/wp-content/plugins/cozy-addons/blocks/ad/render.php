<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$client_id = ! empty( $attributes['clientId'] ) ? str_replace( array( ';', '=', '(', ')', ' ' ), '', wp_strip_all_tags( $attributes['clientId'] ) ) : '';
$block_id  = 'cozyBlock_' . str_replace( '-', '_', $client_id );

$image = array(
	'width'    => isset( $attributes['media']['width'] ) ? esc_attr( $attributes['media']['width'] ) : '',
	'height'   => isset( $attributes['media']['height'] ) ? esc_attr( $attributes['media']['height'] ) : '',
	'position' => array(
		'x' => isset( $attributes['media']['position']['x'] ) ? floatval( $attributes['media']['position']['x'] ) * 100 : '',
		'y' => isset( $attributes['media']['position']['y'] ) ? floatval( $attributes['media']['position']['y'] ) * 100 : '',
	),
	'radius'   => cozy_render_TRBL( 'border-radius', $attributes['media']['radius'] ),
);

$block_styles = "
#$block_id .cozy-block-ad__image-wrapper {
    max-width: {$image['width']};
    max-height: {$image['height']};
}
#$block_id .cozy-block-ad__image-wrapper.align-center {
    margin: 0 auto;
}
#$block_id .cozy-block-ad__image-wrapper.align-right {
    margin: 0 0 0 auto;
}
#$block_id .cozy-block-ad__image-wrapper.object-fit-contain {
    text-align: {$attributes['media']['align']};
}
#$block_id .cozy-block-ad__image {
    height: {$image['height']};
    object-fit: {$attributes['media']['objectFit']};
    {$image['radius']}
}
#$block_id .object-fit-cover .cozy-block-ad__image {
    object-position: {$image['position']['x']}% {$image['position']['y']}%;
}
#$block_id .cozy-block-ad__caption{
	justify-content: {$attributes['figCaption']['align']};
	margin-top: {$attributes['figCaption']['marginTop']};
}
";

add_action(
	'wp_enqueue_scripts',
	function () use ( $block_styles ) {
		wp_add_inline_style( 'cozy-block--global-block-styles', cozy_addons_clean_empty_css( $block_styles ) );
	}
);

$render = sprintf( '<div class="cozy-block-wrapper">%1$s</div>', $content );
echo $render;
