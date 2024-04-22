document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositFild = document.getElementById('deposit-fild');
    const newdepositamout = depositFild.value;

    // console.log(depositamout);

    const newdeposit = parseFloat(newdepositamout);
//  step 4
    const deposittotalelliment = document.getElementById('deposit-tottal');

    const preveusdeposittotalellimentText = deposittotalelliment.innerText;
    // console.log(typeof preveusdeposittotalellimentText)
    const Newmont = parseFloat(preveusdeposittotalellimentText)
    
    // step 4-5
    // const prevusdeposit = parseFloat(preveusdeposittotalellimentTextColor);

    const currentdepositamout = Newmont+newdeposit;

    deposittotalelliment.innerText=currentdepositamout;
    // step 5 
    const currentbalance = document.getElementById('balance-tottal');
    const prevrusbalancetottalstring = currentbalance.innerText;
    const prevrusbalancetottal = parseFloat(prevrusbalancetottalstring);
    // step 6
    const currentbalancetottal = prevrusbalancetottal + newdeposit;
     currentbalance.innerText = currentbalancetottal;

    depositFild.value='';
})