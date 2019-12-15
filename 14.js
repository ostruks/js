function getVar(){
    let num = "";
    do{
        num = prompt("Введите переменную", "3");
    }
    while(num == null || isNaN(num));
    alert(num);
}
