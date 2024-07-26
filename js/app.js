var actionBtn= document.querySelectorAll(".action")

var body = document.getElementById("body")
for(let i=0; i<actionBtn.length; i++){

    actionBtn[i].addEventListener("click",function(){
        var randomNumber = Math.ceil(Math.random()*9)
        var guess =prompt("Guess The Number between 1 to 10")
        if(randomNumber == guess){
          body.innerHTML =`<div class="card">
          <div class="left">you win Iphone</div>
<div class="right"><img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-r1.jpg" alt=""></div>
          </div>`
          body.style.alignItems="center"
          body.style.justifyContent="center"
        }
        else{
            console.log("wrong");
        }
    })
}