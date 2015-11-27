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
    }
    function loadTemplate(){
        
    }
    function loadDAL(){
        global $DBConnection;
        include_once $this->base . 'dal.php';
        $DBConnection =  new MysqliDb ($this->DBSERVER, $this->DBUSER, $this->DBPASS, $this->DBNAME);
        
    }
    function loadConfigFile(){
        include_once $this->base."../config.php";
        $this->DBNAME = $DBNAME;
        $this->DBPASS = $DBPASS;
        $this->DBSERVER = $DBSERVER;
        $this->DBUSER = $DBUSER;
    }
}
