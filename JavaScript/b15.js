function addChildNode()
{
    //declare the element p
    var node_p = document.createElement("p");
    //declare the element text
    var node_text = document.createTextNode("Some New Text");
    //assign node_text to node_p
    node_p.appendChild(node_text);
    //change some attribute of node p
    node_p.style.backgroundColor = "green";
    node_p.style.padding = "10px";
    node_p.style.color = "white";

    //declare the element a
    var node_a = document.createElement("a");
    //change some attribute of node_a
    node_a.href = "https://xuanthulab.net";
    node_a.innerText = "xuanthulab.net";

    var getdiv = document.getElementById("txt1");
    var getp1 = document.getElementById("p1");
    getdiv.appendChild(node_a);
    //assign node p to node div
    getdiv.appendChild(node_p);
    //Để loại bỏ phần tử HTML, bạn chọn phần tử cha rồi sử dụng phương thức removeChild(node)
    getdiv.removeChild(getp1);
    //Bạn có thể sử dụng thủ thuật lấy thuộc tính parentNode 
    //để bỏ qua bước tìm phần tử cha trong DOM: child.parentNode.removeChild(child);
    var getp2 = document.getElementById("p2");
    getp2.parentNode.removeChild(getp2);
    //Để thay thể một phần tử bằng một phần tử khác dùng cú pháp element.replaceChild(newNode, oldNode)
    //. Trong đó element là nút cha
    var p3 = document.createElement("p3");
    var getp4 = document.getElementById("p4");
    p3.innerText = "This is a passage, just created!!!\n";
    getdiv.replaceChild(p3,getp4);
}

