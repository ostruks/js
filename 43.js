function getPowOfArraysValue(){
    result = "";
    let number = "";
    let arr = [];
    do{
        number = prompt("Введите размер массива", "20");
    }
    while(number == null || isNaN(number));

    for(let i = 0; i < number; i++){
        arr.push(selfRandom(1, 20));
    }
    for(let i = 0; i < arr.length; i++){
        result += ` ${arr[i]} - ${arr[i] ** 5}`;
    }
    document.getElementById('43').innerHTML = "<b>Результат: </b>";
    document.getElementById('43').innerHTML += result;
}

function selfRandom(min, max)
{
  return Math.floor(Math.random() * (max - min + 1), 2) + min;
}