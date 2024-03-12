const validate = (text) => {
    if (typeof text !== 'string') {
        return false; // or handle it in a way that makes sense for your use case
    }

    if (/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@')
        .replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
        .replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
        return true;
    } else {
        return false;
    }
}


export const CheckValidation = (formData,  bodyData, setErrorMessage) => {
    console.log(bodyData);

    if (!formData.Url) {
        setErrorMessage("API Url is Required");
       
        return false;
    }
    const bodyDataString = JSON.stringify(bodyData);
    if (!validate(bodyDataString )) {
        setErrorMessage("Invalid JSON Body");
        return false;
    }

    return true;
}
