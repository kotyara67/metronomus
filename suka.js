const sendButton = document.getElementById("bigBlyatButton");
sendButton.addEventListener("click", calculate);

function calculate(){
    let summ = 0;
    let hardsumm = [];
    for (let i = 1; i <= 6; i++) {
        let col = document.getElementById("col" + i).value;
        let hard = document.getElementById("hard" + i).value;
        let out = document.getElementById("out" + i);

        out.innerText = col * hard;

        hardsumm.push(+hard);
        summ += col * hard;
    }

    let overall = document.getElementById("overall");
    let efpe = document.getElementById("efpe");

    overall.innerText = "Общее количество: " + summ;
    efpe.innerText = "FP: " + summ * (0.65 + 0.01 * summa(hardsumm));

    return;
}

function summa(a){
    let sum = 0;
    for(let n = 0; n < a.length; n++){
        sum+= a[n];
    }
    return sum;
}