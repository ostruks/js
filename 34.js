let date = new Date('2025-12-31');
document.getElementById('34').innerHTML = "<b>Результат: </b>";
document.getElementById('34').innerHTML += `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;