<?php
get_header();
?>
	<section class="block-blog">
		<div class="container">
		<div class="category">
		</div>
			<?php
/*
 * Template name: Game Listing
 * Template Post Type: page
 */
?>

 <div class="container">
 <div>
	 <p>Облако категорий</p>
	 <?php dynamic_sidebar('smartslider_area_1'); ?>
</div>
<div class="newshr"></div>
 <?php
    the_post();
    the_content(); 
?> 
</div>
</section>


	<?php
get_sidebar();
get_footer();