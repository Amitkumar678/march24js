// const arr =['amit','kumar']
// const arr2=arr [0][3]
// console.log(arr2);

// function abc(){
//     return('amit');
// }
// var result=abc()
// console.log(result);
// function abc(a){
//     console.log('hello'+" "+a);
// }
// abc('abcd')
// var abc=function(){
//     console.log('name');
// }
// abc()
// const sum= new Function('a','b','return a+b')
// console.log(sum(2,5));

// (function name(a,b){
//     console.log('name'+ (a+b));
// })(5,10)

//first class fuction
// var name=function(){
//     console.log('amit');

// }
// name()

// function wishhi(){
//     console.log('hello');
// }
// function greet(wishhi,name){
//    console.log(wishhi(),name);
// }
// greet(wishhi,'abcd')
// function abc(){
//     return function xyz(){
//         console.log('hello');
//     }
// }
// abc()()
// function abc(param){
//     param()
// console.log('hello');
    
// }
// function xyz(){
// console.log('world');
// }
// abc(xyz)
function abc(){
    return function xyx(){
        console.log('hello world');
    }
}
var result =abc()
result()

