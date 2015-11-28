<?php

	raintpl::configure("base_url", null );
	raintpl::configure("tpl_dir", "tpl/".$tpl_name."/" );
	raintpl::configure("cache_dir", "tmp/" );
        
	//initialize a Rain TPL object
	$tpl = new RainTPL;
        $tpl->assign( "uploader", $modules['uploader'] );
	// you can draw the output
        // $tpl->draw( 'page' );
        // or the template output string by setting $return_string = true:
	$html = $tpl->draw( 'page', $return_string = true );

        // and then draw the output
        echo $html;
        
?>