<?php


$filename = "last_file.csv";
$csv= file_get_contents($filename);
$array = array_map("str_getcsv", explode("\n", $csv));
$json = json_encode($array);
//print_r($json);


 // $json = file_get_contents($filename);

 // $json_data = json_encode($json);

 header('Content-Type: application/json');
//     //print_r($res);
     echo $json;

?>