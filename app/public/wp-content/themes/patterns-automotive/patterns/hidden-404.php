<?php
/**
 * Title:404
 * Slug: patterns-automotive/hidden-404
 * Inserter: no
 *
 * @package    Patterns_Automotive
 * @subpackage Patterns_Automotive/patterns
 * @since      1.0.0
 */

?>
<!-- wp:cover {"url":"<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/img-8.jpg","dimRatio":90,"overlayColor":"quinary","isUserOverlayColor":true,"className":"alignfull has-parallax"} -->
<div class="wp-block-cover alignfull has-parallax"><span aria-hidden="true" class="wp-block-cover__background has-quinary-background-color has-background-dim-90 has-background-dim"></span><img class="wp-block-cover__image-background" src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/img-8.jpg" data-object-fit="cover"/><div class="wp-block-cover__inner-container">

<!-- wp:spacer {"height":"200px"} -->
<div style="height:200px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer -->

<!-- wp:group {"tagName":"main","metadata":{"name":"Main"},"align":"wide","style":{"spacing":{"blockGap":"0px"}},"layout":{"type":"constrained"}} -->
<main class="wp-block-group alignwide"><!-- wp:heading {"textAlign":"center","level":1,"align":"wide","style":{"typography":{"fontSize":"8rem"}}} -->
<h1 class="wp-block-heading alignwide has-text-align-center" style="font-size:8rem"><?php echo esc_html__( 'Ooops!', 'patterns-automotive' ); ?></h1>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"spacing":{"margin":{"bottom":"15px"}}},"fontSize":"large"} -->
<p class="has-text-align-center has-large-font-size" style="margin-bottom:15px"><?php echo esc_html__( 'This page could not be found.', 'patterns-automotive' ); ?>.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph {"align":"center","style":{"spacing":{"margin":{"bottom":"30px"}}},"fontSize":"small"} -->
<p class="has-text-align-center has-small-font-size" style="margin-bottom:30px"><?php echo esc_html__( 'We can\'t find the page you\'re looking for. Check out our Help Center or head back to home', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph -->

<!-- wp:buttons {"layout":{"type":"flex","justifyContent":"center"}} -->
<div class="wp-block-buttons"><!-- wp:button {"backgroundColor":"accent","textColor":"base","className":"is-style-fill"} -->
<div class="wp-block-button is-style-fill"><a class="wp-block-button__link has-base-color has-accent-background-color has-text-color has-background wp-element-button" href="<?php echo esc_url( home_url() ); ?>"><?php echo esc_html__( 'Back To Home', 'patterns-automotive' ); ?></a></div>
<!-- /wp:button --></div>
<!-- /wp:buttons --></main>
<!-- /wp:group -->

<!-- wp:spacer {"height":"200px"} -->
<div style="height:200px" aria-hidden="true" class="wp-block-spacer"></div>
<!-- /wp:spacer --></div></div>
<!-- /wp:cover -->
