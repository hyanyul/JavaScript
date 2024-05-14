// state: pending -> fulfilled / rejected
// 1. producer
// promise를 생성하는 순간에 자동으로 실행됨, 호출없이 실행
const promise = new Promise((resolve, reject) => {  // 성공하면 resolve, 실패하면 reject 실행됨
    console.log('doing something.'); 
});

let promise1 = new Promise((resolve, reject) => {
    console.log('doing something..');
    setTimeout(() => {
        resolve('adam');    // 실행이 정상적으로 완료되면 resolve 호출
    }, 2000);
});
promise1.then((value) => {
    console.log(value);
});