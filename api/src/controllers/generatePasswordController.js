function generatePassword(){
    let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let randomizePassword = function(elements) {
       let elementsShuffled = ''
       while (elementsShuffled.length < 8) {
           let elementIndex = Math.floor(Math.random()*elements.length)
           let element = elements[elementIndex]
           elementsShuffled = elementsShuffled.toString() + element.toString()
       }
       return elementsShuffled
    }
    let password = randomizePassword(letters)
    return password
}
module.exports = {generatePassword}

  