<?php

require 'hash.php';

$hash = hashDirectory('./vendor');

echo $hash . "\n";
