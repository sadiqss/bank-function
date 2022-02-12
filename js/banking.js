function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //clear input field
    inputField.value = '';
    return amountValue;
};

function updateTotalField(totalFieldId, amount) {
    // debugger;
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function updateBalance(depositAmount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + depositAmount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - depositAmount;
    }
}





document.getElementById('deposit-button').addEventListener('click', function () {
    // const depositInput = document.getElementById('deposit-amount');
    // const depositAmountText = depositInput.value;
    // const depositAmount = parseFloat(depositAmountText);
    const depositAmount = getInputValue('deposit-amount');
    //get current deposit
    /*
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositTotal + depositAmount; */
    updateTotalField('deposit-total', depositAmount);
    //update balance
    /*
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceTotal + depositAmount;
    */
    updateBalance(depositAmount, true);

    //clear input field
    // depositInput.value = '';
});

// handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
    // const withDrawInput = document.getElementById('withdraw-amount');
    // const withdrawAmountText = withDrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
    const withdrawAmount = getInputValue('withdraw-amount');
    // update withdraw total
    /* 
     const withdrawTotal = document.getElementById('withdraw-total');
     const withdrawTotalText = withdrawTotal.innerText;
     const withdrawTotalAmount = parseFloat(withdrawTotalText);
     withdrawTotal.innerText = withdrawAmount + withdrawTotalAmount;
     */
    updateTotalField('withdraw-total', withdrawAmount);

    // update balance after withdrawal
    /*  const balanceTotal = document.getElementById('balance-total');
     const balanceTotalText = balanceTotal.innerText;
     const previousBalanceTotal = parseFloat(balanceTotalText);
 
     balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */

    updateBalance(withdrawAmount, false);
    // //clear withdraw box
    // withDrawInput.value = '';
})