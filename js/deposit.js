// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){

    // step-2: get the deposit amount from the deposit input field
    const depositField = document.getElementById('deposit-field');
    const NewDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(NewDepositAmountString);

    // step-3: get the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString)
    //step-4: add numbers to set the total deposit
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    //sterp-5: get ballance current total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step-6 calculate current totalbalance
    const currenBalanceTotal = previousBalanceTotal + newDepositAmount;
    //set the balance total
    balanceTotalElement.innerText = currenBalanceTotal;



    // step-7: 
    depositField.value = '';
})