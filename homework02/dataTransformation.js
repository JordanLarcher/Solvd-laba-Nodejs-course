// Function to add values based on their type

const addValues = (a, b) =>  {
    if(typeof a === 'number' && typeof b === 'number'){
        return a + b;
    } else if(typeof a === 'string' && typeof b === 'string') {
        return a + b;
    } else if (typeof a === 'string' && typeof b === 'number') {
        return a + b.toString();
    } else if (typeof a === 'number' && typeof b === 'string') {
        return a.toString() + b;
    } else {
        throw new Error('Invalid types: both values must be either numbers or strings');
    };
}


function stringifyValue(value) {
    if(typeof value === 'object') {
        return JSON.stringify(value);
    }
    return String(value);
}


const invertBoolean = value => {
    if(typeof value !== 'boolean') {
        throw new TypeError('Argument must be a boolean')
    }
    return !value;
}

const convertToNumber = value => {
    const num = parseFloat(value);
    if(isNaN(num)) {
        throw new TypeError('Conversion to Number is not possible, please check the input')
    }

    return num;
}

const coerceToType = (value, type) => {

    switch(type) {
        case 'string':
            return stringifyValue(value);
        case 'Number':
            return convertToNumber(value);
        case 'boolean':
            return Boolean(value);
        default:
            throw new TypeError('Unsupported type for coercion');
    }
};

function convertToArray(value) {
    if(Array.isArray(value)){
        return value;
    } else if (typeof value === '' && value !== null) {
        throw new TypeError('Value must be an array or a string');
    }else if (typeof value === 'object') {
        return Array.from(Object.values(value));
    } else {
        return [value];
    }

};

module.exports = {
    addValues,
    stringifyValue,
    invertBoolean,
    convertToNumber,
    coerceToType,
    convertToArray
}