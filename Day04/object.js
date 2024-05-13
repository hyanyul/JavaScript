/* 
   object: key - 'value'
*/

const name = 'adam';
const age = 4;

// 1. function
function print(name, age) {
  console.log(name);
  console.log(age);
}

// 2. object
const obj1 = {};            // object literal syntax
const obj2 = new Object();  // object constructor syntax

const scott = {name: 'scott', age: 20};   // 클래스가 없어도 객체 생성가능
console.log(scott);
scott.gender = true;    // 외부에서 속성(프로퍼티) 추가 가능
console.log(scott.gender);
delete scott.gender;
console.log(scott.gender);


console.clear();
console.log(scott.name);      // 프로그램 작성할 때 보편적으로 사용하는 형태
console.log(scott['name']);   // 동적인 경우 사용하는 형태

function printValue(obj, key) {
  console.log(obj.key);
  console.log(obj[key]);

}

printValue(scott, 'name');

// in
console.log('name' in scott);
console.log('age' in scott);
console.log('random' in scott);
for (key in scott) console.log(key);

const array = [1, 2, 3, 4, 5];
for(value of array) console.log(value); // for(of)의 경우 배열형태일 때 사용핧 수 있다.
for(value in array) console.log(value); // 인덱스 출력

// cloning copy
const user = {name: 'ellie', age: 19};
const user2 = user;
console.log(user);
console.log(user2);

user2.name = 'alis';
console.log(user);
console.log(user2);

const user3 = {};
Object.assign(user3, user);
console.log(user3);
user2.name = 'adam';
console.log(user);
console.log(user2);
console.log(user3);

const fruit1 = {color: 'red'};
const fruit2 = {color: 'blue', size: 'mid'}
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);