

const inputText = document.querySelector("#inputText");
const result = document.querySelector("#result");
const displayToggle = document.querySelector("#displayToggle");


const getReplacePairs = () => {
    const pairsDiv = document.querySelectorAll(".replacePairs");
    const pairs = [];

    pairsDiv.forEach(div => {
        const before = div.querySelector(".before").value;
        const after = div.querySelector(".after").value;

        if(before) {
            pairs.push([before, after]);
        }
    })

    return pairs;
}


const replace = () => {
    const text = inputText.value;
    const pairs = getReplacePairs();
    console.log(pairs);

    let resultText = text;

    for(let pair of pairs) {
        console.log(pair);
        resultText = resultText.replaceAll(pair[0], `<span class="beforeReplace display-none">${pair[0]}</span><span class="afterReplace">${pair[1]}</span>`);
        console.log(resultText);
    }

    result.innerHTML = resultText;
}


inputText.addEventListener("change", () => {
    replace();
})

document.addEventListener("change", (e) => {
    if(e.target.tagName == "INPUT") {
        replace();
    }
})

displayToggle.addEventListener("click", () => {
    document.querySelectorAll(".beforeReplace").forEach(elem => {
        elem.classList.toggle("display-none");
    })
})
