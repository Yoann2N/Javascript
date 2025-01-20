let i = 10;
let j = 20;
i=30

function test() {
    let i = 40;
    let j = 50;
    for (let k = 0; k < 5; k++) {
        console.log("k= " + k)
        let j = 60;
    }

}

test();
console.log(i)