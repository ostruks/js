result = "";
arr = [2, 3, 4, 5];
let prod = 1;
for(let numb of arr){
    prod *= numb;
}
result = prod;
document.getElementById('23').innerHTML = "<b>Результат: </b>";
document.getElementById('23').innerHTML += result;