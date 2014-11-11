function max(input) {
    return (input.length > 25) ? input.substr(0, 23) + '...' : input;
}