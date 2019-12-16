result = "";
arr = [-2, 5, -9, 15, 0, 4, -15];
let sum = 0;
for(let numb of arr){
    if(numb > 0){
        sum += numb;
    }
}
result = sum;
document.getElementById('28').innerHTML = "<b>Результат: </b>";
document.getElementById('28').innerHTML += result;