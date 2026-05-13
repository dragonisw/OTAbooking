<!-- wp:group {"style":{"color":{"background":"#fffdf6","text":"#4c4c4c"},"spacing":{"padding":{"right":"0","left":"0","top":"0","bottom":"0"},"margin":{"top":"0","bottom":"0"}},"elements":{"link":{"color":{"text":"#4c4c4c"}}},"typography":{"fontSize":"16px"}},"layout":{"type":"constrained","contentSize":"100%"},"cozyCustomFont":"Inter"} -->
<div class="wp-block-group has-text-color has-background has-link-color" style="color:#4c4c4c;background-color:#fffdf6;margin-top:0;margin-bottom:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;font-size:16px"><!-- wp:group {"style":{"border":{"bottom":{"color":"#9c87333d","style":"solid","width":"1px"}},"spacing":{"padding":{"right":"26px","left":"26px","top":"12px","bottom":"12px"},"margin":{"top":"0","bottom":"0"}}},"layout":{"type":"constrained","contentSize":"1180px"}} -->
<div class="wp-block-group" style="border-bottom-color:#9c87333d;border-bottom-style:solid;border-bottom-width:1px;margin-top:0;margin-bottom:0;padding-top:12px;padding-right:26px;padding-bottom:12px;padding-left:26px"><!-- wp:group {"style":{"spacing":{"margin":{"top":"0","bottom":"0"}}},"layout":{"type":"flex","flexWrap":"wrap","justifyContent":"space-between"}} -->
<div class="wp-block-group" style="margin-top:0;margin-bottom:0"><!-- wp:site-title {"style":{"typography":{"fontSize":"28px","fontStyle":"normal","fontWeight":"600"},"color":{"text":"#1e1905"},"elements":{"link":{"color":{"text":"#1e1905"},":hover":{"color":{"text":"#ff9900"}}}}}} /-->

<!-- wp:navigation {"customTextColor":"#1e1905","customOverlayBackgroundColor":"#fffffe","className":"ca-pattern__navigation","style":{"typography":{"fontSize":"16px","fontStyle":"normal","fontWeight":"500"}},"layout":{"type":"flex","justifyContent":"center"}} -->
<!-- wp:home-link /-->
<!-- wp:navigation-link {"label":"Books","url":"#","kind":"custom","className":""} /-->
<!-- wp:navigation-link {"label":"Bio","url":"#","kind":"custom","className":""} /-->
<!-- wp:navigation-link {"label":"Contact","url":"#","kind":"custom","className":""} /-->
<!-- /wp:navigation -->

<!-- wp:group {"style":{"spacing":{"blockGap":"16px"}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group">
<?php
if ( is_woocommerce_active() ) {
	?>
	<!-- wp:search {"label":"Search","showLabel":false,"placeholder":"Search products…","widthUnit":"%","buttonText":"Search","buttonPosition":"button-only","buttonUseIcon":true,"query":{"post_type":"product"},"isSearchFieldHidden":true,"className":"ca-pattern__core-icon","style":{"spacing":{"margin":{"top":"0","bottom":"0","left":"0","right":"0"}},"color":{"background":"#ececec00","text":"#1e1905"},"elements":{"link":{"color":{"text":"#1e1905"}}}},"namespace":"woocommerce/product-search"} /-->

	<!-- wp:woocommerce/customer-account {"displayStyle":"icon_only","iconStyle":"line","iconClass":"wc-block-customer-account__account-icon","className":"ca-pattern__core-icon","style":{"color":{"background":"#e3e3e300","text":"#1e1905"},"elements":{"link":{"color":{"text":"#1e1905"}}}}} /-->

	<!-- wp:woocommerce/mini-cart {"miniCartIcon":"bag","iconColor":{"color":"#1e1905"},"className":"ca-pattern__core-icon","style":{"spacing":{"padding":{"top":"0","bottom":"0","left":"0","right":"0"},"margin":{"top":"0","bottom":"0","left":"0","right":"0"}}}} /-->
	<?php
} else {
	?>
	<!-- wp:search {"label":"Search","showLabel":false,"placeholder":"Search…","widthUnit":"%","buttonText":"Search","buttonPosition":"button-only","buttonUseIcon":true,"query":{"post_type":"post"},"className":"ca-pattern__core-icon","style":{"spacing":{"margin":{"top":"0","bottom":"0","left":"0","right":"0"}},"color":{"background":"#ececec00","text":"#1e1905"},"elements":{"link":{"color":{"text":"#1e1905"}}}}} /-->
	<?php
}
?>
</div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->

<!-- wp:group {"style":{"spacing":{"margin":{"top":"60px","bottom":"64px"},"padding":{"right":"26px","left":"26px"}}},"layout":{"type":"constrained","contentSize":"1180px"}} -->
<div class="wp-block-group" style="margin-top:60px;margin-bottom:64px;padding-right:26px;padding-left:26px"><!-- wp:columns {"style":{"spacing":{"margin":{"top":"0","bottom":"0"},"blockGap":{"top":"36px","left":"36px"}}}} -->
<div class="wp-block-columns" style="margin-top:0;margin-bottom:0"><!-- wp:column {"verticalAlignment":"center","width":"60%","style":{"spacing":{"blockGap":"0","padding":{"right":"0","left":"0","top":"0","bottom":"0"}}},"layout":{"type":"constrained","contentSize":"669px","justifyContent":"left"}} -->
<div class="wp-block-column is-vertically-aligned-center" style="padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;flex-basis:60%"><!-- wp:paragraph {"style":{"color":{"text":"#9c8734"},"elements":{"link":{"color":{"text":"#9c8734"}}},"typography":{"fontSize":"18px","fontStyle":"normal","fontWeight":"400","textTransform":"uppercase"}}} -->
<p class="has-text-color has-link-color" style="color:#9c8734;font-size:18px;font-style:normal;font-weight:400;text-transform:uppercase"><?php esc_html_e( 'Best Book Awards', 'cozy-addons' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"style":{"typography":{"fontSize":"44px","lineHeight":"1.2","fontStyle":"normal","fontWeight":"600"},"color":{"text":"#1e1905"},"elements":{"link":{"color":{"text":"#1e1905"}}}},"cozyCustomFont":"Playfair Display"} -->
<h2 class="wp-block-heading has-text-color has-link-color" style="color:#1e1905;font-size:44px;font-style:normal;font-weight:600;line-height:1.2"><?php esc_html_e( 'Words That Inspire. Stories That Endure.', 'cozy-addons' ); ?></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"spacing":{"margin":{"top":"16px","bottom":"26px"}},"typography":{"lineHeight":"1.8"}}} -->
<p style="margin-top:16px;margin-bottom:26px;line-height:1.8"><?php esc_html_e( 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.', 'cozy-addons' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"style":{"typography":{"fontSize":"16px","fontStyle":"normal","fontWeight":"500"},"spacing":{"blockGap":{"top":"26px","left":"26px"}}},"cozyCustomFont":"Inter"} -->
<div class="wp-block-buttons has-custom-font-size" style="font-size:16px;font-style:normal;font-weight:500"><!-- wp:button {"style":{"elements":{"link":{"color":{"text":"#fffffe"}}},"color":{"text":"#fffffe","background":"#9c8734"},"border":{"radius":"0px"},"spacing":{"padding":{"left":"32px","right":"32px","top":"18px","bottom":"18px"}}},"cozyHoverStyles":{"bgColor":"#ff9900","color":"#fffffe","borderColor":""}} -->
<div class="wp-block-button"><a class="wp-block-button__link has-text-color has-background has-link-color wp-element-button" href="#" style="border-radius:0px;color:#fffffe;background-color:#9c8734;padding-top:18px;padding-right:32px;padding-bottom:18px;padding-left:32px"><?php esc_html_e( 'Explore My Books', 'cozy-addons' ); ?></a></div>
<!-- /wp:button -->

<!-- wp:button {"style":{"color":{"text":"#1e1905","background":"#e6e6e600"},"elements":{"link":{"color":{"text":"#1e1905"}}},"spacing":{"padding":{"left":"0","right":"0","top":"0","bottom":"0"}},"typography":{"fontStyle":"normal","fontWeight":"600","textDecoration":"underline"}},"cozyHoverStyles":{"bgColor":"","color":"#ff9900","borderColor":""}} -->
<div class="wp-block-button"><a class="wp-block-button__link has-text-color has-background has-link-color wp-element-button" href="#" style="color:#1e1905;background-color:#e6e6e600;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;font-style:normal;font-weight:600;text-decoration:underline"><?php esc_html_e( '$7.99 - Purchase', 'cozy-addons' ); ?></a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:column -->

<!-- wp:column {"style":{"spacing":{"blockGap":"0"}}} -->
<div class="wp-block-column"><!-- wp:image {"id":1677,"sizeSlug":"full","linkDestination":"none","align":"center","style":{"spacing":{"margin":{"bottom":"-64px"}}}} -->
<figure class="wp-block-image aligncenter size-full" style="margin-bottom:-64px"><img src="https://plugins.cozythemes.com/cozy-addons/assets/media/hero-1.png" alt="" class="wp-image-1677"/></figure>
<!-- /wp:image --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->