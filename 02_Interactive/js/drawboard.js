$(function () {
    // 宣告變數
    var canvas = $('#canvas')[0];
    var ctx = canvas.getContext('2d');
    var isDrawing = false;
    var lastX, lastY;
    var color = '#000';

    // 獲取上下文
    var ctx = canvas.getContext('2d');

    // 設定canvas寬度與高度
    canvas.width = $('#canvas').outerWidth();
    canvas.height = $('#canvas').outerHeight();

    // 畫筆事件
    $('#canvas').mousedown(function (e) {
        isDrawing = true;
        lastX = e.pageX - this.offsetLeft;
        lastY = e.pageY - this.offsetTop;
        console.log(lastX);
    });
    // 清除事件
    $('#clear-button').click(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    $('#canvas').mouseup(function () {
        isDrawing = false;

    });


    // 顏色選擇事件
    $('.color-button').click(function () {
        if ($(this).hasClass('active')) {
            return;
        }
        $('.color-button.active').removeClass('active').css('border', 'none');
        $(this).addClass('active').css('border', '2px solid #fff');
        color = $(this).css('background-color');
    });


    // 監聽滑鼠事件
    $('#canvas').mousedown(function (e) {
        // 當滑鼠按下時，開始繪製線條
        isDrawing = true;
        lastX = e.pageX - $("#canvas").offset().left;
        lastY = e.pageY - $("#canvas").offset().top;
    });



});