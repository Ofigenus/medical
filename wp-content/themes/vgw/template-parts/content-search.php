<?php
/**
 * Template part for displaying results in search pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package vgw
 */

?>
<?php
get_header();
?>

<div class="block-blog">
<div class="container">
 <?php
    the_post();
    the_content(); 
?> 
</div>
</div>

<?php
get_sidebar();
get_footer();
