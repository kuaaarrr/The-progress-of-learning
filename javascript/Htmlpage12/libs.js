let add = function (n1, n2) {
    console.log(n1 + n2);
};
let mult = function (n3, n4) {
    console.log(n3 * n4);
};
let math = {
    add: add, mult: mult
};
export default math;
export {add, mult};



/*
let x = "hello";
//export default x;
//非預設的輸出
let data = [ 5, 6, 7];
let obj = { x: 10, y: 2 };
//export { obj, data };
export { x as default, obj, data };
*/