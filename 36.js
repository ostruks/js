result = "";
str = "я учу javascript!";
result += `<br>17) Кол-во символов в строке '${str}' = ${str.length}`;
result += `<br>18) 1 - ${str.substr(0, 1)} ${str.substr(5, str.length - 1)}`
+ `, 2 - ${str.substring(0, 1)} ${str.substring(5, str.length - 1)}`
+ `, 3 - ${str.split(' ').slice(0, 1)} ${str.split(' ').slice(2, 3)}`;
result += `<br>19) Позиция 'учу' в строке '${str}' = ${str.indexOf("учу")}`;
str = "я учу javascript!".replace(/ /g, "-");
result += `<br>20) '${str.replace(/ /g, "-").replace(/-/g, "!")}'`;
str = "я учу javascript!";
result += `<br>21) '${str.split(" ")}'`;
arr = [];
str.split(" ").forEach(element => {
    arr.push(element.split(''));
});
arr = arr.flat();
result += `<br>22) '${arr}'`;
document.getElementById('36').innerHTML = "<b>Результат: </b>";
document.getElementById('36').innerHTML += result;