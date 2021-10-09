var total=0;
document.getElementById('totalsum').innerText=total;
var wallet=10000;
document.getElementById('wallet').innerText=wallet;
var  stuff=[];
document.getElementById('stuff').innerText=stuff;
function bigMAcs(){
  total=total-132.44;
  document.getElementById('totalsum').innerText=total;
  wallet=wallet+132.44;
  document.getElementById('wallet').innerText=wallet;
  // stuff.filter("Celestron - PowerSeeker 127EQ")
  delete stuff[0];
  document.getElementById('stuff').innerText=stuff;
  


}
function flipFlopss(){
  total=total-87.02;
  document.getElementById('totalsum').innerText=total;
  wallet=wallet+87.02;
  document.getElementById('wallet').innerText=wallet;
  delete stuff[0];
  document.getElementById('stuff').innerText=stuff;
}
// function cocaColas(){
//   total=total-5;
//   document.getElementById('totalsum').innerText=total;
  
//   wallet=wallet+5;
//   document.getElementById('wallet').innerText=wallet;
//   stuff-="Coca Cola        x1 \n";
//   document.getElementById('stuff').innerText=stuff;


// }
// function movieTickets(){
//   total=total-127.96;
//   document.getElementById('totalsum').innerText=total;
//   wallet=wallet+127.96;
//   document.getElementById('wallet').innerText=wallet;
//   stuff-="movie ticket        x1 \n";
//   document.getElementById('stuff').innerText=stuff;


// }
function books(){
  total=total-127.96;
  document.getElementById('totalsum').innerText=total;
  wallet=wallet+127.96;
  document.getElementById('wallet').innerText=wallet;
  delete stuff[0];
  document.getElementById('stuff').innerText=stuff;

}
function lobsters(){
  total=total-484.70;
  document.getElementById('totalsum').innerText=total;
  wallet=wallet+484.70;
  document.getElementById('wallet').innerText=wallet;

  delete stuff[0];
  document.getElementById('stuff').innerText=stuff;
 
      

}
