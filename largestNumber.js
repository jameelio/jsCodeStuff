///Given an array sort them in such a way that they give the form of the largest number

//integars

//Arr = [6,5,8,9]



function largestNumberSet(){
    var arrSet = [6, 5, 8, 9];
    arrSet.sort((a, b) => a - b);
    console.log(arrSet);
}

// largestNumberSet();

// function highest() {
//   return [].slice.call(arguments).sort(function(a, b) {
//     return b - a;
//   });
// }
// highest(1, 1, 2, 3);