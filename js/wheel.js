document.onwheel = function(event){
    console.log(event);
    if(event.deltaY > 0){
        document.getElementById('line').innerHTML = 'down';
    }else{
        document.getElementById('line').innerHTML = 'up'
    }
    var speed = event.deltaY;
    speed = Math.abs(speed);
    if(speed < 100){
        document.getElementById('speed').innerHTML = 'low';
    }else if(speed < 150){
        document.getElementById('speed').innerHTML = 'middle';
    }else if(speed < 250){
        document.getElementById('speed').innerHTML = 'high';
    }else{
        document.getElementById('speed').innerHTML = 'very high';
    }
}