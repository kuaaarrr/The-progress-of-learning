function echo(msg) {
    console.log(msg);
}
function add(n1, n2) {
    console.log(n1 + n2);
}
let x = 3;
//export default 資料;
export default {
    echo: echo,
    add: add
};
    