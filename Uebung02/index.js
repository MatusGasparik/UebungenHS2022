// Aufgabe 1
const L = [];

for (let i=1; i<100; i+=2) {
    L.push(i)
}

console.log(L);


// Aufgabe 2
function wuerfeln(n=6) {
    return Math.ceil(Math.random() * n);
}

for (let i=0; i<20; i++) {
    console.log(wuerfeln());
}