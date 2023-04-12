<?php
// 在 post_success.php 中
$fruit_id = $_POST['fruit_id'];

// 模擬從 JSON 或資料庫中獲取的庫存和價格資訊
$fruits_data = [
    "1" => ["price" => "30", "stocks" => "100"],
    "2" => ["price" => "20", "stocks" => "200"],
    "3" => ["price" => "15", "stocks" => "300"],
    "4" => ["price" => "50", "stocks" => "50"],
    "5" => ["price" => "60", "stocks" => "40"]
];

// 從陣列中獲取選定水果的價格和庫存資料
$fruit = $fruits_data[$fruit_id];

// 將資料編碼為 JSON 並返回給前端
header('Content-Type: application/json');
echo json_encode($fruit);
?>
