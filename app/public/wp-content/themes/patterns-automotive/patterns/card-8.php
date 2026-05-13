<?php
/**
 * Title: Card 8
 * Slug: patterns-automotive/card-8
 * Categories: featured
 * Description: A collection of various WordPress inbuilt blocks, such as headings, paragraphs, image, groups, and buttons, arranged in different positions to form a complete page layout.
 *
 * @package    Patterns_Automotive
 * @subpackage Patterns_Automotive/patterns
 * @since      1.0.0
 */

?>
<!-- wp:cover {"overlayColor":"secondary","minHeight":450,"style":{"spacing":{"padding":{"right":"var:preset|spacing|70","left":"var:preset|spacing|70","top":"var:preset|spacing|60","bottom":"var:preset|spacing|60"},"blockGap":"0px"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-cover" style="padding-top:var(--wp--preset--spacing--60);padding-right:var(--wp--preset--spacing--70);padding-bottom:var(--wp--preset--spacing--60);padding-left:var(--wp--preset--spacing--70);min-height:450px"><span aria-hidden="true" class="wp-block-cover__background has-secondary-background-color has-background-dim-100 has-background-dim"></span><div class="wp-block-cover__inner-container">
    
<!-- wp:group {"style":{"spacing":{"blockGap":"15px"}}} -->
<div class="wp-block-group">

<!-- wp:heading {"level":4} -->
<h4 class="wp-block-heading"><?php esc_html_e( 'How to buy a car?', 'patterns-automotive' ); ?></h4>
<!-- /wp:heading -->

<!-- wp:group {"style":{"spacing":{"blockGap":"10px","margin":{"top":"30px"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group" style="margin-top:30px"><!-- wp:group {"style":{"spacing":{"blockGap":"10px"}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group"><!-- wp:paragraph {"style":{"spacing":{"margin":{"bottom":"0px","top":"5px"}},"typography":{"lineHeight":"1.2","fontStyle":"normal","fontWeight":"600"},"elements":{"link":{"color":{"text":"var:preset|color|primary"}}}},"textColor":"primary","fontFamily":"material-icons"} -->
<p class="has-primary-color has-text-color has-link-color has-material-icons-font-family" style="margin-top:5px;margin-bottom:0px;font-style:normal;font-weight:600;line-height:1.2"><?php esc_html_e( 'check_box', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"spacing":{"margin":{"bottom":"0px","top":"5px"}},"typography":{"lineHeight":"1.2"},"elements":{"link":{"color":{"text":"var:preset|color|quaternary"}}}},"textColor":"quaternary","fontSize":"small"} -->
<p class="has-quaternary-color has-text-color has-link-color has-small-font-size" style="margin-top:5px;margin-bottom:0px;line-height:1.2"><?php esc_html_e( 'Best deals', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"style":{"spacing":{"blockGap":"10px"}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group"><!-- wp:paragraph {"style":{"spacing":{"margin":{"bottom":"0px","top":"5px"}},"typography":{"lineHeight":"1.2","fontStyle":"normal","fontWeight":"600"},"elements":{"link":{"color":{"text":"var:preset|color|primary"}}}},"textColor":"primary","fontFamily":"material-icons"} -->
<p class="has-primary-color has-text-color has-link-color has-material-icons-font-family" style="margin-top:5px;margin-bottom:0px;font-style:normal;font-weight:600;line-height:1.2"><?php esc_html_e( 'check_box', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"spacing":{"margin":{"bottom":"0px","top":"5px"}},"typography":{"lineHeight":"1.2"},"elements":{"link":{"color":{"text":"var:preset|color|quaternary"}}}},"textColor":"quaternary","fontSize":"small"} -->
<p class="has-quaternary-color has-text-color has-link-color has-small-font-size" style="margin-top:5px;margin-bottom:0px;line-height:1.2"><?php esc_html_e( 'Sell your car', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:group {"style":{"spacing":{"blockGap":"10px"}},"layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group"><!-- wp:paragraph {"style":{"spacing":{"margin":{"bottom":"0px","top":"5px"}},"typography":{"lineHeight":"1.2","fontStyle":"normal","fontWeight":"600"},"elements":{"link":{"color":{"text":"var:preset|color|primary"}}}},"textColor":"primary","fontFamily":"material-icons"} -->
<p class="has-primary-color has-text-color has-link-color has-material-icons-font-family" style="margin-top:5px;margin-bottom:0px;font-style:normal;font-weight:600;line-height:1.2"><?php esc_html_e( 'check_box', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"spacing":{"margin":{"bottom":"0px","top":"5px"}},"typography":{"lineHeight":"1.2"},"elements":{"link":{"color":{"text":"var:preset|color|quaternary"}}}},"textColor":"quaternary","fontSize":"small"} -->
<p class="has-quaternary-color has-text-color has-link-color has-small-font-size" style="margin-top:5px;margin-bottom:0px;line-height:1.2"><?php esc_html_e( 'Car book values', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->

<!-- wp:buttons {"style":{"spacing":{"margin":{"top":"30px"}}}} -->
<div class="wp-block-buttons" style="margin-top:30px"><!-- wp:button {"className":"is-style-fill"} -->
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link wp-element-button"><?php esc_html_e( 'Read More', 'patterns-automotive' ); ?></a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons -->
 </div>
<!-- /wp:group -->
<!-- wp:group {"className":"at-pos patterns-automotive-pos-sty-cont-1","layout":{"type":"constrained"}} -->
<div class="wp-block-group at-pos patterns-automotive-pos-sty-cont-1"><!-- wp:image {"width":"500px","sizeSlug":"full","linkDestination":"none"} -->
<figure class="wp-block-image size-full is-resized"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/img-3.png" style="width:500px"/></figure>
<!-- /wp:image --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->