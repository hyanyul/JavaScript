// <li> 첫번째 요소에 접근
// document.querySelector("li").style.backgroundColor = 'red';

const btn = document.querySelector("#myButton");
btn.addEventListener("click", () => {   // click 타입을 받으면 실행
    alert("버튼이 클릭되었습니다.");
});