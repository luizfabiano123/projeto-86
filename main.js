var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function newImage()
{
	fabric.Image.fromUrl('BirthdayImage.jpg', function(img){
blockImageObject = img;

blockImage.scaleToWidht(700);
blockImage.scaleToHeight(510);
blockImage.set({
    top:0,
	left:0,
});
canvas.add(blockImageObject);
});



function playSound()
	x.play();
}
