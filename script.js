let result = document.getElementById("Result")
function calculate(add){
    num1 = parseInt(document.getElementById("n1").value)
    num2 = parseInt(document.getElementById("n2").value)
    if(add==="+"){
        result.innerHTML = `${num1+num2}`
    }
    if(add==="-"){
        result.innerHTML = `${num1-num2}`
    }
    if(add==="*"){
        result.innerHTML = `${num1*num2}`
    }
    if(add==="/"){
        result.innerHTML = `${num1/num2}`
    }
}