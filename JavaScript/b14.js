function changePcolor()
{
    var plements = document.getElementsByClassName("z");
    for (var i = 0; i < plements.length; i++)
    {
        var element = plements[i];
        console.log(element);
        element.style.color = "red";
        element.style.fontSize = "30px";
    
    }
}


var a = document.getElementById("demo");
a.style.width = "100px";
a.style.color = "green";
a.style.backgroundColor = "lightblue";