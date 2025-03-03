function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Erro';
    }
}

function exitCalculator() {
    if (confirm("Você realmente deseja sair da calculadora?")) {
        window.close(); // Fecha a janela
    }
}