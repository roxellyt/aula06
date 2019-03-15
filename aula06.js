function ola(){
    alert("Oi");
}
function teste(){
    var btn1 = document.getElementById("btn1");
    btn1.setAttribute("onclick", "ola()");
    
}