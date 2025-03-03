// Question #3
let userPassword = "ssswnalWadqQ";

const checkPasswordStrength = (userPassword) => {
    let result = ""
    if (userPassword.length > 10){
        result = "Strong"
    }else if(userPassword.length >= 6){
        result = "Medium"
    }else{
        result = "Weak"
    }
    return result
}

console.log(checkPasswordStrength(userPassword))


