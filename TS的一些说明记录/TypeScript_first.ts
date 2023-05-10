//基础的使用

// function getters(person:string){
// 	return "hello ,"+person;
// }
// let user="alvis";

// document.body.innerHTML=getters(user);



// interface Person{
// 	firstName:string;
// 	lastName:string;
// }

// function greeter(person:Person){
// 	return "Hello, "+person.firstName+" "+person.lastName;
// }

// let user =new Student("alvis",'liu','user');
// document.body.innerHTML=greeter(user);


// 面相对象
//创建一个Student的类(在构造函数的参数上使用public等同于创建了同名的成员变量。)
// class Student{
// 	fullName:string,
// 	constructor(public firstName:string,public middleName:string,public lastName:string){
// 		this.fullName=firstName+''+middleName+''+lastName;
// 	}
// }



//------------------------------------------------- 基础类型的说明----------------------------------------------------------------------------------//

//定义一个布尔值
let isFinish:Boolean=false;

//定义数字
let numIn:number=6;


//字符串(可以使用模版字符串进行拼接)
let name:string="alvis";

let name:string=`alvis`;
let name:number=37;
let sentence:string=`hello,my name is ${name}.
I will be ${age+1} years old next month`




//定义数组
let list:number[]=[1,2,3];
let list:Array<number>=[1,2,3];

// 元组 Tuple(元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。 比如，你可以定义一对值分别为 string和number类型的元组。)

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
x = [10, 'hello']; // Error


//枚举
//enum 类型是对JavaScript标准数据类型的一个补充。 
//像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。

enum Color={Red,Green,Blue}
let c:Color=Color.Green;

//默认情况下，从0开始为元素编号。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1开始编号：

enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;

// 或者，全部都采用手动赋值：
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;

// 枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：

enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

console.log(colorName);  // 显示'Green'因为上面代码里它的值是2

// any 类型

//有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量：

// viod:某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 

function warnUser():void{
	console.log("this is best way")
}

//声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：

let unusable: void = undefined;
//Null 和 Undefined
//TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。 和 void相似，它们的本身的类型用处不是很大：

// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;


// Never类型

/**never类型表示的是那些永不存在的值的类型。 例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。

never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。

下面是一些返回never类型的函数：**/

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}




//Object类型

//object表示非原始类型，也就是除number，string，boolean，symbol，null或undefined之外的类型。

//使用object类型，就可以更好的表示像Object.create这样的API。例如：

declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error


// 类型断言
/**有时候你会遇到这样的情况，你会比TypeScript更了解某个值的详细信息。 通常这会发生在你清楚地知道一个实体具有比它现有类型更确切的类型。

通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。 TypeScript会假设你，程序员，已经进行了必须的检查。

类型断言有两种形式。 其一是“尖括号”语法：***/

let someValue:any="this is my best";
let strLength:number=(<string>someValue).length;

//或者另外的写法

let someValue:any="this is a string";
let strLength:number=(someValue as string).length;

/**两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，
 * 当你在TypeScript里使用JSX时，只有 as语法断言是被允许的。**/




// 关于 let const var 在ts中的作用域的一些说明

function f(input:Boolean){
    let a=100;
    if(input){
        let b=a+1;
        return b
    }

    return b
}










































































