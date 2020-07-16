<?php
/**
 * Template part for displaying page content in page.php
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
		<div class="category">
		</div>
			<?php
/*
 * Template name: Singl Page
 * Template Post Type: page
 */
?>

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