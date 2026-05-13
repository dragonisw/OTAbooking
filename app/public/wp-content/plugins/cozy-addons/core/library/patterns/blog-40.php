<!-- wp:group {"style":{"spacing":{"margin":{"top":"0","bottom":"0"},"padding":{"top":"80px","bottom":"80px","left":"26px","right":"26px"},"blockGap":"0"},"color":{"background":"#010101","text":"#acacac"},"elements":{"link":{"color":{"text":"#acacac"}}},"typography":{"fontSize":"16px","fontStyle":"normal","fontWeight":"400","lineHeight":1.6}},"layout":{"type":"constrained","contentSize":"1180px"},"cozyCustomFont":"Plus Jakarta Sans"} -->
<div class="wp-block-group has-text-color has-background has-link-color" style="color:#acacac;background-color:#010101;margin-top:0;margin-bottom:0;padding-top:80px;padding-right:26px;padding-bottom:80px;padding-left:26px;font-size:16px;font-style:normal;font-weight:400;line-height:1.6"><!-- wp:group {"style":{"spacing":{"blockGap":"16px","margin":{"top":"0","bottom":"60px"},"padding":{"right":"0","left":"0","top":"0","bottom":"0"}}},"layout":{"type":"constrained","contentSize":"665px"}} -->
<div class="wp-block-group" style="margin-top:0;margin-bottom:60px;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0"><!-- wp:paragraph {"align":"center","style":{"typography":{"textTransform":"uppercase","textDecoration":"underline"}}} -->
<p class="has-text-align-center" style="text-decoration:underline;text-transform:uppercase"><?php esc_html_e( 'Blogs & Articles', 'cozy-addons' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textAlign":"center","style":{"typography":{"fontStyle":"normal","fontWeight":"700","lineHeight":"1.2","fontSize":"36px","textTransform":"uppercase"},"color":{"text":"#fffffe"},"elements":{"link":{"color":{"text":"#fffffe"}}},"spacing":{"margin":{"top":"16px","bottom":"0"}}},"cozyCustomFont":"Plus Jakarta Sans"} -->
<h2 class="wp-block-heading has-text-align-center has-text-color has-link-color" style="color:#fffffe;margin-top:16px;margin-bottom:0;font-size:36px;font-style:normal;font-weight:700;line-height:1.2;text-transform:uppercase">Latest Blogs &amp; Articles</h2>
<!-- /wp:heading --></div>
<!-- /wp:group -->

<!-- wp:group {"style":{"typography":{"fontSize":"14px","lineHeight":"1.6","fontStyle":"normal","fontWeight":"300"}},"layout":{"type":"constrained","contentSize":"100%"}} -->
<div class="wp-block-group" style="font-size:14px;font-style:normal;font-weight:300;line-height:1.6"><!-- wp:query {"queryId":7,"query":{"perPage":3,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false,"taxQuery":null,"parents":[],"format":[]}} -->
<div class="wp-block-query"><!-- wp:post-template {"layout":{"type":"grid","columnCount":3}} -->
<!-- wp:group {"style":{"spacing":{"blockGap":"0","margin":{"top":"0","bottom":"0"},"padding":{"right":"0","left":"0","top":"0","bottom":"0"}}},"layout":{"type":"constrained","contentSize":"100%"}} -->
<div class="wp-block-group" style="margin-top:0;margin-bottom:0;padding-top:0;padding-right:0;padding-bottom:0;padding-left:0"><!-- wp:post-featured-image {"isLink":true,"width":"100%","height":"280px"} /-->

<!-- wp:group {"style":{"spacing":{"padding":{"top":"18px","bottom":"18px","left":"26px","right":"26px"},"blockGap":"12px"}},"backgroundColor":"contrast","layout":{"type":"default"}} -->
<div class="wp-block-group has-contrast-background-color has-background" style="padding-top:18px;padding-right:26px;padding-bottom:18px;padding-left:26px"><!-- wp:post-terms {"term":"category","style":{"color":{"text":"#ff696e"},"elements":{"link":{"color":{"text":"#ff696e"}}},"typography":{"textTransform":"uppercase","fontSize":"14px","fontStyle":"normal","fontWeight":"500"}}} /-->

<!-- wp:post-title {"level":3,"isLink":true,"style":{"typography":{"fontSize":"22px","fontStyle":"normal","fontWeight":"600","lineHeight":"1.3"},"color":{"text":"#fffffe"},"elements":{"link":{"color":{"text":"#fffffe"}}}}} /-->

<!-- wp:post-date {"metadata":{"bindings":{"datetime":{"source":"core/post-data","args":{"field":"date"}}}}} /-->

<!-- wp:post-excerpt {"moreText":"READ MORE","excerptLength":10,"style":{"elements":{"link":{"color":{"text":"#ff696e"}}}}} /--></div>
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