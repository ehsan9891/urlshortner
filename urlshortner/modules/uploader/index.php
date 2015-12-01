<?php  
?>

<div id="squeezer">
    <h3>Squeeze</h3>
    <form name="squeeze" action="" method="post" onsubmit="return validate('squeeze');">
        <div>
            <div class="row">
                <div class="lable">URL:</div>
                <div><input type="text" name="squeeze[url]" placeholder="Enter Your URL..." size="35"/></div>
            </div>
            <div class="row">
                <div class="lable">Email:</div>
                <div><input type="text" name="squeeze[email]" placeholder="Enter Email.." value="" autocomplete="off" size="35"/></div>
            </div>
            <div class="row">
                <div class="lable">New Pass:</div>
                <div><input type="password" name="squeeze[pass]" placeholder="••••••••••" value="" autocomplete="off" size="35"/></div>
            </div>
            <div class="row">
                <div class="lable">Retry Pass:</div>
                <div><input type="password" name="squeeze[rpass]" placeholder="••••••••••" value="" autocomplete="off" size="35"/></div>
            </div>
            <div class="row">
                <div></div>
                <div><input type="submit" value="Squeeze" name="squeeze[submit]" /></div>
            </div>
        </div>
    </form>
    <ul class="error">
        
    </ul>
</div>
<hr/>
<div id="edit-squeezer">
    <h3>Edit</h3>
    <form name="edit-squeeze" action="" method="post" onsubmit="return validate('edit-squeeze');">
        <div>
            <div class="row">
                <div class="lable">New URL:</div>
                <div><input type="text" name="edit-squeeze[url]" placeholder="Enter Your URL..." size="35"/></div>
            </div>
            <div class="row">
                <div class="lable">Squeezed URL:</div>
                <div><input type="text" name="edit-squeeze[squeeezeurl]" placeholder="Enter Your URL..." size="35"/></div>
            </div>
            <div class="row">
                <div class="lable">Email:</div>
                <div><input type="email" name="edit-squeeze[email]" placeholder="Enter Email.." value="" autocomplete="off" size="35"/></div>
            </div>
            <div class="row">
                <div class="lable">Pass:</div>
                <div><input type="password" name="edit-squeeze[pass]" placeholder="••••••••••" value="" autocomplete="off" size="35"/></div>
            </div>
            <div class="row">                
                <div><input type="submit" value="Edit Squeeze" name="edit-squeeze[submit]" /></div>
            </div>
        </div>
    </form>
    <ul class="error">        
    </ul>
</div>

<script src="tpl/uploadTPL/main.js">
  
</script>