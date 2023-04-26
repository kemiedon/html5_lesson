$(document).ready(function () {
    // 獲取圖片容器和圖片元素
    
    var img = $("#img-container").find("img");

    // 綁定滑鼠移入事件，顯示放大鏡
    $("#img-container").mouseenter(function () {
        $("#magnifier").show();
    });

    // 綁定滑鼠移出事件，隱藏放大鏡
    $("#img-container").mouseleave(function () {
        $("#magnifier").hide();
    });
    // 取得放大鏡寬高
    var magnifierWidth = $("#magnifier").width();
    var magnifierHeight = $("#magnifier").height();
        
    // 綁定滑鼠移動事件，移動放大鏡
    $("#img-container").mousemove(function (e) {
        // 計算滑鼠在圖片容器中的位置
        var mouseX = e.pageX - $("#img-container").offset().left;
        var mouseY = e.pageY - $("#img-container").offset().top;

        // 計算放大鏡的位置
        var magnifierX = mouseX - magnifierWidth / 2;
        var magnifierY = mouseY - magnifierHeight / 2;
        
        // 計算放大鏡背景的位置
        var bgPosX = -1 * (magnifierX * 2) - (magnifierWidth / 2);
        var bgPosY = -1 * (magnifierY * 2) - (magnifierHeight / 2);

        // 調整放大鏡背景圖的大小
        var bgWidth = img.width() * 2;
        var bgHeight = img.height() * 2;
        console.log('bg-w',bgWidth);
        console.log('bg-h',bgHeight);
        // 移動放大鏡
        $("#magnifier").css({
            "left": magnifierX + "px",
            "top": magnifierY + "px",
            "background-image": "url('" + img.attr("src") + "')",
            "background-position": bgPosX + "px " + bgPosY + "px"

        });
    });
});