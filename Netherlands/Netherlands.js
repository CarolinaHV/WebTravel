$('.btn').click(function () {
    $(this).toggleClass("click");
    $('.sidebar').toggleClass("show");
});

//Slider imagenes
var img = [];

    img[0] = './ImgNet/museumplein.jpg';
    img[1] = './ImgNet/vangogh.jpg';
    img[2] = './ImgNet/rijksmuseum.jpg';
    img[3] = './ImgNet/anafrankhouse.jpg';
    img[4] = './ImgNet/Stedelijk_Museum_Amsterdam.jpg';
    img[5] = './ImgNet/vondelpark.jpg';
    img[6] = './ImgNet/Herengracht-in-Amsterdam.jpg';
    img[7] = './ImgNet/heineken_experience.jpg';
    img[8] = './ImgNet/jordaan_district_amsterdam.jpg';
    img[9] = './ImgNet/cheese_museum.jpg';
    img[10] = './ImgNet/tropenmuseum-amsterdam.jpg';
    img[11] = './ImgNet/Zaanse_Schans_Windmills.jpg';
    img[12] = './ImgNet/keukenhof.jpg';
    img[13] = './ImgNet/nemo-building.jpg';
    img[14] = './ImgNet/AlbertCuypMarkt.jpg';
    img[15] = './ImgNet/Scheepvaartmuseum.jpg';
    img[16] = './ImgNet/eyefilm.jpg';

var indexImg = 0;

function changeImg(){

    document.imagenesNY.src = img[indexImg];
    if (indexImg < 16) {
            indexImg++;
        }else {
            indexImg = 0;
    }
}
setInterval(changeImg, 2000);