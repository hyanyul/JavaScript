// 일치 연산자
let num = 10;
let str = '10';

if(num == str) console.log('동일'); // 값만 비교, true
else console.log('다름');

if(num === str) console.log('도옹일');  // 값, 타입 동시 비교, false
else console.log('다아름');

console.log(0 == false);    // true
console.log(0 === false);   // false
console.log('' == false);   // true
console.log('' === false);  // false
console.log(null == undefined);     //true
console.log(null === undefined);    // false
// ==: 동등 연산자, ===: 일치 연산자

// 제어문
// 1. 선택
// if
const name = 'smith'; 
if(name === 'adam'){    // 대소문자 구별
    console.log("Welcome Adam!");
} else if(name == "scott"){
    console.log("Wellcome Scott");
} else{
    console.log("unknown");
}

console.log(name === 'smith' ? 'yes' : 'no');

// switch
const browser = 'Chrome';
switch (browser){
    case 'IE':
        console.log('Microsoft');
        break;
    case 'FireFox':
        console.log('Mozilla');
        break;
    case 'Chrome':
        console.log("Google");
        break;
    default:
        console.log("unknown");
}

// 입력한 숫자가 3의 배수인지 확인하는 프로그램 작성
// while(true){
//     let inputNum = prompt('정수 입력');
//     if(inputNum === null){
//         alert("취소했습니다.");
//         break;
//     } else if(inputNum === ''){
//         alert("아무값도 입력되지 않았습니다.");
//     } else if(isNaN(inputNum) ){
//         alert("정수만 입력해주세요.");
//     } else{
//         inputNum = Number(inputNum);
//         if(Number.isInteger(inputNum)){
//             if(inputNum % 3 === 0 && inputNum != 0){
//                 alert(`${inputNum}은 3의 배수입니다.😁`);
//                 break;
//             } else{
//                 alert(`${inputNum}은 3의 배수가 아닙니다.😅`);
//                 break;
//             }
//         } else{
//             alert("정수만 입력해주세요.");
//         }
//     }
// }

// document: defer이랑 연동 잘 안됨
//  -> 키워드 없이 작성하거나 document.open(), document.close()로 시작점과 끝점 표시
// let session = prompt("관심 세션을 선택해주세요. 1. 마케팅, 2. 개발, 3. 디자인");
// switch(Number(session)){
//     case 1:
//         document.write("<p>마케팅 세션은 <strong>201호</strong>에서 진행됩니다.</p>");
//         break;
//     case 2:
//         document.write("<p>개발 세션은 <strong>203호</strong>에서 진행됩니다.</p>");
//         break;
//     case 3:
//         document.write("<p>디자인 세션은 <strong>205호</strong>에서 진행됩니다.</p>")
//         break;
//     default:
//         document.write("잘못 입력하셨습니다. 1~3 중 하나를 입력해주세요.");
// }

// 2. 반복문
// for
// for(let i=5; i>0; i--){
//     console.log(`i: ${i}`);
// }

// let sum = 0;
// for(let i=1; i<=1000; i++){
//     sum += i;
// }

// document.open();
// document.write(`1~1000의 합: ${sum}`);
// document.close();

// let ary = [10, 20, 30, 40, 50];
// for(let i=0; i<5; i++){
//     console.log(`ary[${i}]: ${ary[i]}`);
// }
// for(let i of ary){   // 인덱스 사용 불가
//     console.log(i);
// }

// let i = 5;
// while(i>0){
//     console.log(`while: ${i}`);
//     i--;
// }

document.open();
// 1. 입력된 구구단 출력
// let choiceNum = Number(prompt("출력하고자하는 구구단 단수를 입력하세요."));
// document.write(`<${choiceNum}단><br>`);
// for(i=1; i<=9; i++){
//     document.write(`${choiceNum} × ${i} = ${choiceNum * i}<br>`);
// }

// 2. 1~9단까지 출력
// for(i=1; i<=9; i++){
//     if(i == 1){
//         document.write(`<${i}단><br>`);
//     } else{
//         document.write(`<br><${i}단><br>`);
//     }
//     for(a=1; a<=9; a++){
//         document.write(`${i} × ${a} = ${a * i}<br>`);
//     }
// }

// 3. 0~100까지 4의 배수 출력
// for(i=0; i<=100; i++){
//     if(i % 4 == 0 && i != 0){
//         document.write(i + "<br>");
//     }
// }

// 3-1. 0~20까지 4의 배수를 제외한 숫자 출력(continue)
// for(i=0; i<=20; i++){
//     if(i%4==0){ 
//         continue; 
//     }   
//     document.write(i + "<br>");
// }

// 4. 입력된 숫자만큼 카운터하시오.
// let inputNum2 = Number(prompt('숫자 입력'));
// for(let i=1; i<=inputNum2; i++){
//     document.write(i + "<br>");
// }

document.close();