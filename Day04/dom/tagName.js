/*
 *  HTML 문서 전체에 적용: document.getElementByTagName(name);
 *  특정 요소 내 적용: element.getElementByTagName(name);
 *  반환값은 태그 이름에 해당하는 모든 요소를 HTMLCollection 객체로 반환
 */

/*
 * HTMLCollection 객체를 반환하는 메서드
 * 1. getElementByTagName(): 태그 이름과 일치하는 모든 요소를 찾아서 HTMLCollection 객체로 반환
 * 2. getElementByClassName(): 
 * 3. GetElementById()
 * 
 * querySelector(): CSS선택자와 일치하는 첫번째 요소의 객체를 반환, 없으면 null 반환
 * querySelectorAll(): CSS선택자와 일치하는 모든 요소 객체를 반환(중복 모두 반환)
 */

const liElements = document.getElementsByTagName("li");
console.log(liElements);

for (const liElement of liElements) {
  console.log(liElement.textContent);
}

for (let i = 0; i < liElements.length; i++) {
  console.log(liElements[i].textContent);
}

const arr = [...liElements];    // 스프레드 문법으로 배열 객체 만듦
arr.forEach((li) => {
  console.log(li.textContent);

}
    )