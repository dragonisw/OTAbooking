<?php
/**
 * Title: Section Title 4
 * Slug: patterns-automotive/section-title-4
 * Categories: text, featured
 * Description: A layout featuring a title, content, and button group in centered alignment, commonly used for section titles in dark feature areas.
 *
 * @package    Patterns_Automotive
 * @subpackage Patterns_Automotive/patterns
 * @since      1.0.0
 */

?>
<!-- wp:group {"layout":{"type":"constrained"}} -->
<div class="wp-block-group"><!-- wp:paragraph {"align":"center","style":{"typography":{"letterSpacing":"1px","textTransform":"uppercase"}},"textColor":"base","fontSize":"small"} -->
<p class="has-text-align-center has-base-color has-text-color has-small-font-size" style="letter-spacing:1px;text-transform:uppercase"><?php esc_html_e( 'What My Clients Say', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:heading {"textAlign":"center","level":3,"style":{"typography":{"fontStyle":"normal","fontWeight":"700","fontSize":"45px","lineHeight":"1.1"}},"textColor":"base"} -->
<h3 class="wp-block-heading has-text-align-center has-base-color has-text-color" style="font-size:45px;font-style:normal;font-weight:700;line-height:1.1"><?php esc_html_e( 'What our clients are saying us?', 'patterns-automotive' ); ?></h3>
<!-- /wp:heading --></div>
<!-- /wp:group -->
