const display1El = document.querySelector(".display-1");
const display2El = document.querySelector(".display-2");
const tempResultEl = document.querySelector(".temp-result");
const clearAllEl = document.querySelector(".all-clear");
const clearLastEl = document.querySelector(".last-entity-clear");
const operationEl = document.querySelectorAll(".operation");
const numbersEl = document.querySelectorAll(".number");
const equalEl = document.querySelector(".equal");

let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

numbersEl.forEach((number) => {
  number.addEventListener("click", (e) => {
    // 소수점 중복 방지
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }
    // display-2에 입력 숫자 표시
    dis2Num += e.target.innerText;
    display2El.innerText = dis2Num;
  });
});

operationEl.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    // 숫자 및 소수점 확인
    if (!dis2Num) result;
    haveDot = false;
    const operationName = e.target.innerText;
    if (dis1Num && dis2Num && lastOperation) {
      mathOperation();
    } else {
      // string을 number로 바꿔줌
      result = parseFloat(dis2Num);
    }
    clearVar(operationName);
    lastOperation = operationName;
    console.log(result);
  });
});

// 계산 중간에 display-2를 비우고 그 값을 display-1로 옮겨서 보여줌
function clearVar(name = "") {
  dis1Num += dis2Num + " " + name + " ";
  display1El.innerText = dis1Num;
  display2El.innerText = "";
  dis2Num = "";
  tempResultEl.innerText = result;
}
