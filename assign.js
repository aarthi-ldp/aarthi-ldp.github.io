
const Strings=(str1,str2) => {
    return(str1[0].concat(str2[0]))
}
let str1 = prompt("Enter your first name:")
let str2 = prompt("Enter your second name:")
let result = document.getElementById("result")

//let result = document.querySelector("h1")
//result.innerHTML = "hello "+Strings(str1,str2)
const concatstr = Strings(str1,str2);
console.log(concatstr)
result.textContent = "Hello " +concatstr;