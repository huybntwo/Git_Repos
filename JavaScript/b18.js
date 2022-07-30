var images = [
    "https://raw.githubusercontent.com/ichte/Planets-Android-Learning/master/earth.jpg",
    "https://raw.githubusercontent.com/ichte/Planets-Android-Learning/master/jupiter.jpg",
    "https://raw.githubusercontent.com/ichte/Planets-Android-Learning/master/neptune.jpg"
];
var cnt = 0;
function next()
{
    var ele = document.getElementById("slider");
    cnt++;
    if(cnt>=images.length)
    {
        cnt= 0;
    }
    ele.src = images[cnt];
}
function prev()
{
    var ele = document.getElementById("slider");
    cnt--;
    if(cnt<=0)
    {
        cnt = images.length-1;
    }
    ele.src = images[cnt];
}