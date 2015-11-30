<?php

class core {

    private $base;
    private $DBUSER;
    private $DBNAME;
    private $DBPASS;
    private $DBSERVER;

    function __construct() {
        $this->base = __DIR__ . "/";
    }

    function addPreRequest() {
        $this->loadConfigFile();
        $this->loadDAL();
    }

    function Main() {
        $this->addPreRequest();
        $this->route();
    }

    function loadTemplate($tpl_name, $modules) {

        include_once $this->base . 'rain.tpl.class.php';
        include_once $this->base . 'tpl.php';
    }

    function loadDAL() {
        global $DBConnection;
        include_once $this->base . 'dal.php';
        $DBConnection = new MysqliDb($this->DBSERVER, $this->DBUSER, $this->DBPASS, $this->DBNAME);
    }

    function route() {
        $url = @$_GET['url'];
        if (is_null($url)) {
            $modules = $this->loadModule(1);
            $this->loadTemplate("uploadTPL", $modules);
        } else {
            $this->loadModule(2);
            $this->loadTemplate("redirectTPL");
        }
    }

    function loadModule($url_type) {
        $modulesBase = $this->base . "../modules/";
        switch ($url_type) {
            case 1:
                $modules['uploader'] = $this->runModule($modulesBase . 'uploader/index.php');
                
                break;
            case 2:
                break;
            default:
                break;
        }
        return $modules;
    }

    function loadConfigFile() {
        include_once $this->base . "../config.php";
        $this->DBNAME = $DBNAME;
        $this->DBPASS = $DBPASS;
        $this->DBSERVER = $DBSERVER;
        $this->DBUSER = $DBUSER;
    }

    function runModule($file) {
        ob_start();
        require($file);
        return ob_get_clean();
    }

}
