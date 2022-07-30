function validate()
{
    var num1 = document.getElementById("pass1");
    var num2 = document.getElementById("pass2");
    if(num1.value != "" && num2.value != "")
    {
        if(num1.value == num2.value)
        {
            return true;
        }
    }
    alert("Data is not allowed empty, not the same!!!");
    console.log("ok");
    return false;
}