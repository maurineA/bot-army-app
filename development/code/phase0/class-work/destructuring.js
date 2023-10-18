const letters = ["A","B","C","D","E","F"]

//const letterC = letters[2]//access letter C from array
//console.log(letterC)


//access A,B,C
//const [letterA, letterB, letterC]  = letters
//console.log(letterA,letterB,letterC)


//access A,B,E,F
//const [letterA, letterB,,, letterE, letterF]  = letters
//console.log(letterA, letterB, letterE, letterF)


//put A,B store the rest on a new variable using spread operator

//const[letterA,letterB,...newLetters] = letters//rest operator

//console.log(letterA,letterB,newLetters)


//we use spread operator to copy array...create new array under new reference
// const newletter =[...letters]//spread operator
// newletter.pop()
// console.log(newletter)
// console.log(letters)


// const newletters = letters// this copies the reference of the array not the array//use spread operator instead
// letters.pop()
// // console.log(newletters)
// console.log(letters)


const studentObj = {
    name: "John Doe",
    age: 20,
    course:{
        name: "Data Science",
        courseCode: "DSF-PT03"
    },
    isKenyan: false
}

// const name = studentObj.name
// const courseCode = studentObj.course.courseCode
// console.log(name)
// console.log(courseCode)

// const {name} = studentObj
// console.log(name)

// const {name, course:{courseCode}} = studentObj
// console.log(name)
// console.log(courseCode)

//access name property save it in a new property fullname
// const {name:fullName, course:{courseCode}} = studentObj
// console.log(fullName)
// console.log(courseCode)



