function preload()
{

}
function setup()
{
    canvas = createCanvas(600,400);
    canvas.position(330,170);
    video = createCapture(VIDEO);
    video.hide();
    textSize(22);
}
function draw()
{
    background("navy");
    fill("whitesmoke");
    text("Yourself", 260, 395);
    fill("rebeccapurple");
    stroke("red");
    rect(20, 27, 30, 347);
    rect(550, 27, 30, 347);
    image(video, 60, 30, 480, 330);
}
function take_snapshot()
{
    save('yourself.png')
}