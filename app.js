let btn = document.querySelector(".speech-btn");

btn.onclick = () => {
    let text = document.querySelector(".enter-text").value;
    let speech = new SpeechSynthesisUtterance();
    speech.lang = "en-US";
    speech.text = text;
    speech.rate = 0.8;
    speech.volume = 4;
    speech.pitch = 1.2;

    speechSynthesis.speak(speech)
};