<?php
/**
 * Title: Card 7
 * Slug: patterns-automotive/card-7
 * Categories: featured
 * Description: A collection of various WordPress inbuilt blocks, such as headings, paragraphs, image, groups, and buttons, arranged in different positions to form a complete page layout.
 *
 * @package    Patterns_Automotive
 * @subpackage Patterns_Automotive/patterns
 * @since      1.0.0
 */

?>
<!-- wp:cover {"overlayColor":"primary","isUserOverlayColor":true,"minHeight":450,"style":{"spacing":{"padding":{"right":"var:preset|spacing|70","left":"var:preset|spacing|70","top":"var:preset|spacing|60","bottom":"var:preset|spacing|60"},"blockGap":"0px"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-cover" style="padding-top:var(--wp--preset--spacing--60);padding-right:var(--wp--preset--spacing--70);padding-bottom:var(--wp--preset--spacing--60);padding-left:var(--wp--preset--spacing--70);min-height:450px">
<span aria-hidden="true" class="wp-block-cover__background has-primary-background-color has-background-dim-100 has-background-dim"></span><div class="wp-block-cover__inner-container">
    
<!-- wp:group {"style":{"spacing":{"blockGap":"15px"}}} -->
<div class="wp-block-group">
<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading"><?php esc_html_e( 'Are You Looking For a Car ?', 'patterns-automotive' ); ?></h4>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"spacing":{"margin":{"bottom":"0px"}},"typography":{"lineHeight":"1.6"}},"textColor":"quaternary","fontSize":"small"} -->
<p class="has-quaternary-color has-text-color has-small-font-size" style="margin-bottom:0px;line-height:1.6"><?php esc_html_e( 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', 'patterns-automotive' ); ?> </p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"style":{"spacing":{"margin":{"top":"30px"}}}} -->
<div class="wp-block-buttons" style="margin-top:30px"><!-- wp:button {"textColor":"default","style":{"border":{"width":"1px","style":"solid"},"elements":{"link":{"color":{"text":"var:preset|color|default"}}}},"borderColor":"default","className":"is-style-outline"} -->
<div class="wp-block-button is-style-outline"><a class="wp-block-button__link has-default-color has-text-color has-link-color has-border-color has-default-border-color wp-element-button" style="border-style:solid;border-width:1px"><?php esc_html_e( 'Contact us', 'patterns-automotive' ); ?></a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons -->
 </div>
<!-- /wp:group -->

<!-- wp:group {"className":"at-pos patterns-automotive-pos-sty-cont-1","layout":{"type":"constrained"}} -->
<div class="wp-block-group at-pos patterns-automotive-pos-sty-cont-1"><!-- wp:image {"width":"500px","sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full is-resized"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/img-2.png" style="width:500px"/></figure>
<!-- /wp:image --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->
