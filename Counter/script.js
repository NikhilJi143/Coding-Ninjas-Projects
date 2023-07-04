
var dis = document.getElementsByClassName('display');
var id ;
var c = 1;
document.getElementById("counterBtn").addEventListener('click', ToDoApp);

var count;
var integer;

function ToDoApp() {
  c = 1;
  count = document.getElementById('number').value;
  integer = parseInt(count, 10);

  id = setInterval(displayNumber, 1000);
   
}

function displayNumber(){
  if(c === integer + 1){
    clearInterval(id);          
    setTimeout(setBack, 5000);
  }
  else{
    var i = 4;
    c++;
    
    while( i >= 0){
      if(dis[i].innerText === 9){
        dis[i].innerText = 0;
      }
      else{
        dis[i].innerText = parseInt(dis[i].innerText, 10) + 1 + "";
        break;
      }
      i--;
    }
  }         
}

function setBack() {  //to reset value of form and counter back to zero
  for(var i = 0; i <= 4; i++) {
    dis[i].innerText = "0";
  }
  document.getElementsByTagName('form')[0].reset();
}