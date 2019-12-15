function getMin(){
    result = "";
    let a = document.getElementById('a').value;
    let b = document.getElementById('b').value;
    let c = document.getElementById('c').value;
    if(a < b){
        if(a < c){
            result = "Минимальное значение у \"a\" = " + a;
        }
        else if(c < a){
            result = "Минимальное значение у \"c\" = " + c;
        }
    }
    else if(b < c){
        if(a < b){
            result = "Минимальное значение у \"a\" = " + a;
        }
        else if(b < a){
            result = "Минимальное значение у \"b\" = " + b;
        }
    }
    else if(c < a){
        if(b < c){
            result = "Минимальное значение у \"b\" = " + b;
        }
        else if(c < b){
            result = "Минимальное значение у \"c\" = " + c;
        }
    }
    document.getElementById('02').innerHTML = "<b>Результат: </b>";
    document.getElementById('02').innerHTML += result;
}