<?php
/**
 * Title: Single Full width
 * Slug: patterns-automotive/single-post-full-width
 * Template Types: single
 * Description: A full-width layout template for displaying a post without sidebars.
 *
 * @package    Patterns_Automotive
 * @subpackage Patterns_Automotive/patterns
 * @since      1.0.0
 */

?>
<!-- wp:template-part {"slug":"header-absolute","tagName":"header"} /-->

<!-- wp:template-part {"slug":"single-header", "align":"full"} /-->

<!-- wp:group {"tagName":"main","metadata":{"name":"Main"},"align":"full","layout":{"type":"constrained"}} -->
<main class="wp-block-group alignfull">
	<!-- wp:spacer {"height":"80px"} -->
	<div style="height:80px" aria-hidden="true" class="wp-block-spacer"></div>
	<!-- /wp:spacer -->

	<!-- wp:pattern {"slug":"patterns-automotive/hidden-single-post-content"} /-->
	
</main>
<!-- /wp:group -->

<!-- wp:template-part {"slug":"footer","tagName":"footer"} /-->
