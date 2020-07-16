<?php
get_header();
?>

<body>
    <?php if( function_exists('wd_slider') ) { wd_slider(2); } ?>
    <!--<div class="owl-carousel owl-theme container-banner">
        <div class="slider-1"></div>
        <div class="slider-2"></div>
        <div class="slider-3"></div>
        <div class="slider-4"></div>
    </div>-->
    <!--Block advantage-->
    <section class="container advantage-block">
        <div class="row">
            <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                <div class="row advantage">
                    <img src="/wp-content/themes/vgw/img/batary.png" alt="">
                    <div class="text-adv">
                        <p>Прохождения на 100%</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-6 col-lg-4">
                <div class="row advantage">
                    <img src="/wp-content/themes/vgw/img/hand.png" alt="">
                    <div class="text-adv">
                        <p>Общение с подписчиками</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-4 align-content-md-center">
                <div class="row advantage">
                    <img src="/wp-content/themes/vgw/img/video.png" alt="">
                    <div class="text-adv">
                        <p>Новое видео каждый день</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--Block advantage END-->

    <!--Block games-->
    <section class="block-games">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-4 col-lg-4">
                    <img class="games-block-img" src="/wp-content/themes/vgw/img/img-1.jpg" alt="">
                </div>
                <div class="col-12 col-md-4 col-lg-4">
                    <img class="games-block-img" src="/wp-content/themes/vgw/img/img-2.jpg" alt="">
                </div>
                <div class="col-12 col-md-4 col-lg-4">
                    <img class="games-block-img" src="/wp-content/themes/vgw/img/img-3.jpg" alt="">
                </div>
            </div>
        </div>
    </section>
    <!--Block game END-->

    <!--Block order game-->
    <section class="donat-progress">
        <div class="container">
            <div class="heading-container">
                <h2>Заказать прохождение игр</h2>
            </div>
            <div class="game-block">
                <div class="row game-block-container">
                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 image-game">
                        <img src="/wp-content/themes/vgw/img/ff.jpg" alt="">
                    </div>
                    <div class="col-12 col-sm-12 col-md-8 col-lg-8">
                        <div class="content-game">
                            <h3>FINAL FANTAFY XIII</h3>
                            <p>Final Fantasy XIII (яп. ファイナルファンタジーXIII файнару фантадзи: сатин) — японская
                                ролевая игра, разработанная и выпущенная компанией Square Enix для консолей
                                PlayStation 3, Xbox 360 и ПК. Представляет собой тринадцатую. </p>
                        </div>
                        <div class="status-game">
                            <div class="progress">
                                <div class="progress-line"></div>
                            </div>
                            <div class="progress-text">
                                <p>257/350$</p>
                                <a href="#">ускорить</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="game-block">
                <div class="row game-block-container">
                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 image-game">
                        <img src="/wp-content/themes/vgw/img/ff.jpg" alt="">
                    </div>
                    <div class="col-12 col-sm-12 col-md-8 col-lg-8">
                        <div class="content-game">
                            <h3>FINAL FANTAFY XIII</h3>
                            <p>Final Fantasy XIII (яп. ファイナルファンタジーXIII файнару фантадзи: сатин) — японская
                                ролевая игра, разработанная и выпущенная компанией Square Enix для консолей
                                PlayStation 3, Xbox 360 и ПК. Представляет собой тринадцатую. </p>
                        </div>
                        <div class="status-game">
                            <div class="progress">
                                <div class="progress-line"></div>
                            </div>
                            <div class="progress-text">
                                <p>257/350$</p>
                                <a href="#">ускорить</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="game-block">
                <div class="row game-block-container">
                    <div class="col-12 col-sm-12 col-md-4 col-lg-4 image-game">
                        <img src="/wp-content/themes/vgw/img/ff.jpg" alt="">
                    </div>
                    <div class="col-12 col-sm-12 col-md-8 col-lg-8">
                        <div class="content-game">
                            <h3>FINAL FANTAFY XIII</h3>
                            <p>Final Fantasy XIII (яп. ファイナルファンタジーXIII файнару фантадзи: сатин) — японская
                                ролевая игра, разработанная и выпущенная компанией Square Enix для консолей
                                PlayStation 3, Xbox 360 и ПК. Представляет собой тринадцатую. </p>
                        </div>
                        <div class="status-game">
                            <div class="progress">
                                <div class="progress-line"></div>
                            </div>
                            <div class="progress-text">
                                <p>257/350$</p>
                                <a href="#">ускорить</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--Block order game END-->

    <!--Blog -->
    <section class="block-blog">
        <div class="container">
        <div class="heading-container">
                <h2>Новости и прочая дичь</h2>
            </div>
            <?php $catquery = new WP_Query( 'posts_per_page=3' ); ?>
            <ul class="post-block">
                <?php while($catquery->have_posts()) : $catquery->the_post(); ?>
                <li class="post-item">
                    <div class="newshr"></div>
                    <h3><a href="<?php the_permalink() ?>" rel="bookmark"><?php the_title(); ?></a></h3>
                    <div class="post-content">
                    <div class="post-image"><a href="<?php the_permalink() ?>"><?php the_post_thumbnail(array(500, 500)); ?></a></div>
                    <div class="post-prev"><?php the_excerpt(); ?></div>
                    </div>
                    
                </li>
                <?php endwhile; ?>
            </ul>
            <?php wp_reset_postdata(); ?>
            <div class="btn-blog">
            <a href="/blog/" class="all-news-btn"> Все новости</a>
            </div>
        </div>
    </section>
    <!--Blog  END-->

    <?php
get_sidebar();
get_footer();