<?php
/**
 * Title: Footer
 * Slug: patterns-automotive/footer
 * Categories: footer
 * Block Types: core/template-part/footer
 * Description: A pattern for displaying the site footer.
 *
 * @package    Patterns_Automotive
 * @subpackage Patterns_Automotive/patterns
 * @since      1.0.0
 */

?>
<!-- wp:group {"align":"full","style":{"spacing":{"blockGap":"0px"}},"backgroundColor":"secondary","layout":{"type":"constrained"},"metadata":{"name":"Footer"}} -->
<div class="wp-block-group alignfull has-secondary-background-color has-background"><!-- wp:group {"metadata":{"name":"Top Footer"},"align":"wide","style":{"spacing":{"padding":{"top":"40px","bottom":"40px","left":"var:preset|spacing|40","right":"var:preset|spacing|40"}}},"layout":{"type":"flex","flexWrap":"wrap","justifyContent":"space-between"}} -->
<div class="wp-block-group alignwide"
	style="padding-top:40px;padding-right:var(--wp--preset--spacing--40);padding-bottom:40px;padding-left:var(--wp--preset--spacing--40)"><!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group"><!-- wp:image {"width":"auto","height":"40px","sizeSlug":"full","linkDestination":"custom"} -->
<figure class="wp-block-image size-full is-resized"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/patternswp-logo-default.png" style="width:auto;height:40px"/></figure>
<!-- /wp:image -->

<!-- wp:site-title {"style":{"elements":{"link":{"color":{"text":"var:preset|color|default"}}},"typography":{"lineHeight":"1.1","textTransform":"uppercase","fontSize":"20px"},"layout":{"selfStretch":"fixed","flexSize":"100px"}},"textColor":"default"} /--></div>
<!-- /wp:group -->

<!-- wp:navigation {"textColor":"quaternary","overlayMenu":"never","style":{"typography":{"fontSize":"14px","textTransform":"capitalize"}}} /--></div>
<!-- /wp:group -->

<!-- wp:group {"metadata":{"name":"Middle Footer"},"align":"full","style":{"spacing":{"padding":{"top":"80px","bottom":"80px","left":"var:preset|spacing|40","right":"var:preset|spacing|40"},"blockGap":"0px"},"border":{"top":{"color":"#21252963","style":"solid","width":"1px"},"right":[],"bottom":[],"left":[]}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group alignfull"
	style="border-top-color:#21252963;border-top-style:solid;border-top-width:1px;padding-top:80px;padding-right:var(--wp--preset--spacing--40);padding-bottom:80px;padding-left:var(--wp--preset--spacing--40)"><!-- wp:columns {"align":"wide","style":{"spacing":{"blockGap":{"left":"40px"}}}} -->
<div class="wp-block-columns alignwide"><!-- wp:column -->
<div class="wp-block-column"><!-- wp:paragraph {"style":{"typography":{"textTransform":"uppercase","fontStyle":"normal","fontWeight":"600","fontSize":"13px"}},"textColor":"quaternary"} -->
<p class="has-quaternary-color has-text-color" style="font-size:13px;font-style:normal;font-weight:600;text-transform:uppercase"><?php esc_html_e( 'Office', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|quaternary"}}},"typography":{"fontSize":"14px"}},"textColor":"quaternary"} -->
<p class="has-quaternary-color has-text-color has-link-color" style="font-size:14px"><?php esc_html_e( '785 15h Street, Office 478 Berlin, De 81566 6391 Elgin St. Celina, 10299', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:paragraph {"style":{"typography":{"textTransform":"uppercase","fontSize":"13px","fontStyle":"normal","fontWeight":"600"}},"textColor":"quaternary"} -->
<p class="has-quaternary-color has-text-color" style="font-size:13px;font-style:normal;font-weight:600;text-transform:uppercase"><?php esc_html_e( 'Opening Hours', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|default"}}},"spacing":{"margin":{"top":"0px","bottom":"5px"}},"typography":{"fontSize":"14px"}},"textColor":"default"} -->
<p class="has-default-color has-text-color has-link-color" style="margin-top:0px;margin-bottom:5px;font-size:14px"><?php esc_html_e( 'Mon - Fri : 07:00 - 22:00', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"elements":{"link":{"color":{"text":"var:preset|color|default"}}},"spacing":{"margin":{"top":"0px","bottom":"0px"}},"typography":{"fontSize":"14px"}},"textColor":"default"} -->
<p class="has-default-color has-text-color has-link-color" style="margin-top:0px;margin-bottom:0px;font-size:14px"><?php esc_html_e( 'Sat - Sun : 07:00 - 22:00', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:paragraph {"style":{"typography":{"textTransform":"uppercase","fontSize":"13px","fontStyle":"normal","fontWeight":"600"}},"textColor":"quaternary"} -->
<p class="has-quaternary-color has-text-color" style="font-size:13px;font-style:normal;font-weight:600;text-transform:uppercase"><?php esc_html_e( 'Contact', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"pwp-txt-dec-non","style":{"elements":{"link":{"color":{"text":"var:preset|color|default"}}},"spacing":{"margin":{"top":"0px","bottom":"5px"}}},"textColor":"default","fontSize":"medium"} -->
<p class="pwp-txt-dec-non has-default-color has-text-color has-link-color has-medium-font-size" style="margin-top:0px;margin-bottom:5px"><a href="<?php echo esc_url( 'callto:(629) 555-0129' ); ?>"><?php esc_html_e( '(629) 555-0129', 'patterns-automotive' ); ?></a></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"className":"pwp-txt-dec-non","style":{"elements":{"link":{"color":{"text":"var:preset|color|default"}}},"spacing":{"margin":{"top":"0px","bottom":"0px"}},"typography":{"fontSize":"14px"}},"textColor":"default"} -->
<p class="pwp-txt-dec-non has-default-color has-text-color has-link-color" style="margin-top:0px;margin-bottom:0px;font-size:14px"><a href="<?php echo esc_url( 'mailto:hello@example.com' ); ?>"><?php esc_html_e( 'hello@example.com', 'patterns-automotive' ); ?></a></p>
<!-- /wp:paragraph --></div>
<!-- /wp:column -->

<!-- wp:column -->
<div class="wp-block-column"><!-- wp:paragraph {"style":{"typography":{"textTransform":"uppercase","fontSize":"13px","fontStyle":"normal","fontWeight":"600"}},"textColor":"quaternary"} -->
<p class="has-quaternary-color has-text-color" style="font-size:13px;font-style:normal;font-weight:600;text-transform:uppercase"><?php esc_html_e( 'Latest News', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:query {"queryId":6,"query":{"perPage":"1","pages":0,"offset":0,"postType":"post","order":"desc","orderBy":"date","author":"","search":"","exclude":[],"sticky":"","inherit":false},"layout":{"type":"default"}} -->
<div class="wp-block-query"><!-- wp:post-template {"layout":{"type":"default","columnCount":3}} -->
<!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group"><!-- wp:post-featured-image {"aspectRatio":"1","width":"60px","height":"60px"} /-->

<!-- wp:group {"style":{"spacing":{"blockGap":"0px"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:post-date {"style":{"typography":{"fontSize":"13px"}}} /-->

<!-- wp:post-title {"style":{"elements":{"link":{"color":{"text":"var:preset|color|quaternary"},":hover":{"color":{"text":"var:preset|color|primary"}}}},"typography":{"fontSize":"14px"}},"textColor":"quaternary"} /--></div>
<!-- /wp:group --></div>
<!-- /wp:group -->
<!-- /wp:post-template --></div>
<!-- /wp:query --></div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div>
<!-- /wp:group -->

<!-- wp:group {"align":"full","style":{"spacing":{"padding":{"top":"0px","bottom":"0px","left":"0px","right":"0px"}},"color":{"background":"#00000042"}},"layout":{"type":"constrained"},"metadata":{"name":"Bottom Footer"}} -->
<div class="wp-block-group alignfull has-background" style="background-color:#00000042;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px"><!-- wp:group {"align":"wide","style":{"spacing":{"padding":{"top":"20px","bottom":"20px","left":"var:preset|spacing|40","right":"var:preset|spacing|40"}}},"layout":{"type":"flex","flexWrap":"wrap","justifyContent":"space-between"}} -->
<div class="wp-block-group alignwide"
	style="padding-top:20px;padding-right:var(--wp--preset--spacing--40);padding-bottom:20px;padding-left:var(--wp--preset--spacing--40)"><!-- wp:pattern {"slug":"patterns-automotive/copyright"} /-->

<!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"left"},"metadata":{"name":"Social icons"}} -->
<div class="wp-block-group"><!-- wp:html -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg at-h at-w patterns-automotive-svg-icon-white" viewBox="0 0 16 16">
	<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
</svg>
<!-- /wp:html -->

<!-- wp:html -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg at-h at-w patterns-automotive-svg-icon-white" viewBox="0 0 16 16">
	<path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
</svg>
<!-- /wp:html -->

<!-- wp:html -->
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="at-svg at-h at-w patterns-automotive-svg-icon-white" viewBox="0 0 16 16">
	<path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
</svg>
<!-- /wp:html --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->
<!-- wp:pattern {"slug":"patterns-automotive/scroll-to-top-button"} /-->
</div>
<!-- /wp:group -->
