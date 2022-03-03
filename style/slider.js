// slider
generate_slider("myCarousel",home_slider_path,home_slider_img);
if(active_program_img.length !== 0) {
    generate_slider("program-slider",active_program_path,active_program_img);
}    
else if(document.getElementById("program-title") !== null) {
    change_to_past();
    document.getElementById("program-subtitle").remove();
}


function generate_slider(ID, dir, img_array) {
    let container = document.getElementById(ID);
    if(container === null) return;

    let indicator = 
        `<ol class="carousel-indicators hidden-xs">
            <li data-target="#${ID}" data-slide-to="0" class="active"></li>`;;

    for(let i = 1; i < img_array.length; i++) {
        indicator += `<li data-target="#${ID}" data-slide-to="${i}"></li>`;
    }
    indicator +=  `</ol>`;

    let slides = 
        `<div class="carousel-inner">
            <div class="item active">
                <img src="${dir}${img_array[0]}.jpg" alt="1">
            </div>`;
    for(let i = 1; i < img_array.length; i++) {
        slides += 
            `<div class="item">
                <img src="${dir}${img_array[i]}.jpg" alt="${i}">
            </div>`;
    }
    slides +=  `</div>`;

    container.innerHTML = indicator + slides +
        `<a class="left carousel-control" href="#${ID}" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#${ID}" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
        </a>`;

}


function change_to_past(){
    if(document.getElementById("program-title") === null) return;
    document.getElementById("program-title").innerHTML = `Past Programs`;
    document.getElementById("program-subtitle").innerHTML = `View Active Programs`;
    document.getElementById("program-slider").remove;
    document.body.innerHTML += `<div id="program-slider" class="carousel slide" data-ride="carousel"> </div>`;
    generate_slider("program-slider",past_program_path,past_program_img);
    document.getElementById("program-subtitle").onclick = change_to_active;
}

function change_to_active(){
    if(document.getElementById("program-title") === null) return;
    document.getElementById("program-title").innerHTML = `Active Programs`;
    document.getElementById("program-subtitle").innerHTML = `View Past Programs`;
    document.getElementById("program-slider").remove;
    document.body.innerHTML += `<div id="program-slider" class="carousel slide" data-ride="carousel"> </div>`;
    generate_slider("program-slider",active_program_path,active_program_img);
    document.getElementById("program-subtitle").onclick = change_to_past;
}