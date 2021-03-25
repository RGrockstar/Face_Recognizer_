Webcam.set({
 width:350,
 height:350,
 image_format:'png',
 png_quality:90
});
    
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snap(){
 Webcam.snap(function(data_uri){
  document.getElementById("result").innerHTML='<img id="CaptureImage" src="'+data_uri+'"/>';
})
}
console.log('ml5 version: ',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/train/image/1yWzwyiVVpN5WcGjqayWSX3yKik2ycIqd',modelLoaded);
function modelLoaded(){
  console.log('modelLoaded');
}
 
function check(){
 img = document.getElementById('CaptureImage');
 classifier.classify(img, gotresult);
}
function check() { 
  img = document.getElementById('CaptureImage'); 
  classifier.classify(img, gotResult); 
} 
function gotResult(error, results) { 
  if (error) { 
    console.error(error); 
  } else { 
    console.log(results); 
    document.getElementById("result_object_name").innerHTML = results[0].label; 
    document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3); 
  } 
}