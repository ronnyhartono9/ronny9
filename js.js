function lho(){
    alert('k');
   // $('vd').addClass('hover');
    document.getElementById('vd').addClass('hover');
}
function tran1(){
    var element = document.getElementById("ll");         
    if(element.style.left == "10px" || element.style.left == ""  ){
        element.style.left = "300px";
        element.style.fontSize= "100px";
        element.style.opacity= "1";  
    }else{
        element.style.left = "10px";
        element.style.fontSize= "10px";
        element.style.opacity= "0.5";  
    }
    element.style.transition = "all 2s";
}
function tran2(){     
    var element = document.getElementById("vd");         
    if(element.style.width == "100px" || element.style.width == ""  ){
        element.style.width = "300px";
        element.style.background = "blue";
    }else{
        element.style.width = "100px";
        element.style.background = "red";
    }
    element.style.transition = "all 2s";
}
function tran3(){
    var element = document.getElementById("vd2"); 
    if(element.style.opacity == "0" || element.style.opacity == ""  ){            
        element.style.opacity= "1";  
    }else{
        element.style.opacity= "0";  
    }
    element.style.transition = "all 1.5s";
}
 
function smiley(){
    var element2 = document.getElementById("ndelik");
    if(element2.style.top == "40%"){element2.style.top= "100%";}else{ element2.style.top= "40%";}
    element2.style.transition = "all ease 2s";
}
function movie(){
    var element3 = document.getElementById("ndas");var jng = document.getElementById("jng");
    var rai = document.getElementById("rai");
    var l1 = document.getElementById("l1");var m1 = document.getElementById("m1");
    var l2 = document.getElementById("l2");var m2 = document.getElementById("m2");
    var l3 = document.getElementById("l3");var m3 = document.getElementById("m3");

    var pr = document.getElementById("pr");
    var pr2 = document.getElementById("pr2");

    element3.style.top="8px";element3.style.opacity=1;
    element3.style.transition = "all 2s";

    jng.style.opacity=1;
    jng.style.transition = "all ease 2s";
    jng.style.transitionDelay = "2s";   
    

    l1.style.left = "0px";l1.style.transition = "all ease 2s";l1.style.opacity=1;
    l1.style.transitionDelay = "2s";        
    l2.style.left = "0px";l2.style.transition = "all ease 2s";l2.style.opacity=1;
    l2.style.transitionDelay = "2s";
    l3.style.left = "0px";l3.style.transition = "all ease 2s";l3.style.opacity=1;
    l3.style.transitionDelay = "2s";
    
    m1.style.opacity=1;m1.style.transition = "all ease 2s";
    m1.style.transitionDelay = "4s";

    m2.style.opacity=1;m2.style.transition = "all ease 2s";
    m2.style.transitionDelay = "4s";

    m3.style.opacity=1;m3.style.transition = "all ease 2s";
    m3.style.transitionDelay = "4s";

    pr.style.opacity=1;
    pr.style.transition = "all ease 4s";
    pr.style.transitionDelay = "5s";

    pr2.style.opacity=1;
    pr2.style.transition = "all ease 4s";
    pr2.style.transitionDelay = "5s";
    
    rai.style.opacity=1;
    rai.style.transition = "all ease 4s";
    rai.style.transitionDelay = "6s";
}