result = "";
let length = 5;
for(let i = 0; i < length; i++){
    result += ".#";
    result += i === length - 1 ? "." : "";
}
document.getElementById('05').innerHTML = "<b>Результат: </b>";
document.getElementById('05').innerHTML += result;