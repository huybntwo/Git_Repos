var courses = new Array("HTML", "CSS", "JS");
document.write(courses[1]);
document.write("\nThe lenght of array: " + courses.length);
//
var c1 = ["HTLM", "CSS"];
var c2 = ["C++","C#"];
var c12 = c1.concat(c2);
c12.forEach(function(item, index, array)
{
     console.log(item, index);
    //document.write(item, index);   
});

c12.push("END");
c12.unshift("START");
c12.pop();
c12.shift();
c12.splice(2,1);
var c12_copy = c12.slice();
//
var a =["a","b","c"];
for(var index =0; index<a.length;++index)
{
    console.log(a[index]);
}
// Date
function printTime()
{
    var d = new Date();
    var hours = d.getHours();
    var min = d.getMinutes();
    var sec = d.getSeconds();
    document.body.innerHTML = hours+":"+min+":"+sec;
}
setInterval(printTime, 1000);