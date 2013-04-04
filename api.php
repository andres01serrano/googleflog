<?php
if(isset($_REQUEST['s']) && !empty($_REQUEST['s'])) {
  $string = $_GET['s'];
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
  echo utf8_decode($flog);
}
