 // let age = 19 
// const canVote = age >= 18
// console.log(canVote)

// if(canVote){
//   console.log("you can vote")  
// } else{
//     console.log("you can't vote")
// }
  

// let firstnumber = prompt("Input First Number");
// let secondnumber = prompt("Input Second Number");
// let thirdnumber = prompt("Input Third Number");

// let test_firstnumber = firstnumber>secondnumber && firstnumber>thirdnumber
// let test_secondnumber = secondnumber>firstnumber && secondnumber>thirdnumber
// let test_thirdnumber = thirdnumber>firstnumber && thirdnumber>secondnumber

// if (test_firstnumber){
//     alert("The first number is the greatest")

// } else if (test_secondnumber) {
//     alert("The second number is the greatest")
    
// } else if(test_thirdnumber) {
//     alert("The third number is the greatest")
    
// }else{
//     alert("Two numbers can't be equal")
// }


// let president = prompt("President Password")
// let vice = prompt("Vice Password")
// let speaker = prompt("Speaker Password")
// let justice = prompt("Justice Password")


// let DB_president ="1"
// let DB_vice = "2"
// let DB_speaker = "3"
// let DB_justice = "4"

// let test_president = president==DB_president && vice==DB_vice || president==DB_president &&  speaker==DB_speaker || president==DB_president && justice==DB_justice
// let test_vice = vice==DB_vice && president==DB_president || vice==DB_vice && speaker==DB_speaker || vice==DB_vice && justice==DB_justice
// let test_speaker = speaker==DB_speaker &&  president==DB_president ||  speaker==DB_speaker && vice==DB_vice || speaker==DB_speaker && justice==DB_justice
// let test_justice = justice==DB_justice && president==DB_president || justice==DB_justice && vice==DB_vice || justice==DB_justice &&  speaker==DB_speaker


// if (test_president ) {
//     alert("access")
    
// }else if(test_vice ) {
//     alert("access")

// }else if(test_speaker ){
//     alert("acess")

// }else if(test_justice){
//     alert ("access")
    
// }else{
//     alert("no acess")
//           }

//  


const Engineers =[
    { name:"Michelle",
      age:100,
      gender:"female",
      height:"10ft"
    },
    { name:"Michael",
      age:100,
      gender:"male",
      height:"10ft"
    },
    { name:"Mark",
      age:100,
      gender:"male",
      height:"10ft"
    },
    { name:"George",
      age:100,
      gender:"male",
      height:"10ft"
    }
]


// for(let i=0; i < Engineers.length; i=i+1){
 
//     console.log(Engineers[i].name);
//     console.log(Engineers[i].age);
//     console.log(Engineers[i].gender);
//     console.log(Engineers[i].height);
// }
    // while loop
    
    // let i = 0
    
    // while (i < Engineers.length){
          

    //      i = i+1
    // }

    // Engineers.forEach( x=>console.log(x)) 
    //               or
    // Engineers.forEach( (DataHolder)=>{

    //   console.log(DataHolder)
    // })  

            
   
    // let test = function (DataHolder){
    //   console.log(DataHolder)
    // }
    //  Engineers.forEach(test)

let i= 0
do {
  console.log('hi')
  i =i+1
} while (i !=10);




