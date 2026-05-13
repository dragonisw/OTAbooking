<?php
/**
 * Title: Card 5
 * Slug: patterns-automotive/card-5
 * Categories: featured
 * Description: A collection of various WordPress inbuilt blocks, such as headings, paragraphs, image, groups, and buttons, arranged in different positions to form a complete page layout.
 *
 * @package    Patterns_Automotive
 * @subpackage Patterns_Automotive/patterns
 * @since      1.0.0
 */

?>
<!-- wp:group {"align":"full","style":{"spacing":{"blockGap":"30px"}},"layout":{"type":"flex","flexWrap":"nowrap","verticalAlignment":"top"}} -->
<div class="wp-block-group alignfull"><!-- wp:heading {"level":4,"style":{"typography":{"fontStyle":"normal","fontWeight":"800"},"layout":{"selfStretch":"fit","flexSize":null},"elements":{"link":{"color":{"text":"var:preset|color|default"}}}},"textColor":"default","fontSize":"xx-large","fontFamily":"material-symbols-outlined"} -->
<h4 class="wp-block-heading has-default-color has-text-color has-link-color has-material-symbols-outlined-font-family has-xx-large-font-size" style="font-style:normal;font-weight:800"><?php esc_html_e( 'social_leaderboard', 'patterns-automotive' ); ?></h4>
<!-- /wp:heading -->

<!-- wp:group {"align":"wide","style":{"spacing":{"blockGap":"5px"}},"layout":{"type":"default"}} -->
<div class="wp-block-group alignwide"><!-- wp:heading {"style":{"typography":{"fontStyle":"normal","fontWeight":"400"}},"fontSize":"x-large"} -->
<h2 class="wp-block-heading has-x-large-font-size" style="font-style:normal;font-weight:400"><?php esc_html_e( '150+', 'patterns-automotive' ); ?></h2>
<!-- /wp:heading -->

<!-- wp:paragraph {"style":{"spacing":{"margin":{"bottom":"0px"}},"typography":{"lineHeight":"1.3"},"elements":{"link":{"color":{"text":"var:preset|color|default"}}}},"textColor":"default","fontSize":"small"} -->
<p class="has-default-color has-text-color has-link-color has-small-font-size" style="margin-bottom:0px;line-height:1.3"><?php esc_html_e( 'Company Awards', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->