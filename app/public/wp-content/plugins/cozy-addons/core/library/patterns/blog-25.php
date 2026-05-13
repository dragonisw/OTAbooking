<!-- wp:group {"style":{"spacing":{"margin":{"top":"0","bottom":"0"},"padding":{"right":"26px","left":"26px","top":"80px","bottom":"80px"}},"color":{"background":"#090909","text":"#fffffe"},"elements":{"link":{"color":{"text":"#fffffe"}}},"typography":{"fontSize":"16px"}},"layout":{"type":"constrained","contentSize":"1180px"},"cozyCustomFont":"Inter"} -->
<div class="wp-block-group has-text-color has-background has-link-color" style="color:#fffffe;background-color:#090909;margin-top:0;margin-bottom:0;padding-top:80px;padding-right:26px;padding-bottom:80px;padding-left:26px;font-size:16px"><!-- wp:group {"style":{"spacing":{"margin":{"top":"0","bottom":"0"},"blockGap":"0"}},"layout":{"type":"constrained","contentSize":"860px"}} -->
<div class="wp-block-group" style="margin-top:0;margin-bottom:0"><!-- wp:heading {"textAlign":"center","level":3,"style":{"color":{"text":"#fffffe"},"elements":{"link":{"color":{"text":"#fffffe"}}},"typography":{"fontSize":"36px","lineHeight":"1.3","fontStyle":"normal","fontWeight":"600"},"spacing":{"margin":{"top":"0","bottom":"0"}}},"cozyCustomFont":"Space Grotesk"} -->
<h3 class="wp-block-heading has-text-align-center has-text-color has-link-color" style="color:#fffffe;margin-top:0;margin-bottom:0;font-size:36px;font-style:normal;font-weight:600;line-height:1.3"><?php esc_html_e( 'Featured Posts', 'cozy-addons' ); ?></h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"spacing":{"margin":{"top":"24px"}}}} -->
<p class="has-text-align-center" style="margin-top:24px"><?php esc_html_e( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.', 'cozy-addons' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"style":{"spacing":{"margin":{"top":"66px"}}},"layout":{"type":"constrained","contentSize":"100%"}} -->
<div class="wp-block-group" style="margin-top:66px"><!-- wp:query {"queryId":2,"query":{"perPage":6,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false,"taxQuery":null,"parents":[],"format":[]}} -->
<div class="wp-block-query"><!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
<!-- wp:group {"style":{"spacing":{"blockGap":"0"},"color":{"background":"#1d1d1d"}},"layout":{"type":"constrained"},"cozyHoverEffect":{"hasOverflow":false,"overflow":"hidden","hasZIndex":false,"zIndex":0,"boxShadow":{"enabled":false,"color":"#000","horizontal":0,"vertical":0,"blur":100,"spread":0,"position":""},"boxShadowHover":{"enabled":true,"color":"#fffffe1a","horizontal":0,"vertical":0,"blur":100,"spread":0,"position":""},"transformEnabled":false,"transform":{"translateX":0,"translateY":0,"rotate":0,"scale":1},"transformDefaultEnabled":false,"transformDefault":{"translateX":0,"translateY":0,"rotate":0,"scale":1}}} -->
<div class="wp-block-group has-background" style="background-color:#1d1d1d"><!-- wp:post-featured-image {"isLink":true,"width":"100%","height":"260px"} /-->

<!-- wp:group {"style":{"spacing":{"padding":{"top":"20px","bottom":"20px","left":"30px","right":"30px"}},"color":{"text":"#fffffe"},"elements":{"link":{":hover":{"color":{"text":"#fffffe"}}}}},"layout":{"type":"constrained","justifyContent":"left"},"cozyCustomFont":"Space Grotesk"} -->
<div class="wp-block-group has-text-color" style="color:#fffffe;padding-top:20px;padding-right:30px;padding-bottom:20px;padding-left:30px"><!-- wp:post-title {"level":3,"isLink":true,"style":{"typography":{"fontSize":"22px"},"elements":{"link":{":hover":{"color":{"text":"#b4712c"}}}}}} /-->

<!-- wp:group {"style":{"typography":{"fontSize":"12px"},"spacing":{"blockGap":"8px","margin":{"top":"12px","bottom":"12px"}},"color":{"text":"#b4712c"},"elements":{"link":{"color":{"text":"#b4712c"},":hover":{"color":{"text":"#fffffe"}}}}},"layout":{"type":"flex","flexWrap":"nowrap"},"cozyCustomFont":"Inter"} -->
<div class="wp-block-group has-text-color has-link-color" style="color:#b4712c;margin-top:12px;margin-bottom:12px;font-size:12px"><!-- wp:post-terms {"term":"category","style":{"typography":{"fontSize":"12px"},"color":{"text":"#b4712c"},"elements":{"link":{"color":{"text":"#b4712c"},":hover":{"color":{"text":"#fffffe"}}}}}} /-->

<!-- wp:post-date {"metadata":{"bindings":{"datetime":{"source":"core/post-data","args":{"field":"date"}}}},"style":{"typography":{"fontSize":"12px"},"color":{"text":"#acacac"},"elements":{"link":{"color":{"text":"#acacac"}}}}} /--></div>
<!-- /wp:group -->

<!-- wp:post-excerpt {"moreText":"","showMoreOnNewLine":false,"excerptLength":15,"style":{"typography":{"fontSize":"16px"},"color":{"background":"#ffffff00"}}} /-->

<!-- wp:read-more {"content":"Read More","style":{"color":{"text":"#b4712c"},"elements":{"link":{"color":{"text":"#b4712c"}}}}} /--></div>
<!-- /wp:group --></div>
<!-- /wp:group -->
<!-- /wp:post-template -->

<!-- wp:query-no-results -->
<!-- wp:paragraph {"placeholder":"Add text or blocks that will display when a query returns no results."} -->
<p><?php esc_html_e( 'No Posts Found.', 'cozy-addons' ); ?></p>
<!-- /wp:paragraph -->
<!-- /wp:query-no-results --></div>
<!-- /wp:query --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->