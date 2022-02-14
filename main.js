victimarray=[] ;
function submit() {
 
    var name1=document.getElementById("victim1").value ;
    var name2=document.getElementById("victim2").value ;
    var name3=document.getElementById("victim3").value ;
    var name4=document.getElementById("victim4").value ;

victimarray.push(name1) ;
victimarray.push(name2) ;
victimarray.push(name3) ;
victimarray.push(name4) ;
console.log(victimarray) ;

document.getElementById("displaynames").innerHTML=victimarray ;
document.getElementById("submitbutton").style.display="none" ;
document.getElementById("sortbutton").style.display="inline-block" ;
} 
function sorting() {
     victimarray.sort() ;
     console.log(victimarray) ;
     document.getElementById("displaynames").innerHTML=victimarray ; 
}