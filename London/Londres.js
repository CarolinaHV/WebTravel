//Nav barside
$('.btn').click(function () {
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
});

//Slider imagenes
var img = [];

    img[0] = '../London/ImgLon/london_5.jpg';
    img[1] = '../London/ImgLon/Royal_Albert_Hall_London.jpg';
    img[2] = '../London/ImgLon/hyde-park-areil-view.jpg';
    img[3] = '../London/ImgLon/bigben.jpg';
    img[4] = '../London/ImgLon/londres-bigben-cabina.jpg';
    img[5] = '../London/ImgLon/palacio_buckingham_londres.jpg';
    img[6] = '../London/ImgLon/Picadilly_Circus.jpg';
    img[7] = '../London/ImgLon/london_eye.jpg';

var indexImg = 0;

function changeImg(){

    document.imagenes.src = img[indexImg];
    if (indexImg < 7) {
            indexImg++;
        }else {
            indexImg = 0;
    }
}
setInterval(changeImg, 2000);