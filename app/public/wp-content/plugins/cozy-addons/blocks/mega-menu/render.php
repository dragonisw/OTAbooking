<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$client_id      = ! empty( $attributes['blockClientId'] ) ? str_replace( array( ';', '=', '(', ')', ' ' ), '', wp_strip_all_tags( sanitize_key( $attributes['blockClientId'] ) ) ) : '';
$block_id       = 'cozyBlock_' . str_replace( '-', '_', $client_id );
$cozy_block_var = 'cozyMegaMenu_' . str_replace( '-', '_', $client_id );

$attributes['megaMenuTemplates'] = \CozyAddons\Helpers\Utils::get_instance()->get_cozy_mega_menu_templates();

$mega_menu = array(
	'padding_top' => array(
		'desktop' => isset( $attributes['megaMenu']['topOffset']['desktop'] ) ? esc_attr( $attributes['megaMenu']['topOffset']['desktop'] ) : '',
		'tablet'  => isset( $attributes['megaMenu']['topOffset']['tablet'] ) ? esc_attr( $attributes['megaMenu']['topOffset']['tablet'] ) : '',
		'mobile'  => isset( $attributes['megaMenu']['topOffset']['mobile'] ) ? esc_attr( $attributes['megaMenu']['topOffset']['mobile'] ) : '',
	),
);

$responsive = array(
	'status'      => isset( $attributes['responsive']['status'] ) ? esc_attr( $attributes['responsive']['status'] ) : 'mobile',
	'align'       => isset( $attributes['responsive']['align'] ) ? esc_attr( $attributes['responsive']['align'] ) : 'center',
	'break_point' => isset( $attributes['responsive']['breakPoint'] ) ? esc_attr( $attributes['responsive']['breakPoint'] ) : '1025',
	'width'       => array(
		'desktop' => isset( $attributes['responsive']['width']['desktop'] ) ? esc_attr( $attributes['responsive']['width']['desktop'] ) : '480px',
		'tablet'  => isset( $attributes['responsive']['width']['tablet'] ) ? esc_attr( $attributes['responsive']['width']['tablet'] ) : '',
		'mobile'  => isset( $attributes['responsive']['width']['mobile'] ) ? esc_attr( $attributes['responsive']['width']['mobile'] ) : '100%',
	),
	'slide'       => isset( $attributes['responsive']['slide'] ) ? esc_attr( $attributes['responsive']['slide'] ) : '',
	'padding'     => array(
		'desktop' => isset( $attributes['responsive']['padding']['desktop'] ) ? esc_attr( cozy_render_TRBL( 'padding', $attributes['responsive']['padding']['desktop'] ) ) : '',
		'tablet'  => isset( $attributes['responsive']['padding']['tablet'] ) ? esc_attr( cozy_render_TRBL( 'padding', $attributes['responsive']['padding']['tablet'] ) ) : '',
		'mobile'  => isset( $attributes['responsive']['padding']['mobile'] ) ? esc_attr( cozy_render_TRBL( 'padding', $attributes['responsive']['padding']['mobile'] ) ) : '',
	),
	'open_icon'   => array(
		'box_width'  => isset( $attributes['responsive']['openIcon']['boxWidth'] ) ? esc_attr( $attributes['responsive']['openIcon']['boxWidth'] ) : '',
		'box_height' => isset( $attributes['responsive']['openIcon']['boxHeight'] ) ? esc_attr( $attributes['responsive']['openIcon']['boxHeight'] ) : '',
		'border'     => isset( $attributes['responsive']['openIcon']['border'] ) ? esc_attr( cozy_render_TRBL( 'border', $attributes['responsive']['openIcon']['border'] ) ) : '',
		'radius'     => isset( $attributes['responsive']['openIcon']['radius'] ) ? esc_attr( $attributes['responsive']['openIcon']['radius'] ) : '',
		'size'       => isset( $attributes['responsive']['openIcon']['size'] ) ? esc_attr( $attributes['responsive']['openIcon']['size'] ) : '',
		'align'      => isset( $attributes['responsive']['openIcon']['align'] ) ? esc_attr( $attributes['responsive']['openIcon']['align'] ) : '',
	),
	'close_icon'  => array(
		'box_width'  => isset( $attributes['responsive']['closeIcon']['boxWidth'] ) ? esc_attr( $attributes['responsive']['closeIcon']['boxWidth'] ) : '',
		'box_height' => isset( $attributes['responsive']['closeIcon']['boxHeight'] ) ? esc_attr( $attributes['responsive']['closeIcon']['boxHeight'] ) : '',
		'border'     => isset( $attributes['responsive']['closeIcon']['border'] ) ? esc_attr( cozy_render_TRBL( 'border', $attributes['responsive']['closeIcon']['border'] ) ) : '',
		'radius'     => isset( $attributes['responsive']['closeIcon']['radius'] ) ? esc_attr( $attributes['responsive']['closeIcon']['radius'] ) : '',
		'size'       => isset( $attributes['responsive']['closeIcon']['size'] ) ? esc_attr( $attributes['responsive']['closeIcon']['size'] ) : '',
		'position'   => isset( $attributes['responsive']['closeIcon']['position'] ) ? esc_attr( $attributes['responsive']['closeIcon']['position'] ) : '',
		'top'        => array(
			'desktop' => isset( $attributes['responsive']['closeIcon']['top']['desktop'] ) ? esc_attr( $attributes['responsive']['closeIcon']['top']['desktop'] ) : '',
			'tablet'  => isset( $attributes['responsive']['closeIcon']['top']['tablet'] ) ? esc_attr( $attributes['responsive']['closeIcon']['top']['tablet'] ) : '',
			'mobile'  => isset( $attributes['responsive']['closeIcon']['top']['mobile'] ) ? esc_attr( $attributes['responsive']['closeIcon']['top']['mobile'] ) : '',
		),
		'left'       => array(
			'desktop' => isset( $attributes['responsive']['closeIcon']['left']['desktop'] ) ? esc_attr( $attributes['responsive']['closeIcon']['left']['desktop'] ) : '',
			'tablet'  => isset( $attributes['responsive']['closeIcon']['left']['tablet'] ) ? esc_attr( $attributes['responsive']['closeIcon']['left']['tablet'] ) : '',
			'mobile'  => isset( $attributes['responsive']['closeIcon']['left']['mobile'] ) ? esc_attr( $attributes['responsive']['closeIcon']['left']['mobile'] ) : '',
		),
		'right'      => array(
			'desktop' => isset( $attributes['responsive']['closeIcon']['right']['desktop'] ) ? esc_attr( $attributes['responsive']['closeIcon']['right']['desktop'] ) : '',
			'tablet'  => isset( $attributes['responsive']['closeIcon']['right']['tablet'] ) ? esc_attr( $attributes['responsive']['closeIcon']['right']['tablet'] ) : '',
			'mobile'  => isset( $attributes['responsive']['closeIcon']['right']['mobile'] ) ? esc_attr( $attributes['responsive']['closeIcon']['right']['mobile'] ) : '',
		),
	),
	'color'       => array(
		'menu'                    => isset( $attributes['responsive']['color']['menu'] ) ? esc_attr( $attributes['responsive']['color']['menu'] ) : '',
		'submenu'                 => isset( $attributes['responsive']['color']['submenu'] ) ? esc_attr( $attributes['responsive']['color']['submenu'] ) : '',
		'bg'                      => isset( $attributes['responsive']['color']['bg'] ) ? esc_attr( $attributes['responsive']['color']['bg'] ) : '',
		'overlay'                 => isset( $attributes['responsive']['color']['overlay'] ) ? esc_attr( $attributes['responsive']['color']['overlay'] ) : '',
		'icon'                    => isset( $attributes['responsive']['color']['icon'] ) ? esc_attr( $attributes['responsive']['color']['icon'] ) : '',
		'icon_hover'              => isset( $attributes['responsive']['color']['iconHover'] ) ? esc_attr( $attributes['responsive']['color']['iconHover'] ) : '',
		'icon_bg'                 => isset( $attributes['responsive']['color']['iconBg'] ) ? esc_attr( $attributes['responsive']['color']['iconBg'] ) : '',
		'icon_bg_hover'           => isset( $attributes['responsive']['color']['iconBgHover'] ) ? esc_attr( $attributes['responsive']['color']['iconBgHover'] ) : '',
		'icon_border_hover'       => isset( $attributes['responsive']['color']['iconBorderHover'] ) ? esc_attr( $attributes['responsive']['color']['iconBorderHover'] ) : '',
		'close_icon'              => isset( $attributes['responsive']['color']['closeIcon'] ) ? esc_attr( $attributes['responsive']['color']['closeIcon'] ) : '',
		'close_icon_hover'        => isset( $attributes['responsive']['color']['closeIconHover'] ) ? esc_attr( $attributes['responsive']['color']['closeIconHover'] ) : '',
		'close_icon_bg'           => isset( $attributes['responsive']['color']['closeIconBg'] ) ? esc_attr( $attributes['responsive']['color']['closeIconBg'] ) : '',
		'close_icon_bg_hover'     => isset( $attributes['responsive']['color']['closeIconBgHover'] ) ? esc_attr( $attributes['responsive']['color']['closeIconBgHover'] ) : '',
		'close_icon_border_hover' => isset( $attributes['responsive']['color']['closeIconBorderHover'] ) ? esc_attr( $attributes['responsive']['color']['closeIconBorderHover'] ) : '',
	),
);


$block_styles = "
.cozy-block-mega-menu__dropdown.$block_id, #$block_id .cozy-block-mega-menu__dropdown {
	padding-top: {$mega_menu['padding_top']['desktop']};
}

#$block_id {
    text-align: {$responsive['open_icon']['align']};
}
#$block_id .cozy-responsive-icon__wrapper {
    width: {$responsive['open_icon']['box_width']};
    height: {$responsive['open_icon']['box_height']};
    {$responsive['open_icon']['border']}
    border-radius: {$responsive['open_icon']['radius']};
    background-color: {$responsive['color']['icon_bg']};
    color: {$responsive['color']['icon']};
}
#$block_id .cozy-responsive-icon__wrapper svg {
    width: {$responsive['open_icon']['size']};
    height: {$responsive['open_icon']['size']};
}
#$block_id .cozy-responsive-icon__wrapper:hover {
    background-color: {$responsive['color']['icon_bg_hover']};
    color: {$responsive['color']['icon_hover']};
    border-color: {$responsive['color']['icon_border_hover']};
}
#$block_id .cozy-responsive-icon__wrapper.close-icon-wrapper {
    width: {$responsive['close_icon']['box_width']};
    height: {$responsive['close_icon']['box_height']};
    {$responsive['close_icon']['border']}
    border-radius: {$responsive['close_icon']['radius']};
    background-color: {$responsive['color']['close_icon_bg']};
    color: {$responsive['color']['close_icon']};
	margin-top: {$responsive['close_icon']['top']['desktop']};
}
#$block_id .cozy-responsive-icon__wrapper.close-icon-wrapper.position-left {
	margin-left: {$responsive['close_icon']['left']['desktop']};
}
#$block_id .cozy-responsive-icon__wrapper.close-icon-wrapper.position-right {
	margin-right: {$responsive['close_icon']['right']['desktop']};
}
#$block_id .cozy-responsive-icon__wrapper.close-icon-wrapper svg {
    width: {$responsive['close_icon']['size']};
    height: {$responsive['close_icon']['size']};
}
#$block_id .cozy-responsive-icon__wrapper.close-icon-wrapper:hover {
    background-color: {$responsive['color']['close_icon_bg_hover']};
    color: {$responsive['color']['close_icon_hover']};
    border-color: {$responsive['color']['close_icon_border_hover']};
}

.cozy-block-wrapper.$block_id .cozy-mega-menu__overlay {
	background-color: {$responsive['color']['overlay']};
}

#$block_id .cozy-block-navigation-menu {
	{$responsive['padding']['desktop']}
}
#$block_id.responsive-menu-always .cozy-block-navigation-menu {
	background-color: {$responsive['color']['bg']};
	max-width: {$responsive['width']['desktop']};
}
#$block_id.responsive-menu-always .wp-block-navigation__container .wp-block-navigation-item {
	text-align: {$responsive['align']};
}
#$block_id.responsive-menu-always {
	& li, & li .wp-block-navigation-item__content {
		color: {$responsive['color']['menu']};
	}
	& li .wp-block-navigation__submenu-container, & li .wp-block-navigation__submenu-container .wp-block-navigation-item__content {
		color: {$responsive['color']['submenu']};
	}
}

@media only screen and (max-width: 1025px) {
	.cozy-block-mega-menu__dropdown.$block_id, #$block_id .cozy-block-mega-menu__dropdown {
		padding-top: {$mega_menu['padding_top']['tablet']};
	}

	#$block_id .cozy-responsive-icon__wrapper.close-icon-wrapper {
		margin-top: {$responsive['close_icon']['top']['tablet']};
	}
	#$block_id .cozy-responsive-icon__wrapper.close-icon-wrapper.position-left {
		margin-left: {$responsive['close_icon']['left']['tablet']};
	}
	#$block_id .cozy-responsive-icon__wrapper.close-icon-wrapper.position-right {
		margin-right: {$responsive['close_icon']['right']['tablet']};
	}

	#$block_id .cozy-block-navigation-menu {
		{$responsive['padding']['tablet']}
		min-width: {$responsive['width']['tablet']};
	}
	#$block_id.responsive-menu-always .cozy-block-navigation-menu {
		min-width: {$responsive['width']['tablet']};
	}

}
@media only screen and (max-width: 767px) {
	.cozy-block-mega-menu__dropdown.$block_id, #$block_id .cozy-block-mega-menu__dropdown {
		padding-top: {$mega_menu['padding_top']['mobile']};
	}

	#$block_id .cozy-responsive-icon__wrapper.close-icon-wrapper {
		margin-top: {$responsive['close_icon']['top']['mobile']};
	}
	#$block_id .cozy-responsive-icon__wrapper.close-icon-wrapper.position-left {
		margin-left: {$responsive['close_icon']['left']['mobile']};
	}
	#$block_id .cozy-responsive-icon__wrapper.close-icon-wrapper.position-right {
		margin-right: {$responsive['close_icon']['right']['mobile']};
	}
		
	#$block_id .cozy-block-navigation-menu {
		{$responsive['padding']['mobile']}
		max-width: {$responsive['width']['mobile']};
	}
	#$block_id.responsive-menu-always .cozy-block-navigation-menu {
		max-width: {$responsive['width']['mobile']};
	}
}

@media only screen and (max-width: {$responsive['break_point']}px) {
	.cozy-block-mega-menu.responsive-menu-mobile {
		& .cozy-block-navigation-menu {
			position: fixed;
			top: 0;
			visibility: hidden;
			opacity: 0;
			height: 100vh;
			z-index: 999999;
			background-color: {$responsive['color']['bg']};
			max-width: {$responsive['width']['desktop']};
			width: 100%;
			transition:
				transform 0.3s ease,
				opacity 0.3s ease;
			overflow-x: hidden;
			overflow-y: auto;
		}

		&.responsive-menu-slide-left .cozy-block-navigation-menu {
			left: 0;
			transform: translateX(-100%);
		}
		&.responsive-menu-slide-right .cozy-block-navigation-menu {
			right: 0;
			transform: translateX(100%);
		}
		&.is-menu-visible .cozy-block-navigation-menu {
			transform: translateX(0);
			opacity: 1;
			visibility: visible;
		}

		& .cozy-dropdown-icon-wrapper, & .wp-block-navigation-item__content {
			display: inline-block;
		}

		& .wp-block-navigation__container {
			flex-direction: column;
			max-width: 100%;
			width: 100%;

			& > li > .wp-block-navigation__submenu-container.show-submenu {
				padding: 16px 0;
			}
			& > li > .wp-block-navigation__submenu-container.show-submenu .wp-block-navigation__submenu-container.show-submenu, & > li > .wp-block-navigation__submenu-container.show-submenu .wp-block-navigation__submenu-container.show-submenu .wp-block-navigation__submenu-container.show-submenu {
				padding: 10px 0;
			}
			& > li > .wp-block-navigation__submenu-container > li > .wp-block-navigation__submenu-icon {
				margin-left: 4px;
			}

			& li, & li .wp-block-navigation-item__content {
				color: {$responsive['color']['menu']};
			}
			& li .wp-block-navigation__submenu-container, & li .wp-block-navigation__submenu-container .wp-block-navigation-item__content {
				color: {$responsive['color']['submenu']};
			}
		}
		& .wp-block-navigation__container .wp-block-navigation-item {
			width: 100%;
			display: block;
			text-align: {$responsive['align']};
		}
		& .wp-block-navigation__submenu-container {
			width: 100% !important;
			border: 0;
			position: unset;
			height: 0 !important;
			visibility: hidden !important;
			opacity: 0 !important;

			&.show-submenu {
				visibility: visible !important;
				opacity: 1 !important;
				height: auto !important;
				transition: height 0.5s ease;
			}
		}
		& .wp-block-navigation__submenu-container .wp-block-navigation-item__content {
			display: inline-block !important;
			padding: 0 !important;
		}
		&.has-child .wp-block-navigation__submenu-icon {
			transform: rotate(0deg);
		}
		&.has-child:has(.wp-block-navigation__submenu-container.show-submenu)
			> .wp-block-navigation__submenu-icon {
			transform: rotate(180deg);
		}

		& .wp-block-navigation__submenu-container .wp-block-navigation-item__content {
			display: inline-block !important;
			padding: 0 !important;
		}
	}
}
";

add_action(
	'wp_enqueue_scripts',
	function () use ( $block_styles ) {
		wp_add_inline_style( 'cozy-block--global-block-styles', cozy_addons_clean_empty_css( $block_styles ) );
	}
);

wp_localize_script( 'cozy-block--mega-menu--frontend-script', $cozy_block_var, $attributes );
wp_add_inline_script( 'cozy-block--mega-menu--frontend-script', 'document.addEventListener("DOMContentLoaded", function(event) { window.cozyBlockMegaMenuInit( "' . esc_html( $client_id ) . '" ) }) ' );

$classes   = array();
$classes[] = 'cozy-block-wrapper';
$classes[] = $block_id;
?>
<div class="<?php echo esc_attr( implode( ' ', array_map( 'sanitize_html_class', array_values( $classes ) ) ) ); ?>">
	<div class="cozy-mega-menu__overlay display-none"></div>
	<?php echo $content; ?>
</div>
