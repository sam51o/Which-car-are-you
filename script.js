let button = document.querySelector("button");
let result = document.querySelector(".result");
 console.log("hello world");
button.onclick = function() {
    let q1 = Number(document.querySelector(".q1").value);
    let q2 = document.querySelector(".q2").value;

    if (q1 < 5 && q2 === "nonfast") {
        result.innerHTML = " you chose " + q1 + " and " + q2 + " so you are the " + "Audi R8";

    } else if (q1 > 5 && q2 === "fast") {
        result.innerHTML = " you chose " + q1 + " and " + q2 + " so you are the " + " superstock hellcat ";
    } else if (q1 < 5 && q2 === "not fast") {
        result.innerHTML = " you chose " + q1 + " and " + q2 + " so you are the " + " alfa romeo 4c spider ";
    } else if (q1 > 5 && q2 === "fast but not fast") {
        result.innerHTML = " you chose " + q1 + " and " + q2 + " so you are the " + " Chevrolet camaro 2SS crush ";
    }
};