

var i = 0;
var images = [];
var time = 2000;

images[0] = "../images/slidingImage1.PNG";
images[1] = "../images/slidingImage2.PNG";
images[2] = "../images/slidingImage3.PNG";

function changeImg(){

    document.slide.src = images[i];

    if(i<images.length -1){

        i++;
    }
    else{

        i=0;
    }
    setTimeout("changeImg()",time)
}
window.onload = changeImg;

