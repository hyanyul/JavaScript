console.log("Hello JavaScript2");
console.log("Hi JavaScript3");

/* 변수
    <특징>
        타입 없음
        전부 참조 변수
        런타임때 타입 결정됨
        런타임 중간에 타입 바뀌면 상상치 못한 결과 나옴
        -> 보완 위해 나온게 타입 스크립트(type script)
    <선언>
        3개 키워드(var, let, const) 사용(var 잘 안씀)
         * 변수 호이스팅: 선언부를 가장 먼저 찾아서 실행시킴(선언을 밑에 적어도 정상적으로 작동)
         - let: 지역 변수, 재선언 불가, 호이스팅 시 초기화 불가 <-> var
         - const: 상수
*/ 

// let name = 'adam';
// console.log(name);

// console.log(age);
// age = 5;
// var age;    // 호이스팅 시 초기화 가능

// name1 = 4;
// let name1;  // 호이스팅 시 초기화 불가

// 전역변수(사용 자제, 키워드 없이 사용하면 전역변수 됨)
n = 10;
console.log(n);

let n1 = 100;
console.log(n1);

{  
    // name: {} 안에서만 사용할 수 있는 지역변수
    let name = "scott";
    console.log(name);
    name = "adam";
    console.log(name);
    console.log(n);     // 전역변수
    console.log(n1);    // 전역변수
}

console.log(name);  // 지역변수, 스코프를 벗어나면 사용 불가

// 변수 호이스팅
var a;
console.log("a의 값은 " + a);
console.log("b의 값은 " + b);
var b;

// console.log("c의 값은 " + c);
// let c;

let d;
console.log("d값: " + d);

console.log( x === undefined);  // ===: 일치연산자, true 출력됨
var x = 3;  // undefined 

var myvar = "my value";
console.log(myvar);

(
    function (){
        console.log(myvar);     // undefined 출력됨
        console.log(100);
        var myvar = "local value";
        var m1 = "local";   // 지역변수
    }
)();

console.log(myvar);
// console.log(m1);     // 지역변수라 사용 불가

// 함수 호이스팅
sayHello();
function sayHello(){
    console.log("Hello");
}

// 동적으로 타입변환되기 때문에 다른 타입 넣을 수 있음
let name2 = 'scott';
console.log(name2);
name2 = 1200;
console.log(name2);
name2 = "hong";
const message = `My name is ${name2}`
console.log(message);

// number, string, boolean, null, undefined, symbol, obj
console.log(typeof(100));   // typeof(): 타입 확인
let pi = 3.14;
console.log(typeof(pi));    // number: -2^53 ~ 2^53

let nothing = null;
console.log(`value: ${nothing}, type: ${typeof(nothing)}`);
// value: null, type: object

let x1;
console.log(`value: ${x1}, type: ${typeof(x1)}`);
// value: undefined, type: undefined

const infinity = 1/0;
console.log(`value: ${infinity}, type: ${typeof(infinity)}`);
// value: Infinity, type: number

const negativeInfinity = -1/0;
console.log(`value: ${negativeInfinity}, type: ${typeof(negativeInfinity)}`);
// value: -Infinity, type: number

const nAn = 'not a number' / 2;
console.log(`value: ${nAn}, type: ${typeof(nAn)}`); 
// value: NaN, type: number

// String("", '' 상관없음)
const char = 'a';
const smith = 'smith';
const greeting = "Hello" + smith;
console.log(`value: ${char}, type: ${typeof(char)}`);   // value: a, type: string
console.log(`value: ${smith}, type: ${typeof(smith)}`);     // value: smith, type: string
console.log(`value: ${greeting}, type: ${typeof(greeting)}`);   // value: Hellosmith, type: string

const num = 18;
const msg = 18 + 'old';
console.log(msg);
const i = '나 성지쓰 ';
const age = 24;
console.log(i + age + "살인디");

// boolean
// false: 0, null, undefined, NaN
// true: any other value(기준 false)

// symbol
const str1 = "strId";
const str2 = "strId";
console.log(str1 === str2);     // true

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1);
console.log(symbol2);
console.log(typeof(symbol1));  // symbol(symbol 타입 존재)
console.log(symbol1 === symbol2);   // false

const symbol3 = Symbol.for('id');
const symbol4 = Symbol.for('id');
console.log(symbol3);
console.log(symbol3 === symbol4);   // ture

// 래퍼 클래스 통해 객체화 됨
let str = "javascript";
let len = str.length;   // 디폴트 자료형이 자동적으로 래퍼 클래스로 변형이 되어 사용됨
console.log(len);

let text = "hello";
console.log(text.charAt(0));    // text의 0번째 인덱스 출력
console.log(`value: ${text}, type: ${typeof(text)}`);   // value: hello, type: string
text = 1;
console.log(`value: ${text}, type: ${typeof(text)}`)    // value: 1, type: number
// console.log(text.charAt(0));    // spring -> number 돼서 에러 뜸
text = '10' + 5;
console.log(`value: ${text}, type: ${typeof(text)}`);   // value: 105, type: string
// 문자열 + 정수 -> 정수가 문자열로 바뀜
text = '22' / '2';
console.log(`value: ${text}, type: ${typeof(text)}`);   // value: 11, type: number
// String이 number로 바뀜

// 자바 스크립트는 동적 타입

// const
const bird = {species: "kestrel"};
console.log(bird.species);
bird.species = "Striated Caracara";
console.log(bird.species);

// 형변환
console.log(String(30), String(true), String(false));
console.log(String(null));
console.log(Number('12345'));

/* 출력방법
    1. console.log  - 콘솔창에 출력
    2. document.wirte()   - 웹페이지 문서에 출력
    3. alert()  - 윈도우 메시지창(알림창)에 출력
    4. innerHTML    - 웹페이지 출력
*/

/* 버튼 통한 입력방법
    1. alert()
    2. prompt()
*/

// const name5 = prompt('이름 입력');
// alert('반갑습니다 ' + name5 + '님');

/* 확인
    1. confirm()
*/

// 두 개의 정수를 입력받아 더하시오.
const num1 = Number(prompt('정수 1 입력'));
const num2 = Number(prompt('정수 2 입력'));
const num3 = num1 + num2;
alert("두 정수의 합은 " + num3 + "입니다.");