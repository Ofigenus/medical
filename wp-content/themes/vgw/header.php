<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <?php wp_head(); ?>

    <script src="https://use.fontawesome.com/fa3f2f5e60.js"></script>
</head>

<div class="bg-top-area"></div>
<header>
    <nav class="top-area">
    <div class="pos-f-t mob-menu">
        <div class="collapse" id="navbarToggleExternalContent">
            <div class="nav-mob p-4">
                <?php wp_nav_menu( [ 'menu' => 'main' ] ); ?>
            </div>
        </div>
        <div class="navbar">
            <button class="navbar-toggler navbar-toggler-mob" type="button" data-toggle="collapse"
                data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <p class="adress">Киев, 04655, пр-т Московский, 21</p>
            <p class="phone-1"><i class="fa fa-phone" aria-hidden="true"></i>(044) 467 76 21</p>
            <img src="../wp-content/themes/vgw/img/logo.jpg" alt="" class="mob-logo">
        </div>
    </div>

        <div class="container desc-menu">
            <div class="row">
                <div class="col-3 area-adres">
                    <img src="../wp-content/themes/vgw/img/logo.jpg" alt="">
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