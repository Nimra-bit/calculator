function getNumber(number){
    //console.log(number);
    var result = document.getElementById("result");
     result.value += number;
}
function clearshow(x)
{
    var result = document.getElementById("result");
    result.value =""
}
 

function calculation() {
    var result = document.getElementById("result");
     result.value = eval(result.value);
}