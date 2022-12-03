var en2fa = function (input) {
    if (input == undefined)
        return;
    var returnModel = "", symbolMap = {
        '1': '۱',
        '2': '۲',
        '3': '۳',
        '4': '۴',
        '5': '۵',
        '6': '۶',
        '7': '۷',
        '8': '۸',
        '9': '۹',
        '0': '۰'
    };
    input = input.toString();
    for (var i = 0; i < input.length; i++)
        if (symbolMap[input[i]])
            returnModel += symbolMap[input[i]];
        else
            returnModel += input[i];
    return returnModel;
};

export {
    en2fa
}