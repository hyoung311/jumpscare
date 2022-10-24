console.log("This is a popup!!");

window.onload = choosePic();

// $(document).ready(function() {

// let paragraphs = document.getElementsByTagName('p');
// for (elt of paragraphs) {
//     elt.style['background-color'] = '#FFFFFF' 
// }

// chrome.runtime.onMessage.addListener(gotMessage);

// function gotMessage(message, sender, sendResponse) {
//     console.log(message.txt);
// }

var randomNum = 0;
var myPix = new Array("images/image1.jpeg","images/image2.jpeg","images/image3.jpeg","images/image4.jpeg","images/image5.jpeg","images/image6.jpg","images/image7.jpeg");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];

     rotate();
    }

function rotate() {
    randomNum++;
    if (randomNum == myPix.length) {
        randomNum = 0;
    }
    document.getElementById("myPicture").src = myPix[randomNum];

    setTimeout(rotate, 3 * 1000);
}
