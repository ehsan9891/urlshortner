<?php
class core{
    private $base;
    private $DBUSER;
    private $DBNAME;
    private $DBPASS;
    private $DBSERVER;
    function __construct() {
        $this->base = __DIR__ . "/";  
    }
    function addPreRequest(){
        $this->loadConfigFile();
        $this->loadDAL();
        
    }
    function Main(){
        $this->addPreRequest();
        $this->route();
    }
    function loadTemplate($tpl_name){
        include_once $this->base.'rain.tpl.class.php';
        include_once $this->base . 'tpl.php';
    }
    function loadDAL(){
        global $DBConnection;
        include_once $this->base . 'dal.php';
        $DBConnection =  new MysqliDb ($this->DBSERVER, $this->DBUSER, $this->DBPASS, $this->DBNAME);
        
    }
    function route(){
        $url = @$_GET['url'];
        if(is_null($url)){
            $this->loadTemplate("uploadTPL");
        }else{
            echo "this should be redirected";
        }
    }
    function loadConfigFile(){
        include_once $this->base."../config.php";
        $this->DBNAME = $DBNAME;
        $this->DBPASS = $DBPASS;
        $this->DBSERVER = $DBSERVER;
        $this->DBUSER = $DBUSER;
    }
}
