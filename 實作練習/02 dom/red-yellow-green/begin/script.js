/* 🚀🔥
黃綠紅 你要哪一個？

此專案涵蓋的概念
- DOM 操作
- 事件監聽器
- 迴圈 forEach 
- 變數
- 條件語句 (if else if)
- 樣板字面值
*/


// 將 title 文字改成 '報告阿柴，標題已經切換！' 並將字體顏色改成藍色
function changeTitle(){
  let titlediv = document.getElementById("title")
  let message="標題已經成功切換"
  titlediv.innerText = message;
  
}

const squares = document.querySelectorAll('.colorSquare')
const output =document.getElementById("output")
// 將每個元素綁定
squares.forEach(square => {
  square.onclick = () => {
    _id = square.getAttribute("id");
    output.innerHTML = `<div class='colorSquare' id="${_id}">${_id}</div>`
    
  }
})

function resetScore() {

}

let changeButton = document.getElementById("changeButton");
changeButton.addEventListener("click",clickEventHandler);

function clickEventHandler(){
  let titlediv = document.getElementById("title");
  let message="標題已經成功切換"
  titlediv.innerText = message;
}

const resetGameBtn = document.getElementById('reset')
// 綁定 reset 事件
resetGameBtn.onclick = () => resetScore()

