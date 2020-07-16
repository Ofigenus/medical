<?php
function vgw_scripts() {
    wp_enqueue_style( 'bootstrap1', get_template_directory_uri() . '/css/bootstrap-grid.min.css');
    wp_enqueue_style( 'bootstrap2', get_template_directory_uri() . '/css/bootstrap-reboot.min.css');
    wp_enqueue_style( 'bootstrap3', get_template_directory_uri() . '/css/bootstrap.min.css');
    wp_enqueue_style( 'responsive', get_template_directory_uri() . '/css/responsive.css');
    wp_enqueue_style( 'owl1', get_template_directory_uri() . '/css/owl.carousel.min.css');
    wp_enqueue_style( 'owl2', get_template_directory_uri() . '/css/owl.theme.default.min.css');
    wp_enqueue_style( 'style-css', get_stylesheet_uri() );
    
    wp_enqueue_script( 'bootstrap', get_template_directory_uri() . '/js/bootstrap.min.js', array(), '1.0.0', true );
    wp_enqueue_script( 'bootstrap1', get_template_directory_uri() . '/js/bootstrap.bundle.min.js', array(), '1.0.0', true );
    wp_enqueue_script( 'popper', get_template_directory_uri() . '/js/popper.js', array(), '1.0.0', true );
    wp_enqueue_script( 'jquerymin', get_template_directory_uri() . '/js/jquery.min.js', array(), '1.0.0', true );
    wp_enqueue_script( 'main', get_template_directory_uri() . '/js/main.js', array(), '1.0.0', true );
    
}
add_action( 'wp_enqueue_scripts', 'vgw_scripts' );

add_theme_support( 'post-thumbnails', array( 'post' ) );

function true_register_wp_sidebars() {
 
	/* В боковой колонке - первый сайдбар */
	register_sidebar(
		array(
			'id' => 'true_side', // уникальный id
			'name' => 'Боковая колонка', // название сайдбара
			'description' => 'Перетащите сюда виджеты, чтобы добавить их в сайдбар.', // описание
			'before_widget' => '<div id="%1$s" class="side widget %2$s">', // по умолчанию виджеты выводятся <li>-списком
			'after_widget' => '</div>',
			'before_title' => '<h3 class="widget-title">', // по умолчанию заголовки виджетов в <h2>
			'after_title' => '</h3>'
		)
	);
}
 
add_action( 'widgets_init', 'true_register_wp_sidebars' );



add_theme_support( 'post-thumbnails' );

add_action( 'template_redirect', function(){
    ob_start( function( $buffer ){
        $buffer = str_replace( array( 'type="text/javascript"', "type='text/javascript'" ), '', $buffer );
        $buffer = str_replace( array( 'type="text/css"', "type='text/css'" ), '', $buffer );
        return $buffer;
    });
});

if ( ! function_exists( 'twentynineteen_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function twentynineteen_setup() {

		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );
		set_post_thumbnail_size( 1568, 9999 );


	}
endif;
add_action( 'after_setup_theme', 'twentynineteen_setup' );
require get_template_directory() . '/inc/template-functions.php';

/**
 * SVG Icons related functions.
 */
require get_template_directory() . '/inc/icon-functions.php';

/**
 * Custom template tags for the theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

