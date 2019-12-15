function getName(){
    result = "";
    let username = "";
    do{
        username = prompt("Как Вас зовут?", "Сергей");
    }
    while(username == null);
    result = `Ваше имя ${ username }`;
    alert(result);
}