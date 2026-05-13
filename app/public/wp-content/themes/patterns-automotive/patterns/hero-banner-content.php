<?php
/**
 * Title: Hero Banner Content
 * Slug: patterns-automotive/hero-banner-content
 * Categories: featured
 * Description: A layout that displays a title, content, and button group, suited for showcasing a hero banner.
 *
 * @package    Patterns_Automotive
 * @subpackage Patterns_Automotive/patterns
 * @since      1.0.0
 */

?>
<!-- wp:columns {"align":"wide"} -->
<div class="wp-block-columns alignwide"><!-- wp:column {"verticalAlignment":"bottom","width":"50%","style":{"spacing":{"padding":{"top":"200px"}}},"layout":{"type":"default"}} -->
<div class="wp-block-column is-vertically-aligned-bottom" style="padding-top:200px;flex-basis:50%"><!-- wp:group {"align":"wide","style":{"elements":{"link":{"color":{"text":"var:preset|color|default"}}}},"textColor":"default","layout":{"type":"constrained","contentSize":"","justifyContent":"center","wideSize":""}} -->
<div class="wp-block-group alignwide has-default-color has-text-color has-link-color"><!-- wp:paragraph {"style":{"typography":{"lineHeight":"1.2","textTransform":"uppercase","letterSpacing":"1px"},"spacing":{"margin":{"bottom":"5px"}}},"fontSize":"small"} -->
<p class="has-small-font-size" style="margin-bottom:5px;letter-spacing:1px;line-height:1.2;text-transform:uppercase"><?php esc_html_e( 'Quick and Reliable Services', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"style":{"typography":{"lineHeight":"1","fontSize":"60px"}}} -->
<h2 class="wp-block-heading" style="font-size:60px;line-height:1"><?php esc_html_e( 'Rent The Best Quality Car’s With Us', 'patterns-automotive' ); ?></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"typography":{"lineHeight":"1.6"}},"fontSize":"small"} -->
<p class="has-small-font-size" style="line-height:1.6"><?php esc_html_e( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex"}} -->
<div class="wp-block-buttons"><!-- wp:button {"style":{"typography":{"textTransform":"uppercase","letterSpacing":"1px"}},"className":"is-style-fill"} -->
<div class="wp-block-button is-style-fill" style="letter-spacing:1px;text-transform:uppercase"><a class="wp-block-button__link wp-element-button"><?php esc_html_e( 'Explore More', 'patterns-automotive' ); ?></a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"bottom","width":"40%"} -->
<div class="wp-block-column is-vertically-aligned-bottom" style="flex-basis:40%">

<!-- wp:group {"className":"at-pos patterns-automotive-hero-banner--img","layout":{"type":"constrained"}} -->
<div class="wp-block-group at-pos patterns-automotive-hero-banner--img"><!-- wp:image {"sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full is-resized"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/img-3.png"/></figure>
<!-- /wp:image --></div>
<!-- /wp:group -->

</div>
<!-- /wp:column --></div>
<!-- /wp:columns -->
