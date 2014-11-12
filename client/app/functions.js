function max(input, length) {
    var length = length || 25;
    return (input.length > length) ? input.substr(0, length - 2) + '..' : input;
}

function capitalize(input) {
    return input.charAt(0).toUpperCase() + input.substring(1).toLowerCase();
}