var gap1 = document.getElementById('gap1');
var gap2 = document.getElementById('gap2');
var gap3 = document.getElementById('gap3');
var gap4 = document.getElementById('gap4');
var gap5 = document.getElementById('gap5');
var gap6 = document.getElementById('gap6');
var msgs =["give it another shot", "try again", "maybe next time", "hmm, I don't really think so", "nope, try again"]
var verify = document.getElementById('verify-btn');



verify.addEventListener("click",function(){
  console.log('btn clicked')
  if( gap1.value=="6" && gap2.value=="1" && gap3.value=="5" && gap4.value=="3" && gap5.value=="2" && gap6.value=="4"){
    alert(' well done ')

  }
  else{
    
    alert(msgs[Math.floor(Math.random()* msgs.length)])
  }
})
