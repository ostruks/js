result = "";
arr = [10, 20, 30, 50, 235, 3000];
for(let numb of arr){
    if(String(numb).startsWith("1") || String(numb).startsWith("2") || String(numb).startsWith("5")){
        result += " " + numb;
    }
}
document.getElementById('30').innerHTML = "<b>Результат: </b>";
document.getElementById('30').innerHTML += result;