// please save all images in jpg format
// then add the image names into the array
// example: 1.jpg and random.jpg  ->   [1,'random']

// the slide show on homepage
const home_slider_img = [0,1,2];
const home_slider_path = "image/home/";

// for active programs
const active_program_img = [28];   // program page will only display past posters if this array is empty
const active_program_path = "image/program/";

// for past programs
let past_program_img = [];
for (let i = 27; i >= 1; i--) {
    past_program_img.push(i);
}
const past_program_path = "image/program/";

