<?php
get_header();
?>
<section class="block-blog">
		<div class="container">
		<div class="category">
	<?php dynamic_sidebar( 'true_side' ); ?>
		</div>
            <article>
                <div class="post-block">
                    <?php if ( have_posts() ) : ?>
                    <?php
                    // Start the loop.
                    while ( have_posts() ) : the_post();?>
                        <div class="post-item">
                            <div class="newshr"></div>
                        	 <h3><a href="<?php the_permalink(); ?>" title="Читать полностью"><?php the_title(); ?></a></h3>
                            <div class="post-content">
							<div class="post-image">
							<?php the_post_thumbnail(array(500, 500)); ?>
							</div>
                            <div class="post-prev"><?php the_excerpt(); ?><a href="<?php the_permalink() ?>">Читать статью</a></div>
                            </div>
                        </div>
                    <?php endwhile; ?>
                </div>
            </article>
            <?php
            the_posts_pagination( array(
                'prev_text'          => __( 'Previous page' ),
                'next_text'          => __( 'Next page' ),
                'before_page_number' => '<span class="meta-nav screen-reader-text">' . __( 'Page' ) . ' </span>',
            ) ); ?>
            <?php endif;
            ?>
		</div>
	</section>
<?php
get_sidebar();
get_footer();

