function show()
{
    alert("Hi there!!!");
}

//get the HTML element
var htmlelement_button = document.getElementById("demoClickEvent");

htmlelement_button.onclick = function()
{
    htmlelement_button.innerText = Date();
}
// htmlelement_button.onclick = getDate();

// function getDate()
// {
//     htmlelement_button.innerText = Date();
// }
//
function getOnChange()
{
    var x = document.getElementById("demoOnChange");
    x.value = x.value.toUpperCase();
}
//
var btn = document.getElementById("demoRemove");
btn.addEventListener("click",myListener);
function myListener()
{
    alert(Math.random());
    //remove Listener from Event
    btn.removeEventListener("click",myListener);
}
//
//Tạo ra Listener ngồi nghe sự kiện eventxinchao
document.addEventListener("eventxinchao", function (e) {
    alert('Bắt được sự kiện eventxinchao, dữ liệu là: ' + e.dulieu);
});


//Mỗi khi hàm này được gọi document sẽ phát đi sự kiện eventxinchao
function guiEventXinchao() {
    var myevent = document.createEvent('Event');        // Tạo ra một đối tượng Event       
    myevent.initEvent('eventxinchao', true, true);      // Tạo ra một đối tượng Event
    myevent.dulieu = "Xin chào, tôi là XUANTHULAB";     // Tạo ra một đối tượng Event
    document.dispatchEvent(myevent);                    // Cho document phát đi sự kiện
}