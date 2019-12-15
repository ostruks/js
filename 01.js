let numbers = [ 254, 115, 78, 25, 91, 45, 37 ];
let result = "";
for(var number of numbers){
    if(number > 50){
        result += number + " ";
    }
}
document.getElementById('01').innerHTML += result;
console.log(result);