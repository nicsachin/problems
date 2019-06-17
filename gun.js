//calculates the time taken to 
console.time('time taken')
//give it a number of people standing in a circle 
let n = 100

//array which will store all the info
let a = []

for (let i = 0; i < n; i++) {
    a.push(i + 1)
}

let kill = false

let i = 0

while (1) {
    if (new Set(a).size == 2) {
        break
    }
    if (a[i] != 0 && kill) {
        a[i] = 0
        kill = !kill
    }
    else {
        if (a[i] != 0) {
            kill= !kill
        }
    }

    if (i + 1 == a.length) { i = -1 }
    i++
}

console.log(`${Math.max.apply(null,a)} will remain alive `)
console.timeEnd('time taken')