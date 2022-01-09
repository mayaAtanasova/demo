function average() {
    // the number of arguments passed
    const length = arguments.length;

    if (length == 0) return 0;

    // convert the arguments to a proper array of numbers
    const numbers = Array.prototype.slice.call(arguments);

    // a reducer function to sum up array items
    const sumReduceFn = function (a, b) { return a + Number(b) };

    // return the sum of array items divided by the number of items
    return numbers.reduce(sumReduceFn, 0) / length;
}


average(1, 2, 3);