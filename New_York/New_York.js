//Nav barside
$('.btn').click(function () {
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
});

//Slider imagenes
var img = [];

    img[0] = '../New_York/ImgNY/Liberty.jpg';
    img[1] = '../New_York/ImgNY/Central_Park.jpg';
    img[2] = '../New_York/ImgNY/skyline.jpg';
    img[3] = '../New_York/ImgNY/Times-Square.jpg';
    img[4] = '../New_York/ImgNY/ny.jpg';
    img[5] = '../New_York/ImgNY/MET.jpg';
    img[6] = '../New_York/ImgNY/911memorial.jpg';
    img[7] = '../New_York/ImgNY/broolyn.jpg';

var indexImg = 0;

function changeImg(){

    document.imagenesNY.src = img[indexImg];
    if (indexImg < 7) {
            indexImg++;
        }else {
            indexImg = 0;
    }
}
setInterval(changeImg, 2000);