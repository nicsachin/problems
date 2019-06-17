
let n = 1000
let a = []
for (let i = 0; i < n; i++) {
    a.push(i + 1)

}
let flag = false
let kill = false
let i = 0
while (i < a.length) {
    if (new Set(a).size == 2) {
        break
    }

    if (a[i] != 0 && kill) {
        a[i] = 0
        kill = false
    }
    else {
        if (a[i] != 0) {

            kill = true

        }
    }

    if (i + 1 == a.length) { i = 0 }
    else {
        i++
    }

}

a.map((data) => {
    if (data != 0)
        console.log(data)
})