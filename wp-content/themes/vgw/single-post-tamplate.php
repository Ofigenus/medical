<?php
/*
Template Name: My Single Template
Template Post Type: post
*/

get_header();
?>
<div class="block-blog">
<div class="container">
		<main id="main" class="site-main">

		<?php
		while (have_posts()) { 
			the_post();
			?>
			
			<h1><?php the_title(); ?></h1>
			<?php
}
?>
			<div class="post-image-main">
			<?php the_post_thumbnail('large'); ?>
			</div>
<?php the_content(); ?>
		</main><!-- #main -->
</div><!-- #primary -->
</div>



	
<?php
get_sidebar();
get_footer(); ?>