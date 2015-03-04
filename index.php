<?php /* It began in Africa...

                     .c.
                   .d$$e$.
                .e$P"   ^*%
             .e$P"
           z$$$"
        z$$$$$F
     .d$$$$$$$F
  .d$$$$$$$$$$F
.3$$$$$$$$$$$$F
  $$$$$" ""$*$"
   P $"    $ $
  d d"     $ $
  $ *      $ $
   ) '     $ $
    % '    $ $
     % "   $ $
      - )  * *

*/

include 'includes/random.php';

$graphic = 'Brand Identity,<br>Data Aesthetics,<br>Editorial Design,<br>UX/UI Design, and<br>all sorts of<br>Visual Communication.';
$digital = 'Creative Coding,<br>Web Design & Development,<br>and CMS Implementation<br>powered by<br>Progressive enhancement<br>and Open Standards.';

?>
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
                                <h2 class="lead">We are <?php echo $selectedWho; ?> working together to <?php echo $selectedHow; ?> <abbr class="initialism" data-toggle="tooltip" data-html="true" title="<?php echo $graphic; ?>">graphic</abbr> and <abbr class="initialism" data-toggle="tooltip" data-html="true" title="<?php echo $digital; ?>">digital</abbr> solutions through <?php echo $selectedWhat; ?> and <?php echo $selectedWhatelse; ?> <mark>design</mark>. We are based in <del><?php echo $selectedCity; ?></del> Barcelona. <a data-toggle="collapse" href="#read-more" aria-expanded="false" aria-controls="read-more">Read More →</a></h2>
                            </hgroup>
                        </div>
                    </header><!-- #masthead -->
                </div><!-- .col-md-12 -->
            </div><!-- .row -->
            <div class="collapse" id="read-more">
                <div class="row">
                    <div class="col-md-4">
                        <h2>Who are we?</h2>
                        <p>We are designers and developers focused on research, technology and the pursuit of new aesthetics and techniques. We love exploring and playing with new technologies, sometimes resulting in offbeat pieces of work. We have fun pushing boundaries but <a href="">our experiments</a> always serve our client's purpose.</p>
                    </div><!-- .col-md-4 -->
                    <div class="col-md-4">
                        <h2>Our ethical statement</h2>
                        <p>...</p>
                    </div><!-- .col-md-4 -->
                    <div class="col-md-4">
                        <h2>License</h2>
                        <p>Our self-initiated works are licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License <abbr class="initialism" data-toggle="tooltip" title="Attribution-NonCommercial-ShareAlike 4.0 International">(CC BY-NC-SA 4.0)</abbr>. Please, read <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/legalcode">the full license</a> or at least <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">this human-readable summary</a>.</p>
                    </div><!-- .col-md-4 -->
                </div><!-- .row -->
            </div><!-- #read-more -->
            <hr>
            <div class="row">
                    <div id="main" class="site-main">
                        <div id="main-content" class="main-content">
                            <div id="primary" class="content-area">
                                <div id="content" class="site-content" role="main">
                                    <div class="col-md-6">
                                        <h2 id="work">Work</h2>
                                        <p>We plan, design and build websites and interfaces across all digital platforms. Our work is built around the principles of <a href="http://lawsofsimplicity.com/" >simplicity</a> and <a href="http://project.cyberpunk.ru/idb/hacker_ethics.html">clever problem-solving</a>. We also collaborate with teams of complementary skills, including photographers, illustrators, copywriters, filmmakers and motion designers. <mark>We share a passion for excellence in everything we do</mark>.</p>
                                    </div><!-- .col-md-6 -->
                                    <div class="col-md-6">
                                        <h2>Contact</h2>
                                        <p>We are currently taking on new projects. We enjoy working with businesses and individuals who think about, plan for, or consider the future, rather than just the present. If that is you, <a data-toggle="tooltip" href="mailto:hello@wearestudio.io" title="Drop us a line!">we’d love to hear from you</a>. For more information and detailed case studies of our work, please get in touch. We speak <a href="">english</a>, <a href="">catalan</a> and <a href="">spanish</a>.</p>
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
                             <p><a href="#" target="_blank">Bēhance</a>, <a href="https://github.com/eyeohstudio" target="_blank">GitHub</a>, <a href="http://eyeohstudio.tumblr.com/" target="_blank">Tumblr</a>.</p>
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