Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 100
});
camera = document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id ="capturedImg" src="'+data_uri+'">';
    });
}
console.log("ml5 version", ml5.version); 
classifier = ml5.imgClassifier("https://teachablemachine.withgoogle.com/models/_fMXks_VX/model.json", modelLoaded);