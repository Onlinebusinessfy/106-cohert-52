function hello(){
    console.log("Hello there");
}

function main(){
    console.log("Hello I am the main");
    hello();
}

window.onload=main;