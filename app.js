const sC = document.querySelector("#soundsContent");
var synth = window.speechSynthesis;
var voices = [];
let lastSound = [];

//store words and image directories
let soundList = [
    [
        { sound: "dad", image: "images/dad.jpg" },
        { sound: "mom", image: "images/mom.jpg" },
        { sound: "brother", image: "images/brother.jpg" }
    ],
    [
        { sound: "ate", image: "images/ate.jpg" },
        { sound: "sound5", image: "images/sound5.jpg" },
        { sound: "sound6", image: "images/sound6.jpg" }
    ],
    [
        { sound: "sound7", image: "images/sound7.jpg" },
        { sound: "sound8", image: "images/sound8.jpg" },
        { sound: "sound9", image: "images/sound9.jpg" }
    ],
    [
        { sound: "sound10", image: "images/sound10.jpg" },
        { sound: "sound11", image: "images/sound11.jpg" },
        { sound: "sound12", image: "images/sound12.jpg" }
    ],
    [
        { sound: "sound13", image: "images/sound13.jpg" },
        { sound: "sound14", image: "images/sound14.jpg" },
        { sound: "sound15", image: "images/sound15.jpg" }
    ]
]

//insert html content with functions to play sounds
sC.innerHTML = soundList.map((group, index) => {
    return `
            <div class="soundGroup">
                <h2>Group ${index + 1}</h2>
                <div>
                    ${group.map(sound => `
                        <div class="soundItem">
                            <img src="${sound.image}" alt="${sound.sound}">
                            <p onclick="textToSpeech('${sound.sound}')">${sound.sound}</p>
                        </div>
                    `).join("")}
                </div>
            </div>
        `;
}).join("");

function textToSpeech(word) {
    //source to use this functionality: https://stackoverflow.com/questions/72422375/text-to-speech-with-javascript
    var toSpeak = new SpeechSynthesisUtterance(word);
    toSpeak.voice = voices[1];
    synth.speak(toSpeak);
}

function randomSound() {
    //select random sound from each group, play it, and store it in lastSound
    lastSound = [];
    soundList.forEach(group => {
        const randomSound = group[Math.floor(Math.random() * group.length)];
        lastSound.push(randomSound.sound);
        textToSpeech(randomSound.sound);
    });
}

function repeatSounds() {
    //repeat the last played sounds
    lastSound.forEach(sound => {
        textToSpeech(sound);
    });
}