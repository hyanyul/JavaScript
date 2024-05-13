// function
// 함수 선언(정의), 호출
// func();     // 함수 호출
// func(){     // 함수 정의
//     ~~~
// };
// function [함수명](입력){함수 내용};

// 함수 정의한 뒤 함수 호출하여 사용
// printHello();   // 함수 호이스팅
function printHello(){  // 함수 정의
    console.log("Hello");
}
printHello();   // 함수 호출

function log(message){  // 함수 정의
    console.log(message);
}
log();  // undefined 출력
log("집보내줘제발");
log(123);

function showError(){
    alert('에러 발생. 다시 시도하세요.'); 
}

// showError();
// . -> 어시창: 지원되는 내장 함수들 볼 수 있음(함수 = 객체)

function changeName(obj){   // 함수 정의
    obj.name = 'coder';
}

// const를 객체에 쓰게 되는 경우 객체 자체는 변경 불가하나 객체의 속성(내용)은 변경 가능
const ellie = {name: 'ellie'};  // ellie 객체 생성
console.log(ellie);

changeName(ellie);  // {name: 'coder'}로 바뀜
console.log(ellie);

// default parameters(ES6)
function showMessage(message, from="unknown"){
    console.log(`${message} by ${from}`);
}

showMessage("집가고싶다");  // from 입력 안해도 디폴트 파라미터 적용됨
showMessage("집가고싶다", "한");

function printAll(args){
    for(let i=0; i<args.length; i++){
        console.log(args[i]);
    }
}

printAll(['dream', 'coding', 'naevis', 'ae']);

function printAll2(...args){
    // for(let i=0; i<args.length; i++){
    //     console.log(args[i]);
    // }
    // for(let arg of args){
    //     console.log(arg);
    // }
    args.forEach((arg) => console.log(arg));
}

printAll2('dream', 'coding', 'naevis', 'ae', 1, 2);

// 함수 출력
function add(num1, num2){
    return num1 + num2;
}

const res = add(12, 4);
console.log(res);

// 함수 표현식: 이름없는 함수를 만듦(대입형 함수)
// let func = function(){}  // 함수를 변수로 사용(변수에 함수 할당)

let showHello = function (){
    console.log("Hello");
}

showHello();

let hiHello = showHello;
hiHello();

// 즉시 실행 함수: 즉시 실행되며, 단 한번만 호출되어 다시는 호출할 수 없음
let res1 = (function (){
    let a = 10;
    let b = 20;
    return a + b;
}());

console.log(res1);

// 입력 파라미터가 있는 즉시 실행함수
let res2 = (function (a, b){
    return a * b;
}(3, 5));

console.log(res2);
// 캡슐화, 이름 충돌 방지

// 화살표 함수
// let func = () => {};
const simplePrint = (function (){
    console.log("simplePrint");
});
console.log(simplePrint);   // 함수의 이름 = 포인터
simplePrint();
const simplePrint1 = () => {console.log('simplePrint1');}
simplePrint1();
const simplePrint2 = () => console.log('simplePrint2');
simplePrint2();

const sum = (a, b) => {return a+b};
console.log(sum(15, 20));

const hi = () => {alert("안녕하세요.");};
// hi();

let hi1 = (user) => {
    document.open();
    document.write(user + "님 안녕하세요.");
    document.close();
};

hi1("홍길동");

// 콜백 함수
function randomQuiz(answer, printYes, printNo){
    if(answer === "I love you"){
        printYes();
    } else{
        printNo();
    }
}

const printYes = (function (){
    console.log("Yes");
});

const printNo = (function (){
    console.log("No");
});

randomQuiz("I love you", printYes, printNo);

randomQuiz('wrong', printYes, printNo);