date = new Date('2025-12-31');
document.getElementById('37').innerHTML = "<b>Результат: </b>";
document.getElementById('37').innerHTML += `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;