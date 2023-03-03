$(function () {
    // 宣告變數
    var canvas = $('#canvas')[0];
    var ctx = canvas.getContext('2d');
    var undoStack = [];
    var redoStack = [];
    var isDrawing = false;
    var lastX, lastY;
    var color = '#000';

    // 設定初始顏色
    $('.color-button.active').css('border', '2px solid #fff');

    // 設定canvas寬度與高度
    canvas.width = $('#canvas').parent().width() - 40;
    canvas.height = $('#canvas').parent().height() - 120;

    // 畫筆事件
    $('#canvas').mousedown(function (e) {
        isDrawing = true;
        lastX = e.offsetX;
        lastY = e.offsetY;
    });

    $('#canvas').mousemove(function (e) {
        if (!isDrawing) return;
        drawLine(lastX, lastY, e.offsetX, e.offsetY);
        lastX = e.offsetX;
        lastY = e.offsetY;
    });

    $('#canvas').mouseup(function () {
        isDrawing = false;
        saveToUndoStack();
    });

    $('#canvas').mouseleave(function () {
        isDrawing = false;
        saveToUndoStack();
    });

    // 清除事件
    $('#clear-button').click(function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        undoStack = [];
        redoStack = [];
    });

    // 撤銷事件
    $('#undo-button').click(function () {
        if (undoStack.length === 0) return;
        var lastItem = undoStack.pop();
        redoStack.push(lastItem);
        restoreCanvas(lastItem);
    });

    // 恢復事件
    $('#redo-button').click(function () {
        if (redoStack.length === 0) return;
        var lastItem = redoStack.pop();
        undoStack.push(lastItem);
        restoreCanvas(lastItem);
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


    // 畫線函數
    function drawLine(x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.closePath();
    }

    // 將canvas畫面存入undo stack
    function saveToUndoStack() {
        var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        undoStack.push(imageData);
        redoStack = [];
    }

    // 還原canvas畫面
    function restoreCanvas(imageData) {
        ctx.putImageData(imageData, 0, 0);
    }
});