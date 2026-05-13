<?php
/**
 * Title: Section Title 2
 * Slug: patterns-automotive/section-title-2
 * Categories: text, featured
 * Description: A layout featuring a title, content, and button group in left alignment, commonly used for section titles in feature areas.
 *
 * @package    Patterns_Automotive
 * @subpackage Patterns_Automotive/patterns
 * @since      1.0.0
 */

?>
<!-- wp:columns {"verticalAlignment":"center","align":"wide"} -->
<div class="wp-block-columns alignwide are-vertically-aligned-center"><!-- wp:column {"verticalAlignment":"center","width":"50%"} -->
<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:50%"><!-- wp:group {"style":{"spacing":{"padding":{"bottom":"40px"},"blockGap":"0px"}},"layout":{"type":"constrained","wideSize":""}} -->
<div class="wp-block-group" style="padding-bottom:40px"><!-- wp:paragraph {"style":{"typography":{"letterSpacing":"1px","textTransform":"uppercase"}},"textColor":"primary","fontSize":"small"} -->
<p class="has-primary-color has-text-color has-small-font-size" style="letter-spacing:1px;text-transform:uppercase"><?php esc_html_e( 'What We Offer', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3,"style":{"typography":{"fontStyle":"normal","fontWeight":"700","fontSize":"45px","lineHeight":"1.1"},"spacing":{"margin":{"bottom":"0px"}}},"textColor":"base"} -->
<h3 class="wp-block-heading has-base-color has-text-color" style="margin-bottom:0px;font-size:45px;font-style:normal;font-weight:700;line-height:1.1"><?php esc_html_e( 'The best standards anywhere.', 'patterns-automotive' ); ?></h3>
<!-- /wp:heading --></div>
<!-- /wp:group --></div>
<!-- /wp:column -->

<!-- wp:column {"verticalAlignment":"center","width":"50%"} -->
<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:50%"><!-- wp:paragraph {"align":"left","style":{"typography":{"lineHeight":"1.6"},"spacing":{"margin":{"bottom":"0px"}}},"textColor":"tertiary","fontSize":"small"} -->
<p class="has-text-align-left has-tertiary-color has-text-color has-small-font-size" style="margin-bottom:0px;line-height:1.6"><?php esc_html_e( 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas voluptatem maiores eaque similique non distinctio voluptates perspiciatis ', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:column --></div>
<!-- /wp:columns -->
