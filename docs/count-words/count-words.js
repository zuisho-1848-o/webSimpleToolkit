

const inputText = document.querySelector("#inputText");
const allCount = document.querySelector("#allCount");
const noNewLineCount = document.querySelector("#noNewLineCount");
const mainCount = document.querySelector("#mainCount");


const getNoNewLine = (text) => {
    return text.replace(/\n/g, "").replace(/\r/g, "");
}

const getTextMain = (text) => {
    return text.replace(/ /g, "").replace(/　/g, "").replace(/\n/g, "").replace(/\t/g, "").replace(/\r/g, "");
}


inputText.addEventListener("change", () => {
    const texts = inputText.value;

    allCount.innerHTML = texts.length;
    noNewLineCount.innerHTML = getNoNewLine(texts).length;
    mainCount.innerHTML = getTextMain(texts).length;
})
