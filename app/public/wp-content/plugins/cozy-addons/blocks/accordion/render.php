<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$client_id      = ! empty( $attributes['blockClientId'] ) ? str_replace( array( ';', '=', '(', ')', ' ' ), '', wp_strip_all_tags( $attributes['blockClientId'] ) ) : '';
$cozy_block_var = 'cozyAccordion_' . str_replace( '-', '_', $client_id );
wp_localize_script( 'cozy-block--accordion--frontend-script', $cozy_block_var, $attributes );
wp_add_inline_script( 'cozy-block--accordion--frontend-script', 'document.addEventListener("DOMContentLoaded", function(event) { window.cozyBlockAccordionInit( "' . $client_id . '" ) }) ' );

$block_id = 'cozyBlock_' . str_replace( '-', '_', $client_id );

$container_color = array(
	'bg'     => isset( $attributes['containerStyles']['bgColor'] ) ? $attributes['containerStyles']['bgColor'] : '',
	'border' => isset( $attributes['containerStyles']['border']['color'] ) ? $attributes['containerStyles']['border']['color'] : '',
);

$item_color = array(
	'bg'     => isset( $attributes['accordionStyles']['bgColor'] ) ? $attributes['accordionStyles']['bgColor'] : '',
	'border' => isset( $attributes['accordionStyles']['border']['color'] ) ? $attributes['accordionStyles']['border']['color'] : '',
);

$title_styles = array(
	'margin'         => array(
		'top'    => isset( $attributes['titleTypography']['margin']['top'] ) ? $attributes['titleTypography']['margin']['top'] : '',
		'bottom' => isset( $attributes['titleTypography']['margin']['bottom'] ) ? $attributes['titleTypography']['margin']['bottom'] : '',
	),
	'letter_case'    => isset( $attributes['titleTypography']['letterCase'] ) ? $attributes['titleTypography']['letterCase'] : '',
	'decoration'     => isset( $attributes['titleTypography']['decoration'] ) ? $attributes['titleTypography']['decoration'] : '',
	'line_height'    => isset( $attributes['titleTypography']['lineHeight'] ) ? $attributes['titleTypography']['lineHeight'] : '',
	'letter_spacing' => isset( $attributes['titleTypography']['letterSpacing'] ) ? $attributes['titleTypography']['letterSpacing'] : '',
);
$title_color  = array(
	'text'   => isset( $attributes['titleTypography']['color'] ) ? $attributes['titleTypography']['color'] : '',
	'active' => isset( $attributes['titleTypography']['colorActive'] ) ? $attributes['titleTypography']['colorActive'] : '',
);

$content_styles = array(
	'letter_case'    => isset( $attributes['typography']['letterCase'] ) ? $attributes['typography']['letterCase'] : '',
	'decoration'     => isset( $attributes['typography']['decoration'] ) ? $attributes['typography']['decoration'] : '',
	'line_height'    => isset( $attributes['typography']['lineHeight'] ) ? $attributes['typography']['lineHeight'] : '',
	'letter_spacing' => isset( $attributes['typography']['letterSpacing'] ) ? $attributes['typography']['letterSpacing'] : '',
);
$content_color  = array(
	'text' => isset( $attributes['typography']['color'] ) ? $attributes['typography']['color'] : '',
);

$icon_styles = array(
	'gap' => isset( $attributes['icon']['gap'] ) ? $attributes['icon']['gap'] : '6px',
);
$icon_color  = array(
	'bg'           => isset( $attributes['iconBoxStyles']['bgColor'] ) ? $attributes['iconBoxStyles']['bgColor'] : '',
	'border'       => isset( $attributes['iconBoxStyles']['borderColor'] ) ? $attributes['iconBoxStyles']['borderColor'] : '',
	'bg_hover'     => isset( $attributes['iconBoxStyles']['bgColorHover'] ) ? $attributes['iconBoxStyles']['bgColorHover'] : '',
	'border_hover' => isset( $attributes['iconBoxStyles']['borderColorHover'] ) ? $attributes['iconBoxStyles']['borderColorHover'] : '',
	'icon'         => isset( $attributes['icon']['color'] ) ? $attributes['icon']['color'] : '',
	'icon_hover'   => isset( $attributes['icon']['colorHover'] ) ? $attributes['icon']['colorHover'] : '',
);

$block_styles = "
#$block_id {
    padding: {$attributes['containerStyles']['padding']['top']}px {$attributes['containerStyles']['padding']['right']}px {$attributes['containerStyles']['padding']['bottom']}px {$attributes['containerStyles']['padding']['left']}px;
    border-style: {$attributes['containerStyles']['border']['type']};
    border-width: {$attributes['containerStyles']['border']['width']['top']}px {$attributes['containerStyles']['border']['width']['right']}px {$attributes['containerStyles']['border']['width']['bottom']}px {$attributes['containerStyles']['border']['width']['left']}px;
    border-color: {$container_color['border']};
    border-radius: {$attributes['containerStyles']['borderRadius']['top']}px {$attributes['containerStyles']['borderRadius']['right']}px {$attributes['containerStyles']['borderRadius']['bottom']}px {$attributes['containerStyles']['borderRadius']['left']}px;
    background-color: {$container_color['bg']};
}

#$block_id .cozy-accordion-wrapper {
    row-gap: {$attributes['rowGap']}px;
}

#$block_id .cozy-block-accordion-item {
    padding: {$attributes['accordionStyles']['padding']['top']}px {$attributes['accordionStyles']['padding']['right']}px {$attributes['accordionStyles']['padding']['bottom']}px {$attributes['accordionStyles']['padding']['left']}px;
    border-style: {$attributes['accordionStyles']['border']['type']};
    border-width: {$attributes['accordionStyles']['border']['width']['top']}px {$attributes['accordionStyles']['border']['width']['right']}px {$attributes['accordionStyles']['border']['width']['bottom']}px {$attributes['accordionStyles']['border']['width']['left']}px;
    border-color: {$item_color['border']};
    border-radius: {$attributes['accordionStyles']['borderRadius']['top']}px {$attributes['accordionStyles']['borderRadius']['right']}px {$attributes['accordionStyles']['borderRadius']['bottom']}px {$attributes['accordionStyles']['borderRadius']['left']}px;
    background-color: {$item_color['bg']};
}

#$block_id .cozy-block-accordion-item .cozy-accordion-title {
	gap: {$icon_styles['gap']};
}
#$block_id .cozy-block-accordion-item .cozy-accordion-title * {
    margin-top: {$title_styles['margin']['top']};
    margin-bottom: {$title_styles['margin']['bottom']};
    font-weight: {$attributes['titleTypography']['fontWeight']};
    font-size: {$attributes['titleTypography']['fontSize']}px;
    font-family: '{$attributes['titleTypography']['fontFamily']}';
    text-transform: {$title_styles['letter_case']};
    text-decoration: {$title_styles['decoration']};
    line-height: {$title_styles['line_height']};
    letter-spacing: {$title_styles['letter_spacing']};
    color: {$title_color['text']};
}
#$block_id .cozy-block-accordion-item .cozy-accordion-title.active * {
    color: {$title_color['active']};
}

#$block_id .cozy-block-accordion-item .cozy-accordion-content {
    font-weight: {$attributes['typography']['fontWeight']};
    font-size: {$attributes['typography']['fontSize']}px;
    font-family: '{$attributes['typography']['fontFamily']}';
    text-transform: {$content_styles['letter_case']};
    text-decoration: {$content_styles['decoration']};
    line-height: {$content_styles['line_height']};
    letter-spacing: {$content_styles['letter_spacing']};
    color: {$content_color['text']};
}

#$block_id .cozy-accordion-title .accordion-icon-wrapper svg {
    width: {$attributes['icon']['size']}px;
    height: {$attributes['icon']['size']}px;
    opacity: {$attributes['icon']['opacity']};
    rotate: {$attributes['icon']['rotate']}deg;
}

#$block_id.icon-view-stacked .cozy-accordion-title .accordion-icon-wrapper {
    padding: {$attributes['iconBoxStyles']['padding']['top']}px {$attributes['iconBoxStyles']['padding']['right']}px {$attributes['iconBoxStyles']['padding']['bottom']}px {$attributes['iconBoxStyles']['padding']['left']}px;
    border: {$attributes['iconBoxStyles']['borderWidth']}px {$attributes['iconBoxStyles']['borderType']} {$icon_color['border']};
    border-radius: {$attributes['iconBoxStyles']['borderRadius']}px;
    background-color: {$icon_color['bg']};
}

#$block_id.icon-view-stacked .cozy-accordion-title.active .accordion-icon-wrapper {
    background-color: {$icon_color['bg_hover']};
    border-color: {$icon_color['border_hover']};
}

#$block_id.icon-layout-fill .cozy-accordion-title .accordion-icon-wrapper svg {
    fill: {$icon_color['icon']};
}

#$block_id.icon-layout-outline .cozy-accordion-title .accordion-icon-wrapper svg {
    stroke: {$icon_color['icon']};
    fill: none;
}

#$block_id.icon-layout-fill .cozy-accordion-title.active .accordion-icon-wrapper svg {
    fill: {$icon_color['icon_hover']};
    rotate: {$attributes['icon']['rotateActive']}deg;
}

#$block_id.icon-layout-outline .cozy-accordion-title.active .accordion-icon-wrapper svg {
    stroke: {$icon_color['icon_hover']};
    fill: none;
    transform: rotate({$attributes['icon']['rotateActive']}deg);
}
";

$output = '<div class="cozy-block-wrapper">';

$font_families = array();

if ( isset( $attributes['titleTypography']['fontFamily'] ) && ! empty( $attributes['titleTypography']['fontFamily'] ) ) {
	$font_families[] = $attributes['titleTypography']['fontFamily'];
}
if ( isset( $attributes['typography']['fontFamily'] ) && ! empty( $attributes['typography']['fontFamily'] ) ) {
	$font_families[] = $attributes['typography']['fontFamily'];
}
// Remove duplicate font families.
$font_families = array_unique( $font_families );
$font_query    = '';
// Add other fonts.
foreach ( $font_families as $key => $family ) {
	if ( 0 === $key ) {
		$font_query .= 'family=' . str_replace( ' ', '+', $family ) . ':wght@100;200;300;400;500;600;700;800;900';
	} else {
		$font_query .= '&family=' . str_replace( ' ', '+', $family ) . ':wght@100;200;300;400;500;600;700;800;900';
	}
}
if ( ! empty( $font_query ) ) {
	// Generate the inline style for the Google Fonts link.
	$google_fonts_url = 'https://fonts.googleapis.com/css2?' . $font_query . '&display=swap';

	echo '<link rel="stylesheet" href="' . $google_fonts_url . '"/>';
}

add_action(
	'wp_enqueue_scripts',
	function () use ( $block_styles ) {
		wp_add_inline_style( 'cozy-block--global-block-styles', cozy_addons_clean_empty_css( $block_styles ) );
	}
);

$output .= $content;

$output .= '</div>';

echo $output;
