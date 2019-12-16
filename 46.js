function getInfoFromUser(){
    let phone = {
        brand : "",
        model : "",
        resolution : "",
        color : ""
    };
    phone.brand = prompt("Введите бренд телефона", "Nokia");
    phone.model = prompt("Введите модель телефона", "3310");
    phone.resolution = prompt("Введите разрешение экрана телефона", "320 x 240");
    phone.color = prompt("Введите цвет телефона", "Black");
    document.getElementById('46').innerHTML = "<b>Результат: </b>";
    document.getElementById('46').innerHTML += `Телефон: ${phone.brand}, ${phone.model}, ${phone.resolution}, ${phone.color}`;
}