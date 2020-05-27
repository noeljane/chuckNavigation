let holes = document.getElementsByClassName('navigation');


let changeNavColor = () => {
  let randomNumber = Math.floor(Math.random() * holes.length);
  // if(holes[randomNumber].style.background =='black') {
  //   holes[randomNumber].style.background = 'white';
  // } else {
  //   holes[randomNumber].style.background = 'black';
  //   lighten(randomNumber)
  // }
  let currentOpacity = holes[randomNumber].style.opacity;
  if(currentOpacity >= 1) {
    fade(randomNumber);
  }
  holes[randomNumber].style.background = 'yellow';
  lighten(randomNumber);
  
}

let lighten = (randomNumber) => {
  let op = 0.1
  holes[randomNumber].style.display = 'block'
  let timer = setInterval( () => {
    if (op >= 1) {
      clearInterval(timer);
    }
    holes[randomNumber].style.opacity = op;
    holes[randomNumber].style.filter = 'alpha(opacity=' + op * 100 + ")";
    op += op * 0.1;   

  }, 1000);

} 
let fade = (randomNumber) => {
  let op = 1;
  let timer = setInterval(() => {
    if (op <= 0.1) {
      clearInterval(time);
      holes[randomNumber].display = 'none';
    }
    holes[randomNumber].style.opacity = op;
    element.style.filter = 'alpha(opacity=' + op * 100 + ")";
    op += op * 0.1;
  }, 1000); 
  
}


setInterval(changeNavColor, 1000);

  