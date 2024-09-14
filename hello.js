//Type Conversion
let num ="10";
num=Number(num);
console.log(typeof(num))
let num2="20.5";
num2=Number(num2);
console.log(typeof(num2))

// string conversion
//1
let num3=30;
num3=String(num3);
console.log(typeof(num3))

//2
let bool=true
bool=String(bool);
console.log(typeof(bool))
//3
let arr=[1,2,3,4];

 arr=String(arr);

console.log(typeof(arr))
//4
let obj={name:"ritik",age:"23"}
obj=String(obj)
console.log(typeof(obj))
//5
let conversion=(a,b)=>{
    console.log(a && b)
    console.log(a && b)
    
}
conversion("10",10)
conversion(false,0)
//Type Coercion

function CheckCoercion(a,b){
    console.log(a==b)
    console.log(a===b)
}
CheckCoercion("5",5)
CheckCoercion(false,0)
CheckCoercion(null,undefined)


function Arithmetic(a,b){
    console.log(Number(a)+b)
    console.log(a-b)
    console.log(a*b)
    console.log(a/b)

}
Arithmetic("12",4)


function conditinol(a,b) {
    if( a && b ){
        console.log(true)
    }else{
        console.log(false)
    }
    
}
conditinol(null,NaN)
conditinol("ritik","tyagi")

// Type Identifications

let Numb =23;
console.log(typeof(Numb))


let str ="ritik";
console.log(typeof(str))


let val =true;
console.log(typeof(val))


let list =[23,4,7,7];
console.log(typeof(list))

let obj2 ={
    name:"Ritik",
    lastName: "Tyagi"
}
console.log(typeof(obj2))


function conditinol(a,b) {
    if( a && b ){
        console.log(true)
    }else{
        console.log(false)
    }
    
}
console.log(typeof(conditinol))

let arr3=[1,3,4,3,5,];
console.log(Array.isArray(arr3));


function checkObj(obj){
    if(obj!==null && Array.isArray(obj)===false){
        return true
    }

}
let ans=checkObj({
    name:"rishabh",
    age:25,
})
console.log(ans)


//for loop

for(i=0;i<5;i++){
    console.log("masai school")
}

//nested with arr
let arr4=[1,2,3,4,5]
for(i=0;i<arr4.length;i++){
    let box=[]
    for(j=0;j<arr4.length;j++){
        box+=arr4[j];
    }console.log(box)
}


//switch case
let animal="tiger";
switch (animal) {
    case "lion":
        console.log("loin")
        break;
    case "zebra":
        console.log("zebra")
        break;
    case "cat":
        console.log("cat")
        break;
    case "tiger":
        console.log("tiger")
        break;
    case "monkey":
        console.log("monkey")
        break;

    default:
        break;
}
// while
let m = 0;
while (m<5) {
    console.log("hello!")
    m++
    
}

//do while loop

let r=0;
do {
    console.log("hii i am do while loop")
    r++
    
} while (r<5);


