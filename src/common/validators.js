function isValidEmail(email) { //https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function isValidLongOrLat(number) {
    var re = /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}/;
    return re.test(String(number));

}

export {
    isValidEmail,
    isValidLongOrLat
};