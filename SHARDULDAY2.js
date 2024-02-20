   //define the functions in javasript
   /*function shardul(){
        console.log("shardulttt")
        
   }

   shardul()
function sum(a,c){
      return a*c 
  
}

console.log( "multiplication is" ,sum(3,4))


function sum1(a,b=56){
     return a+b;
 
}

console.log( "if the user is not put the value of b the it will take predefine value by devloper with addition  ",sum1(3))

function checkargumant(){
     console.log(arguments)
 
}
checkargumant(1,2,7) 

//console.log("safhdkhgdk")
//arrow function practice
var sum = (a,f) => a-f
console.log(sum(7,6))
var sum1 = (a,f) => a*f
console.log(sum1(7,69))

var sum2 = (a,f) => a+f
console.log(sum2(7,61))

var sum2 = (a,f) => {
console.log("new")
 //return a+f
 return a*f

}
console.log(sum2(7,61)) 

//writing funtion and after end within time it should have execute then we use this
(function(){
     console.log('Hello Sir thank you')
  })()
  

  //global scope 
  var name= "shardul"
  function udit(){

     console.log(name)
  }
udit()

 //local scope 
 //var name= "shardulmane"
 function udit1(){
     var num = 56
     console.log(num)
 }
udit1()
//console.log(num)



//block scope 
 
{
     var n = 56
     console.log(n)
 }
console.log(n)

 //giving erorr for using the let for value
{
let x  = 90
console.log(x)

 }
 console.log(x) */

 /**
 * var  :
 *   1. It's used to define a variable
 *   2. It has function scope but no block scope
 *   3. It is hoisted
 */
// predefine then printing what happed itwil give undefine
//console.log(r)
 //var r = 9


 /**
 * let 
 * 
 * 1. No hoisting
 * 2. It also has block scope
 

console.log(i)

let i =5


{
    let name = "Vishwa"
}

console.log(name) **/


/**
 * const 
 *   - scope is exactly same as let
 *   - const variables are final, can't be re-assigned a value
 */
//const contry = "india"
//contry = "londan"
//console.log(contry)
//TypeError: Assignment to constant variable.



//strings in javascript 
/*
 let name = "shardul"
 let city ="nagothane"
 console.log(name,city)
 console.log(typeof name)
 // accessing chareacter based on index
 console.log( name[0])
 console.log(city[1])
 console.log(city[11])// undefine index is more
 name[2]="dd"//immutable so it not affect

 console.log(name)

 //length of string 
 console.log(name.length)
 
//connect the two strings we use concat or using +
 let firstword ="win"
 let secword ="india"
 let fullresult = firstword.concat(secword)
 console.log(fullresult)  
 console.log(firstword + secword)*/
 
 // for upper cae of any string
 //let name ="shardulmane"
 //console.log(name.toUpperCase()))

//chacter at index of string 
 //console.log(name.charAt(1))

 //slicing in java script
/*
 let name ="ishika"
 console.log(name)
 console.log(name.slice(1))
 console.log(name.slice(2,5))
 console.log(name.slice(-2))
 console.log(name.slice(-5,-1)) */

 //index of char in string and if chrater is not in string then it will give value -1
 //let name ="ishika shardul"

 //console.log(name.indexOf("i"))
 //console.log(name.indexOf("d"))

 //split
 //console.log(name.split())

// arrays in java script
//arr =[1,2,3]
////console.log(typeof arr)
//console.log(arr)

//console.log(arr[0])

//console.log(arr[2])
//undefine output
//console.log(arr[5])
//console.log(arr[-1])
//arrray are mutable

//arr= [1,3,2,4,5]
//arr[1]=200
//console.log(arr) 
/*

arr= [1,3,2,4,5]
console.log(arr)
arr.push(12)
console.log(arr)
arr.push(13,54,55,87)//in push condition the element is add into aaray but atthe end of aaray 
console.log(arr) */

//unshift method is use to add number in aaray at start of array or top of 
/*
arr.unshift(100)
console.log(arr)
arr.unshift(101,235,33)
console.log(arr)*/

//removing element from aaray
/*
arr= [1,3,2,4,5]
arr.pop(5)  // last element remove from aaray

console.log(arr)
arr.shift()  // top element remove from aaray
console.log(arr) */


// add the two aaray
 /*let arr1=[87,99,56,74]

let  arr= [1,3,2,4,5]
let joinaaray = arr1.concat(arr)
console.log( "the join array is",joinaaray)


console.log(arr.length)

*/

//array to string covert
  /*arr=['i','s','h','i','k','a']
console.log(arr.join())
//console.log(arr)
console.log(arr.join("#"))
//console.log(arr)
// other methodof convertaaray to string

console.log(arr.toString())
//console.log(arr)
console.log( typeof arr.toString()) */



//
/*
let nums = [100,101,102,103,104,105,106,107,108,109,110]

console.log(nums.slice(3))
console.log(nums.slice(1,7))
console.log(nums.slice(7,-1))
console.log(nums.slice(-5,-2))
console.log(nums.slice(6,-1))
*/
//console.log(nums)


 //Splicing , which modifies the given array
/*
 let numbers = [1,2,3,4,5]
//let removed = numbers.splice(2,2)
//let removed = numbers.splice(2,6) // udefine
let removed = numbers.splice(2,3,33,21,12) //insert new element 
console.log(removed)
console.log(numbers)  */

//let num = [1,5,3,4,2]

//num.reverse()
//console.log(num)
////let num = [1,5,3,4,2]
//num.sort()

//console.log(num)
// sort isudebasic logic for sorting the aaray

//let numm = [15,40,1,13,2]

//numm.sort( (a,b) => a-b)
//console.log(numm)
//for reverse
/*let numm = [15,40,1,13,2]

numm.sort( (a,b) => b-a)
console.log(numm) */

//define objects in js
/*
const user ={

     names : "shardul",
     age : 21  ,
     city : "mumbai"

}

//accessing the data
console.log(user.names)
console.log(user['names'])
//add new thngs in object
user.country ="india"
user['area'] ="asia"
console.log(user) */


const bhai ={

     name :"swaraj",

     age :12,
     Address :{

          city :"panvel",
          state : "maharatra",
          country: "india"
     }
}
/*for(let key in bhai) {
     //console.log(key)
     console.log(key,bhai[key])

}
*/
//console.log(Object.keys(bhai))
//console.log(Object.values(bhai))
//console.log(Object.entries(bhai))

// cloing of object

//const shardul = Object.assign({},bhai,{role :"devloper and backend"})
//console.log(shardul)

//Destructuring in arrays
 const arry = [2,5,8,9]
 const [m,v,s,e,p] = [2,5,8,9]
console.log(m)
console.log(v)
console.log(s)
console.log(e)
console.log(p)//undefine for p 

const [a,b,c] = [28,54,[889,936]]
console.log(a)
console.log(b)
console.log(c)

/**
 * Destructuring in an object
 */

const per = {
     age : 99,
     name : "Vishwa",
     city : "Bangalore",
     address : {
         city : "Banaglore",
         state : "karnataka"
     }
 }
 
 const  { name, age, address : {city, state} } = per
 
 console.log(name)
 console.log(age)
 console.log(city)
 console.log(hobby)// undefine
 


























 





 


 



