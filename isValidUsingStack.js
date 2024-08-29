const isValid = function(params) {
    let stack = [];
    let obj = {
        "(": ")",
        "[": "]",
        "{": "}",
    };

    for (let i = 0; i < params.length; i++) {
        let current = params[i];
        
        if (obj[current]) {
            stack.push(current);
        } else {
            let last = stack.pop();
            if (obj[last] !== current) {
                return false;
            }
        }
    }

    return stack.length === 0;
};

console.log(isValid("([{}])")); // true
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("{[]}")); // true
console.log(isValid("[")); // false
