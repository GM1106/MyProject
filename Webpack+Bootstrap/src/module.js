function name() {
    let name = 'Ivan';
    console.log(name);
}

function summ() {
    let sum = 0;
    let nums = [1, 2, 3]

    for (i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    return sum;
}


function age() {
    let usrAge = prompt('Your age ?', '');
    console.log(usrAge);
}

// export age;
// export name;
export default age;
