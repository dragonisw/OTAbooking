<!-- wp:group {"style":{"spacing":{"margin":{"top":"0","bottom":"0"},"padding":{"right":"26px","left":"26px","top":"80px","bottom":"44px"},"blockGap":"0"},"color":{"text":"#808080","background":"#fffffe"},"typography":{"fontSize":"16px","fontStyle":"normal","fontWeight":"400","lineHeight":"1.7"},"elements":{"link":{"color":{"text":"#808080"}}}},"layout":{"type":"constrained","contentSize":"1180px"},"cozyCustomFont":"Inter"} -->
<div class="wp-block-group has-text-color has-background has-link-color" style="color:#808080;background-color:#fffffe;margin-top:0;margin-bottom:0;padding-top:80px;padding-right:26px;padding-bottom:44px;padding-left:26px;font-size:16px;font-style:normal;font-weight:400;line-height:1.7"><!-- wp:paragraph {"align":"center","style":{"color":{"text":"#97340d"},"elements":{"link":{"color":{"text":"#97340d"}}},"typography":{"textTransform":"uppercase","fontStyle":"normal","fontWeight":"500"}}} -->
<p class="has-text-align-center has-text-color has-link-color" style="color:#97340d;font-style:normal;font-weight:500;text-transform:uppercase"><?php esc_html_e( 'Blogs', 'cozy-addons' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textAlign":"center","style":{"typography":{"fontSize":"44px","lineHeight":"1.2","fontStyle":"normal","fontWeight":"600"},"color":{"text":"#211915"},"elements":{"link":{"color":{"text":"#211915"}}},"spacing":{"margin":{"top":"6px","bottom":"60px"}}},"cozyCustomFont":"Yellowtail"} -->
<h2 class="wp-block-heading has-text-align-center has-text-color has-link-color" style="color:#211915;margin-top:6px;margin-bottom:60px;font-size:44px;font-style:normal;font-weight:600;line-height:1.2"><?php esc_html_e( 'Latest Posts & Articles', 'cozy-addons' ); ?></h2>
<!-- /wp:heading -->

<!-- wp:query {"queryId":5,"query":{"perPage":2,"pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false},"metadata":{"categories":["posts"],"patternName":"core/query-standard-posts","name":"Standard"}} -->
<div class="wp-block-query"><!-- wp:post-template {"style":{"spacing":{"blockGap":"26px"}},"layout":{"type":"grid","columnCount":2}} -->
<!-- wp:group {"style":{"spacing":{"blockGap":"0","margin":{"bottom":"44px"}},"typography":{"fontSize":"14px"}},"layout":{"type":"constrained","justifyContent":"left"}} -->
<div class="wp-block-group" style="margin-bottom:44px;font-size:14px"><!-- wp:post-featured-image {"isLink":true,"height":"470px","align":"wide"} /-->

<!-- wp:post-title {"isLink":true,"style":{"color":{"text":"#242424"},"elements":{"link":{"color":{"text":"#242424"}}},"typography":{"fontSize":"18px","lineHeight":"1.4","fontStyle":"normal","fontWeight":"500"},"spacing":{"margin":{"top":"16px","bottom":"16px"}}}} /-->

<!-- wp:post-excerpt /-->

<!-- wp:read-more {"className":"ca-pattern__has-arrow-right","style":{"color":{"text":"#242424"},"elements":{"link":{"color":{"text":"#242424"}}},"typography":{"textDecoration":"underline","fontSize":"16px"},"spacing":{"margin":{"top":"18px"}}}} /--></div>
<!-- /wp:group -->
<!-- /wp:post-template -->

<!-- wp:query-no-results -->
<!-- wp:paragraph {"placeholder":"Add text or blocks that will display when a query returns no results."} -->
<p><?php esc_html_e( 'No posts found!', 'cozy-addons' ); ?></p>
<!-- /wp:paragraph -->
<!-- /wp:query-no-results --></div>
<!-- /wp:query --></div>
<!-- /wp:group -->