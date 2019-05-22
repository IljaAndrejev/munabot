<?php
 session_start();
 if(!isset($_SESSION['login'])) {header("Location: config.php");}

    if(isset($_REQUEST['lunchadd'])){
        $stringData =$_POST["data"];
        $file = file_get_contents('botdb/lunch.json'); 
        $dataList = json_decode($file,TRUE);                       
        unset($file);
        unset($dataList);                               
        $dataList[] = array('lunch'=>$stringData);        
        file_put_contents('botdb/lunch.json',json_encode($dataList));  
        unset($dataList);  
    }  
    if(isset($_REQUEST['starteradd'])){
        $stringData =$_POST["data"];
        $file = file_get_contents('botdb/starter.json'); 
        $dataList = json_decode($file,TRUE);                       
        unset($file);                               
        $dataList[] = array('starter'=>$stringData);        
        file_put_contents('botdb/starter.json',json_encode($dataList));  
        unset($dataList);  
    }  
    if(isset($_REQUEST['soupadd'])){
        $stringData =$_POST["data"];
        $file = file_get_contents('botdb/soup.json'); 
        $dataList = json_decode($file,TRUE);                       
        unset($file);                               
        $dataList[] = array('soup'=>$stringData);        
        file_put_contents('botdb/soup.json',json_encode($dataList));  
        unset($dataList);  
    }
    if(isset($_REQUEST['maincourseadd'])){
        $stringData =$_POST["data"];
        $file = file_get_contents('botdb/maincourse.json'); 
        $dataList = json_decode($file,TRUE);                       
        unset($file);                               
        $dataList[] = array('maincourse'=>$stringData);        
        file_put_contents('botdb/maincourse.json',json_encode($dataList));  
        unset($dataList);  
    }
    if(isset($_REQUEST['dessertadd'])){
        $stringData =$_POST["data"];
        $file = file_get_contents('botdb/dessert.json'); 
        $dataList = json_decode($file,TRUE);                       
        unset($file);                               
        $dataList[] = array('dessert'=>$stringData);        
        file_put_contents('botdb/dessert.json',json_encode($dataList));  
        unset($dataList);  
    }
    
    if(isset($_REQUEST['delstarter'])){
        $key = $_POST["data"];
        $file = file_get_contents('botdb/starter.json'); 
        $dataList = json_decode($file,TRUE);                    
        unset($file);                               
        unset($dataList[$key]);
        file_put_contents('botdb/starter.json',json_encode($dataList));  
        unset($dataList);
    }
    if(isset($_REQUEST['delsoup'])){
        $key = $_POST["data"];
        $file = file_get_contents('botdb/soup.json'); 
        $dataList = json_decode($file,TRUE);                    
        unset($file);                               
        unset($dataList[$key]);
        file_put_contents('botdb/soup.json',json_encode($dataList));  
        unset($dataList);
    }
    if(isset($_REQUEST['delmaincourse'])){
        $key = $_POST["data"];
        $file = file_get_contents('botdb/maincourse.json'); 
        $dataList = json_decode($file,TRUE);                    
        unset($file);                               
        unset($dataList[$key]);
        file_put_contents('botdb/maincourse.json',json_encode($dataList));  
        unset($dataList);
    }
    if(isset($_REQUEST['deldessert'])){
        $key = $_POST["data"];
        $file = file_get_contents('botdb/dessert.json'); 
        $dataList = json_decode($file,TRUE);                    
        unset($file);                               
        unset($dataList[$key]);
        file_put_contents('botdb/dessert.json',json_encode($dataList));  
        unset($dataList);
    }
?>