<?php include 'includes/random.php'; ?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>i/o studio</title>
        <!-- Bootstrap -->
        <link href="style.css" rel="stylesheet">
        <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
        <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <![endif]-->
    </head>
    <body>
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <header id="masthead" class="site-header" role="banner">
                        <div class="header-main">
                            <hgroup>
                                <h1>i/o studio</h1>
                                <h2 class="lead">We are <?php echo $selectedWeare.' '.$selectedDoing; ?> visual identities and digital solutions through effective and innovative <?php echo $selectedWhat; ?>. Based in in <del><?php echo $selectedCity; ?></del> Barcelona. <a data-toggle="collapse" href="#colophon" aria-expanded="false" aria-controls="colophon">Read more →</a></h2>
                            </hgroup>
                        </div>
                    </header><!-- #masthead -->
                </div><!-- .col-md-12 -->
            </div><!-- .row -->
            <div class="row collapse" id="colophon">
                <div class="col-md-12">
                    <div>
                        <p>Fruitcake powder tiramisu I love. Pastry halvah cookie oat cake dragée muffin pastry candy canes. I love I love ice cream icing fruitcake I love soufflé candy.</p>
                        <p>Candy ice cream fruitcake lemon drops I love muffin toffee tart. Caramels apple pie marshmallow caramels. Pie cookie jelly topping tootsie roll danish. Cupcake wafer I love chocolate bar jelly beans gummies chocolate cake.</p>
                        <p>Tiramisu sweet jelly sesame snaps halvah. Cheesecake donut candy canes gingerbread croissant bear claw I love bear claw. Bear claw cookie carrot cake biscuit pastry cake croissant.</p>
                    </div><!-- #colophon -->
                </div><!-- .col-md-12 -->
            </div><!-- .row -->
            <hr>
            <div class="row">
                    <div id="main" class="site-main">
                        <div id="main-content" class="main-content">
                            <div id="primary" class="content-area">
                                <div id="content" class="site-content" role="main">
                                    <div class="col-md-6">
                                        <h2 id="work">Work</h2>
                                        <p>Donut topping candy gingerbread donut I love. Lemon drops fruitcake cupcake. Wafer jelly I love caramels. Tootsie roll pudding brownie pie macaroon gingerbread. Jelly-o tiramisu oat cake caramels pudding cupcake. Cookie gummi bears chupa chups. I love chupa chups brownie cotton candy. Danish danish cupcake gummies gummi bears.</p>
                                    </div><!-- .col-md-6 -->
                                    <div class="col-md-6">
                                        <h2>Contact</h2>
                                        <p>Cookie jelly beans chupa chups oat cake bear claw chocolate bar marshmallow. Toffee soufflé sweet. Chocolate bar gummi bears cookie bonbon toffee icing topping. Biscuit ice cream I love tart I love pudding dessert apple pie. Marshmallow cake gummi bears. Caramels gummies cake I love bear claw cookie toffee cheesecake sugar plum.</p>
                                    </div><!-- .col-md-6 -->
                                </div><!-- #content -->
                            </div><!-- #primary -->
                        </div><!-- #main-content -->
                    </div><!-- #main -->
            </div><!-- .row -->
            <hr>
            <div class="row">
                <div class="col-md-12">
                    <footer id="footer" class="site-footer" role="contentinfo">
                        <address>
                            <strong>i/o studio</strong>
                            <p>7th Floor, <a href="https://goo.gl/maps/x5j9b" target="_blank" data-toggle="tooltip" title="View map">313 Trav. de les Corts, Barcelona 08029</a>.<br>
                                (+34) 934 103 368 / (+34) 618 261 598<br></p>
                             <p><a href="#" target="_blank">Bēhance</a>, <a href="#" target="_blank">Tumblr</a>.</p>
                        </address><!-- address -->
                        <div class="site-info">
                            <p>i/o studio (cc) <a href="http://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank">Some Rights Reserved</a>.</p>
                        </div>
                    </footer><!-- #footer -->
                </div><!-- .col-md-12 -->
            </div><!-- .row -->
        </div><!-- .container -->
        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <!-- Include all compiled plugins (below), or include individual files as needed -->
        <script src="scripts/bootstrap.min.js"></script>
        <script src="scripts/default.js"></script>
        <!-- Google Analytics -->
        <script>
            (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
            (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
            m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
            })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
            ga('create', 'UA-59941852-1', 'auto');
            ga('send', 'pageview');
        </script>
    </body>
</html>