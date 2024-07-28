var msg= prompt("enter ur weight")
var msg2=prompt("enter ur height")
//alert(inter);

function bmical (weight , height){
var inter = (weight/Math.pow(height,2))
if(inter<=18.2){
    return "your BMI is" +inter.toFixed(2) +", so you are underweight.";
}
else if(inter>18.2 && inter<=24.9){
    return "your BMI is"+inter.toFixed(2)+", so you have a normal weight.";
}
else if(inter>24.9){
    return "your BMI is"+inter.toFixed(2)+ ", so you are overweight.";
}
return inter;
}
var res =bmical(parseFloat(msg) ,parseFloat(msg2))
alert(res)
//document.write(res)