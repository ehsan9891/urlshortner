<!DOCTYPE html>
<html>
        <?php
        ini_set('display_errors', 1);
        ini_set('display_startup_errors', 1);
        error_reporting(E_ALL);
        // put your code here
        include_once 'libs/core.php';
        $core = new core();
        $core->Main();
        ?>
</html>
