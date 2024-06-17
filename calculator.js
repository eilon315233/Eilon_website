const display = document.getElementById('display');
let calculationDone = false;

function appendToDisplay(value) {
    if (calculationDone) {
        display.value = value;  // אם חישוב נעשה, אפס את המסך והוסף את המספר
        calculationDone = false;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '';
    calculationDone = false;
}

function calculate() {
    try {
        display.value = eval(display.value);
        calculationDone = true;  // עדכן את המצב לאחר חישוב מוצלח
    } catch {
        display.value = 'Error';
        calculationDone = false;
    }
}
