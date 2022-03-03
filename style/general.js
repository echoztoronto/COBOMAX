// navbar
let navbar = document.getElementById("navbar");
if(navbar !== null)
navbar.innerHTML = 
`<div class="container-fluid">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>                        
        </button>
        <a class="navbar-brand" href="index.html"><img id="logo" src="image/logo.JPG"></a>
        </div>
        <div class="collapse navbar-collapse" id="myNavbar">
        <ul class="nav navbar-nav navbar-right">
            <li><a href="index.html#about"><span class="glyphicon glyphicon-info-sign"></span> ABOUT </a></li>
            <li><a href="program.html"><span class="glyphicon glyphicon-education"></span> PROGRAM </a></li>
            <li><a href="showcase.html"><span class="glyphicon glyphicon-globe"></span> GALLERY </a></li>
            <li><a href="index.html#help"><span class="glyphicon glyphicon-thumbs-up"></span> HELP US </a></li>
            <li><a href="index.html#contact"><span class="glyphicon glyphicon-envelope"></span> CONTACT</a></li>
        </ul>
    </div>
</div>`;

// footer
let footer = document.getElementById("footer");
if(footer !== null) 
footer.innerHTML = 
`<hr>
    <div class="text-center center-block">
        <br />
        <a target="_blank" href="http://facebook.com/pg/Cobomax-Academy-360778581461731"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a>
        <a target="_blank" href="http://twitter.com/CobomaxAcademy"><i id="twitter-fb" class="fa fa-twitter fa-3x social"></i></a>
        <a href="mailto:info@cobomax.org"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>
        <br/>
        <p>Copyright © 2019.Cobomax Academy all rights reserved.</p>             
    </div>
<hr>`;


