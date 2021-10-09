var space1 = document.getElementById('space1');
var space2 = document.getElementById('space2');
var space3 = document.getElementById('space3');
var space4 = document.getElementById('space4');
var space5 = document.getElementById('space5');
var space6 = document.getElementById('space6');
var space7 = document.getElementById('space7')
var msgs =["give it another shot", "try again", "maybe next time", "hmm, I don't really think so", "nope, try again"]
var verify = document.getElementById('verify-btn1');



verify.addEventListener("click",function(){
  console.log('btn clicked')
  if( space1.value=="c" && space2.value=="e" && space3.value=="b" && space4.value=="d" && space5.value=="g" && space6.value=="f" && space7.value == "a"){
    alert(' well done ')

  }
  else{
    
    alert(msgs[Math.floor(Math.random()* msgs.length)])
  }
})
