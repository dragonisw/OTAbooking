<!-- wp:group {"style":{"color":{"background":"#fffffe","text":"#2a2929"},"elements":{"link":{"color":{"text":"#2a2929"}}},"typography":{"fontSize":"16px","lineHeight":1.6,"fontStyle":"normal","fontWeight":"400"},"spacing":{"margin":{"top":"0","bottom":"0"},"blockGap":"0","padding":{"right":"26px","left":"26px","top":"80px","bottom":"80px"}}},"layout":{"type":"constrained","contentSize":"1180px"},"cozyCustomFont":"Inter"} -->
<div class="wp-block-group has-text-color has-background has-link-color" style="color:#2a2929;background-color:#fffffe;margin-top:0;margin-bottom:0;padding-top:80px;padding-right:26px;padding-bottom:80px;padding-left:26px;font-size:16px;font-style:normal;font-weight:400;line-height:1.6"><!-- wp:group {"style":{"spacing":{"margin":{"bottom":"60px"}}},"layout":{"type":"flex","flexWrap":"wrap","justifyContent":"space-between"}} -->
<div class="wp-block-group" style="margin-bottom:60px"><!-- wp:heading {"style":{"color":{"text":"#2a2929"},"elements":{"link":{"color":{"text":"#2a2929"}}},"typography":{"fontSize":"36px","lineHeight":"1.2","fontStyle":"normal","fontWeight":"600"}},"cozyCustomFont":"Inter"} -->
<h2 class="wp-block-heading has-text-color has-link-color" style="color:#2a2929;font-size:36px;font-style:normal;font-weight:600;line-height:1.2"><?php esc_html_e( 'Latest Products', 'cozy-addons' ); ?></h2>
<!-- /wp:heading -->

<!-- wp:buttons {"style":{"typography":{"fontSize":"16px","fontStyle":"normal","fontWeight":"500"}}} -->
<div class="wp-block-buttons has-custom-font-size" style="font-size:16px;font-style:normal;font-weight:500"><!-- wp:button {"type":"cozy-block-btn","style":{"color":{"background":"#b0b0b000","text":"#6a6a6a"},"elements":{"link":{"color":{"text":"#6a6a6a"}}},"spacing":{"padding":{"left":"0","right":"0","top":"0","bottom":"0"}}},"icon":{"enabled":true,"path":"M19.3651 12.56L14.3851 17.56C14.2251 17.72 14.0251 17.8 13.8251 17.8C13.6251 17.8 13.4251 17.72 13.2651 17.56C12.9451 17.24 12.9451 16.74 13.2651 16.42L16.8851 12.78H5.20511C4.76511 12.78 4.40511 12.42 4.40511 11.98C4.40511 11.54 4.76511 11.18 5.20511 11.18H16.8851L13.2651 7.54001C12.9451 7.22001 12.9451 6.72 13.2651 6.4C13.5851 6.08 14.0851 6.08 14.4051 6.4L19.3851 11.4C19.6851 11.74 19.6851 12.26 19.3651 12.56Z","viewBox":{"vx":"0","vy":"0","vw":"24","vh":"24"},"padding":{"top":"0px","right":"0px","bottom":"0px","left":"0px"},"margin":{"top":"-4px","bottom":"0px"},"boxWidth":"20px","boxHeight":"20px","size":"20px","rotate":315,"gap":"4px","position":"after","border":{"width":"","style":"","color":""},"radius":"","color":{"text":"#6a6a6a","textHover":"#53a79b","bg":"","bgHover":"","borderHover":""}},"cozyHoverStyles":{"bgColor":"","color":"#53a79b","borderColor":""}} -->
<div class="wp-block-button"><a class="wp-block-button__link has-text-color has-background has-link-color wp-element-button" style="color:#6a6a6a;background-color:#b0b0b000;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0"><?php esc_html_e( 'View All', 'cozy-addons' ); ?></a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group -->

<?php
if ( class_exists( 'WooCommerce' ) ) {
	?>
<!-- wp:woocommerce/product-collection {"queryId":9,"query":{"perPage":8,"pages":0,"offset":"3","postType":"product","order":"asc","orderBy":"title","search":"","exclude":[],"inherit":false,"taxQuery":{},"isProductCollectionBlock":true,"featured":false,"woocommerceOnSale":false,"woocommerceStockStatus":["instock","outofstock","onbackorder"],"woocommerceAttributes":[],"woocommerceHandPickedProducts":[],"filterable":true,"relatedBy":{"categories":true,"tags":true}},"tagName":"div","displayLayout":{"type":"flex","columns":4,"shrinkColumns":true},"dimensions":{"widthType":"fill"},"queryContextIncludes":["collection"],"__privatePreviewState":{"isPreview":false,"previewMessage":"Actual products will vary depending on the page being viewed."}} -->
<div class="wp-block-woocommerce-product-collection"><!-- wp:woocommerce/product-template -->
<!-- wp:woocommerce/product-image {"showSaleBadge":false,"imageSizing":"thumbnail","isDescendentOfQueryLoop":true,"height":"340px","style":{"spacing":{"margin":{"top":"0","bottom":"0","left":"0","right":"0"}}}} -->
<!-- wp:woocommerce/product-sale-badge {"align":"left","style":{"color":{"background":"#53a79b","text":"#fffffe"},"elements":{"link":{"color":{"text":"#fffffe"}}},"typography":{"textTransform":"capitalize"},"border":{"width":"0px","style":"none","radius":{"topLeft":"100px","topRight":"100px","bottomLeft":"100px","bottomRight":"100px"}},"spacing":{"margin":{"top":"10px","bottom":"10px","left":"10px","right":"10px"}}}} /-->
<!-- /wp:woocommerce/product-image -->

<!-- wp:post-title {"textAlign":"center","isLink":true,"style":{"spacing":{"margin":{"bottom":"6px","top":"6px"}},"typography":{"lineHeight":"1.4","fontStyle":"normal","fontWeight":"400","fontSize":"16px"},"color":{"text":"#2a2929"},"elements":{"link":{"color":{"text":"#2a2929"}}}},"__woocommerceNamespace":"woocommerce/product-collection/product-title"} /-->

<!-- wp:woocommerce/product-price {"isDescendentOfQueryLoop":true,"textAlign":"center","style":{"color":{"text":"#2a2929"},"elements":{"link":{"color":{"text":"#2a2929"}}},"typography":{"fontSize":"20px","lineHeight":"1.2","fontStyle":"normal","fontWeight":"600"},"spacing":{"margin":{"top":"0","bottom":"26px","left":"0","right":"0"},"padding":{"right":"0","left":"0","top":"0","bottom":"0"}}}} /-->
<!-- /wp:woocommerce/product-template -->

<!-- wp:woocommerce/product-collection-no-results -->
<!-- wp:group {"layout":{"type":"flex","orientation":"vertical","justifyContent":"center","flexWrap":"wrap"}} -->
<div class="wp-block-group"><!-- wp:paragraph {"fontSize":"medium"} -->
<p class="has-medium-font-size"><strong><?php esc_html_e( 'No results found', 'cozy-addons' ); ?></strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p><?php esc_html_e( 'You can try', 'cozy-addons' ); ?> <a href="#" class="wc-link-clear-any-filters"><?php esc_html_e( 'clearing any filters', 'cozy-addons' ); ?></a> <?php esc_html_e( 'or head to our', 'cozy-addons' ); ?> <a href="#" class="wc-link-stores-home"><?php esc_html_e( 'store\'s home', 'cozy-addons' ); ?></a></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->
<!-- /wp:woocommerce/product-collection-no-results --></div>
<!-- /wp:woocommerce/product-collection -->
<?php } else { ?>
	<!-- wp:cozy-block/featured-content-box {"blockClientId":"62bfa610-7315-49aa-bcf2-73d60089c300","gridOptions":{"enableMasonry":false,"columnCount":4,"gap":26}} -->
<div class="cozy-block-featured-content-box display-grid layout-default   " id="cozyBlock_62bfa610_7315_49aa_bcf2_73d60089c300"><div class="cozy-grid-wrapper "><!-- wp:cozy-block/grid -->
<div class="cozy-block-grid"><!-- wp:group {"style":{"spacing":{"blockGap":"0","margin":{"bottom":"26px"}}},"layout":{"type":"default"}} -->
<div class="wp-block-group" style="margin-bottom:26px"><!-- wp:cover {"url":"https://plugins.cozythemes.com/cozy-addons/assets/media/featured-product-36.png","dimRatio":0,"minHeight":340,"contentPosition":"top left","isDark":false} -->
<div class="wp-block-cover is-light has-custom-content-position is-position-top-left" style="min-height:340px"><img class="wp-block-cover__image-background" alt="" src="https://plugins.cozythemes.com/cozy-addons/assets/media/featured-product-36.png" data-object-fit="cover"/><span aria-hidden="true" class="wp-block-cover__background has-background-dim-0 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:group {"style":{"spacing":{"blockGap":"0","margin":{"top":"0","bottom":"0"},"padding":{"right":"0","left":"0","top":"0","bottom":"0"}},"typography":{"fontSize":"13px"}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group" style="margin-top:0;margin-bottom:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;font-size:13px"><!-- wp:paragraph {"style":{"color":{"background":"#53a79b","text":"#fffffe"},"elements":{"link":{"color":{"text":"#fffffe"}}},"border":{"radius":{"topLeft":"100px","topRight":"100px","bottomLeft":"100px","bottomRight":"100px"}},"spacing":{"padding":{"top":"4px","bottom":"4px","left":"16px","right":"16px"}}}} -->
<p class="has-text-color has-background has-link-color" style="border-top-left-radius:100px;border-top-right-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;color:#fffffe;background-color:#53a79b;padding-top:4px;padding-right:16px;padding-bottom:4px;padding-left:16px"><?php esc_html_e( 'New', 'cozy-addons' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->

<!-- wp:heading {"textAlign":"center","level":3,"style":{"typography":{"fontSize":"16px","fontStyle":"normal","fontWeight":"400","lineHeight":1.6},"color":{"text":"#2a2929"},"elements":{"link":{"color":{"text":"#2a2929"}}},"spacing":{"margin":{"top":"6px","bottom":"6px"}}},"cozyCustomFont":"Inter"} -->
<h3 class="wp-block-heading has-text-align-center has-text-color has-link-color" style="color:#2a2929;margin-top:6px;margin-bottom:6px;font-size:16px;font-style:normal;font-weight:400;line-height:1.6"><?php esc_html_e( 'Waven Laundry Sets', 'cozy-addons' ); ?></h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"20px","fontStyle":"normal","fontWeight":"600","lineHeight":"1.3"}}} -->
<p class="has-text-align-center" style="font-size:20px;font-style:normal;font-weight:600;line-height:1.3"><?php esc_html_e( '$ 189.00 USD', 'cozy-addons' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:cozy-block/grid -->

<!-- wp:cozy-block/grid -->
<div class="cozy-block-grid"><!-- wp:group {"style":{"spacing":{"blockGap":"0","margin":{"bottom":"26px"}}},"layout":{"type":"default"}} -->
<div class="wp-block-group" style="margin-bottom:26px"><!-- wp:cover {"url":"https://plugins.cozythemes.com/cozy-addons/assets/media/featured-product-37.png","dimRatio":0,"minHeight":340,"contentPosition":"top left","isDark":false} -->
<div class="wp-block-cover is-light has-custom-content-position is-position-top-left" style="min-height:340px"><img class="wp-block-cover__image-background" alt="" src="https://plugins.cozythemes.com/cozy-addons/assets/media/featured-product-37.png" data-object-fit="cover"/><span aria-hidden="true" class="wp-block-cover__background has-background-dim-0 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:group {"style":{"spacing":{"blockGap":"0","margin":{"top":"0","bottom":"0"},"padding":{"right":"0","left":"0","top":"0","bottom":"0"}},"typography":{"fontSize":"13px"}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group" style="margin-top:0;margin-bottom:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;font-size:13px"><!-- wp:paragraph {"style":{"color":{"background":"#53a79b","text":"#fffffe"},"elements":{"link":{"color":{"text":"#fffffe"}}},"border":{"radius":{"topLeft":"100px","topRight":"100px","bottomLeft":"100px","bottomRight":"100px"}},"spacing":{"padding":{"top":"4px","bottom":"4px","left":"16px","right":"16px"}}}} -->
<p class="has-text-color has-background has-link-color" style="border-top-left-radius:100px;border-top-right-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;color:#fffffe;background-color:#53a79b;padding-top:4px;padding-right:16px;padding-bottom:4px;padding-left:16px"><?php esc_html_e( 'New', 'cozy-addons' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->

<!-- wp:heading {"textAlign":"center","level":3,"style":{"typography":{"fontSize":"16px","fontStyle":"normal","fontWeight":"400","lineHeight":1.6},"color":{"text":"#2a2929"},"elements":{"link":{"color":{"text":"#2a2929"}}},"spacing":{"margin":{"top":"6px","bottom":"6px"}}},"cozyCustomFont":"Inter"} -->
<h3 class="wp-block-heading has-text-align-center has-text-color has-link-color" style="color:#2a2929;margin-top:6px;margin-bottom:6px;font-size:16px;font-style:normal;font-weight:400;line-height:1.6"><?php esc_html_e( 'Waven Laundry Sets', 'cozy-addons' ); ?></h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"20px","fontStyle":"normal","fontWeight":"600","lineHeight":"1.3"}}} -->
<p class="has-text-align-center" style="font-size:20px;font-style:normal;font-weight:600;line-height:1.3"><?php esc_html_e( '$ 189.00 USD', 'cozy-addons' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:cozy-block/grid -->

<!-- wp:cozy-block/grid -->
<div class="cozy-block-grid"><!-- wp:group {"style":{"spacing":{"blockGap":"0","margin":{"bottom":"26px"}}},"layout":{"type":"default"}} -->
<div class="wp-block-group" style="margin-bottom:26px"><!-- wp:cover {"url":"https://plugins.cozythemes.com/cozy-addons/assets/media/featured-product-38.png","dimRatio":0,"minHeight":340,"contentPosition":"top left","isDark":false} -->
<div class="wp-block-cover is-light has-custom-content-position is-position-top-left" style="min-height:340px"><img class="wp-block-cover__image-background" alt="" src="https://plugins.cozythemes.com/cozy-addons/assets/media/featured-product-38.png" data-object-fit="cover"/><span aria-hidden="true" class="wp-block-cover__background has-background-dim-0 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:group {"style":{"spacing":{"blockGap":"0","margin":{"top":"0","bottom":"0"},"padding":{"right":"0","left":"0","top":"0","bottom":"0"}},"typography":{"fontSize":"13px"}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group" style="margin-top:0;margin-bottom:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;font-size:13px"><!-- wp:paragraph {"style":{"color":{"background":"#53a79b","text":"#fffffe"},"elements":{"link":{"color":{"text":"#fffffe"}}},"border":{"radius":{"topLeft":"100px","topRight":"100px","bottomLeft":"100px","bottomRight":"100px"}},"spacing":{"padding":{"top":"4px","bottom":"4px","left":"16px","right":"16px"}}}} -->
<p class="has-text-color has-background has-link-color" style="border-top-left-radius:100px;border-top-right-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;color:#fffffe;background-color:#53a79b;padding-top:4px;padding-right:16px;padding-bottom:4px;padding-left:16px"><?php esc_html_e( 'New', 'cozy-addons' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->

<!-- wp:heading {"textAlign":"center","level":3,"style":{"typography":{"fontSize":"16px","fontStyle":"normal","fontWeight":"400","lineHeight":1.6},"color":{"text":"#2a2929"},"elements":{"link":{"color":{"text":"#2a2929"}}},"spacing":{"margin":{"top":"6px","bottom":"6px"}}},"cozyCustomFont":"Inter"} -->
<h3 class="wp-block-heading has-text-align-center has-text-color has-link-color" style="color:#2a2929;margin-top:6px;margin-bottom:6px;font-size:16px;font-style:normal;font-weight:400;line-height:1.6"><?php esc_html_e( 'Waven Laundry Sets', 'cozy-addons' ); ?></h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"20px","fontStyle":"normal","fontWeight":"600","lineHeight":"1.3"}}} -->
<p class="has-text-align-center" style="font-size:20px;font-style:normal;font-weight:600;line-height:1.3"><?php esc_html_e( '$ 189.00 USD', 'cozy-addons' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:cozy-block/grid -->

<!-- wp:cozy-block/grid -->
<div class="cozy-block-grid"><!-- wp:group {"style":{"spacing":{"blockGap":"0","margin":{"bottom":"26px"}}},"layout":{"type":"default"}} -->
<div class="wp-block-group" style="margin-bottom:26px"><!-- wp:cover {"url":"https://plugins.cozythemes.com/cozy-addons/assets/media/featured-product-39.png","dimRatio":0,"minHeight":340,"contentPosition":"top left","isDark":false} -->
<div class="wp-block-cover is-light has-custom-content-position is-position-top-left" style="min-height:340px"><img class="wp-block-cover__image-background" alt="" src="https://plugins.cozythemes.com/cozy-addons/assets/media/featured-product-39.png" data-object-fit="cover"/><span aria-hidden="true" class="wp-block-cover__background has-background-dim-0 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:group {"style":{"spacing":{"blockGap":"0","margin":{"top":"0","bottom":"0"},"padding":{"right":"0","left":"0","top":"0","bottom":"0"}},"typography":{"fontSize":"13px"}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group" style="margin-top:0;margin-bottom:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;font-size:13px"><!-- wp:paragraph {"style":{"color":{"background":"#53a79b","text":"#fffffe"},"elements":{"link":{"color":{"text":"#fffffe"}}},"border":{"radius":{"topLeft":"100px","topRight":"100px","bottomLeft":"100px","bottomRight":"100px"}},"spacing":{"padding":{"top":"4px","bottom":"4px","left":"16px","right":"16px"}}}} -->
<p class="has-text-color has-background has-link-color" style="border-top-left-radius:100px;border-top-right-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;color:#fffffe;background-color:#53a79b;padding-top:4px;padding-right:16px;padding-bottom:4px;padding-left:16px"><?php esc_html_e( 'New', 'cozy-addons' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->

<!-- wp:heading {"textAlign":"center","level":3,"style":{"typography":{"fontSize":"16px","fontStyle":"normal","fontWeight":"400","lineHeight":1.6},"color":{"text":"#2a2929"},"elements":{"link":{"color":{"text":"#2a2929"}}},"spacing":{"margin":{"top":"6px","bottom":"6px"}}},"cozyCustomFont":"Inter"} -->
<h3 class="wp-block-heading has-text-align-center has-text-color has-link-color" style="color:#2a2929;margin-top:6px;margin-bottom:6px;font-size:16px;font-style:normal;font-weight:400;line-height:1.6"><?php esc_html_e( 'Waven Laundry Sets', 'cozy-addons' ); ?></h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"20px","fontStyle":"normal","fontWeight":"600","lineHeight":"1.3"}}} -->
<p class="has-text-align-center" style="font-size:20px;font-style:normal;font-weight:600;line-height:1.3"><?php esc_html_e( '$ 189.00 USD', 'cozy-addons' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:cozy-block/grid -->

<!-- wp:cozy-block/grid -->
<div class="cozy-block-grid"><!-- wp:group {"style":{"spacing":{"blockGap":"0","margin":{"bottom":"26px"}}},"layout":{"type":"default"}} -->
<div class="wp-block-group" style="margin-bottom:26px"><!-- wp:cover {"url":"https://plugins.cozythemes.com/cozy-addons/assets/media/featured-product-40.png","dimRatio":0,"minHeight":340,"contentPosition":"top left","isDark":false} -->
<div class="wp-block-cover is-light has-custom-content-position is-position-top-left" style="min-height:340px"><img class="wp-block-cover__image-background" alt="" src="https://plugins.cozythemes.com/cozy-addons/assets/media/featured-product-40.png" data-object-fit="cover"/><span aria-hidden="true" class="wp-block-cover__background has-background-dim-0 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:group {"style":{"spacing":{"blockGap":"0","margin":{"top":"0","bottom":"0"},"padding":{"right":"0","left":"0","top":"0","bottom":"0"}},"typography":{"fontSize":"13px"}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group" style="margin-top:0;margin-bottom:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;font-size:13px"><!-- wp:paragraph {"style":{"color":{"background":"#53a79b","text":"#fffffe"},"elements":{"link":{"color":{"text":"#fffffe"}}},"border":{"radius":{"topLeft":"100px","topRight":"100px","bottomLeft":"100px","bottomRight":"100px"}},"spacing":{"padding":{"top":"4px","bottom":"4px","left":"16px","right":"16px"}}}} -->
<p class="has-text-color has-background has-link-color" style="border-top-left-radius:100px;border-top-right-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;color:#fffffe;background-color:#53a79b;padding-top:4px;padding-right:16px;padding-bottom:4px;padding-left:16px"><?php esc_html_e( 'New', 'cozy-addons' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->

<!-- wp:heading {"textAlign":"center","level":3,"style":{"typography":{"fontSize":"16px","fontStyle":"normal","fontWeight":"400","lineHeight":1.6},"color":{"text":"#2a2929"},"elements":{"link":{"color":{"text":"#2a2929"}}},"spacing":{"margin":{"top":"6px","bottom":"6px"}}},"cozyCustomFont":"Inter"} -->
<h3 class="wp-block-heading has-text-align-center has-text-color has-link-color" style="color:#2a2929;margin-top:6px;margin-bottom:6px;font-size:16px;font-style:normal;font-weight:400;line-height:1.6"><?php esc_html_e( 'Waven Laundry Sets', 'cozy-addons' ); ?></h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"20px","fontStyle":"normal","fontWeight":"600","lineHeight":"1.3"}}} -->
<p class="has-text-align-center" style="font-size:20px;font-style:normal;font-weight:600;line-height:1.3"><?php esc_html_e( '$ 189.00 USD', 'cozy-addons' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:cozy-block/grid -->

<!-- wp:cozy-block/grid -->
<div class="cozy-block-grid"><!-- wp:group {"style":{"spacing":{"blockGap":"0","margin":{"bottom":"26px"}}},"layout":{"type":"default"}} -->
<div class="wp-block-group" style="margin-bottom:26px"><!-- wp:cover {"url":"https://plugins.cozythemes.com/cozy-addons/assets/media/featured-product-41.png","dimRatio":0,"minHeight":340,"contentPosition":"top left","isDark":false} -->
<div class="wp-block-cover is-light has-custom-content-position is-position-top-left" style="min-height:340px"><img class="wp-block-cover__image-background" alt="" src="https://plugins.cozythemes.com/cozy-addons/assets/media/featured-product-41.png" data-object-fit="cover"/><span aria-hidden="true" class="wp-block-cover__background has-background-dim-0 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:group {"style":{"spacing":{"blockGap":"0","margin":{"top":"0","bottom":"0"},"padding":{"right":"0","left":"0","top":"0","bottom":"0"}},"typography":{"fontSize":"13px"}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group" style="margin-top:0;margin-bottom:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;font-size:13px"><!-- wp:paragraph {"style":{"color":{"background":"#53a79b","text":"#fffffe"},"elements":{"link":{"color":{"text":"#fffffe"}}},"border":{"radius":{"topLeft":"100px","topRight":"100px","bottomLeft":"100px","bottomRight":"100px"}},"spacing":{"padding":{"top":"4px","bottom":"4px","left":"16px","right":"16px"}}}} -->
<p class="has-text-color has-background has-link-color" style="border-top-left-radius:100px;border-top-right-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;color:#fffffe;background-color:#53a79b;padding-top:4px;padding-right:16px;padding-bottom:4px;padding-left:16px"><?php esc_html_e( 'New', 'cozy-addons' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->

<!-- wp:heading {"textAlign":"center","level":3,"style":{"typography":{"fontSize":"16px","fontStyle":"normal","fontWeight":"400","lineHeight":1.6},"color":{"text":"#2a2929"},"elements":{"link":{"color":{"text":"#2a2929"}}},"spacing":{"margin":{"top":"6px","bottom":"6px"}}},"cozyCustomFont":"Inter"} -->
<h3 class="wp-block-heading has-text-align-center has-text-color has-link-color" style="color:#2a2929;margin-top:6px;margin-bottom:6px;font-size:16px;font-style:normal;font-weight:400;line-height:1.6"><?php esc_html_e( 'Waven Laundry Sets', 'cozy-addons' ); ?></h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"20px","fontStyle":"normal","fontWeight":"600","lineHeight":"1.3"}}} -->
<p class="has-text-align-center" style="font-size:20px;font-style:normal;font-weight:600;line-height:1.3"><?php esc_html_e( '$ 189.00 USD', 'cozy-addons' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:cozy-block/grid -->

<!-- wp:cozy-block/grid -->
<div class="cozy-block-grid"><!-- wp:group {"style":{"spacing":{"blockGap":"0","margin":{"bottom":"26px"}}},"layout":{"type":"default"}} -->
<div class="wp-block-group" style="margin-bottom:26px"><!-- wp:cover {"url":"https://plugins.cozythemes.com/cozy-addons/assets/media/featured-product-42.png","dimRatio":0,"minHeight":340,"contentPosition":"top left","isDark":false} -->
<div class="wp-block-cover is-light has-custom-content-position is-position-top-left" style="min-height:340px"><img class="wp-block-cover__image-background" alt="" src="https://plugins.cozythemes.com/cozy-addons/assets/media/featured-product-42.png" data-object-fit="cover"/><span aria-hidden="true" class="wp-block-cover__background has-background-dim-0 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:group {"style":{"spacing":{"blockGap":"0","margin":{"top":"0","bottom":"0"},"padding":{"right":"0","left":"0","top":"0","bottom":"0"}},"typography":{"fontSize":"13px"}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group" style="margin-top:0;margin-bottom:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;font-size:13px"><!-- wp:paragraph {"style":{"color":{"background":"#53a79b","text":"#fffffe"},"elements":{"link":{"color":{"text":"#fffffe"}}},"border":{"radius":{"topLeft":"100px","topRight":"100px","bottomLeft":"100px","bottomRight":"100px"}},"spacing":{"padding":{"top":"4px","bottom":"4px","left":"16px","right":"16px"}}}} -->
<p class="has-text-color has-background has-link-color" style="border-top-left-radius:100px;border-top-right-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;color:#fffffe;background-color:#53a79b;padding-top:4px;padding-right:16px;padding-bottom:4px;padding-left:16px"><?php esc_html_e( 'New', 'cozy-addons' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->

<!-- wp:heading {"textAlign":"center","level":3,"style":{"typography":{"fontSize":"16px","fontStyle":"normal","fontWeight":"400","lineHeight":1.6},"color":{"text":"#2a2929"},"elements":{"link":{"color":{"text":"#2a2929"}}},"spacing":{"margin":{"top":"6px","bottom":"6px"}}},"cozyCustomFont":"Inter"} -->
<h3 class="wp-block-heading has-text-align-center has-text-color has-link-color" style="color:#2a2929;margin-top:6px;margin-bottom:6px;font-size:16px;font-style:normal;font-weight:400;line-height:1.6"><?php esc_html_e( 'Waven Laundry Sets', 'cozy-addons' ); ?></h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"20px","fontStyle":"normal","fontWeight":"600","lineHeight":"1.3"}}} -->
<p class="has-text-align-center" style="font-size:20px;font-style:normal;font-weight:600;line-height:1.3"><?php esc_html_e( '$ 189.00 USD', 'cozy-addons' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:cozy-block/grid -->

<!-- wp:cozy-block/grid -->
<div class="cozy-block-grid"><!-- wp:group {"style":{"spacing":{"blockGap":"0","margin":{"bottom":"26px"}}},"layout":{"type":"default"}} -->
<div class="wp-block-group" style="margin-bottom:26px"><!-- wp:cover {"url":"https://plugins.cozythemes.com/cozy-addons/assets/media/featured-product-43.png","dimRatio":0,"minHeight":340,"contentPosition":"top left","isDark":false} -->
<div class="wp-block-cover is-light has-custom-content-position is-position-top-left" style="min-height:340px"><img class="wp-block-cover__image-background" alt="" src="https://plugins.cozythemes.com/cozy-addons/assets/media/featured-product-43.png" data-object-fit="cover"/><span aria-hidden="true" class="wp-block-cover__background has-background-dim-0 has-background-dim"></span><div class="wp-block-cover__inner-container"><!-- wp:group {"style":{"spacing":{"blockGap":"0","margin":{"top":"0","bottom":"0"},"padding":{"right":"0","left":"0","top":"0","bottom":"0"}},"typography":{"fontSize":"13px"}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group" style="margin-top:0;margin-bottom:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0;font-size:13px"><!-- wp:paragraph {"style":{"color":{"background":"#53a79b","text":"#fffffe"},"elements":{"link":{"color":{"text":"#fffffe"}}},"border":{"radius":{"topLeft":"100px","topRight":"100px","bottomLeft":"100px","bottomRight":"100px"}},"spacing":{"padding":{"top":"4px","bottom":"4px","left":"16px","right":"16px"}}}} -->
<p class="has-text-color has-background has-link-color" style="border-top-left-radius:100px;border-top-right-radius:100px;border-bottom-left-radius:100px;border-bottom-right-radius:100px;color:#fffffe;background-color:#53a79b;padding-top:4px;padding-right:16px;padding-bottom:4px;padding-left:16px"><?php esc_html_e( 'New', 'cozy-addons' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->

<!-- wp:heading {"textAlign":"center","level":3,"style":{"typography":{"fontSize":"16px","fontStyle":"normal","fontWeight":"400","lineHeight":1.6},"color":{"text":"#2a2929"},"elements":{"link":{"color":{"text":"#2a2929"}}},"spacing":{"margin":{"top":"6px","bottom":"6px"}}},"cozyCustomFont":"Inter"} -->
<h3 class="wp-block-heading has-text-align-center has-text-color has-link-color" style="color:#2a2929;margin-top:6px;margin-bottom:6px;font-size:16px;font-style:normal;font-weight:400;line-height:1.6"><?php esc_html_e( 'Waven Laundry Sets', 'cozy-addons' ); ?></h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"typography":{"fontSize":"20px","fontStyle":"normal","fontWeight":"600","lineHeight":"1.3"}}} -->
<p class="has-text-align-center" style="font-size:20px;font-style:normal;font-weight:600;line-height:1.3"><?php esc_html_e( '$ 189.00 USD', 'cozy-addons' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:cozy-block/grid --></div></div>
<!-- /wp:cozy-block/featured-content-box -->
<?php } ?>
</div>
<!-- /wp:group -->