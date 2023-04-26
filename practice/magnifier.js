$(function(){
    var img = $('#img-container').find('img');
    $('#img-container').mouseenter(function(){
        $('#magnifier').show();
    })
    $('#img-container').mouseleave(function(){
        $('#magnifier').hide();
    })
    var magnifierWidth = $('#magnifier').width();
    var magnifierHeight = $('#magnifier').height();
    $('#img-container').mousemove(function(e){
        var mouseX = e.pageX - $("#img-container").offset().left;
        var mouseY = e.pageY - $("#img-container").offset().top;
        var magnifierX = mouseX - magnifierWidth/2;
        var magnifierY = mouseY - magnifierHeight/2;
        // 設定放大鏡背景圖
        var bgPosX = -1 * (magnifierX * 2) - (magnifierWidth / 2);
        var bgPosY = -1 * (magnifierY * 2) - (magnifierHeight / 2);
        // let bgWidth = img.width() * 2;
        // let bgHeight = img.height() * 2;
        
        $('#magnifier').css({
            "left": magnifierX + "px",
            "top": magnifierY + "px",
            "background-image": "url('" + img.attr("src") + "')",
            "background-position": bgPosX + "px "+ bgPosY + "px"
        })
    })
})