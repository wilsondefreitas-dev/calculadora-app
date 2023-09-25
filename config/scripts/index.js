let visorEl;
let buttonsEls;

//--------------------------------------------------

document.addEventListener("DOMContentLoaded", init);

//--------------------------------------------------

function init() {

    setElements();

}

function setElements() {

    visorEl = document.querySelector("#display>span");
    buttonsEls = Array.from(document.querySelectorAll('#buttonsContainer>button'));

    addOnClickOnButtons();

}

function addOnClickOnButtons(){

  for(let i = 0; i < buttonsEls.length; (i++)){

    buttonsEls[i].onclick = handleOnClickOnButtons;

  }

}

function handleOnClickOnButtons(event){

  const buttonValue = event.target.innerText; 
  const convertedButtonValue = parseInt(buttonValue);
  const buttonValueIsNumber = (!isNaN(convertedButtonValue));

  if(buttonValueIsNumber === true){

    writeOnVisor(buttonValue);

  }

}

function writeOnVisor(_digit) {

    visorEl.innerHTML += _digit;

}