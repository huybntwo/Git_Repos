//the start position
var pos = 0;
var step = 1;
//get the element, had id = box
var box = document.getElementById("box");
function moveNode()
{
    if(pos> 150 || pos<0)
    {
        step = -step;
    }
    pos +=step;
    box.style.left = pos + "px";
}
//
var t = setInterval(moveNode, 10);