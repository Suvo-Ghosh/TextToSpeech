const textArea = document.querySelector('textarea')
const btn = document.querySelector('button')


btn.addEventListener('click', ()=>{  
    let speech = new SpeechSynthesisUtterance(textArea.value)
    let voices = window.speechSynthesis.getVoices(); 
    speech.voice = voices[Math.floor(Math.random()*voices.length)]
    window.speechSynthesis.speak(speech)
})
