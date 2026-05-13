<?php
/**
 * Title: Card 3
 * Slug: patterns-automotive/card-3
 * Categories: featured
 * Description: A collection of various WordPress inbuilt blocks, such as headings, paragraphs, image, groups, and buttons, arranged in different positions to form a complete page layout.
 *
 * @package    Patterns_Automotive
 * @subpackage Patterns_Automotive/patterns
 * @since      1.0.0
 */

?>
<!-- wp:cover {"url":"<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/img-8.jpg","dimRatio":20,"minHeight":630,"contentPosition":"bottom center","style":{"border":{"radius":{"topLeft":"5px","topRight":"5px","bottomLeft":"5px","bottomRight":"5px"}},"spacing":{"padding":{"right":"0px","left":"0px","top":"0px","bottom":"0px"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-cover has-custom-content-position is-position-bottom-center" style="border-top-left-radius:5px;border-top-right-radius:5px;border-bottom-left-radius:5px;border-bottom-right-radius:5px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;min-height:630px"><span aria-hidden="true" class="wp-block-cover__background has-background-dim-20 has-background-dim"></span><img class="wp-block-cover__image-background" src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/img-8.jpg" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:group {"align":"wide","style":{"spacing":{"padding":{"top":"30px","bottom":"30px","left":"30px","right":"30px"}}},"backgroundColor":"secondary","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignwide has-secondary-background-color has-background" style="padding-top:30px;padding-right:30px;padding-bottom:30px;padding-left:30px"><!-- wp:group {"align":"wide","layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"space-between"}} -->
<div class="wp-block-group alignwide"><!-- wp:heading {"level":5,"align":"wide","style":{"typography":{"fontSize":"20px","lineHeight":"1.2"},"spacing":{"margin":{"bottom":"0px","top":"0px"}}},"textColor":"default"} -->
<h5 class="wp-block-heading alignwide has-default-color has-text-color" style="margin-top:0px;margin-bottom:0px;font-size:20px;line-height:1.2"><?php esc_html_e( 'Online Appointment', 'patterns-automotive' ); ?></h5>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"typography":{"fontSize":"20px","fontStyle":"normal","fontWeight":"600"},"spacing":{"margin":{"top":"0px","bottom":"0px"}}},"textColor":"default"} -->
<p class="has-default-color has-text-color" style="margin-top:0px;margin-bottom:0px;font-size:20px;font-style:normal;font-weight:600"><?php esc_html_e( '$20,000', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:separator {"align":"full","style":{"color":{"background":"#f0f4fa4a"},"spacing":{"margin":{"top":"20px","bottom":"20px"}}},"className":"is-style-wide"} -->
<hr class="wp-block-separator alignfull has-text-color has-alpha-channel-opacity has-background is-style-wide" style="margin-top:20px;margin-bottom:20px;background-color:#f0f4fa4a;color:#f0f4fa4a"/>
<!-- /wp:separator -->

<!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"left"}} -->
<div class="wp-block-group"><!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button {"style":{"spacing":{"padding":{"left":"12px","right":"12px","top":"6px","bottom":"6px"}},"border":{"radius":"5px"}}} -->
<div class="wp-block-button"><a class="wp-block-button__link wp-element-button" style="border-radius:5px;padding-top:6px;padding-right:12px;padding-bottom:6px;padding-left:12px"><?php esc_html_e( '2001', 'patterns-automotive' ); ?></a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons -->

<!-- wp:paragraph {"style":{"spacing":{"margin":{"bottom":"0px"}},"typography":{"lineHeight":"1"}},"textColor":"quaternary","fontSize":"small"} -->
<p class="has-quaternary-color has-text-color has-small-font-size" style="margin-bottom:0px;line-height:1"><?php esc_html_e( 'Automatic', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"spacing":{"margin":{"bottom":"0px"}},"typography":{"lineHeight":"1"}},"textColor":"quaternary","fontSize":"small"} -->
<p class="has-quaternary-color has-text-color has-small-font-size" style="margin-bottom:0px;line-height:1"><?php esc_html_e( 'Diesel', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"spacing":{"margin":{"bottom":"0px"}},"typography":{"lineHeight":"1"}},"textColor":"quaternary","fontSize":"small"} -->
<p class="has-quaternary-color has-text-color has-small-font-size" style="margin-bottom:0px;line-height:1"><?php esc_html_e( 'Drive', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->