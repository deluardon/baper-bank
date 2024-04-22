document.getElementById('btn-deposit').addEventListener('click', function(){
    const depositFild = document.getElementById('deposit-fild');
    const newdepositamout = depositFild.value;

    // console.log(depositamout);

    const newdeposit = parseFloat(newdepositamout);

    const deposittotalelliment = document.getElementById('deposit-tottal');

    const preveusdeposittotalellimentText = deposittotalelliment.innerText;
    // console.log(typeof preveusdeposittotalellimentText)
    const Newmont = parseFloat(preveusdeposittotalellimentText)

    // const prevusdeposit = parseFloat(preveusdeposittotalellimentTextColor);

    const currentdepositamout = Newmont+newdeposit;

    deposittotalelliment.innerText=currentdepositamout;


    depositFild.value='';
})