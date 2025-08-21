let Engineers = [
    {name:"Michelle",
     email:"Michelle@gmail.com" ,
     password:"Michelle12345"
    },
     {name:"MIchael",
     email: "Michael@gmail.com",
     password:"Michael12345"
    },
     {name:"Mark",
     email:"Mark@gmail.com" ,
     password:"Mark12345"
    },
     {name:"George",
     email:"George@gmail.com",
     password:"George12345"
    },
]

let send = document.getElementById("send")
let form =document.getElementById("form")

function sendData(event){

    event.preventDefault();
    let formData =new FormData(form)
    let getData = Object.fromEntries(formData.entries())
    
    console.log(getData.email)
    console.log(getData.password)
    if (SignIn(getData.email,getData.password)) {

        form.innerHTML = SignIn(getData.email,getData.password)
          
    } else {

        alert("Fail to Login")
        
    }
    

}

send.onclick = sendData  

function SignIn(email,password){
   


for (let i=0 ; i < Engineers.length; i++) {


        if (Engineers[i].email===email && Engineers[i].password===password){

        return `You have login Successfully, Welcome  ${Engineers[i].name}`
    }

}

}   



let product = [
{   
    id:"001",
    name:"makeups",
     price:300,
     image:"sports.jpg",
     color:"brown",
     desc:"makeups for beauty"
},
{   
    id:"002",
    name:"shoe",
     price:300,
     image:"slide.webp",
     color:"brown",
     desc:"makeups for beauty"
},
{
    id:"003",
    name:"bag",
     price:300,
     image:"football.jpg",
     color:"brown",
     desc:"makeups for beauty"
},
{
    id:"004",
    name:"wigs",
     price:300,
     image:"barcelona.webp",
     color:"brown",
     desc:"makeups for beauty"
}
]

let parent = document.getElementById("parent")
let children  = document.createElement('div')


product.forEach(Michael =>{

    children.onclick =DoSomething
    children.innerHTML  =  ` <div class="box" id="box" >
           <div class="img">
            <img src="images/${Michael.image}" alt="" id= "${Michael.id}">; 
           </div>
            <h3  id= "${Michael.id}">${Michael.name}</h3>
            <h3>GHc${Michael.price}</h3>
            <p>${Michael.desc}</p>
        </div>`
 
        parent.appendChild(children)
        children  = document.createElement('div')
})

function DoSomething(event){
    
   alert(event.target.id)
} 

 