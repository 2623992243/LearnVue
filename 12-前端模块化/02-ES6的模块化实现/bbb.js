//1、导出的{}中定义的变量
import {flag,sum} from "./aaa.js";

if(flag){
    console.log("小明无敌");
    sum(10,50);
}

//2、直接导入export定义的变量
import {num1,height} from "./aaa.js";
console.log(num1)
console.log(height)

//3、导入的export的function/class
import {mul,Person} from "./aaa.js";
mul(10,80)

let p = new Person()
p.run()

//导入export default
import aaa from "./aaa.js";
aaa("hahha")

//统一全部导入
import * as bbb from "./aaa.js";
console.log(bbb.flag)
console.log(bbb.height)