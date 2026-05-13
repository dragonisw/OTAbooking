<?php
namespace Core;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Patterns {
	private static $instance;

	private static $dir = COZY_ADDONS_PLUGIN_DIR . 'core/library/';
	private static $url = COZY_ADDONS_PLUGIN_DIR . 'core/library/';

	public static function get_instance() {
		if ( is_null( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	private function __construct() {
		$this->init();
	}

	private function init() {
		add_action(
			'enqueue_block_assets',
			function () {
				$value = get_option( 'ca--utility--pattern-library' );

				if ( '1' === $value || '' == $value ) {
					wp_enqueue_script( 'cozy-addons--pattern', COZY_ADDONS_PLUGIN_URL . 'assets/js/cozy-patterns.js', array( 'react-jsx-runtime', 'wp-editor', 'wp-plugins', 'wp-primitives' ), COZY_ADDONS_VERSION, false );
					wp_localize_script(
						'cozy-addons--pattern',
						'scriptObj',
						array(
							'isPremium'   => cozy_addons_premium_access(),
							'pluginUrl'   => COZY_ADDONS_PLUGIN_URL,
							'patterns'    => wp_json_file_decode( self::$dir . 'patterns/patterns.json' ),
							'templates'   => wp_json_file_decode( self::$dir . 'templates/templates.json' ),
							'pages'       => wp_json_file_decode( self::$dir . 'pages/pages.json' ),
							'activeTheme' => wp_get_theme()->get( 'TextDomain' ),
						)
					);

					wp_enqueue_style( 'cozy-addons--pattern--frontend', COZY_ADDONS_PLUGIN_URL . 'assets/css/pattern-styles.css', array(), COZY_ADDONS_VERSION );
				}
			}
		);
	}
}
