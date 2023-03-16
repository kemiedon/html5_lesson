$(document).ready(function () {
    // 獲取 canvas 元素和繪圖上下文對象
    const canvas = $("#canvas")[0];
    const ctx = canvas.getContext("2d");

    // 加載背景圖像
    // const bgImage = new Image();
    // bgImage.src = "background.jpg";

    // 添加文字
    function addText(text1) {
        ctx.font = "48px 'Noto Sans TC'";
        ctx.textAlign = "center";
        ctx.fillStyle = "black";

        ctx.fillText(text1, canvas.width / 2, canvas.height - 80);
    }

    // 將生成的梗圖下載到本地
    function downloadMeme() {
        const dataURL = canvas.toDataURL("image/png");
        $("#btnDownload").attr("href", dataURL);
    }

    // 生成梗圖
    function generateMeme() {
        // // 清空畫布
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        // 繪製背景圖像
        addText($("#input1").val());
    }

    // 綁定生成梗圖事件處理函數
    $("#btnGenerate").click(generateMeme);

    // 上傳圖片並在預覽區域顯示
    $("#file-input").change(function () {
        const file = this.files[0];
        const reader = new FileReader();
        reader.onload = function (event) {
            const img = new Image();
            img.onload = function () {
                let ratio = img.width / img.height;
                let canvasHeight = canvas.width / ratio;
                let startY = (canvas.height - canvasHeight) / 2;
                ctx.drawImage(img, 0, startY, canvas.width, canvasHeight);
                // 在預覽區域顯示上傳的圖片
              
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    });
});