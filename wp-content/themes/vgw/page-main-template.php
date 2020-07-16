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