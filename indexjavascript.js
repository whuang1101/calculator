// functions at the top
function add(num1,num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    return num1+num2;
}
function subtract(num1, num2){
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    return num1-num2
}
function multiply(num1, num2){
    let result = num1*num2;
    return Math.round(result*Math.pow(10,7))/Math.pow(10,7);
}
function divide(num1, num2){
    if(num2 === "0"){
        return "Error  ";
    }
    let result = num1/num2;
    return Math.round(result*Math.pow(10,7))/Math.pow(10,7);
}
function operate(num1, num2, operation){
    if (operation === "+"){
        return add(num1,num2);
    }
    else if (operation === "-"){
        return subtract(num1,num2);
    }
    else if (operation === "x"){
        return multiply(num1,num2);
    }
    else if (operation === "÷"){
        return divide(num1,num2);
    }
}
function updateScreen(){
    let display = document.querySelector(".display");
    num1_string = num1.toString()
    if(num1 > 999999999){
        display.innerHTML = "Error";
    }
    else{
        if (num1_string.length > 9){
            num1 = num1_string.slice(0, 9)
            display.innerHTML = num1;
        }
        else if(operation === "" || num2 === ""){
            display.innerHTML = num1;
        }
        else{
            display.innerHTML = num2;
        }
    }
}

// declaring variables necessary;

let num1 = "";
let num2 = "";
let operation = "";


//

let numbers = [".one",".two", ".three", ".four", ".five", ".six",
".seven" , ".eight", ".nine", ".zero", ".decimal"]

let clear = document.querySelector(".clear");

let allOperations = [".times", ".divide", ".minus", ".plus"];

let del = document.querySelector(".backspace");

let equal = document.querySelector(".equal");

let changeSign = document.querySelector(".change_sign");

let change_to_percent = document.querySelector(".change_to_percent");

//Giving buttons functions
numbers.forEach((className) =>{
    let element = document.querySelector(className);
    let display = document.querySelector(".display");
    element.addEventListener("click", () => {
        num2String = num2.toString();
        if(operation === "" && display.textContent.length < 9){
            num1 += element.textContent;
        }
        else if(operation !== "" && num2String.length < 9){
            num2 += element.textContent;
        }
        updateScreen();    
  })});

allOperations.forEach((operations)=> {
    let operator = document.querySelector(operations);
    operator.addEventListener("click", ()=> {
        if(num1 != ""){
            operation = operator.textContent;
            previous_operation = operate.textContent;
            updateScreen();
        }
    })
});

clear.addEventListener("click", () => {
    num1 = "";
    num2 = "";
    operation = "";
    updateScreen();
});

equal.addEventListener("click", () => {
    if(operation !== ""){
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        num1 = operate(num1, num2, operation);
        num2 = "";
        operation = "";
        updateScreen();
    }
});

del.addEventListener("click", () => {
    if(operation === ""){
        let num1String = num1.toString()
        let tempNum = num1String.slice(0, num1String.length-1);
        num1 = tempNum.toString();
        updateScreen();
        }
    else if (operation !== ""){
        let num2String = num2.toString();
        let tempNum = num2String.slice(0, num2String.length-1);
        num2 = tempNum;
        updateScreen();
        console.log("this is two")
    }
});

changeSign.addEventListener("click", () => {
    console.log("a");
    if(operation === ""){
        let num1String = num1.toString();
        if(num1String[0] !== "-"){
            num1 = "-" + num1String;
        }
        else{
            num1 = num1String.slice(1,num1String.length);
        }
    }
    else if (operation !== ""){
        let num2String = num2.toString();
        if(num2String[0] !== "-"){
            num2 = "-" + num2String;
        }
        else{
            num2 = num2String.slice(1,num2String.length);
        }
    }
    updateScreen();
});

change_to_percent.addEventListener("click",() => {
    if(operation === ""){
        num1 = num1 /100;
        }
    else if (operation !== ""){
        num2 = num2/100
    }
    updateScreen();
});