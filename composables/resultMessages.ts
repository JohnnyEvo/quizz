import {ref} from "vue";

export let useResultMessage = (score: Number) => {
    let message = ref();

    const messages: { [key: number]: string } = {
        0: "You didn't copy from the good neighbor...",
        20: "Pity...",
        40: "Mmm, have you revised ?",
        60: "Try again !",
        80: "Impressive !",
        100: "Good game !",
    };

    let finalMessage = '';
    for (const messagesKey in messages) {
        if (score >= parseInt(messagesKey)) {
            finalMessage = messages[messagesKey];
        }
    }

    let interval = setInterval(() => {
        let key = parseInt(Object.keys(messages).sort(function () {
            return Math.random() - 0.5;
        })[0]);
        message.value = messages[key];
    }, 500);

    setTimeout(() => {
        clearInterval(interval);
        message.value = finalMessage
    }, 3000);

    return {message}
}