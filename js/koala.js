//1. get the element we want (maybe document.getElementById?)
//2. elVariableName.click
//or addEventListener syntax (see debugging project for example)

let clickable = document.querySelector("img.clickable");
clickable.addEventListener("click", clickCounter);

let counter = 0

function clickCounter(){
  counter++
  let container = document.querySelector("p#clickcount")
  container.innerHTML=counter
  
  let displayTitle = document.querySelector("title");
  displayTitle.innerHTML = counter;
  
  if (counter === 10) {
    let rotate = document.querySelector("img.clickable")
    rotate.setAttribute("class", "clickable2")
    alert("Congrats, you clicked 10 times!")
  } else if (counter === 20) {
    let rotate2 = document.querySelector("img.clickable2")
    rotate2.setAttribute("class", "clickable")
    alert ("Chill out!  That was your 20th click.")
  }
}

