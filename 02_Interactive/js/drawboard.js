$(function () {
    // 宣告變數
    var canvas = $('#canvas')[0];
    var ctx = canvas.getContext('2d');
    var isDrawing = false;
    var lastX, lastY;
    var color = '#000';



    // 設定canvas寬度與高度
    canvas.width = $('#canvas').outerWidth();
    canvas.height = $('#canvas').outerHeight();

    // 畫筆事件
    $('#canvas').mousedown(function (e) {
        isDrawing = true;
        lastX = e.pageX - this.offsetLeft;
        lastY = e.pageY - this.offsetTop;
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

    $('#canvas').mousemove(function (e) {
        if (isDrawing){
            drawLine(lastX, lastY, e.offsetX, e.offsetY);
            lastX = e.offsetX;
            lastY = e.offsetY;
        }
        
    });
    // 畫線函數
    function drawLine(x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 10;
        ctx.lineCap = 'round';
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
    }

});