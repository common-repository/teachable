<?php
/**
 * Core file.
 * Resist deletion.
 *
 * @package Teachable
 * @version 1.0.0
 */

namespace Teachable;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Image.
 *
 * @param array $atts Attributes.
 *
 * @version 1.0.0
 */
function shortcode_teachable_product_image( $atts = array() ) {
	$atts = shortcode_atts(
		array(
			'id'      => '',
			'classes' => '',
			'styles'  => '',
		),
		$atts,
		'teachable_product_image'
	);

	teachable_buy_button_assets();

	// Potential individual use case for pulling in custom ID: $id = $atts['id'];.
	$id = apply_filters( 'teachable_buy_button_current_id', '' );

	ob_start();

	if ( ! empty( $id ) ) {
		do_action( 'teachable_product_image', $id, $atts['classes'], $atts['styles'] );
	} else {
		do_action( 'teachable_frontend_error' );
	}

	return ob_get_clean();
}
add_shortcode( 'teachable_product_image', __NAMESPACE__ . '\\shortcode_teachable_product_image' );