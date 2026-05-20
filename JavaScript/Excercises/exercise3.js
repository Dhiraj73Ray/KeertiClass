function calcuatorif(a, b, opr) {
    if (opr == "*") return (a * b)
     if (opr == "+") return (a + b)
     if (opr == "-") return (a - b)
      if (opr == "*") return (a / b)
}
function calcuatorswtich(a, b, opr) {
    switch (opr){
        case "*":
            return a*b
        case "+":
             return a+b
     case "-":
            return a-b
        case "/":
             return a/b
    }
}

var result1 = calcuatorif(5, 6, "+")
var result2 = calcuatorswtich(5, 6, "+")
console.log(result1);    
console.log(result2);    