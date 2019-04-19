//document.onkeypress = function(event){
//    console.log(event);
//    if(event.shiftKey){
//        console.log("shift")
//    }
//}

//document.getElementById('test').onkeypress = function(event){
//    if(event.keyCode < 48 || event.keyCode > 57){
//        return false;
//    }
//}

var inp = '';
document.getElementById('test').onkeypress = function(event){
    inp = inp + event.key;
    console.log(inp);
//    a-z 97-122  A-Z 65-90
//    console.log(String.fromCharCode();
    this.value += String.fromCharCode(getRandomArbitrary(65,122));
    return false;
}

function getRandomArbitrary(min,max){
    return Math.floor(Math.random()*(max - min)) + min;
}