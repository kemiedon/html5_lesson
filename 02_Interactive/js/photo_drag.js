$(document).ready(function () {
    // 獲取照片區域元素
    var photoArea = $("#photo-area");

    // 綁定照片區域的拖放事件
    photoArea.on("dragover", function (e) {
        e.preventDefault();
    });

    photoArea.on("drop", function (e) {
        e.preventDefault();
        $('#drop-area').hide();
        // 獲取拖放的圖片檔案
        var files = e.originalEvent.dataTransfer.files;
        var file = files[0];
        // 設定photo的圖片大小

        // 判斷是否為圖片檔案
        if (file.type.match(/image.*/)) {
            // 讀取圖片檔案
            var reader = new FileReader();
            reader.onload = function (e) {
                // 創建圖片元素，設定拖放效果的初始樣式
                var photo = $("<div>").addClass("photo");

                var img = $("<img>").attr("src", e.target.result);
                photo.append(img);

                // 將圖片元素加入照片區域
                photoArea.append(photo);

                // 設定圖片元素的拖放效果
                photo.draggable({
                    containment: "#photo-area",
                    stack: ".photo",
                    cursor: "move"
                }).resizable({
                    handles: "nw, ne, se, sw",
                    minWidth: 100,
                    minHeight: 100,
                    aspectRatio: true,
                    resize: function (event, ui) {
                        // 判斷圖片是否超出photoArea範圍，若超出則調整大小至最大
                        var photoAreaWidth = photoArea.width();
                        var photoAreaHeight = photoArea.height();
                        var photoWidth = ui.size.width;
                        var photoHeight = ui.size.height;
                        if (photoWidth > photoAreaWidth) {
                            ui.size.width = photoAreaWidth;
                            ui.size.height = photoAreaWidth / ui.originalSize
                                .width * ui.originalSize.height;
                        }
                        if (photoHeight > photoAreaHeight) {
                            ui.size.width = photoAreaHeight / ui.originalSize
                                .height * ui.originalSize.width;
                            ui.size.height = photoAreaHeight;
                        }
                    }
                });

                // 設定拖放元素的z-index，使其在拖放時總是處於最上層
                photo.on("mousedown", function () {
                    $(this).css("z-index", 9999);
                });
                // 當圖片載入完成後，獲取圖片寬高並設定到photo上
                img.on("load", function () {
                    var width = img.width();
                    var height = img.height();
                    photo.css({
                        "width": width + "px",
                        "height": height + "px"
                    });
                });
            };

            reader.readAsDataURL(file);
        }
    });
});