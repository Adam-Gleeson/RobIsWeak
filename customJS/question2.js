function validate(){

var cardNumber = document.getElementById("cardNumber").value;
var cvv = document.getElementById("cvv").value;

if(cardNumber == "1234567812345678" && cvv == "123")
{
    //alert("valid Card")
    var element = document.getElementById("loginsuccess");
    element.classList.remove("d-none");
    
}
else
{
//alert("Invalid Card")
var element = document.getElementById("loginerror");
    element.classList.remove("d-none");
}
event.preventDefault();
}