let holes = document.getElementsByClassName('navigation');


let changeNavColor = () => {
  let randomNumber = Math.floor(Math.random() * holes.length);
  let currentOpacity = holes[randomNumber].classList;
  holes[randomNumber].classList.toggle('fade');
  
}

setInterval(changeNavColor, 1000);

  