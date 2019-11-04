const testD = "2019-08-25T22:00:00.000Z";

//console.log(testD.toUTCString());

var isoDate = new Date(testD).toUTCString();

console.log(isoDate);