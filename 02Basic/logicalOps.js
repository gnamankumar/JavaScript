// && - AND operator - Both side need to be true
// || - OR operator - One side need to be true


let isVerified = true
let isLoggedIn = true
let hasPaymentToken = true
let isGuest = true
if (isVerified && isLoggedIn && hasPaymentToken){

    console.log('Greeting message to user')
    console.log('Grant access to paid course')

} else if(isVerified || isGuest){
    console.log('Allow free preview')

} else{
    console.log('MESSAGE : please contact admin')
}