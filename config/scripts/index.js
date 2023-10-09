let visorEl; 
let buttonsEls;

let digits = [];
let operator = '';

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
  const isDigitsOnVisor = (visorEl.innerText.length > 0);

  if(buttonValue === 'AC') return acOnClick();

  if(buttonValueIsNumber){

    writeOnVisor(buttonValue);

  }else if(isDigitsOnVisor){

    saveDigits();
    eraseVisor();

    if(buttonValue === '=' || digits.length === 2){

      getResult();

    }else{

      saveOperator(buttonValue);

    }
    
  }

}

function getResult(){

  let result;

  switch(operator){

    case '+': result = (digits[0] + digits[1]); break;
    case 'X': result = (digits[0] * digits[1]); break;
    case '/': result = (digits[0] / digits[1]); break;
    case '-': result = (digits[0] - digits[1]); break;

  }

  writeOnVisor(result);
  clearDigits();

}

function saveOperator(_operator){

  operator = _operator;

}

function acOnClick(){

  clearDigits();
  eraseVisor();

}

function saveDigits(){

  const curDigits = parseInt(visorEl.innerText);

  digits.push(curDigits);
  console.log(digits);

}

function clearDigits(){

  digits = [];

}

function writeOnVisor(_digit) {

    visorEl.innerHTML += _digit;

}

function eraseVisor(){

  visorEl.innerHTML = "";

}