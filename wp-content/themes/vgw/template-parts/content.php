<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package vgw
 */

?>

<?php
get_header();
?>
	<section class="block-blog">
		<div class="container">
 <?php
    the_post();
    the_content(); 
?> 
</div>
</section>


	<?php
get_sidebar();
get_footer();