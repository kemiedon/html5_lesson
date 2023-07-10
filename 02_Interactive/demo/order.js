$(function () {
            // 載入food,pasta,drink資料
            $.ajax({
                url: "../json/food.json",
                type: "GET",
                dataType: "json",
                success: function (data) {
                    console.log(data);
                    //將資料加入下拉選單
                    $.each(data, function (index, value) {
                        $("#food").append($(`<option value='${value.price}'>${value.name}</option>`));
                    });
                },
                error: function (xhr, status, error) {
                    console.log("Error: " + error);
                }
            });
            $.ajax({
                url: "../json/pasta.json",
                type: "GET",
                dataType: "json",
                success: function (data) {
                    console.log(data);
                    //將資料加入下拉選單
                    $.each(data, function (index, value) {
                        $("#pasta").append($(`<option value='${value.price}'>${value.name}</option>`));
                    });
                },
                error: function (xhr, status, error) {
                    console.log("Error: " + error);
                }
            });
            $.ajax({
                url: "../json/drink.json",
                type: "GET",
                dataType: "json",
                success: function (data) {
                    console.log(data);

                    $.each(data, function (index, value) {
                        $("#drink").append($(`<option value='${value.price}'>${value.name}</option>`));
                    });
                },
                error: function (xhr, status, error) {
                    console.log("Error: " + error);
                }
            });
            //按選將餐點與價格顯示在清單上
            var total = 0;
            $('select').change(function () {
                var selectedValue = $(this).val();
                var selectedText = $(this).find('option:selected').text();
                var quantity = $(this).parent().find('.quantity').val();
                console.log(quantity);
                $('#menu').append('<li>' + selectedText + ' x ' + quantity +
                            ' - $' + (selectedValue * quantity) + '</li>');
                total = total + (selectedValue * quantity);
                $('.total-price').html(total + "元");
            });
            $('.reorder-button').click(function(){
                $('#menu').html('');
                $('.total-price').html("0元");
            });
        });