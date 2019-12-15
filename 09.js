function cupsOfMonthWithTablespoons(){
    let date = new Date();
    let cupOfCoffeeByDay = 4; //кол-во чашек кофе в день
    let tablespoonsOfsugarByCup = 3; //кол-во ложек сахара на чашку
    let coffeeWithTablespoonsByDay  = cupOfCoffeeByDay * tablespoonsOfsugarByCup; //кол-во ложек сахара в день
    let coffeeWithTablespoonsByMonth = daysInMonth(date.getMonth() + 1, date.getFullYear()) * coffeeWithTablespoonsByDay; //кол-во ложек сахара в месяц
    let cupOfCoffeeByMonth = coffeeWithTablespoonsByMonth / tablespoonsOfsugarByCup; //кол-во чашек кофе в месяц

    result = "";
    result += `Кол-во выпиваемых чашек кофе в месяц ${ cupOfCoffeeByMonth } с общим кол-вом ложек сахара ${ coffeeWithTablespoonsByMonth }`;
    document.getElementById('09').innerHTML = "<b>Результат: </b>";
    document.getElementById('09').innerHTML += result;
}

function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}