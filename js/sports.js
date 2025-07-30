 const account = document.getElementById('account');
const login = document.getElementById('login')
const register = document.getElementById('register')
let backtoregister = document.getElementById('backToRegister')
let backtologin = document.getElementById('backToLogin')
         

account.onclick = function () {
    // alert( "hi");
    login.classList.toggle('swapDisplay');
    register.classList.remove('swapDisplay');
}

backtoregister.onclick = function () {
 login.classList.remove('swapDisplay');
  register.classList.toggle('swapDisplay');
}

backtologin.onclick = function (){
    register.classList.remove('swapDisplay');
    login.classList.toggle('swapDisplay');
}


