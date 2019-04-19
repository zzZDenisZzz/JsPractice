function f1(){
    var num1 = document.getElementById("in").value;
    alert(num1*num1);
}

var m = [];
var m1 = [99,55,'hello'];

console.log(m1);

function masOut(){
    var p = document.getElementById('out');
    var str = '';
    
    for(var i=0; i<m1.length; i++){
        str += i + ' ---- ' + m1[i]+'<br>';
    }
    p.innerHTML = str;
}

masOut();

function p1(){
    var i1 = document.getElementById('i1').value;
    
    m1.push(i1);
    
    masOut();
}

function p2(){
    m1.pop();
    masOut();
}