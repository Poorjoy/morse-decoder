const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = [];
    let arr = splitString(expr, 10);
    arr.forEach(function (item) {
        result.push(convertToLetter(item));
    });
    return result.join('');
}

function splitString(str, partLength) {
    let result = [];

    while (str.length > 0) {
        result.push(str.substring(0, partLength));
        str = str.substring(partLength, str.length);
    }
    return result;
}

function convertToLetter(str) {
    if (str === '**********') {
        return ' ';
    }

    let strArr = splitString(str, 2);
    let result = [];

    strArr.forEach(function (item) {
        switch (item) {
            case '10':
                result.push('.');
                break;
            case '11':
                result.push('-');
                break;
            case '00':
                break;
        }
    });
    return MORSE_TABLE[result.join('')];
}

module.exports = {
    decode
}