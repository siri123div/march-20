// console.error("Is is an error")
// console.warn("Its a warning" )
// // console.alt("alert")
// console.info("It is an useful info" )


// let arr =[10,20,30,40,50];
// let obj ={
//         a:3,
//         b:6,
//         c:10,
//         x:40,
//         y:30,
//         z:90
// }
// console.table(arr)
// console.table(obj)

// arr1 =[3,6,7,8,1,2,3];
// let arr2=arr1.sort();
// console.log(arr2);

// let arr =[13,25,11,22,101];
// console.log(arr.sort((a,b)=>b-a));

// let a =[10,20,30,40,50,60,70];
// console.log(a.sort())                    ascending order
// let b =[10,20,30,40,50,60,70];
// console.log(b.reverse())                  discending order

// let arr =[1,2,3,4,5,6,7,8,9,10];
// let arr1=arr.some((ele,ind)=>{
//     return arr[ind]>=11
// })
// console.log(arr1)


// let arr2 =[1,2,3,4,5,6,7,8,9,10];
// let arr3=arr2.every((ele,ind)=>{
//     return ele<=9
// })
// console.log(arr3)


// let a =[1,2,3,4,5,6,7,8,9,10];
// let b=a.find((ele)=>{
//     return ele>=10
// })
// console.log(b)


// let arr4 =[1,2,3,4,5,6,7,8,9,10];
// let arr5=arr4.findIndex((ele)=>{
//     return ele>=10
// })
// console.log(arr5)

// // Reduce method
// let arr6 =[1,2,3,4,5,6,7,8,9,10];
// let arr7=arr6.reduce((ele,ind,arr)=>ele)
// console.log(arr7)






let arr=[4,2,7,1,9]
let arr1=arr.sort()
console.log(arr1)
let a=[1.2,4,7,9]
console.log(a.reverse())

let s =["banana","apple","cherry","date"];
console.log(s.sort())
console.log(s.reverse())
let V = [
    { name: "John", age: 25 }, 
    { name: "Alice", age: 30 }, 
    { name: "Bob", age: 20 }]
console.log(V.sort((a,b)=>b.age-a.age))
                                       
let S=[10,20,30,40,50];
let S1=S.find((ele)=>{
    return ele>25
 })
console.log(S1)

let C=["apple", "banana", "orange","blackberry", "grape"]
let k="b";

let b=C.find((ele)=>{
    return ele.startsWith (k) 
})
console.log(b)

let P=[15, 25, 35, 45, 55];
let P1=P.findIndex((ele,ind)=>{
    if(ele%10==0)
    return ind;
})
console.log(P1)

// let arr= [3, 7, 8, 12, 15]
// let arr1=arr.some((ele)=>{
    
// })
// console.log(arr1)


let G=[
        { name: "John", age: 25 }, 
        { name: "Alice", age: 30 }, 
        { name: "Bob", age: 20 }]
       let G1=G.some((ele)=>{
        if(ele.age>18);
        return ele;
       }) 
       console.log(G1)


let K=["apple", "banana", "grape", "kiwi"];
let K1="b"
let K2=K.some((ele)=>{
    return ele.startsWith(K1)
})
console.log(K2)

let A =[5, 10, 15, 20, 25]
let A1=A.reduce((a,b)=>a+b)
console.log(A1)


let B=["Hello", " ", "world", "!"]
let B1=B.reduce((acc,next)=>acc+next)
console.log(B1)

