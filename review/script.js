/*
//內建方法console.log() => 在控制台顯示
console.log("hello js")
console.log("hi js")

//變數宣告 (var,const,let)
let name="codeshiba"
console.log(name);

let scentence="今天過得如何 很高興見到你"
console.log(name + scentence);

//內建方法 prompt() 與 alert()
fruit=prompt("你最喜歡的水果是什麼?")
//console.log(fruit);
alert(fruit);*/

//第一個程式 小費計算機
let food = parseInt(prompt("這餐食物花費多少錢"));
let tipPercerntage = parseInt (prompt("小費有幾%")/100);
let tipAmount = food * tipPercerntage;
let total = food + tipAmount;

console.log("小費金額:" + tipAmount);
console.log("總金額:" + total);