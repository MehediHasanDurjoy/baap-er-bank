// step-1:
document.getElementById('btn-withdraw').addEventListener('click', function(){    
     //step-2: 
     const withdraField = document.getElementById('withdraw-field');
     const newWithdrawFieldString = withdraField.value;
     const newWithdrawAmount = parseFloat(newWithdrawFieldString);

     //step-7:
     withdraField.value = '';
     
     if(isNaN(newWithdrawAmount)) {
          alert('Please provide a valid number');
          return;
     }

     //step-3:
     const withdrawTotalElement = document.getElementById('withdraw-total');
     const previousWithdrawTotalString = withdrawTotalElement.innerText;
     const previousWithdrawTotal = parseFloat(previousWithdrawTotalString); 

     //sterp-5:
     const balanceTotalElement = document.getElementById('balance-total');
     const previousBalanceTotalString = balanceTotalElement.innerText;
     const previousBalanceTotal = parseFloat(previousBalanceTotalString);

     

     if(newWithdrawAmount > previousBalanceTotal){
          alert('Your amount over balance');
          return;
     }     

     //step-4:
     const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
     withdrawTotalElement.innerText = currentWithdrawTotal;

     

     //sterp-6:
     const newBalanceTotoal = previousBalanceTotal - newWithdrawAmount;
     balanceTotalElement.innerText = newBalanceTotoal;
    
})