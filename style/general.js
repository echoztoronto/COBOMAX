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
            <li><a href="showcase.html"><span class="glyphicon glyphicon-globe"></span> SHOWCASE </a></li>
            <li><a href="program.html"><span class="glyphicon glyphicon-education"></span> PROGRAM </a></li>
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
        <a href="mailto:info@cobomax.org"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>
        <br/>
        <p>Copyright © 2019.Cobomax Academy all rights reserved.</p>
        <div id="my-info">
            Powered by Yuwen Zheng
            <a href="https://github.com/echoztoronto" target="_blank"><i id="social-gh" class="fa fa-github fa-3x social"></i></a>
            <a href="mailto:echo.zheng@mail.utoronto.ca"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>
        </div>               
    </div>
<hr>`;


// slider
generate_slider("myCarousel",home_slider_path,home_slider_img);
if(active_program_img.length !== 0) generate_slider("program-slider",active_program_path,active_program_img);
else {
    change_to_past();
    document.getElementById("program-subtitle").remove();
}





function generate_slider(ID, dir, img_array) {
    let container = document.getElementById(ID);
    if(container === null) return;

    let indicator = 
        `<ol class="carousel-indicators hidden-xs hidden-sm">
            <li data-target="#${ID}" data-slide-to="0" class="active"></li>`;;

    for(let i = 1; i < img_array.length; i++) {
        indicator += `<li data-target="#${ID}" data-slide-to="${i}"></li>`;
    }
    indicator +=  `</ol>`;

    let slides = 
        `<div class="carousel-inner">
            <div class="item active">
                <a href="${dir}${img_array[0]}.jpg" target="_blank">
                    <img src="${dir}${img_array[0]}.jpg" alt="1">
                </a>
            </div>`;
    for(let i = 1; i < img_array.length; i++) {
        slides += 
            `<div class="item">
                <a href="${dir}${img_array[i]}.jpg" target="_blank">
                    <img src="${dir}${img_array[i]}.jpg" alt="${i}">
                </a>
            </div>`;
    }
    slides +=  `</div>`;

    container.innerHTML = indicator + slides +
        `<a class="left carousel-control hidden-xs" href="#${ID}" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control hidden-xs" href="#${ID}" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
        </a>`;

}


function change_to_past(){
    document.getElementById("program-title").innerHTML = `Past Programs`;
    document.getElementById("program-subtitle").innerHTML = `View Active Programs`;
    document.getElementById("program-slider").remove;
    document.body.innerHTML += `<div id="program-slider" class="carousel slide" data-ride="carousel"> </div>`;
    generate_slider("program-slider",past_program_path,past_program_img);
    document.getElementById("program-subtitle").onclick = change_to_active;
}

function change_to_active(){
    document.getElementById("program-title").innerHTML = `Active Programs`;
    document.getElementById("program-subtitle").innerHTML = `View Past Programs`;
    document.getElementById("program-slider").remove;
    document.body.innerHTML += `<div id="program-slider" class="carousel slide" data-ride="carousel"> </div>`;
    generate_slider("program-slider",active_program_path,active_program_img);
    document.getElementById("program-subtitle").onclick = change_to_past;
}