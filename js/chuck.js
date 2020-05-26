console.log('Wassup!')

let holes = document.getElementsByClassName('navigation');


let changeNavColor = () => {
  let randomNumber = Math.floor(Math.random() * holes.length);
  if(holes[randomNumber].style.background =='pink') {
    holes[randomNumber].style.background = 'white';
  } else {
    holes[randomNumber].style.background = 'pink';
  }
}
setInterval(changeNavColor, 1000);

  