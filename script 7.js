//for loop
var person= ["jothika",30,"newyork","FSD"]
for(var i=0; i<person.length; i++){
    console.log(person[i]);
    }

    // for in loop 
    var a ={
        name:"jothika",
        age:23,
        city:"newyork",
        course:"fsd"
    };
    for(var property in a){
        console.log (property +':'+ a[property]);
    }
      

    // for of loop


    var a =[1,2,3,4,5];
    for (let number of a){
        console.log(number);
    }

//forEach loop

    var array =[1,2,3,4,5];
array.forEach((value, index,arr)=>{
    console.log(value, index, arr);
})