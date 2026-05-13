<?php
/**
 * Title: Featured Section 4
 * Slug: patterns-automotive/featured-section-4
 * Categories: featured
 * Description: A collection of various WordPress inbuilt blocks, such as headings, paragraphs, image, groups, and buttons, arranged in different positions to form a complete page layout.
 *
 * @package    Patterns_Automotive
 * @subpackage Patterns_Automotive/patterns
 * @since      1.0.0
 */

?>
<!-- wp:cover {"url":"<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/img-1.jpg","hasParallax":true,"dimRatio":90,"minHeight":80,"minHeightUnit":"vh","customGradient":"linear-gradient(175deg,rgba(8,23,28,0.85) 39%,rgba(191,33,38,0.88) 78%)","align":"full","style":{"spacing":{"padding":{"right":"var:preset|spacing|60","left":"var:preset|spacing|60","top":"var:preset|spacing|60","bottom":"var:preset|spacing|60"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-cover alignfull has-parallax" style="padding-top:var(--wp--preset--spacing--60);padding-right:var(--wp--preset--spacing--60);padding-bottom:var(--wp--preset--spacing--60);padding-left:var(--wp--preset--spacing--60);min-height:80vh"><span aria-hidden="true" class="wp-block-cover__background has-background-dim-90 has-background-dim wp-block-cover__gradient-background has-background-gradient" style="background:linear-gradient(175deg,rgba(8,23,28,0.85) 39%,rgba(191,33,38,0.88) 78%)"></span><div role="img" class="wp-block-cover__image-background has-parallax" style="background-position:50% 50%;background-image:url(<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/img-1.jpg)"></div><div class="wp-block-cover__inner-container"><!-- wp:group {"style":{"spacing":{"blockGap":"0px"}},"layout":{"type":"constrained","wideSize":"","contentSize":""}} -->
<div class="wp-block-group"><!-- wp:paragraph {"align":"center","style":{"typography":{"letterSpacing":"1px","textTransform":"uppercase"}},"textColor":"default","fontSize":"small"} -->
<p class="has-text-align-center has-default-color has-text-color has-small-font-size" style="letter-spacing:1px;text-transform:uppercase"><?php esc_html_e( 'Are you looking', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textAlign":"center","level":3,"style":{"typography":{"fontStyle":"normal","fontWeight":"700","fontSize":"45px","lineHeight":"1.1"}},"textColor":"default"} -->
<h3 class="wp-block-heading has-text-align-center has-default-color has-text-color" style="font-size:45px;font-style:normal;font-weight:700;line-height:1.1"><?php esc_html_e( 'TO Buy A Car?', 'patterns-automotive' ); ?></h3>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"spacing":{"margin":{"bottom":"40px"}},"typography":{"lineHeight":"1.6"}},"textColor":"quaternary","fontSize":"small"} -->
<p class="has-text-align-center has-quaternary-color has-text-color has-small-font-size" style="margin-bottom:40px;line-height:1.6"><?php esc_html_e( 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas voluptatem maiores eaque similique non distinctio voluptates perspiciatis', 'patterns-automotive' ); ?> </p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"},"style":{"spacing":{"margin":{"top":"20px"}}}} -->
<div class="wp-block-buttons" style="margin-top:20px"><!-- wp:button {"textColor":"default","style":{"typography":{"textTransform":"uppercase","letterSpacing":"1px"},"elements":{"link":{"color":{"text":"var:preset|color|default"}}}},"borderColor":"default","className":"is-style-outline"} -->
<div class="wp-block-button is-style-outline" style="letter-spacing:1px;text-transform:uppercase"><a class="wp-block-button__link has-default-color has-text-color has-link-color has-border-color has-default-border-color wp-element-button"><?php esc_html_e( 'Search Your Car', 'patterns-automotive' ); ?></a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group -->

<!-- wp:spacer -->
<div style="height:100px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:columns {"verticalAlignment":"center","align":"wide","style":{"spacing":{"blockGap":{"left":"60px"}}}} -->
<div class="wp-block-columns alignwide are-vertically-aligned-center"><!-- wp:column {"verticalAlignment":"center","style":{"border":{"right":{"color":"var:preset|color|quaternary","style":"solid","width":"1px"},"top":{},"bottom":{},"left":{}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-column is-vertically-aligned-center" style="border-right-color:var(--wp--preset--color--quaternary);border-right-style:solid;border-right-width:1px"><!-- wp:group {"align":"full","style":{"spacing":{"blockGap":"30px"}},"layout":{"type":"flex","flexWrap":"nowrap","verticalAlignment":"top"}} -->
<div class="wp-block-group alignfull"><!-- wp:heading {"level":4,"style":{"layout":{"selfStretch":"fit","flexSize":null},"elements":{"link":{"color":{"text":"var:preset|color|default"}}}},"textColor":"default","fontSize":"xx-large","fontFamily":"material-symbols-outlined"} -->
<h4 class="wp-block-heading has-default-color has-text-color has-link-color has-material-symbols-outlined-font-family has-xx-large-font-size"><?php esc_html_e( 'diversity_2', 'patterns-automotive' ); ?></h4>
<!-- /wp:heading -->

<!-- wp:group {"align":"wide","style":{"spacing":{"blockGap":"5px"}},"layout":{"type":"default"}} -->
<div class="wp-block-group alignwide"><!-- wp:heading {"style":{"typography":{"fontStyle":"normal","fontWeight":"400"}},"fontSize":"x-large"} -->
<h2 class="wp-block-heading has-x-large-font-size" style="font-style:normal;font-weight:400"><?php esc_html_e( '150+', 'patterns-automotive' ); ?></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"spacing":{"margin":{"bottom":"0px"}},"typography":{"lineHeight":"1.3"},"elements":{"link":{"color":{"text":"var:preset|color|default"}}}},"textColor":"default","fontSize":"small"} -->
<p class="has-default-color has-text-color has-link-color has-small-font-size" style="margin-bottom:0px;line-height:1.3"><?php esc_html_e( 'Team Workers', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","style":{"border":{"right":{"color":"var:preset|color|quaternary","style":"solid","width":"1px"},"top":{},"bottom":{},"left":{}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-column is-vertically-aligned-center" style="border-right-color:var(--wp--preset--color--quaternary);border-right-style:solid;border-right-width:1px"><!-- wp:group {"align":"full","style":{"spacing":{"blockGap":"30px"}},"layout":{"type":"flex","flexWrap":"nowrap","verticalAlignment":"top"}} -->
<div class="wp-block-group alignfull"><!-- wp:heading {"level":4,"style":{"typography":{"fontStyle":"normal","fontWeight":"800"},"layout":{"selfStretch":"fit","flexSize":null},"elements":{"link":{"color":{"text":"var:preset|color|default"}}}},"textColor":"default","fontSize":"xx-large","fontFamily":"material-symbols-outlined"} -->
<h4 class="wp-block-heading has-default-color has-text-color has-link-color has-material-symbols-outlined-font-family has-xx-large-font-size" style="font-style:normal;font-weight:800"><?php esc_html_e( 'ar_on_you', 'patterns-automotive' ); ?></h4>
<!-- /wp:heading -->

<!-- wp:group {"align":"wide","style":{"spacing":{"blockGap":"5px"}},"layout":{"type":"default"}} -->
<div class="wp-block-group alignwide"><!-- wp:heading {"style":{"typography":{"fontStyle":"normal","fontWeight":"400"}},"fontSize":"x-large"} -->
<h2 class="wp-block-heading has-x-large-font-size" style="font-style:normal;font-weight:400"><?php esc_html_e( '150+', 'patterns-automotive' ); ?></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"spacing":{"margin":{"bottom":"0px"}},"typography":{"lineHeight":"1.3"},"elements":{"link":{"color":{"text":"var:preset|color|default"}}}},"textColor":"default","fontSize":"small"} -->
<p class="has-default-color has-text-color has-link-color has-small-font-size" style="margin-bottom:0px;line-height:1.3"><?php esc_html_e( 'Trusted Clients', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","style":{"border":{"right":{"color":"var:preset|color|quaternary","style":"solid","width":"1px"},"top":{},"bottom":{},"left":{}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-column is-vertically-aligned-center" style="border-right-color:var(--wp--preset--color--quaternary);border-right-style:solid;border-right-width:1px"><!-- wp:group {"align":"full","style":{"spacing":{"blockGap":"30px"}},"layout":{"type":"flex","flexWrap":"nowrap","verticalAlignment":"top"}} -->
<div class="wp-block-group alignfull"><!-- wp:heading {"level":4,"style":{"typography":{"fontStyle":"normal","fontWeight":"800"},"layout":{"selfStretch":"fit","flexSize":null},"elements":{"link":{"color":{"text":"var:preset|color|default"}}}},"textColor":"default","fontSize":"xx-large","fontFamily":"material-symbols-outlined"} -->
<h4 class="wp-block-heading has-default-color has-text-color has-link-color has-material-symbols-outlined-font-family has-xx-large-font-size" style="font-style:normal;font-weight:800"><?php esc_html_e( 'apartment', 'patterns-automotive' ); ?></h4>
<!-- /wp:heading -->

<!-- wp:group {"align":"wide","style":{"spacing":{"blockGap":"5px"}},"layout":{"type":"default"}} -->
<div class="wp-block-group alignwide"><!-- wp:heading {"style":{"typography":{"fontStyle":"normal","fontWeight":"400"}},"fontSize":"x-large"} -->
<h2 class="wp-block-heading has-x-large-font-size" style="font-style:normal;font-weight:400"><?php esc_html_e( '150+', 'patterns-automotive' ); ?></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"spacing":{"margin":{"bottom":"0px"}},"typography":{"lineHeight":"1.3"},"elements":{"link":{"color":{"text":"var:preset|color|default"}}}},"textColor":"default","fontSize":"small"} -->
<p class="has-default-color has-text-color has-link-color has-small-font-size" style="margin-bottom:0px;line-height:1.3"><?php esc_html_e( 'Offices location', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","layout":{"type":"constrained"}} -->
<div class="wp-block-column is-vertically-aligned-center">
	<!-- wp:pattern {"slug":"patterns-automotive/card-5"} /-->
</div>
<!-- /wp:column --></div>
<!-- /wp:columns --></div></div>
<!-- /wp:cover -->
