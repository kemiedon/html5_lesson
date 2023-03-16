// 建立一個變數來表示畫布
var canvas = $('#canvas')[0];
console.log(canvas);
// 設置畫布的寬度和高度
canvas.width = 800;
canvas.height = 600;

// 獲取上下文
var ctx = canvas.getContext('2d');

// 畫筆的屬性
var lineWidth = 5;
var strokeStyle = 'red';

// 記錄繪製線條的最後一個位置
var lastX, lastY;

// 畫布是否正在繪製線條
var isDrawing = false;

// 繪製線條函數
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = strokeStyle;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}


// 監聽滑鼠事件
$('#canvas').mousedown(function (e) {
    // 當滑鼠按下時，開始繪製線條
    isDrawing = true;
    lastX = e.pageX - $("#canvas").offset().left;
    lastY = e.pageY - $("#canvas").offset().top;
});

$('#canvas').mousemove(function (e) {
    if (!isDrawing) return;

    // 繪製線條
    let mouseX = e.pageX - $("#canvas").offset().left;
    let mouseY = e.pageY - $("#canvas").offset().top;
    drawLine(lastX, lastY, mouseX, mouseY, lineWidth, strokeStyle);
    // 更新最後位置
    lastX = mouseX;
    lastY = mouseY;
    

});

$('#canvas').mouseup(function () {
    // 當滑鼠放開時，停止繪製線條
    isDrawing = false;
});

$('#canvas').mouseleave(function () {
    // 當滑鼠移出畫布時，停止繪製線條
    isDrawing = false;
});
// 顏色按鈕點擊事件
$('.color-button').click(function () {
    // 將當前按鈕設為 active，其他按鈕設為非 active
    $(this).addClass('active').siblings().removeClass('active');
    // 獲取選擇的顏色
    strokeStyle = $(this).css('background-color');
});
// 筆刷大小按鈕點擊事件
$('.size-button').click(function () {
    // 將當前按鈕設為 active，其他按鈕設為非 active
    $(this).addClass('active').siblings().removeClass('active');
    // 獲取選擇的筆刷大小
    lineWidth = $(this).data('size');
});

// 監聽清除畫布按鈕的點擊事件
$('#clear').click(function () {
    // 清空畫布
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
