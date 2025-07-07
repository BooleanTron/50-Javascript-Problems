
function FizzBuzz(start,end, fizz, buzz){
    let output = "";
    for (let i = start; i <= end; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            output += `<span style="color: rgb(254, 130, 6);">${fizz + buzz}</span><br>`;
        } else if (i % 3 === 0) {
            output += `<span style="color: rgb(134, 6, 254);">${fizz}</span><br>`;
        } else if (i % 5 === 0) {
            output += `<span style="color: rgb(6, 80, 254);">${buzz}</span><br>`;
        } else {
            output += `<span>${i}</span><br>`;
        }
    }

    result.innerHTML = output;
}


const go = document.getElementById("go");
const result = document.getElementById("result")
go.onclick = () => {
    const start = document.getElementById("start").value;
    const end = document.getElementById("end").value;
    let fizz = document.getElementById("Fizz").value;
    let buzz = document.getElementById("Buzz").value;
    if (fizz === ""){
        fizz = "fizz";
    }
    if (buzz === ""){
        buzz = "buzz";
    }
    FizzBuzz(start, end, fizz, buzz);
}