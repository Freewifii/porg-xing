console.log('test');

alert("danger")
let response = prompt("What's your name?")

let greet = document.getElementById('greet')
.innerHTML = "hi " + response

console.log(response)


#container {
    width: 400px;
    height: 400px;
    position: relative;
    background: yellow;
  }
  #animate {
    width: 50px;
    height: 50px;
    position: absolute;
    background: red;
  }
var id = setInterval(frame, 5);
function frame() {
  if (/* test for finished */) {
    clearInterval(id);
  } else {
    /* code to change the element style */  
  }
}
function myMove() {
    var elem = document.getElementById("animate"); 
    var pos = 0;
    var id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++; 
        elem.style.top = pos + 'px'; 
        elem.style.left = pos + 'px'; 
      }
    }
  }
  