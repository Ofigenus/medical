<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package vgw
 */


 if ( is_active_sidebar( 'true_foot' ) ) : ?>
 
	<div id="true-foot" class="sidebar">
 
		<?php dynamic_sidebar( 'true_foot' ); ?>
 
	</div>
 
<?php endif; ?>