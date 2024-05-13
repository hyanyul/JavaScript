const liElement = document.getElementsByClassName("a");
console.log(liElement);

for(let i=0; i<liElement.length; i++){
    console.log(liElement[i].textContent);
}

for(const liEle of liElement){
    console.log(liEle.textContent);
}