const sendButton = document.getElementById("bigBlyatButton")
sendButton.addEventListener("click", calculate);

function calculate(){
    for (let i = 1; i <= 6; i++) {
        let col = document.getElementById("col" + i).value
        let hard = document.getElementById("hard" + i).value
        let out = document.getElementById("out" + i)

        let summa = 0
        for(let n = 1; n <= 14; n++){
            summa += hard;
        }

        out.innerText = col * (0.65 + 0.01 * summa);
    }
    return;
}