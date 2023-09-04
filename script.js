// const age = 17;


// if(anand>=18){
//     console.log('yes');
// }else{

//     console.log('no');
// }
 
//ternary op
// 2
// let result = age >= 17 ? 'yes':'no'

// console.log(result)
// 3
// logical op/
// const gender = 'male'

// if(age >=18 && gender == 'male'){

//   console.log('yes')
// }
// // or
// const gender = 'male'

// if(age >=18 || gender == 'male'){

//   console.log('yes')
// }
// const num = 5;

// if(num/2!=0){

//   console.log('odd')
// }else{

// }
// loops
// for
// for(let i = 0; i<=age;i++){

//     console.log('krishan')
// }
// while
// let ip = 0;
// let house = 10
// while(ip != house){
//     ip= ip + 1;
//     console.log(ip)
// }
// dowhile
// let ip = 10;
// let house = 20
// do{
//     ip = ip+1
//     console.log(ip)
// }while(ip!=house)
//function
// function sayHello(){

//     console.log("krishan");
// }
// sayHello()

// function add(a,b){

//     console.log(a+b);
// }
// add(5,6)
// function multiPly(a,b){
// return a*b;
// }
// let a = multiPly(5,6)
// console.log('result',a)
// function add(){
//  let ans= 0;
//  for(i=0; i<arguments.length;i++){
//     ans = ans +arguments[i]
//  }
//  return ans
// }
// let a = add(5,6)
// console.log(a)

// function add2(...num){
//  let ans= 0;
//  for(i=0; i<num.length;i++){
//     ans = ans +num[i]
//  }
//  return ans
// }
// let b= add2(5,6,4)
// console.log(b)
//Arrow function
// const sayHello = () =>{
    
    //     console.log("krishan")
    // }
    // sayHello()
    // const add2 = (...num)=>{
    //    console.log(num)
    //  };
    // let b= add2(5,6,4)
    // hoisting
    // sayHello();
    // function sayHello(){

    //    console.log("hello");
    // }
    // high order function callback

//     function add(a,b,cb){

//       let result = a+b;
//       cb(result)

//     }
//      add(2,3,function(val){
//       console.log(val)
//   });
// Arrar
// const studant = ["krishan","krishan","aditay"]
// studant.push('krishansaini',6);
// studant.pop('krishansaini',6);
// console.log(studant)
//high order array

// const studant = [1,2,3,4,5,6,]
// studant.map((val)=>console.log(val))
//  const ele = document.querySelector("div");
        //  console.log(ele.parentElement.children)
        //  const ele = document.querySelectorAll("block");
        //  console.log(ele)
        // const el = document.getElementById("username")
        
        // el.classList.add("red-color")
        // el.classList.add("under-Line")
        // console.log(el.classList)
        // const el = document.getElementById("clickButton")
        // const nameBlock = document.querySelectorAll("name-block");

     
        // el.addEventListener("click",() =>{
        //     if(nameBlock.style.color === 'red') {
        //         nameBlock.style.color ='blue'
        //     }else{

        //         nameBlock.style.color = 'red'
        //     }
            

           
        // });
    //    async function getData(){
            
    //         let resultFromserver = await fetch(
    //             "http://jsonplaceholder.typicode.com/posts"
    //         );
    //         console.log(resultFromserver);
    //     }
            
    // const button  = document.getElementById("clickbutton")
    // const uname  = document.getElementById("username")
    // const username  = document.getElementById("username")

    // button.addEventListener("click", () => {

    //     const value = uname.value;
    //     localStorage.setItem("name",value)
    //     location.reload();
    // });
    // window.addEventListener('load', () => {
    //   const value =localStorage.getItem('name')
    //   username.innerText = value;

    // });