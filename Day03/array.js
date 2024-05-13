// 배열
// 1. new 키워드를 통한 배열 생성
const arr1 = new Array();   // 배열 생성(new 키워드)
// new 키워드: 생성자 호출

// 2. 초기화 시 배열 원소 줌
const arr2 = [1, 2, 3, 4, 5];

// 배열 출력 시 주소가 아닌 내용 바로 출력됨
console.log(arr2);

const fruits = ['🍑', '🍒'];
console.log(fruits);

// for문을 통한 배열 출력
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

// for of문을 통한 배열 출력(인덱스 사용 불가)
for(let fruit of fruits){
    console.log(fruit);
}

// forEach
fruits.forEach(function (fruit, index, array){  // 함수 이름 없음(익명객체)
    console.log(fruit, index, array);
});     // callback 함수(함수를 매개변수로 가지는 함수)
// 함수: 데이터를 원하는 형태로 가공함
// callback 함수 - 원하는 다양한 형태로 데이터를 가공하기 위해 사용

fruits.forEach((fruit, index) => {  //애로우 함수, (입력)을 받아서 =>(arrow, 화살표)를 통해 {함수}로 전달해서 실행
    console.log(fruit, index);
});

fruits.forEach((fruit) => console.log(fruit))

// 배열의 삭입, 삭제
let arr3 = [1, 2, 3, 4, 5];
console.log(arr3.length);
arr3.push(10);  // 배열 제일 뒤에 원소 추가
console.log(arr3);
arr3.unshift(0);
console.log(arr3);  // 배열 제일 앞에 원소 추가

arr3.pop();   // 배열 제일 마지막 원소 삭제
console.log(arr3);
arr3.shift();   // 배열 제일 처음 원소 삭제
console.log(arr3);
// 배열: 주로 검색을 담당

// slice
console.log(fruits);
fruits.push('🍉', '🍊', '🍇', '🍈');
console.log(fruits);
fruits.splice(1, 1);    // 배열.splice(a, b) -> a번 인덱스부터 b개 삭제
console.log(fruits);

fruits.splice(1, 1, '🍄', '🥔');    // 원소 삭제한 자리에 대체
console.log(fruits);

// concat
const food = ['🍦', '🍨', '🧁', '🍰'];
const newFood = food.concat(fruits);
console.log(newFood);

// searching
console.clear();
console.log(fruits);
console.log(fruits.indexOf('🍊'));  // 원소 있으면 인덱스 번호, 없으면 -1 리턴

console.log(fruits.includes('😆'));     // 해당 원소가 배열에 존재하는지 확인하고 t/f 반환

