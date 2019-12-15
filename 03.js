function myClick(){
    result = "";
    let age = document.getElementById('age').value;
    document.getElementById('03').innerHTML = "<b>Результат: </b>";
    if(age >= 20 && age < 27){
        document.getElementById('03').innerHTML += `Возраст: ${ age }. Выслать повестку!`;
        console.warn(`Возраст: ${ age }. Выслать повестку!`);
    }
    else{
        document.getElementById('03').innerHTML += `Возраст: ${ age }. Отставить повестку!`;
    }
}