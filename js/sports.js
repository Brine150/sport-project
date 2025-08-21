//  const account = document.getElementById('account');
// const login = document.getElementById('login')
// const register = document.getElementById('register')
// let backtoregister = document.getElementById('backToRegister')
// let backtologin = document.getElementById('backToLogin')
         

// account.onclick = function () {
//     // alert( "hi");
//     login.classList.toggle('swapDisplay');
//     register.classList.remove('swapDisplay');
// }

// backtoregister.onclick = function () {
//  login.classList.remove('swapDisplay');
//   register.classList.toggle('swapDisplay');
// }

// backtologin.onclick = function (){
//     register.classList.remove('swapDisplay');
//     login.classList.toggle('swapDisplay');
// }



let numbers = [1,2,3,4,5,6,7]
let evenNums = numbers.filter(isEven);
let oddNums = numbers.filter(isOdd);

console.log(evenNums);

function isEven(element){
    return element % 2 === 0;
}

console.log(oddNums);

function isOdd(element){
    return element % 2 !==0;
}

const fruits= ["orange","pear","coconut","watermelon","banana","pea"];
const Many = fruits.filter(isMany);
const Less = fruits.filter(isLess);
const Equal = fruits.filter(isEqual);


console.log(Many);


function isMany(element){
    return element.length > 6
}


console.log(Less)

function isLess(element){
    return element.length < 6
}

console.log(Equal); 

function isEqual(element){
    return element.length ==6
}