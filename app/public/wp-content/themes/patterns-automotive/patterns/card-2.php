<?php
/**
 * Title: Card 2
 * Slug: patterns-automotive/card-2
 * Categories: featured
 * Description: A collection of various WordPress inbuilt blocks, such as headings, paragraphs, image, groups, and buttons, arranged in different positions to form a complete page layout.
 *
 * @package    Patterns_Automotive
 * @subpackage Patterns_Automotive/patterns
 * @since      1.0.0
 */

?>
<!-- wp:group {"style":{"spacing":{"blockGap":"0px"}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:heading {"level":4,"style":{"layout":{"selfStretch":"fit","flexSize":null},"elements":{"link":{"color":{"text":"var:preset|color|primary"}}}},"textColor":"primary","fontSize":"x-large","fontFamily":"material-symbols-outlined"} -->
<h4 class="wp-block-heading has-primary-color has-text-color has-link-color has-material-symbols-outlined-font-family has-x-large-font-size"><?php esc_html_e( 'computer', 'patterns-automotive' ); ?></h4>
<!-- /wp:heading -->

<!-- wp:heading {"level":5,"align":"wide","style":{"typography":{"fontSize":"20px","lineHeight":"1.2"},"spacing":{"margin":{"bottom":"15px","top":"40px"}}},"textColor":"base"} -->
<h5 class="wp-block-heading alignwide has-base-color has-text-color" style="margin-top:40px;margin-bottom:15px;font-size:20px;line-height:1.2"><?php esc_html_e( 'Online Appointment', 'patterns-automotive' ); ?></h5>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"spacing":{"margin":{"bottom":"0px"}},"typography":{"lineHeight":"1.6"}},"textColor":"tertiary","fontSize":"small"} -->
<p class="has-tertiary-color has-text-color has-small-font-size" style="margin-bottom:0px;line-height:1.6"><?php esc_html_e( 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas voluptatem maiores', 'patterns-automotive' ); ?> </p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->