<?php
/**
 * Title: Copyright
 * Slug: patterns-automotive/copyright
 * Categories: footer
 * Block Types: core/template-part/footer
 * Description: Dynamic copyright text
 *
 * @package    Patterns_Automotive
 * @subpackage Patterns_Automotive/patterns
 * @since      1.0.0
 */

?>
<!-- wp:group {"style":{"spacing":{"blockGap":"5px"},"elements":{"link":{"color":{"text":"var:preset|color|quaternary"}}}},"textColor":"quaternary","layout":{"type":"flex","flexWrap":"nowrap"}} -->
<div class="wp-block-group has-quaternary-color has-text-color has-link-color"><!-- wp:paragraph {"metadata":{"bindings":{"content":{"source":"patterns-automotive/copyright","args":{"key":"copyright"}}}},"placeholder":"<?php esc_attr_e( 'Dynamic copyright text', 'patterns-automotive' ); ?>","style":{"typography":{"fontSize":"14px"}}} -->
<p style="font-size:14px"></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"style":{"typography":{"fontSize":"14px"},"spacing":{"margin":{"top":"0px","bottom":"0px"}}}} -->
<p style="margin-top:0px;margin-bottom:0px;font-size:14px"><?php esc_html_e( 'All Rights Reserved', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group -->
