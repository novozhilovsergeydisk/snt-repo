<?php
$file_get = $_SERVER["DOCUMENT_ROOT"] . "/modules/log/get.log";
$file_post = $_SERVER["DOCUMENT_ROOT"] . "/modules/log/post.log";
//date_default_timezone_set("UTC");
$request = [$_SERVER['REQUEST_METHOD'], $_SERVER['REQUEST_URI'], $_SERVER['PHP_SELF'], $_SERVER['REMOTE_ADDR'], $_SERVER['HTTP_USER_AGENT']];
list($REQUEST_METHOD) = $request;
//print_r($REMOTE_ADDR);
$delimeter = " ✧ ";
function parseList($data) {
    foreach ($data as $k=>$v) {
        print_r($k.'='.$v);
        echo '<br>';
    }
}
//parseList($_COOKIE);
function writeFile($file, $request, $delimeter) {

    $fw = fopen($file, "a");
    list($REQUEST_METHOD, $REQUEST_URI, $PHP_SELF, $REMOTE_ADDR, $HTTP_USER_AGENT) = $request;
//    dump("<strong>$REQUEST_METHOD</strong>");
    fwrite($fw, "\n" . $REQUEST_METHOD . $delimeter . var_export($REMOTE_ADDR . $REQUEST_URI . $delimeter
            . $HTTP_USER_AGENT . $delimeter . date("d.m.Y h:i:s"), true));
    fclose($fw);
}
if (($REQUEST_METHOD === 'GET')) {
    writeFile($file_get, $request, $delimeter);
}
if ($REQUEST_METHOD === 'POST') {
    writeFile($file_post, $request, $delimeter);
}
function dump_bold($data) {
    print_r("<strong>" . $data . "</strong>");
}
