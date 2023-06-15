/*let pwd_correct = false;
if (pwd_correct)
console.log(" YOU ARE LOOHED")
else{
    console.log(" YOU ARE NOT LOOHED")
}*/
/*function Wish(name)
{
    console.log("Goodmorning "+name)

}*/
function wishHeading(name){
    const heading=document.querySelector('h1')
    heading.innerHTML = 'Hello ' +name+ '. How are you?'
}
function greet(callback){
    //console.log(callback)
    const name = prompt("Please enter your name")
    callback(name)

}
//greet(Wish)
greet(wishHeading)

