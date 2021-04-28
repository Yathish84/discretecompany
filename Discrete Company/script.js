const cb = document.getElementById('check').checked;
console.log(cb);



function clickk(valuee){
    console.log("click")
    var x=document.getElementById('check').checked;
    console.log(x);
    if(x==true){
        var v = document.querySelector("#check").value;
       alert(valuee + "  enabled");
    }
}
function cancel(){
    location.reload();
}
  