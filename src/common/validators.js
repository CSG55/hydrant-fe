// regex to check email validity
function isValidEmail(email) { //https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// regex to check username validity
// checks for an alphanumeric username
function isValidUsername(username) { 
    var re =/[0-9a-zA-Z]/;
    return re.test(String(username));
}

// regex to check password validity
// checks for an alphanumeric password of length 6+
function isValidPassword(password) { 
    var re =/[0-9a-zA-Z]{6,}/;
    return re.test(String(password));
}

// regex to check latitude validity
function isValidLat(number) { // https://stackoverflow.com/questions/22903756/using-regular-expression-to-validate-latitude-and-longitude-coordinates-then-dis
    var re = /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,15}/;
    return re.test(String(number));
}
// regex to check longitude validity
function isValidLong(number) { // https://stackoverflow.com/questions/22903756/using-regular-expression-to-validate-latitude-and-longitude-coordinates-then-dis
    var re = /^-?(([-+]?)([\d]{1,3})((\.)(\d+))?)/;
    return re.test(String(number));
}

export {
    isValidEmail,
    isValidUsername,
    isValidPassword,
    isValidLat,
    isValidLong,
};