
let getMyGrade = function(currentMarks , totalMarks){
    let myPercent = (currentMarks/totalMarks) * 100

    let myGrade = ''

    if (myPercent >=90) {
        myGrade = 'A'

    } else if (myPercent >= 80) {
        myGrade = 'B'

    } else if (myPercent >= 70) {
        myGrade = 'C'
        
    } else if (myPercent >= 60) {
        myGrade = 'D'
        
    } else{
        myGrade = 'F'
    }

    return `Your Grade is ${myGrade} and my percentage is ${myPercent}`


}

let yourResult = getMyGrade(1084 , 1400)
console.log(yourResult)