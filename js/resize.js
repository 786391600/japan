function resize(pm,type){
    var type=type||'x';
    var cW=document.documentElement.clientWidth||document.body.clientWidth;
    var cH=document.documentElement.clientHeight||document.body.clientHeight;

    if(type=='x'){
        var scale=cW/pm*100+'px';
    }else{
        var scale=cH/pm*100+'px';
    }
    document.getElementsByTagName('html')[0].style.fontSize=scale;
}