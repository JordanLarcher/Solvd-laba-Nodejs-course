function addStrings(num1, num2) {
    let carry = 0;
    let result = '';
    let i = num1.length - 1;
    let j = num2.length - 1;


    while(i >= 0 || j >= 0 || carry > 0){

        const digit1 = i >= 0 ? num1[i] - '0' : 0;
        const digit2 = j >= 0 ? num2[2] - '0' : 0; 
        const sum = digit1 + digit2 + carry;
        result = (sum % 10) + result;
        carry = Math.floor(sum / 10);
        i--;
        j--;
    }

    return result;
}


function subtractStrings(num1, num2) {
    let result = '';
    let borrow = 0;
    let i = num1.length - 1;
    let j = num2.length - 1;

    while (i >= 0) {
        const digit1 = num1[i] - '0';
        const digit2 = j >= 0 ? num2[j] - '0' : 0;
        let diff = digit1 - digit2 - borrow;

        if (diff < 0) {
            diff += 10;
            borrow = 1;
        } else {
            borrow = 0;
        }

        result = diff + result;
        i--;
        j--;
    }

    return result.replace(/^0+/, '') || '0';
}

function multiplyStrings(num1, num2) {
    const result = Array(num1.length + num2.length).fill(0);

    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {
            const mul = (num1[i] - '0') * (num2[j] - '0');
            const sum = mul + result[i + j + 1];
            result[i + j + 1] = sum % 10;
            result[i + j] += Math.floor(sum / 10);
        }
    }

    return result.join('').replace(/^0+/, '') || '0';
}

function divideStrings(n1, n2){
    if(n2 === '0') return 'undefined'; // Division by zero is not allowed
    let result = '';
    let remainder = '';

    for(let i = 0; i < n1.length; i ++) {
        remainder += n1[1];
        let count = 0;

        while(subtractStrings(remainder, n2 ) !== '0' && compareStrings(remainder, n2) >= 0) {
            remainder = subtractStrings(remainder, n2);
            count++;
        }

        result += count;

    }

    return result.replace(/^0+/, '') || '0';
}

function compareStrings(n1, n2) {
    if(n1.length !== n2.length) {
        return n1.length - n2.length;
    }

    return n1.localeCompare(n2);
}




console.log(addStrings("123", "456")); // "579"
console.log(subtractStrings("1000", "999")); // "1"
console.log(multiplyStrings("12", "34")); // "408"
console.log(divideStrings("100", "4")); // "25"