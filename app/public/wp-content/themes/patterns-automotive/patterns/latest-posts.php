<?php
/**
 * Title: Latest Posts
 * Slug: patterns-automotive/latest-posts
 * Categories: posts
 * Description: Display latest posts, commonly placed in sidebars or footers.
 *
 * @package    Patterns_Automotive
 * @subpackage Patterns_Automotive/patterns
 * @since      1.0.0
 */

?>
<!-- wp:group {"style":{"spacing":{"margin":{"bottom":"40px"}}},"layout":{"type":"constrained"}} -->
<div class="wp-block-group" style="margin-bottom:40px">
<!-- wp:heading {"level":4,"style":{"spacing":{"margin":{"bottom":"30px"}}},"fontSize":"small","fontFamily":"base"} -->
<h4 class="wp-block-heading has-base-font-family has-small-font-size" style="margin-bottom:30px"><?php esc_html_e( 'Recent Posts', 'patterns-automotive' ); ?></h4>
<!-- /wp:heading -->
<!-- wp:latest-posts {"postsToShow":3,"displayPostDate":true,"displayFeaturedImage":true,"featuredImageAlign":"left","featuredImageSizeWidth":80,"featuredImageSizeHeight":80} /--></div>
<!-- /wp:group -->
