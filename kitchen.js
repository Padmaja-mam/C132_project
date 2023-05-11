objectDetector= "";

img = "";
objects = [];
status1 = "";

function preload()
{
  img = loadImage('kitchen.jpg');
}


function setup()
 {
  canvas = createCanvas(450, 300);
  canvas.position(500,200);

  objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded() 
{
  console.log("Model Loaded!")
  status1 = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
 {
  if (error)
   {
    console.log(error);
  }
  console.log(results);
  objects = results;
}


function draw() 
{
 image(img, 0, 0, 450, 300);
}
  