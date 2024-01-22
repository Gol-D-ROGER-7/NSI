




function clearInput() {
    document.getElementById('input').value = '';
}

function addInput(input) {
    document.getElementById('input').value += input;
}

function calculate() {
    try {
        let result = eval(document.getElementById('input').value);
        document.getElementById('input').value = result;
    } catch (err) {
        alert('Invalid expression');
    }
}