function workWithArray(){
    arr = ['AngularJS', 'jQuery'];
    arr.unshift('Backbone.js');
    arr.push('ReactJS');
    arr.push('Vue.js');
    arr.splice(2, 0, 'CommonJS');
    arr.splice(arr.indexOf('jQuery'), 1);
    alert("jQuery - это здесь лишнее");
    let dlyaLyudshix = [];
    for(let word in arr){
        if(word === 'Vue.js'){
            dlyaLyudshix.push(word);
        }
    }
    document.getElementById('44').innerHTML = "<b>Результат: </b>";
    document.getElementById('44').innerHTML += arr.join('+');
}