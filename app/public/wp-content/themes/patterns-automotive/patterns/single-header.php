<?php
/**
 * Title: Page Header With Post Title
 * Slug: patterns-automotive/single-header
 * Block Types: core/template-part/single-header
 * Description: Page header that displays the post, page or post type title.
 *
 * @package    Patterns_Automotive
 * @subpackage Patterns_Automotive/patterns
 * @since      1.0.0
 */

?>
<!-- wp:cover {"url":"<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/img-8.jpg","hasParallax":true,"dimRatio":80,"overlayColor":"secondary","minHeight":50,"minHeightUnit":"vh","contentPosition":"center center","align":"full","layout":{"type":"constrained"}} -->
<div class="wp-block-cover alignfull has-parallax" style="min-height:50vh"><span aria-hidden="true" class="wp-block-cover__background has-secondary-background-color has-background-dim-80 has-background-dim"></span><div role="img" class="wp-block-cover__image-background has-parallax" style="background-position:50% 50%;background-image:url(<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/img-8.jpg)"></div><div class="wp-block-cover__inner-container"><!-- wp:group {"align":"wide","layout":{"type":"default"}} -->
<div class="wp-block-group alignwide"><!-- wp:post-title {"textAlign":"center","level":1,"style":{"typography":{"textTransform":"capitalize"}},"textColor":"default","fontSize":"xx-large","fontFamily":"heading"} /--></div>
<!-- /wp:group --></div></div>
<!-- /wp:cover -->
