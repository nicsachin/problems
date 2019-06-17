//calculates the time taken to 
console.time('time taken by the match : ')

//give it a number of people standing in a circle 
let n = 1000

//array which will store all the info
let a = []

//loop which will add all the players  to the array
for (let i = 0; i < n; i++) {
    a.push(i + 1)
}

let kill = false
let i = 0
let match =""
while (1) {
    if (new Set(a).size == 2) {
        break
    }
    if (a[i] != 0 && kill) {
       match += `[${a[i]}] and passed the gun to`
        a[i] = 0
        kill = !kill
    }
    else {
        if (a[i] != 0) {
        match += ` [${a[i]}]\n`
            kill= !kill
      match += `[${a[i]}] killed `
        }
    }

    if (i + 1 == a.length) { i = -1 }
    i++
}
console.log(match)
console.log(`------------------------------------\n${Math.max.apply(null,a)} will remain alive and won the match \n------------------------------------\n`)
console.timeEnd('time taken by the match : ')