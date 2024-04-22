// step 
// 1. add a event handler with the withdraw button 
// 2. get the withdraw amount from the withdraw input field
// 2-5. also make sure to convert the input into number by using the parsefloat 
// 3. get previous withdraw total
// 4. calculate total withdraw amount
// 5. set the withdraw amount
// 6.previous balance total


// 7. clear the input field

// step 1
document.getElementById('btn-withdraw').addEventListener('click', function () {
    //  step 2
    const withdrawfield = document.getElementById('withdraw-flied');
    const withdrawAmountstring = withdrawfield.value;
    const newwithdrawamount = parseFloat( withdrawAmountstring);
    withdrawfield.value = '';
    if(isNaN(newwithdrawamount)){
        alert('please enter number');
        return;
    }
    // console.log(newwithdrawamount)
   
    // step 3

    const previouswithdrawtotal = document.getElementById('withdraw-tottal');
    const previouswithdrawtotalstring = previouswithdrawtotal.innerText;
    const previouswithdrawtotalnumber = parseFloat(previouswithdrawtotalstring);
    // console.log(previouswithdrawtotalnumber)

    // step 4
  
    // console.log(totalwithdrawamount)
 
        // step 5
        const previousbalancetotal = document.getElementById('balance-tottal');
        const previousbalancetotalstring = previousbalancetotal.innerText;
        const previousbalancetotalnumber = parseFloat(previousbalancetotalstring);
        if(newwithdrawamount > previousbalancetotalnumber){
            alert('baper bank e eto taka nai ')
            return;
        }

        const totalwithdrawamount = previouswithdrawtotalnumber + newwithdrawamount;
        previouswithdrawtotal.innerText = totalwithdrawamount
        // console.log(previousbalancetotalnumber)

        // step 6
        const newbalance = previousbalancetotalnumber - totalwithdrawamount;
        previousbalancetotal.innerText = newbalance;
        // console.log(newbalance)

        // step 7
       


})
