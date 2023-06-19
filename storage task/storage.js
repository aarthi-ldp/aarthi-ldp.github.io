let sessionScore =document.getElementById('sessionScore');
let localScore =document.getElementById('localScore');
document.addEventListener("DOMContentLoaded", function() {
    
    const storedNumber = localStorage.getItem("localScore");
  
    
    if (storedNumber) {
     
      const number = parseInt(storedNumber);
      
      
      const numberDisplay = document.getElementById("number-display");
      numberDisplay.textContent = number.toString();
    }
  });


function incrementLocalScore(){
    localScore = parseInt(localStorage.getItem('localScore') || 0);
    localScore++;
    document.getElementById('localScore').innerHTML = localScore;
    localStorage.setItem('localScore',localScore);
}

function incrementSessionScore(){
    sessionScore = parseInt(sessionStorage.getItem('sessionScore')) || 0;
    sessionScore++;
    document.getElementById('sessionScore').innerHTML = sessionScore;
    sessionStorage.setItem('sessionScore',sessionScore);
}

  
