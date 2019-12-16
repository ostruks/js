function getSumOfArray(){
    let arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
    let sum = 0;
    for(let numb in arr){
        sum += Number(numb);
    }
    alert(sum);
}