// regex to check for email validity
function isValidEmail(email) { //https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// regex to check for latitude validity
function isValidLat(number) { // https://stackoverflow.com/questions/22903756/using-regular-expression-to-validate-latitude-and-longitude-coordinates-then-dis
    var re = /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,15}/;
    return re.test(String(number));
}
// regex to check for longitude validity
function isValidLong(number) { // https://stackoverflow.com/questions/22903756/using-regular-expression-to-validate-latitude-and-longitude-coordinates-then-dis
    var re = /^-?(([-+]?)([\d]{1,3})((\.)(\d+))?)/;
    return re.test(String(number));
}

export {
    isValidEmail,
    isValidLat,
    isValidLong,
};