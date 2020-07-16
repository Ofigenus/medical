<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <?php wp_head(); ?>

    <div class="menu-wrap">
        <div class="navbar-nav mr-auto text-menu">
            <?php wp_nav_menu( [ 'menu' => 'main' ] ); ?>
        </div>
        <div class="mobil-menu-block">
            <img src="/wp-content/themes/vgw/img/logo-mob-menu.png" class="logo-mob-menu" alt="VGW">
            <p class="mob-menu-text">Только 100% прохождения на хардкоре с Virtuozila Game World. Испытай игру на все
                100.</p>
        </div>
    </div>
    <script src="https://use.fontawesome.com/fa3f2f5e60.js"></script>
</head>

<div class="top-area">
    <div class="container">
        <div class="row">
            <div class="col-6 area-adres">
                <p class="adress"><i class="fa fa-map-marker" aria-hidden="true"></i> Киев, 04655, пр-т Московский, 21
                </p>
            </div>
            <div class="col-6 area-cont">
                <i class="fa fa-mobile" aria-hidden="true"></i>
                <p>(044) 467 76 21</p>
                <p>(044) 467 76 21</p>
            </div>
        </div>
    </div>
</div>
<header class="container">

    <nav class="navbar navbar-expand-lg navbar-dark main-menu ">
        <a class="navbar-brand logo-1 logo-opasity" id="logo-animate-2" href="/"><img
                src="/wp-content/themes/vgw/img/logo-site-2.png" alt="VGW"></a>
        <a class="navbar-brand logo-1" href="/"><img id="logo-animate" class="logo-on"
                src="/wp-content/themes/vgw/img/logo-site.png" alt="VGW"><img
                src="/wp-content/themes/vgw/img/logo-site-name.png" alt="VGW"></a>
        <a class="navbar-brand logo-2" href="/"><img src="/wp-content/themes/vgw/img/logo-min.png" alt="VGW"></a>
        <div class="toggle-button">
            <div class="menu-bar menu-bar-top"></div>
            <div class="menu-bar menu-bar-middle"></div>
            <div class="menu-bar menu-bar-bottom"></div>
        </div>
        <div class="collapse navbar-collapse text-menu-2" id="navbarSupportedContent">
            <div class="navbar-nav mr-auto text-menu">
                <?php wp_nav_menu( [ 'menu' => 'main' ] ); ?>
            </div>
            <div class="reg-menu">
                <div class="btn-order">
                    <a href="/order-game">Заказать прохождение</a>
                </div>
                <span>&nbsp;|&nbsp;</span>
                <a href="#" class="popup-login">Войти</a>
            </div>
        </div>
    </nav>
</header>