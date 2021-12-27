let displayText = '';
const operator = ["+", "-", "/", "*", "%"];
let symbolOperator= '';
let numberOne = 0
let numberTwo = 0
const anexar = (key) => {
  let resposta = document.getElementById("resultado");
  displayText = resposta.innerText;
  if (key === "C" ) {
    displayText = "";
  } else if (key === "="){
    numberTwo = parseFloat(displayText);
    displayText = operation(numberOne,symbolOperator,numberTwo)
  } else if (operator.includes(key)){
    numberOne = parseFloat(displayText)
    displayText = '';
    symbolOperator = key
  }
  else{
    displayText += key
  }
  resposta.innerText = displayText
};
const operation = (numberOne,symbolOperator,numberTwo) =>{
  switch (symbolOperator){
    case '+':
      return numberOne + numberTwo
    case '-':
      return numberOne - numberTwo
    case '/':
      return numberOne / numberTwo
    case '*':
      return numberOne * numberTwo
    case '%':
      return numberOne * numberTwo / 100
  }
}