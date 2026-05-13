<?php
namespace Core\Api;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

use WP_REST_Request;

class Patterns {
	/**
	 * Holds the singleton instance of the Block class.
	 *
	 * @var self|null
	 */
	private static $instance = null;

	/**
	 * Retrieves the singleton instance of the Block class.
	 *
	 * Ensures that only one instance of the class is created and returned.
	 * Implements the Singleton design pattern.
	 *
	 * @return self The single instance of the class.
	 */
	public static function get_instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * Class constructor.
	 *
	 * Initializes the class by registering REST API routes.
	 * Declared private to enforce the Singleton pattern.
	 */
	private function __construct() {
		$this->register_routes();
	}

	/**
	 * Registers REST API routes for the Block class.
	 *
	 * This method defines and registers all REST endpoints related to block functionality.
	 * Should be called during the REST API initialization phase.
	 *
	 * @return void
	 */
	public function register_routes() {
		try {
			register_rest_route(
				'cozy-block/v1',
				'/pattern-content',
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_pattern_content' ),
					'permission_callback' => function () {
						return __return_true();
					},
				)
			);

			register_rest_route(
				'cozy-block/v1',
				'/template-content',
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_template_content' ),
					'permission_callback' => function () {
						return __return_true();
					},
				)
			);

			register_rest_route(
				'cozy-block/v1',
				'/page-content',
				array(
					'methods'             => \WP_REST_Server::READABLE,
					'callback'            => array( $this, 'get_page_content' ),
					'permission_callback' => function () {
						return __return_true();
					},
				)
			);

		} catch ( \Exception $e ) {
			// error_log( 'Error registering route: ' . $e->getMessage() );
		}
	}

	/**
	 * Retrieves and returns the serialized block content of a pattern file.
	 *
	 * Expects `slug` as a REST API request parameter. The slug should contain
	 * the pattern identifier (example: "category/pattern-name").
	 *
	 * @param WP_REST_Request $request Incoming REST request containing the pattern slug.
	 *
	 * @return string Serialized block structure if found, otherwise an empty string.
	 */
	public function get_pattern_content( WP_REST_Request $request ) {
		$pattern_slug = $request->get_param( 'slug' ) ? sanitize_text_field( wp_unslash( $request->get_param( 'slug' ) ) ) : '';

		if ( empty( $pattern_slug ) ) {
			return '';
		}

		$pattern_filename = explode( '/', $pattern_slug );

		if ( count( $pattern_filename ) === 2 && file_exists( COZY_ADDONS_PLUGIN_DIR . 'core/library/patterns/' . $pattern_filename[1] . '.php' ) ) {
			ob_start();

			$pattern_file = ( COZY_ADDONS_PLUGIN_DIR . 'core/library/patterns/' . $pattern_filename[1] . '.php' );
			include_once $pattern_file;

			$content = ob_get_clean();

			return serialize_blocks( parse_blocks( $content ) );
		}

		return '';
	}

	public function get_template_content( WP_REST_Request $request ) {
		$template_slug = $request->get_param( 'slug' ) ? sanitize_text_field( wp_unslash( $request->get_param( 'slug' ) ) ) : '';

		if ( empty( $template_slug ) ) {
			return;
		}

		$template_filename = explode( '/', $template_slug );

		if ( count( $template_filename ) === 2 && file_exists( COZY_ADDONS_PLUGIN_DIR . 'core/library/templates/' . $template_filename[1] . '.php' ) ) {
			$patterns = include_once COZY_ADDONS_PLUGIN_DIR . 'core/library/templates/' . $template_filename[1] . '.php';

			if ( ! is_array( $patterns ) ) {
				return '';
			}

			$serialized_blocks = '';

			foreach ( $patterns as $pattern ) {
				$request = new WP_REST_Request();
				$request->set_param( 'slug', $pattern );

				$serialized_blocks .= $this->get_pattern_content( $request );
			}

			return $serialized_blocks;
		}

		return '';
	}

	/**
	 * Get page content from a local PHP template file via REST API.
	 *
	 * This method retrieves a page slug from the REST request, validates it,
	 * and attempts to load a matching PHP file from the plugin’s
	 * `core/library/pages/` directory.
	 *
	 * The loaded PHP file is buffered, parsed into Gutenberg blocks,
	 * and returned as serialized block content.
	 *
	 * File resolution:
	 * - core/library/pages/{slug_part}.php
	 *
	 * @param \WP_REST_Request $request REST request object.
	 *
	 * @return string Serialized block content on success.
	 *                Empty string if the slug is invalid or file not found.
	 */
	public function get_page_content( \WP_REST_Request $request ) {
		$page_slug = $request->get_param( 'slug' ) ? sanitize_text_field( wp_unslash( $request->get_param( 'slug' ) ) ) : '';

		if ( empty( $page_slug ) ) {
			return;
		}

		$page_filename = explode( '/', $page_slug );

		if ( count( $page_filename ) === 2 && file_exists( COZY_ADDONS_PLUGIN_DIR . 'core/library/pages/' . $page_filename[1] . '.php' ) ) {
			ob_start();

			$pattern_file = ( COZY_ADDONS_PLUGIN_DIR . 'core/library/pages/' . $page_filename[1] . '.php' );
			include_once $pattern_file;

			$content = ob_get_clean();

			return serialize_blocks( parse_blocks( $content ) );
		}

		return '';
	}
}
