function getInput(inputId) {
    const elmValue = document.getElementById(inputId).value;
    const valueFloat = parseFloat(elmValue);
    return valueFloat;
}
function calculate() {
    const income = getInput('income');
    const food = getInput('food');
    const rent = getInput('rent');
    const clothes = getInput('clothes');
    if(isNaN(income) && isNaN(food) && isNaN(rent) && isNaN(clothes)){
        alert('Please check all is number!');
        return;
    }
    let expenses = food + rent + clothes;
    let balance = income - expenses;
    document.getElementById('totalExpenses').innerHTML= expenses;
    document.getElementById('balance').innerHTML= balance;
}
document.getElementById('cal-btn').addEventListener('click',calculate);
function saving() {
    const savePercentage = getInput('save');
    const getBalanceTxt = document.getElementById('balance').innerText;
    const getBalance = parseFloat(getBalanceTxt);
    if (isNaN(savePercentage) && isNaN(getBalance)) {
        alert("Enter valid number...");
        return;        
    }
    const savingAmount = (savePercentage*getBalance)/100;
    const reamingBalance = getBalance - savingAmount;
    document.getElementById('savingAmount').innerHTML= savingAmount;
    document.getElementById('reamingBalance').innerHTML= reamingBalance;
}
document.getElementById('save-btn').addEventListener('click', saving);