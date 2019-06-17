let out = process.stdout

//give it a number of people standing in a circle 
let n = 100

//array which will store all the info
let a = []

//loop which will add all the players  to the array
for (let i = 1; i <= n; i++) {
    a.push(i)
}

let kill = false
let i = 0
//calculates the time taken to 
console.time('time taken by the match : ')
while (1) {
    
    if (a[i] != 0) {
        if (kill) {
           out.write(`[${a[i]}] and passed the gun to`)
            a[i] = 0
        }
        else {
            out.write(` [${a[i]}]\n [${a[i]}] killed `)
          }

        kill = !kill
    }
    if (i + 1 == a.length) { if (new Set(a).size == 2) 
        {out.write('  everyone !!!  \n------------------------------------\n')
            break}
    i = -1 }
    i++
}
console.timeEnd('time taken by the match : ')
out.write(`\n------------------------------------\n${Math.max.apply(null, a)} will remain alive and won the match \n------------------------------------\n`)
