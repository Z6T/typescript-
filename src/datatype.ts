
// 原始类型
let bool: boolean = true;
let num: number = 123;
let str: string = 'str';

// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]
// let arr2 :Array<number> = [1,2,3,'4']  报错

// 联合类型，数组既可以number也可以是string
let arr3: Array<number | string> = [1, 2, 3, '4'] 

// 元组：限定了数组元素的类型和个数
let tuple1: [number,string] = [1,'2'];
// let tuple2: [number,string] = [1,2]; 类型不同
// let tuple3: [number,string] = [1,'2',3]; 个数不同

// 可以通过push来添加新的元素，但是不可以通过tuple[2]来访问
// 真实开发不建议这么做
tuple1.push(3);
console.log(tuple1);
// 函数
// 1. 直接声明
let add = (a:number,b:number)=>(a+b)
// 2. 先声明再进行定义
let compute:(x:number,y:number) =>number;
compute = (a,b) =>(a+b)
