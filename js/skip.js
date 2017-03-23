
function skip(){
    if(location.href.split('?')[1]){
        var cs=location.href.split('?')[1].split('=')[1];
        if(cs=="one"){
            if($(window).scrollTop()>=$('.header').get(0).offsetHeight){
                var sC=0;
                $('body,html').animate({scrollTop:sC},300);
            }else{
                var sC=0;
                $('body,html').animate({scrollTop:sC},300);
            }
        }else if(cs=='two'){
            scrollMove(7,150)
        }else if(cs=='three'){
            scrollMove(12,150);
        }else if(cs=='four'){
            if($(window).scrollTop()>=$('.header').get(0).offsetHeight){
                var sC=$('.con-one')[1].offsetTop;
                $('body,html').animate({scrollTop:1150},300);
            }else{
                    var sC=$('.con-one')[1].offsetTop;
                    $('body,html').animate({scrollTop:1150},300);
            }
        }
    }
   $('.lj').eq(0).click(function(){
       if($(window).scrollTop()>=$('.header').get(0).offsetHeight){
           var sC=0;
           $('body,html').animate({scrollTop:sC},300);
       }else{
           var sC=0;
           $('body,html').animate({scrollTop:sC},300);
       }
    })
    $('.lj').eq(1).click(function(){
        scrollMove(7,150);
    })
    $('.lj').eq(2).click(function(){
        scrollMove(12,150);
    })
    $('.lj').eq(3).click(function(){
        if($(window).scrollTop()>=$('.header').get(0).offsetHeight){
            var sC=0;
            $('body,html').animate({scrollTop:sC},300);
        }else{
            var sC=0;
            $('body,html').animate({scrollTop:sC},300);
        }
    })
    $('.lj').eq(4).click(function(){
        scrollMove(7,150);
    })
    $('.lj').eq(5).click(function(){
        scrollMove(12,150);
    })

    // $('.fnav').eq(0).find('li').eq(0).click(function(){
    //     if($(window).scrollTop()>=$('.header').get(0).offsetHeight){
    //         var sC=0;
    //         $('body,html').animate({scrollTop:sC},300);
    //     }else{
    //         var sC=0;
    //         $('body,html').animate({scrollTop:sC},300);
    //     }
    // })
    // $('.fnav').eq(0).find('li').eq(1).click(function(){
    //     scrollMove(7,150);
    // })
    // $('.fnav').eq(0).find('li').eq(2).click(function(){
    //     scrollMove(12,150);
    // })
    // scrollMovet()
    $('.tlj').eq(0).click(function(){
        $('body,html').animate({scrollTop:1150},300);
    })
}

function scrollMove(eq,zhi){
    if($(window).scrollTop()>=$('.header').get(0).offsetHeight){
        var sC=($('.con-continer ul').eq(eq).offset().top-$('.header').height()-20);
        $('body,html').animate({scrollTop:sC},300);
    }else{
        var sC=($('.con-continer ul').eq(eq).offset().top-zhi);
        $('body,html').animate({scrollTop:sC},300);
    }
}
function scrollMovet(){
    alert('abc')
}