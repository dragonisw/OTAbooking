<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

$output  = '<div class="cozy-block-wrapper">';
$output .= $content;
$output .= '</div>';

echo $output;
