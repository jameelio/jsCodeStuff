const dude = {
    name :"Pawel",
    friends: new Set(["Dan","Pedro","Mr Gregory"])
}

//const dudeStringified = JSON.stringify(dude);
//console.log(dudeStringified)

const dudeStrin = JSON.stringify(dude,(key,value)=>{
    value instanceof Set ? [...value] : value
})

console.log(dudeStrin)