<?php
if(isset($_REQUEST['s']) && !empty($_REQUEST['s'])) {
  header('Access-Control-Allow-Origin: *');
  $string = $_REQUEST['s'];
  $map = array(
  "a" => "A",
  "b" => "B",
  "c" => "c",
  "d" => "d",
  "e" => "eE",
  "f" => "f",
  "g" => "G",
  "h" => "H",
  "i" => "ii",
  "j" => "j",
  "k" => "Q",
  "l" => "l",
  "m" => "m",
  "n" => "ñ",
  "ñ" => "Ñ",
  "o" => "0o",
  "p" => "p",
  "q" => "k",
  "r" => "r",
  "s" => "zh",
  "t" => "T",
  "u" => "u",
  "v" => "v",
  "w" => "w",
  "x" => "x",
  "y" => "y",
  "z" => "zh"
  );
  $terminaciones = array("**~ xD", "*+..", "***", "-- <3", ",.-~ :D");
  $rand = array_rand($terminaciones, 1);
  $metro = strtr($string, $map);
  $flog = "** ".$metro." ".$terminaciones[$rand];

  if(isset($_REQUEST['format'])){
    if($_REQUEST['format'] == 'json'){
      header('Content-type: application/json; charset=utf-8');
      echo json_encode(array(
        'message' => $flog
      ));
    }
  }else{
    header('Content-type: text/plain; charset=utf-8');
    echo $flog;
  }
}
