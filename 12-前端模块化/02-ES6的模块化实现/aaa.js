let name = "小明"
let age = 18
let flag = true

function sum(num1,num2){
    console.log(num1 + num2)
}

//导出方式一
export{
    flag , sum 
}

//导出方式二
export let num1 = 1000
export let height = 1.88

//导出函数/类
export function mul(num1,num2){
    console.log(num1*num2)
}

export class Person{
    run(){
        console.log("奔跑吧")
    }
}

//export default
export default function(aaa){
    console.log(aaa)
}
