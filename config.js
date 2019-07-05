export default {
    app: {
        gateway: '', // Set it in window.gateway before loading the build.js script 
        muted: true, // <- mute microphone at start
        start_suggestions: [], // <- array of suggestions, displayed at the start screen
        fallback_lang: 'it', // <- fallback language code, if history mode or network is unavailable,
        voice: 'native' // <- voice of Text-To-Speech; for reference, see: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisVoice/voiceURI
    },
    i18n: {
        it: {
            welcomeTitle: "Benvenuto su",
            muteTitle: "Muto",
            inputTitle: "Scrivi il tuo messaggio",
            sendTitle: "Invia",
            microphoneTitle: "Input Vocale"
        },
        en: {
            welcomeTitle: "Welcome to",
            muteTitle: "Mute Toggle",
            inputTitle: "Type your message",
            sendTitle: "Send",
            microphoneTitle: "Voice Input"
        },
        ru: {
            welcomeTitle: "Добро пожаловать в",
            muteTitle: "Режим звука",
            inputTitle: "Введите ваше сообщение",
            sendTitle: "Отправить",
            microphoneTitle: "Голосовой ввод"
        },
        de: {
            welcomeTitle: "Wilkommen bei",
            muteTitle: "Stumm Modus",
            inputTitle: "Schreiben Sie ihre Nachricht",
            sendTitle: "Senden",
            microphoneTitle: "Spracheingabe"
        },
        fr: {
            welcomeTitle: "Bienvenue à",
            muteTitle: "Sound Mode",
            inputTitle: "Entrez votre message",
            sendTitle: "Envoyer",
            microphoneTitle: "Entrée vocale"
        }
    }
}