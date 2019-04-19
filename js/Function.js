//one();

//function one(){
////    alert("hello");
//    return 9;
//}
//
//console.log(5 + one());

//function summa(a,b){
//    alert (a+b);
//}
//
////console.log(summa(6,5));
//
//document.getElementById('b1').onclick = function(){
//    summa(15,15);
//}


var block = document.getElementById('one');

//block.onclick = function (){
//    this.style.background = 'green';
//    this.onclick = null;
//}
//
//block.ondblclick = function(){
//    this.style.background = 'red';
//}

block.oncontextmenu = function(){
    this.style.background = 'black';
    return false;
}


//block.onmouseenter = function(){
//    console.log(12);
//    
//}
//
//block.onmouseleave = function(){
//    this.style.background = 'red';
//}
var a = 0;
// block.onmousemove = function(){
//     a++;
//     this.style.width = 100 + a +'px';
// }
// 
 block.onmouseup = function(event){
     this.style.background = 'cyan'
     console.log('which' + event.which);
 }