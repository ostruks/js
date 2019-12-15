function FizzBuzz(){
    result = "";
    for(let i = 1; i <= 50; i++){
        if(i % 3 === 0 && i % 5 === 0){
            result += " FizzBuzz";
        }
        else if(i % 3 === 0){
            result += " Fizz";
        }
        else if(i % 5 === 0){
            result += " Buzz";
        }
    }
    document.getElementById('08').innerHTML = "<b>Результат: </b>";
    document.getElementById('08').innerHTML += result;
}