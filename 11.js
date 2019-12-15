function getLetter(){
    result = "";
    let str = "abcde";
    for(let letter of str){
        if(letter === 'a' || letter === 'b' || letter === 'e'){
            console.log(`${ letter } - Я знаю эту букву!`);
            result += `<br>${ letter } - Я знаю эту букву!`;
        }
    }
    document.getElementById('11').innerHTML = "<b>Результат: </b>";
    document.getElementById('11').innerHTML += result;
}