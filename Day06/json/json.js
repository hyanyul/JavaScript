// 1. boolean to JSON
let json1 = JSON.stringify(true);
console.log(json1);

// 2. array to JSON
let json2 = JSON.stringify(['apple', 'banana']);
console.log(json2); // ["apple","banana"], string 쌍따옴표("")로 묶임

// 객체는 {}로 묶어서 표현, 배열은 []로 묶어서 표현
[ 1, true, 'str', {inkey: "value"}, null ];
// 숫자
{ key: 1 };
// 문자열
{ key: "str" };
// 오브젝트
{ key: {inkey: "value"} };
// null
{ key: null }

// 3. object
const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${this.name} can jump`);
    }
};

let json3 = JSON.stringify(rabbit);
console.log(json3);
// {"name":"tori","color":"white","size":null,"birthDate":"2024-05-14T01:34:44.890Z"}
// 함수 변환 안됨, 함수 => 데이터 x, 데이터를 가공하기 위한 프로그램
// symbol도 변환 안됨

// 원하는 프롬퍼티만 선택하여 출력
let json4 = JSON.stringify(rabbit, ['name', 'color']);
console.log(json4);

// 콜백
let json5 = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return value;
});

// 4. JSON to object
const obj1 = JSON.parse(json5);
console.log(obj1);

console.log(rabbit.birthDate.getDate());
console.log(typeof(rabbit.birthDate.getDate()));    // number
console.log(obj1.birthDate);
console.log(typeof(obj1.birthDate));    // string

const obj2 = JSON.parse(json5, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});

console.log(obj2.birthDate);
console.log(obj2.birthDate.getDate());