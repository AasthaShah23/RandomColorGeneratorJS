// console.log("welcome");

let btn = document.querySelector("button");
// let body = document.querySelector("body");
let c1 = document.querySelector("#c1");
let c2 = document.querySelector("#c2");
let c3 = document.querySelector("#c3");
let c4 = document.querySelector("#c4");
let c5 = document.querySelector("#c5");
let c6 = document.querySelector("#c6");
let c7 = document.querySelector("#c7");
let c8 = document.querySelector("#c8");
let c9 = document.querySelector("#c9");
let c10 = document.querySelector("#co1");
let c11 = document.querySelector("#co2");
let c12 = document.querySelector("#co3");
let c13 = document.querySelector("#co4");
let c14 = document.querySelector("#co5");
let c15 = document.querySelector("#co6");
let c16 = document.querySelector("#co7");
let c17 = document.querySelector("#co8");
let c18 = document.querySelector("#co9");

let ids = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18];

let colors = ["#DBE9FA", "#306EFF", "#000080", "#C2E5D3", "#FFEBCD", "#006A4E", "#F67280", "#E55451", "#FFCBA4", "#F778A1",
    "#B048B5", "#EAEEE9", "#FCDFFF"];


const randColor = () => {
    console.log(`#${Math.floor(Math.random() * 1677721515).toString(16).toUpperCase()}`);
    console.log(Math.random());
    return `#${Math.floor(Math.random() * 1677721515).toString(16).toUpperCase()}`;
}

btn.addEventListener("click", () => {
    // console.log(colors[(Math.floor(Math.random() * colors.length))]);
    for (id of ids) {
        // id.style.backgroundColor = colors[(Math.floor(Math.random() * colors.length))];
            id.style.backgroundColor = randColor();
    }
});



