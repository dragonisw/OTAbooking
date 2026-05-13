<?php
/**
 * Title: Card 6
 * Slug: patterns-automotive/card-6
 * Categories: featured
 * Description: A collection of various WordPress inbuilt blocks, such as headings, paragraphs, image, groups, and buttons, arranged in different positions to form a complete page layout.
 *
 * @package    Patterns_Automotive
 * @subpackage Patterns_Automotive/patterns
 * @since      1.0.0
 */

?>

<!-- wp:group {"style":{"spacing":{"padding":{"top":"50px","bottom":"50px","left":"30px","right":"30px"}}},"backgroundColor":"quaternary","layout":{"type":"flex","orientation":"vertical","justifyContent":"center"}} -->
<div class="wp-block-group has-quaternary-background-color has-background" style="padding-top:50px;padding-right:30px;padding-bottom:50px;padding-left:30px"><!-- wp:paragraph {"align":"center","style":{"spacing":{"margin":{"bottom":"0px"}},"typography":{"lineHeight":"1.6"}},"textColor":"base","fontSize":"small"} -->
<p class="has-text-align-center has-base-color has-text-color has-small-font-size" style="margin-bottom:0px;line-height:1.6"><?php esc_html_e( 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas voluptatem maiores eaque similique non distinctio voluptates perspiciatis', 'patterns-automotive' ); ?> </p>
<!-- /wp:paragraph -->

<!-- wp:image {"width":"auto","height":"60px","aspectRatio":"1","scale":"cover","sizeSlug":"full","linkDestination":"none","style":{"border":{"radius":"50px"}}} -->
<figure class="wp-block-image size-full is-resized has-custom-border"><img src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/img-9.png" style="border-radius:50px;aspect-ratio:1;object-fit:cover;width:auto;height:60px"/></figure>
<!-- /wp:image -->


<!-- wp:group {"align":"full","style":{"layout":{"selfStretch":"fit","flexSize":""},"spacing":{"blockGap":"0px"}},"layout":{"type":"constrained","contentSize":""}} -->
<div class="wp-block-group alignfull"><!-- wp:heading {"textAlign":"center","level":5,"align":"wide","style":{"typography":{"fontSize":"20px"},"spacing":{"margin":{"bottom":"0px"}}},"textColor":"base"} -->
<h5 class="wp-block-heading alignwide has-text-align-center has-base-color has-text-color" style="margin-bottom:0px;font-size:20px"><?php esc_html_e( 'Natalie Jones', 'patterns-automotive' ); ?></h5>
<!-- /wp:heading -->

<!-- wp:paragraph {"align":"center","style":{"spacing":{"margin":{"bottom":"0px"}},"typography":{"lineHeight":"1.4"}},"textColor":"tertiary","fontSize":"small"} -->
<p class="has-text-align-center has-tertiary-color has-text-color has-small-font-size" style="margin-bottom:0px;line-height:1.4"><?php esc_html_e( 'UX / UI Designer', 'patterns-automotive' ); ?></p>
<!-- /wp:paragraph --></div>
<!-- /wp:group --></div>
<!-- /wp:group -->


