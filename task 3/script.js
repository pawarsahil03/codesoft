let displayValue = '0';
let currentInput = '';
let currentOperation = null;

function updateDisplay() {
  document.getElementById('display').textContent = displayValue;
}

function clearDisplay() {
  displayValue = '0';
  currentInput = '';
  currentOperation = null;
  updateDisplay();
}

function appendNumber(number) {
  if (displayValue === '0') {
    displayValue = number;
  } else {
    displayValue += number;
  }
  updateDisplay();
}

function setOperation(operation) {
  if (currentInput !== '') {
    calculateResult();
  }
  currentInput = displayValue;
  currentOperation = operation;
  displayValue = '0';
  updateDisplay();
}

function calculateResult() {
  if (currentInput !== '' && currentOperation !== null) {
    switch (currentOperation) {
      case '+':
        displayValue = (parseFloat(currentInput) + parseFloat(displayValue)).toString();
        break;
      case '-':
        displayValue = (parseFloat(currentInput) - parseFloat(displayValue)).toString();
        break;
      case '*':
        displayValue = (parseFloat(currentInput) * parseFloat(displayValue)).toString();
        break;
      case '/':
        if (parseFloat(displayValue) !== 0) {
          displayValue = (parseFloat(currentInput) / parseFloat(displayValue)).toString();
        } else {
          displayValue = 'Error';
        }
        break;
      default:
        break;
    }
    currentInput = '';
    currentOperation = null;
    updateDisplay();
  }
}

// Initial display update
updateDisplay();
