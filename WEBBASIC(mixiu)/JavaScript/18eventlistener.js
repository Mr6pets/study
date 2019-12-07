const clear = document.querySelector('clear');
clear.addEventListener('click', clear)

function clear(e) {
  e.preventDefault();
  console.log(e.target)
  let val;
  val = e.target.className;
  val = e.target.classList;
  //event type
  val = e.type;
  //timeStamp
  val = e.timeStamp
  val = e.clientX;
}


