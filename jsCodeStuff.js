




(function () {
    //deep flatten array
    let arrayFlatTest = [1, [2], [[3], 4], 5];
    const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)))

    let codeStuffFlatten = deepFlatten(arrayFlatTest);
    console.log(codeStuffFlatten);
}());