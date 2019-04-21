window.onload = function(){
    for(var i=0;i<9;i++){
        document.getElementById('game').innerHTML+='<div class="block"></div>';
    }
    
    var hod = 0;
    
    document.getElementById('game').onclick = function(event){
        console.log(event);
        if(event.target.className == 'block'){
            if(hod % 2 == 0){
                event.target.innerHTML = 'X';
            }else{
                event.target.innerHTML = '0';
            }
            hod++;
            checkWinner();
        }
    }
    
    function checkWinner(){
        var allBlock = document.getElementsByClassName('block');
        
        if(allBlock[0].innerHTML == 'X' && allBlock[1].innerHTML == 'X' && allBlock[2].innerHTML == 'X') alert('Winner X');
        if(allBlock[3].innerHTML == 'X' && allBlock[4].innerHTML == 'X' && allBlock[5].innerHTML == 'X') alert('Winner X');
        if(allBlock[6].innerHTML == 'X' && allBlock[7].innerHTML == 'X' && allBlock[8].innerHTML == 'X') alert('Winner X');
        if(allBlock[0].innerHTML == 'X' && allBlock[3].innerHTML == 'X' && allBlock[6].innerHTML == 'X') alert('Winner X');
        if(allBlock[1].innerHTML == 'X' && allBlock[4].innerHTML == 'X' && allBlock[7].innerHTML == 'X') alert('Winner X');
        if(allBlock[2].innerHTML == 'X' && allBlock[5].innerHTML == 'X' && allBlock[8].innerHTML == 'X') alert('Winner X');
        if(allBlock[0].innerHTML == 'X' && allBlock[4].innerHTML == 'X' && allBlock[8].innerHTML == 'X') alert('Winner X');
        if(allBlock[2].innerHTML == 'X' && allBlock[4].innerHTML == 'X' && allBlock[6].innerHTML == 'X') alert('Winner X');
        // Нолики
        
        if(allBlock[0].innerHTML == '0' && allBlock[1].innerHTML == '0' && allBlock[2].innerHTML == '0') alert('Winner 0');
        if(allBlock[3].innerHTML == '0' && allBlock[4].innerHTML == '0' && allBlock[5].innerHTML == '0') alert('Winner 0');
        if(allBlock[6].innerHTML == '0' && allBlock[7].innerHTML == '0' && allBlock[8].innerHTML == '0') alert('Winner 0');
        if(allBlock[0].innerHTML == '0' && allBlock[3].innerHTML == '0' && allBlock[6].innerHTML == '0') alert('Winner 0');
        if(allBlock[1].innerHTML == '0' && allBlock[4].innerHTML == '0' && allBlock[7].innerHTML == '0') alert('Winner 0');
        if(allBlock[2].innerHTML == '0' && allBlock[5].innerHTML == '0' && allBlock[8].innerHTML == '0') alert('Winner 0');
        if(allBlock[0].innerHTML == '0' && allBlock[4].innerHTML == '0' && allBlock[8].innerHTML == '0') alert('Winner 0');
        if(allBlock[2].innerHTML == '0' && allBlock[4].innerHTML == '0' && allBlock[6].innerHTML == '0') alert('Winner 0');
        
        
    }
}