const DataSet = [
    {
        name:"michael",
        age:25  

    }, {

    },{

    }
];

let MyJsonString = JSON.stringify(DataSet)
console.log(MyJsonString)

localStorage.setItem("key1",MyJsonString)

let MyJsonArray = localStorage.getItem("key1")
let MyDataset = JSON.parse( MyJsonArray)
console.log(MyDataset)




