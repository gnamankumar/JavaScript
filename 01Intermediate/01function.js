let sayHello = function (name) {
    console.log("Greeting ma=essage for user");
    console.log(`Hey ${name}`);

}

sayHello('John')

let fullNameMaker = function(firstname, lastname){
    console.log('Welcome Here')
    console.log(`Happy to have you, ${firstname} ${lastname}`)


}

//fullNameMaker('John', 'Doe')

let myAdder = function(num1, num2){
    let added = num1 + num2
    return added
}



console.log(myAdder(3,5));