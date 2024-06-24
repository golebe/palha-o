function preload(){

}

function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function draw(){
Image(video, 0, 0, 300, 300);
Image(clowNose, nosex, noseY, 30, 30);
}

function modelLoaded(){
    console.log('poseNet foi inicializado');
}

function gotPoses(results){
if(results.length > 0){
    console.log(results);
    noseX=results[0].pose.nose.x=15;
    nosey=results[0].pose.nose.y=15;

}
}

function takeSnapshot(){
    save('myFilterImage')
}