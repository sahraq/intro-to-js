let words = ["sillier", " more rambunctious", "another adjective", "cooler"];

function randomSentence() {
    let randomWord = words[Math.floor(Math.random() * words.length)];
    console.log("Could you be any " + randomWord + "???");
}

randomSentence();
