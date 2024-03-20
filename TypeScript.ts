// ===CMD Snippets===
// compile ts to js ES5: tsc script.ts
// compile & watch: tsc script.ts --watch
// help: tsc --help

// -----------------------------------------------------------------------
// ===TS Snippets===
// -(Data Types)
/*
1- Built-in Types:
number (includes float and int), string, boolean, function, object

2- User-defined Types:
class, enums, interface

3- Any Type: General Data Type
*/
(function(){
    let str:string = "Zikas";
    let num1:number = 9;
    let num2:number = 9.53;
    let bool:boolean = true;
    let obj:object = {
        x: "x",
        y: 23
    };
    // - array
    let arr:[] = []; // enforce an array to be empty
    let arr1:string[] = ["A", "B"];
    let arr2:number[] = [1, 2];
    let arr3:object[] = [{}, {}];
    // - tuple (key:string, value: number)
    let arr4:[string, number] = ["A", 1]; // length is set to 2
    // - any type
    let any:any = "str";
    any = [];
    // - union type - Multiple types
    let result: string|number|null = null;

    let ele: HTMLElement|null = document.getElementById("");
    ele?.getAttribute(""); //?. in case of null

    let eles2: HTMLCollection = document.getElementsByClassName("")
    eles2[0].getAttribute("");

    // - function
    let fn:Function = ()=>{

    }
    // - set data types in function
    function foo(name:string, age:number){

    }
    foo("", 1); // must pass 2 params
    // - function types (Return types)
    function foo1(name:string):void{
        console.log(name); // void function    
    }
    foo1("");
    function foo2(name:string):string{
        return name; // return string       
    }
    foo2("");
    function foo3(fname:string, lname:string):string[]{
        return [fname, lname]; // return array of string       
    }
    foo3("", "");
    // - set default param & optional param
    function foo4(fname:string="", lname?:string):string[]{
        return [fname]; // return array of string       
    }
    foo4();
})();


// -(Generics): Generics in TypeScript allow you to create reusable components that can work with a variety of data types. It's like a placeholder for a type that is specified when the component is used, enabling you to write flexible and type-safe code.
(function(){
    let arr:Array<object> = [{}, {}]; // = et arr:object[] = [{}, {}];
    let arr1:Array<string> = ["", ""]; // = et arr:string[] = ["", ""];

    let eles: NodeListOf<Element> = document.querySelectorAll("");
    eles[0].getAttribute("");
    let ele1:Element = eles[0];
    ele1.getAttribute("");

    let eles1: HTMLCollectionOf<Element> = document.getElementsByClassName("")
    eles1[0].getAttribute("");

    // - Generics Concept
    function printName(name: string):string{
        return name;
    }
    function printPrice(price: number):number{
        return price;
    }
    function printData<dataType>(data:dataType):dataType{
        return data;
    }
    printData<string>("s");
    printData<number>(1);
    printData<number[]>([1,2,3]);
    function printData1<dataType>(data:dataType, note?:any):void{
        console.log(data);
    }

    // - use case in React
    // useState is Generic, so i can pass the data type of state to it.
    // let [productsList, setProductsList] = useState<object[]>([]);
})();


// -(Interface): Interfaces in TypeScript define a contract for how objects should be structured. They specify the properties and methods that an object must have, without providing an implementation. Interfaces help ensure that objects meet certain requirements and enable better code organization and maintainability through abstraction.
(function(){
    // 1- Define Interface
    interface product{
        name:string;
        price:number;
        id?:number|string;
        printProduct?: () => string;
    }
    // - Array of Interface
    let productsList: product[] = [
        {name:"", price:1},
        {name:"", price:2}
    ]
    // 2- Do the same but using class
    class Product1{
        name:string = "" // we can set it to initial value
        price:number
        id?:number|string
    }
    let productsList1: Product1[] = [
        {name:"", price:1},
        {name:"", price:2}
    ]
    let productsList_1: Product1 = new Product1();
    // 3- Do the same but using type
    type product2 = {
        name:string
        price:number
        id?:number|string
    }
    let productsList2: product2[] = [
        {name:"", price:1},
        {name:"", price:2}
    ]
    // - use case
    // In practical: We create an interface for the user and an interface for the product, and so on. Each data has its own interface, and these files are placed in a separate folder.
    // - in case of object nested inside object
    interface category{
        id:number
        name:string
    }
    interface product3{
        name:string
        price:number
        id?:number|string
        // set it to category interface
        category:category
    }
    let productsList3: product3[] = [
        {name:"", price:1, category:{
            id:1,
            name:""
        }},
    ]
    interface productsData{
    }
    async function getProducts(){
        // let req = await fetch("");
        // let reqData:productsData = await req.json();
        // let productsList:product[] = reqData.data;
    }
})();


// What is the difference between interface, type and class in TypeScript?
/*
1- class is compiled to JS Constructor fn. while interface & type not.
// Disadvantage of class: because it will compile unnecessary code
2- class can take initial value. while interface & type not.
3- differences in inheritance.
*/


// -----------------------------------------------------------------------
// -(Enum): Enums in TypeScript provide a way to define a set of named constants. They allow you to create a group of related values that can be assigned to a variable, making your code more readable and expressive. Enums are particularly useful when you have a fixed set of options or when you need to represent a range of related values.
enum Color{}
let carColor: Color;

enum Color1{Red, Green, Blue}
console.log(Color1.Red); // 0
console.log(Color1.Green); // 1
/*
Default value:
Red = 0
Green = 1
Blue = 2
*/

// To change/override Default values:
enum Color2{Red='r', Green='g', Blue='b'}
console.log(Color2.Red); // r
console.log(Color2.Green); // g

function printColor(c: Color2){
    switch (c){
        case "r": console.log("red");
        case "g": console.log("green");
        case "b": console.log("blue");       
    }
}
printColor(Color2.Green);


// when i change value, i have to change all following values
enum Color3{Red, Green='g', Blue='b'}
// -----------------------------------------------------------------------