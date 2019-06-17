//let out = process.stdout
console.time('time taken by the match : ')
let out = process.stdout

let n = 100
let a = []
for (let i = 1; i <= n; i++) {
    a.push(i)
}

let kill = false
let i = 0
while (1) {
    if (new Set(a).size == 2) 
        break
    
    if (a[i]!=0) {
        if (kill) 
            a[i] = 0
        kill = !kill
    }
    if (i + 1 == a.length) { i = -1 }
    i++
}
out.write(`\n------------------------------------\n${Math.max.apply(null, a)} will remain alive and won the match \n------------------------------------\n`)
console.timeEnd('time taken by the match : ')