var total=0;
document.getElementById('totalsum').innerText=total;
var wallet=10000;
document.getElementById('wallet').innerText=wallet;
var stuff=[];
document.getElementById('stuff').innerText=stuff;
function bigMAc(){
  total=total+132.44;
  document.getElementById('totalsum').innerText=total;
  wallet=wallet-132.44;
  document.getElementById('wallet').innerText=wallet;
  stuff.push("Celestron - PowerSeeker 127EQ        x1 \n");
  document.getElementById('stuff').innerText=stuff;


}
function flipFlops(){
  total=total+87.02;
  document.getElementById('totalsum').innerText=total;
  wallet=wallet-87.02;
  document.getElementById('wallet').innerText=wallet;

  stuff.push("Celestron        x1 \n");
  document.getElementById('stuff').innerText=stuff;
}
// function cocaCola(){
//   total=total+5;
//   document.getElementById('totalsum').innerText=total;
  
//   wallet=wallet-5;
//   document.getElementById('wallet').innerText=wallet;
//   stuff+="Gskyer Telescope        x1 \n";
//   document.getElementById('stuff').innerText=stuff;

// }
// function movieTicket(){
//   total=total+12;
//   document.getElementById('totalsum').innerText=total;
//   wallet=wallet-12;
//   document.getElementById('wallet').innerText=wallet;
//   stuff+="ToyerBee Telescope        x1 \n";
//   document.getElementById('stuff').innerText=stuff;


// }
function book(){
  total=total+127.96;
  document.getElementById('totalsum').innerText=total;
  wallet=wallet-127.96;
  document.getElementById('wallet').innerText=wallet;
  stuff.push("Celestron - black        x1 \n");
  document.getElementById('stuff').innerText=stuff;


}
function lobster(){
  total=total+484.70;
  document.getElementById('totalsum').innerText=total;
  wallet=wallet-484.70;
  document.getElementById('wallet').innerText=wallet;
  stuff.push("Celestron - NexStar 127SLT        x1 \n");
  document.getElementById('stuff').innerText=stuff;

}


if( document.getElementById(stuff).Value <1000){
  alert("are you sure you want to spend more ?");
}
