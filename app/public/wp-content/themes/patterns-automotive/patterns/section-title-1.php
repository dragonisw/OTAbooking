<?php
/**
 * Title: Section Title 1
 * Slug: patterns-automotive/section-title-1
 * Categories: text, featured
 * Description: A layout featuring a title, content, and button group in centered alignment, commonly used for section titles in feature areas.
 *
 * @package    Patterns_Automotive
 * @subpackage Patterns_Automotive/patterns
 * @since      1.0.0
 */

?>
<!-- wp:group {"style":{"spacing":{"blockGap":"0px"}},"layout":{"type":"default"}} -->
<div class="wp-block-group"><!-- wp:paragraph {"style":{"typography":{"fontSize":"14px","textTransform":"uppercase"},"spacing":{"margin":{"top":"0px","bottom":"0px"}}},"textColor":"primary"} -->
<p class="has-primary-color has-text-color" style="margin-top:0px;margin-bottom:0px;font-size:14px;text-transform:uppercase"><?php esc_html_e( 'Start a New Journey', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"style":{"typography":{"fontSize":"3rem","lineHeight":"1.1"},"spacing":{"margin":{"bottom":"20px"}}},"textColor":"secondary","className":"has-base-color"} -->
<h2 class="wp-block-heading has-base-color has-secondary-color has-text-color" style="margin-bottom:20px;font-size:3rem;line-height:1.1"><?php esc_html_e( 'Welcome to the Patterns Automotive', 'patterns-automotive' ); ?></h2>
<!-- /wp:heading --></div>
<!-- /wp:group -->
