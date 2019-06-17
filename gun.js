


//give it a number of people standing in a circle 
let n = 100
//array which will store all the info
let a = []

for (let i = 0; i < n; i++) {
    a.push(i + 1)
}

let kill = false
let i = 0
while(true) {
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
        console.log(`${data} survives till last` )
})