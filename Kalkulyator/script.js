function test(number) {
    let inp = document.getElementById("text");
    inp.value = inp.value + number
}

function beraberdir() {
    let inp = document.getElementById("text");
    let beraber = inp.value
    if (beraber) {
        inp.value = eval(beraber);
    }
}

function gerialma() {
    let inp = document.getElementById("text");
    let geri = inp.value
    inp.value = geri.substring(0, geri.length - 1)
}

function silmek() {
    let inp = document.getElementById("text");
    inp.value = " "
}