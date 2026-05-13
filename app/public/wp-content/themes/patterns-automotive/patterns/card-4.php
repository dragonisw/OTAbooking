<?php
/**
 * Title: Card 4
 * Slug: patterns-automotive/card-4
 * Categories: featured
 * Description: A collection of various WordPress inbuilt blocks, such as headings, paragraphs, image, groups, and buttons, arranged in different positions to form a complete page layout.
 *
 * @package    Patterns_Automotive
 * @subpackage Patterns_Automotive/patterns
 * @since      1.0.0
 */

?>
<!-- wp:cover {"url":"<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/img-4.jpg","dimRatio":20,"minHeight":300,"contentPosition":"bottom center","style":{"border":{"radius":{"topLeft":"5px","topRight":"5px","bottomLeft":"5px","bottomRight":"5px"}},"spacing":{"padding":{"right":"0px","left":"0px","top":"0px","bottom":"0px"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-cover has-custom-content-position is-position-bottom-center" style="border-top-left-radius:5px;border-top-right-radius:5px;border-bottom-left-radius:5px;border-bottom-right-radius:5px;padding-top:0px;padding-right:0px;padding-bottom:0px;padding-left:0px;min-height:300px"><span aria-hidden="true" class="wp-block-cover__background has-background-dim-20 has-background-dim"></span><img class="wp-block-cover__image-background" src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/img-4.jpg" data-object-fit="cover"/><div class="wp-block-cover__inner-container"><!-- wp:group {"align":"wide","style":{"spacing":{"padding":{"top":"15px","bottom":"15px","left":"15px","right":"15px"}}},"backgroundColor":"secondary","layout":{"type":"constrained"}} -->
<div class="wp-block-group alignwide has-secondary-background-color has-background" style="padding-top:15px;padding-right:15px;padding-bottom:15px;padding-left:15px"><!-- wp:group {"align":"wide","style":{"spacing":{"blockGap":"0px"}},"layout":{"type":"flex","orientation":"vertical"}} -->
<div class="wp-block-group alignwide"><!-- wp:heading {"level":5,"align":"wide","style":{"typography":{"fontSize":"16px","lineHeight":"1.5"},"spacing":{"margin":{"bottom":"0px","top":"0px"}}},"textColor":"default"} -->
<h5 class="wp-block-heading alignwide has-default-color has-text-color" style="margin-top:0px;margin-bottom:0px;font-size:16px;line-height:1.5"><?php esc_html_e( 'Online Appointment', 'patterns-automotive' ); ?></h5>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"typography":{"fontSize":"16px","fontStyle":"normal","fontWeight":"600","lineHeight":"1"},"spacing":{"margin":{"top":"0px","bottom":"0px"}}},"textColor":"default"} -->
<p class="has-default-color has-text-color" style="margin-top:0px;margin-bottom:0px;font-size:16px;font-style:normal;font-weight:600;line-height:1"><?php esc_html_e( '$20,000', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->

<!-- wp:separator {"align":"full","style":{"color":{"background":"#f0f4fa4a"},"spacing":{"margin":{"top":"20px","bottom":"20px"}}},"className":"is-style-wide"} -->
<hr class="wp-block-separator alignfull has-text-color has-alpha-channel-opacity has-background is-style-wide" style="margin-top:20px;margin-bottom:20px;background-color:#f0f4fa4a;color:#f0f4fa4a"/>
<!-- /wp:separator -->

<!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"left"}} -->
<div class="wp-block-group"><!-- wp:buttons -->
<div class="wp-block-buttons"><!-- wp:button {"style":{"spacing":{"padding":{"left":"12px","right":"12px","top":"4px","bottom":"4px"}},"border":{"radius":"5px"},"typography":{"fontSize":"13px"}}} -->
<div class="wp-block-button has-custom-font-size" style="font-size:13px"><a class="wp-block-button__link wp-element-button" style="border-radius:5px;padding-top:4px;padding-right:12px;padding-bottom:4px;padding-left:12px"><?php esc_html_e( '2001', 'patterns-automotive' ); ?></a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons -->

<!-- wp:paragraph {"style":{"spacing":{"margin":{"bottom":"0px"}},"typography":{"lineHeight":"1","fontSize":"13px"}},"textColor":"quaternary"} -->
<p class="has-quaternary-color has-text-color" style="margin-bottom:0px;font-size:13px;line-height:1"><?php esc_html_e( 'Automatic', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"spacing":{"margin":{"bottom":"0px"}},"typography":{"lineHeight":"1","fontSize":"13px"}},"textColor":"quaternary"} -->
<p class="has-quaternary-color has-text-color" style="margin-bottom:0px;font-size:13px;line-height:1"><?php esc_html_e( 'Diesel', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->