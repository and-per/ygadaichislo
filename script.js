

// console.log(Math.ceil(5.0000000001)) //3.3 => 4

// console.log(Math.floor(5.999999999)) // 5.99 =>

// console.log(Math.round(5.4))

// console.log(Math.trunc(5.9999999999))

// console.log(5.234.toFixed(2))





// let chislo = Math.trunc(Math.random() * 6) + 1;
// console.log(chislo)


// // let inp = document.querySelector("Value")
// // inp.value = "aa"

// function a() {
//     document.querySelector(".myText").value = "AAAARGH"
// }

let q = Math.floor(Math.random() * 100 + 1)  // стартовое значение
function again1() {
    q = Math.floor(Math.random() * 100 + 1)  // новое число
    console.log(q)
}

console.log("Старторовое число:", q)

let e = 10
let record = "-"

function a() {
    e = 10
    document.querySelector(".score_counter").innerHTML = e
    document.querySelector(".e1t").innerHTML = "?"
    again1()
}

function rec() {
    console.log()
    if (record == "-") {
        record = 10 - e + 1
        document.querySelector(".record_counter").innerHTML = record
    } 
    else{
        if (record > 10 - e) {
            record = 10 - e + 1
            document.querySelector(".record_counter").innerHTML = record
        }
    
    }
}

function play() {
    let w = document.querySelector(".inp").value
    if (e == 0) {
        alert(`Вы проиграли, загаданное число было ${q}`)
    }else{
        if (w == q) {
            document.querySelector(".score_counter").innerHTML = e
            console.log(`:like:`)
            document.querySelector(".e1t").innerHTML = q
            alert(`ВЫ ВЫИГРАЛИ! Загаданное число было ${q}`)
            rec()   
        } else {
            console.log(`:dislike:`)
            e--
            document.querySelector(".score_counter").innerHTML = e
                if (w > q) {
                    document.querySelector(".t2").innerHTML = "Загаданное число меньше"
                } else {
                    document.querySelector(".t2").innerHTML = "Загаданное число больше"
                }
        }
    }
    
}

