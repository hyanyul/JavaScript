// synchronous
console.log('1');
console.log('2');
console.log('3');
console.log('4');
console.log('5');

// async
console.log('1');
setTimeout(() => {
    console.log('2')
}, 1000);
console.log('3');

function printImmedi(print){
    print();
}

printImmedi(() => console.log("Hello"));

function printDelay(print, timeout){
    setTimeout(print, timeout);
}

printDelay(() => console.log('async callback'), 3000)