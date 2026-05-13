<?php
/**
 * Title: Landing
 * Slug: patterns-automotive/landing
 * Template Types: front-page
 * Post Types: page
 * Description: A layout template for displaying the main landing front page.
 *
 * @package    Patterns_Automotive
 * @subpackage Patterns_Automotive/patterns
 * @since      1.0.0
 */

?>
<!-- wp:template-part {"slug":"header-absolute","tagName":"header"} /-->
<!-- wp:pattern {"slug":"patterns-automotive/hero-banner"} /-->
<!-- wp:group {"tagName":"main","metadata":{"name":"Main"},"align":"full","layout":{"type":"constrained"}} -->
<main class="wp-block-group alignfull">
	<!-- wp:pattern {"slug":"patterns-automotive/featured-section-1"} /-->
	<!-- wp:pattern {"slug":"patterns-automotive/featured-section-2"} /-->
	<!-- wp:pattern {"slug":"patterns-automotive/featured-section-3"} /-->
	<!-- wp:pattern {"slug":"patterns-automotive/featured-section-4"} /-->
	<!-- wp:pattern {"slug":"patterns-automotive/featured-section-5"} /-->
	<!-- wp:pattern {"slug":"patterns-automotive/featured-section-6"} /-->
	<!-- wp:pattern {"slug":"patterns-automotive/featured-section-7"} /-->
</main>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
