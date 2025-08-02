let previous = "";
let current = "";
let operator = "";
let result = "";
let pos = "";

function one() {
    if (result !== "") {
        result = "";
        previous = "";
        current = "";
        operator = "";
    }
    current += + "1";
    document.getElementById("inputField").value = current;
}

function two() {
    current += + "2";
    document.getElementById("inputField").value = current;
}

function three() {
    current += + "3";
    document.getElementById("inputField").value = current;
}

function four() {
    current += + "4";
    document.getElementById("inputField").value = current;
}

function five() {
    current += + "5";
    document.getElementById("inputField").value = current;
}

function six() {
    current += + "6";
    document.getElementById("inputField").value = current;
}

function seven() {
    current += + "7";
    document.getElementById("inputField").value = current;
}

function eight() {
    current += + "8";
    document.getElementById("inputField").value = current;
}

function nine() {
    current += + "9";
    document.getElementById("inputField").value = current;
}

function clear() {
    document.getElementById("inputField").value = "";
    current = "";
    previous = "";
    operator = "";
}

function zero() {
    current += + "0";
    document.getElementById("inputField").value = current;
}

function plus() {
    previous = current;
    operator = "+";
    document.getElementById("inputField").value = current + "+";
    current = "";
}

function minus() {
    previous = current;
    operator = "-";
    document.getElementById("inputField").value = current + "-";
    current = "";
}

function divide() {
    previous = current;
    operator = "/";
    document.getElementById("inputField").value = current + "/";
    current = "";
}

function times() {
    previous = current;
    operator = "x";
    document.getElementById("inputField").value = current + "×";
    current = "";
}

function powery() {
    previous = current;
    operator = "xʸ"
    document.getElementById("inputField").value = current + "xʸ";
    current = "";
}

function plusMinus() {
    if (pos !== "idk") {
        pos = "idk";
        document.getElementById("inputField").value = "-" + current;
    } else {
        pos = "ik";
        document.getElementById("inputField").value = current;
    }
}

function equal() {
    if (operator !== "x" && operator !== "/" && operator !== "-" && operator !== "+" && operator !== "xʸ") {
        window.alert("Please choose an operator first");
        previous = "";
        current = "";
        operator = "";
        result = "";
        document.getElementById("inputField").value = "";
        return;
    }

    let number1 = parseInt(previous);
    let number2 = parseInt(current);
    let result;

    if (pos === "idk") {
        number1 = number1 - number1 - number1;
    }

    if (operator === "+") {
        result = number1 + number2;
        previous = "";
        current = "";
        operator = "";
    }

    if (operator === "-") {
        result = number1 - number2;
        previous = "";
        current = "";
        operator = "";
    }

    if (operator === "/") {
        result = number1 / number2;
        previous = "";
        current = "";
        operator = "";
    }

    if (operator === "x") {
        result = number1 * number2;
        previous = "";
        current = "";
        operator = "";
    }

    if (operator === "xʸ") {
        result = Math.pow(number1, number2);
        previous = "";
        current = "";
        operator = "";
    }

    let result100 = result * 100;
    let rounded100 = Math.round(result100)
    let roundedResult = rounded100 / 100;
    document.getElementById("inputField").value = roundedResult;
}

document.getElementById("1").addEventListener("click", one)
document.getElementById("2").addEventListener("click", two)
document.getElementById("3").addEventListener("click", three)
document.getElementById("4").addEventListener("click", four)
document.getElementById("5").addEventListener("click", five)
document.getElementById("6").addEventListener("click", six)
document.getElementById("7").addEventListener("click", seven)
document.getElementById("8").addEventListener("click", eight)
document.getElementById("9").addEventListener("click", nine)
document.getElementById("c").addEventListener("click", clear)
document.getElementById("0").addEventListener("click", zero)
document.getElementById("=").addEventListener("click", equal)
document.getElementById("+").addEventListener("click", plus)
document.getElementById("-").addEventListener("click", minus)
document.getElementById("/").addEventListener("click", divide)
document.getElementById("x").addEventListener("click", times)
document.getElementById("py").addEventListener("click", powery)
document.getElementById("+-").addEventListener("click", plusMinus)
