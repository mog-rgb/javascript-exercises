

const repeatString = function(string, num) {

    let maxNum = num;
    let returnString = "";

    for (maxNum; maxNum > 0; maxNum-- ) {
        returnString += string;
    }

    if (num < 0) {
        returnString = 'ERROR';
    }

    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
