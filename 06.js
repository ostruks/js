function getPow(){
    result = "";
    let pow = document.getElementById('pow').value;
    for(let i = 1; i <= pow; i++){
        if(i % 2 === 0){
            result += Math.pow(i, 2) + " ";
        }
    }
    document.getElementById('06').innerHTML = "<b>Результат: </b>";
    document.getElementById('06').innerHTML += result;
}