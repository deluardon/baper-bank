document.getElementById('btn-submit').addEventListener('click', function(){
    const emailFind = document.getElementById('user-email');
    const email = emailFind.value;
    console.log(email)

    const passwordFind = document.getElementById('user-password');
    const password = passwordFind.value;


    if(email==='bapkabeta@gmail.com' && password==='baperbankertaka'){
        window.location.href = "bank.html";
        console.log('valid user');
    }
    else{
        alert('tor baper bank eta je vull password diye cesta kortecis');
        console.log('invalid user');
    }
})