<?php
get_header();
?>

<body>
	<section class="block-blog">
		<div class="container">
		<div class="category">
	<?php dynamic_sidebar( 'true_side' ); ?>
		</div>
			<?php
/*
 * Template name: Блог на
 */
$current_page = (get_query_var('paged')) ? get_query_var('paged') : 1; // определяем текущую страницу блога
$args = array(
	'posts_per_page' => get_option('posts_per_page'), // значение по умолчанию берётся из настроек, но вы можете использовать и собственное
	'paged'          => $current_page // текущая страница
);
query_posts( $args );
 
$wp_query->is_archive = true;
$wp_query->is_home = false; ?>
			<?php $catquery = new WP_Query( 'posts_per_page=-1' ); ?>
			<ul class="post-block">
				<?php while($catquery->have_posts()) : $catquery->the_post(); ?>
				<li class="post-item">
					<div class="newshr"></div>
					<h3><a href="<?php the_permalink() ?>" rel="bookmark"><?php the_title(); ?></a></h3>
					<div class="post-content">
						<div class="post-image"><a
								href="<?php the_permalink() ?>"><?php the_post_thumbnail(array(500, 500)); ?></a></div>
						<div class="post-prev"><?php the_excerpt(); ?></div>
					</div>

				</li>
				<?php endwhile; ?>
			</ul>
			<?php wp_reset_postdata(); ?>

			<?php the_posts_pagination(); ?>
		</div>
	</section>
	<?php
get_sidebar();
get_footer();