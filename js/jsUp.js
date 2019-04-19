window.onload = function(){
    
    var srolled;
    var timer;
    
    document.getElementById('top').onclick = function(){
        srolled = window.pageYOffset;
//        window.scrollTo(0,0);
        scrollToTop();
    }
    
    function scrollToTop(){
        if(srolled > 0){
            window.scrollTo(0,srolled);
            srolled = srolled - 100; // 100 - speed scroll
            timer = setTimeout(scrollToTop, 100);
        }
        else{
            clearTimeout(timer);
            window.scrollTo(0,0);
        }
    }
}