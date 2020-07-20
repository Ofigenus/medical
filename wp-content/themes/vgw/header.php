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
            <img src="wp-content/themes/vgw/img/logo.jpg" class="logo-mob-menu" alt="VGW">
            <p class="mob-menu-text">Только 100% прохождения на хардкоре с Virtuozila Game World. Испытай игру на все
                100.</p>
        </div>
    </div>
    <script src="https://use.fontawesome.com/fa3f2f5e60.js"></script>
</head>

<div class="bg-top-area"></div>
<header>
    <nav class="top-area">
        <div class="container">
            <div class="row">
                <div class="col-3 area-adres">
                    <img src="wp-content/themes/vgw/img/logo.jpg" alt="">
                </div>
                <div class="col-9 area-cont">
                    <div class="area-head">
                        <p class="phone-1"><i class="fa fa-phone" aria-hidden="true"></i>(044) 467 76 21</p>
                        <p class="phone-1">(044) 467 76 21</p>
                        <p class="adress">Киев, 04655, пр-т Московский, 21
                        </p>
                        <div class="btn-order">
                            <a href="/order-game">Обратный звонок</a>
                        </div>
                    </div>
                    <div class="navbar-nav mr-auto text-menu">
                        <?php wp_nav_menu( [ 'menu' => 'main' ] ); ?>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</header>