function decodeString(string) {
    let safeString = String(string).toLowerCase()
    let firstNum = Number(safeString.slice(0, 1))
    let decode = safeString.slice(1, safeString.length)
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    let rString = ""

    for (let i = 0; i < decode.length; i++) {
        for (let j = 0; j < alpha.length; j++) {
            if (decode[i] === alpha[j]) {
                rString += alpha[j + firstNum]
            } 
        }
    }
    return rString
}
let answer1 = decodeString("1a")
let answer2 = decodeString("3ce")
let answer3 = decodeString("2fcjjm")
console.log(answer1)
console.log(answer2)
console.log(answer3)
