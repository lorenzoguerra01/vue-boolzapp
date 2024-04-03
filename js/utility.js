// function 
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// function isPalindrome(str) { /*nik method */
//     let reverseStr = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reverseStr += str[i];
//         console.log(reverseStr);
//     }
//     if (str === reverseStr) {
//         return true;
//     } else {
//         return false;
//     }
// }
// function isPalindrome(str) { /*w3c method */
//     // Remove non-alphanumeric characters and convert to lowercase
//     str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();

//     // Compare characters from the start and end of the string
//     // and stop if a mismatch is found or the middle of the string is reached.
//     for (let i = 0; i < str.length / 2; i++) {
//         if (str[i] !== str[str.length - i - 1]) {
//             return false;
//         }
//     }

//     return true;
// }
function isPalindrome(str) { /*AI method */
    return str === str.split('').reverse().join('');
}
function isNumberInRange(number, num1, num2) {
    return number >= num1 && number <= num2;
}
function isNumberRange(min, max) {
    let array = [];
    for (min; min <= max; min++) {
        array.push(min);
    }
    return array;
}
function isEven(number) {
    if (number % 2 === 0) {
        number = "pari"
    } else {
        number = "dispari"
    }
    return number;
}
function isUniqueArray(elements, min, max) {
    let array = [];
    while (array.length < elements) {
        let tempRandom = getRndInteger(min, max);
        if (!array.includes(tempRandom)) {
            array.push(tempRandom)
        }
    }
    return array
}
function generateBoxes(numBoxes, boxInRow, text) {
    let container = document.createElement('div');
    container.classList.add("d-flex", "flex-wrap", "m-5");
    for (let i = 0; i < numBoxes; i++) {
        let box = document.createElement('div');
        box.classList.add("ms_box");
        box.style.width = `calc(100% / ${boxInRow})`;
        box.style.aspectRatio = '1 / 1';
        if (Array.isArray(text)) {
            box.innerHTML = text[i];
        } else if (text === undefined) {
            box.innerHTML = i;
        } else {
            box.innerHTML = text;
        }
        container.appendChild(box);
    }
    return container;
}
function isRandomImage(x, y, alt) {
    let image = `<img src="https://picsum.photos/${x}/${y}?random=${getRndInteger(1, 10000)}" alt="img-${alt}"></img>`;
    return image;
}
// global variables 

let display = document.getElementById("display");

// EXPORT

export { };