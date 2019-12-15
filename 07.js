function getBirthday(){
    result = "";
    let username = "";
    do{
        username = prompt("How are you?", "Maxim");
    }
    while(username == null);
    result = `Happy birthday dear ${ username }`;
    document.getElementById('07').innerHTML = "<b>Результат: </b>";
    document.getElementById('07').innerHTML += result;
}