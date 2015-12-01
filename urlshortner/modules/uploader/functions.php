<?php

function generateUrl($num) {
    
  $chars='W0NOPQRST1BCDE89abcdefg2345hijkpqrstuvwxyzAFGHlmnoIJKLMUV67XYZ';
  $count = strlen($chars);
  $r = $num  % $count ;
  $res = $chars[$r];
  $q = floor($num/$count);
  while ($q) {
    $r = $q % $count;
    $q =floor($q/$count);
    $res = $chars[$r].$res;
  }
  return $res;
 
}
