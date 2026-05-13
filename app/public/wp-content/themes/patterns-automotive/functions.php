<?php // phpcs:ignore
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Patterns Automotive functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Patterns Automotive
 */

/**
 * Current theme path.
 * Current theme url.
 * Current theme version.
 * Current theme name.
 * Current theme option name.
 */
define( 'PATTERNS_AUTOMOTIVE_PATH', trailingslashit( get_template_directory() ) );
define( 'PATTERNS_AUTOMOTIVE_URL', trailingslashit( get_template_directory_uri() ) );
define( 'PATTERNS_AUTOMOTIVE_VERSION', '1.0.3' );
define( 'PATTERNS_AUTOMOTIVE_THEME_NAME', 'patterns-automotive' );
define( 'PATTERNS_AUTOMOTIVE_OPTION_NAME', 'patterns-automotive' );

/**
 * The core theme class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require PATTERNS_AUTOMOTIVE_PATH . 'includes/main.php';

/**
 * Begins execution of the theme.
 *
 * @since    1.0.0
 */
function patterns_automotive_run() {
	new Patterns_Automotive();
}
patterns_automotive_run();
