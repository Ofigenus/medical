<?php
/**
 * Template part for displaying a message that posts cannot be found
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package vgw
 */

?>

<?php
get_header();
?>

<div class="container">
 <?php
    the_post();
    the_content(); 
?> 
</div>

<?php
get_sidebar();
get_footer();