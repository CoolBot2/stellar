
 var data = 0;
  
//printing default value of data that is 0 in h2 tag
document.getElementById("gauge").innerText = data;
  
//creation of increment function
function buy() {
    data = data + 1;
    document.getElementById("gauge").innerText = data;
}

   function sell() {
  data = data - 1;
  document.getElementById("gauge").innerText = data;
}




