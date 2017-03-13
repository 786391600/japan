
function skip(){
    var cs=location.href.split('?')[1].split('=')[1];
        if(cs=="one"){
            if($(window).scrollTop()>=$('.header').get(0).offsetHeight){
                var sC=($('.con-continer ul').eq(0).offset().top-$('.header').height()-20);
                $('body,html').animate({scrollTop:sC},300);
            }else{
                var sC=($('.con-continer ul').eq(0).offset().top-150);
                $('body,html').animate({scrollTop:sC},300);
            }
        }else if(cs=='two'){
            var sC=($('.con-continer ul').eq(8).offset().top);
            $('body,html').animate({scrollTop:sC},300);
        }else if(cs=='three'){
            var sC=($('.con-continer ul').eq(13).offset().top+150);
            $('body,html').animate({scrollTop:sC},300);
        }
   $('.lj').eq(0).click(function(){
       if($(window).scrollTop()>=$('.header').get(0).offsetHeight){
           var sC=($('.con-continer ul').eq(0).offset().top-$('.header').height()-20);
           $('body,html').animate({scrollTop:sC},300);
       }else{
           var sC=($('.con-continer ul').eq(0).offset().top-150);
           $('body,html').animate({scrollTop:sC},300);
       }
    })
    $('.lj').eq(1).click(function(){
        if($(window).scrollTop()>=$('.header').get(0).offsetHeight){
            var sC=($('.con-continer ul').eq(7).offset().top-$('.header').height()-20);
            $('body,html').animate({scrollTop:sC},300);
        }else{
            var sC=($('.con-continer ul').eq(7).offset().top-150);
            $('body,html').animate({scrollTop:sC},300);
        }
    })
    $('.lj').eq(2).click(function(){
        if($(window).scrollTop()>=$('.header').get(0).offsetHeight){
            var sC=($('.con-continer ul').eq(13).offset().top-$('.header').height()-20);
            $('body,html').animate({scrollTop:sC},300);
        }else{
            var sC=($('.con-continer ul').eq(13).offset().top-150);
            $('body,html').animate({scrollTop:sC},300);
        }
    })
}