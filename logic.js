//let out = process.stdout

let out = process.stdout

let n = 1000
let a = []

for (let i = 1; i <= n; i++) {
    a.push(i)
}

let kill = false
let i = 0

console.time('time taken by the match : ')
while (1) {
    if (a[i] != 0) {
        if (kill)
            a[i] = 0
        kill = !kill
    }
    if (i + 1 == a.length) {
        if(a.filter((data) => {
            if (data > 0)
                return data
        }).length == 1) 
          break
         i = -1
    }
    i++


}
console.timeEnd('time taken by the match : ')
out.write(`\n------------------------------------\n${Math.max.apply(null, a)} will remain alive and won the match \n------------------------------------\n`)
