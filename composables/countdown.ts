import {ref} from "vue";

export let useCountdown = (n: number) => {
    let c = ref(n);

    let reset = () => {
        c.value = n
    }

    setInterval(() => c.value--, 1000);

    return {c, reset}
}
