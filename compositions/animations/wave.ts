import {onBeforeRouteLeave, onBeforeRouteUpdate} from "vue-router";
import {onMounted} from "@vue/runtime-core";

let animation = {
    up: async () => {
        let wave = <HTMLElement>document.getElementById('wave');
        let waveBg = <HTMLElement>document.getElementById('wave-bg');

        wave.classList.remove('translate-y-full');
        wave.classList.add('translate-y-0');
        waveBg.classList.remove('translate-y-full');
        waveBg.classList.add('translate-y-0');

        await delay(1500);
    },
    down: async () => {
        let wave = <HTMLElement>document.getElementById('wave');
        let waveBg = <HTMLElement>document.getElementById('wave-bg');

        if(wave && waveBg) {
            wave.classList.add('translate-y-full');
            wave.classList.remove('translate-y-0');
            waveBg.classList.add('translate-y-full');
            waveBg.classList.remove('translate-y-0');

            await delay(1500);
        }
    }
}

let delay = (ms: number) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default () => {
    onBeforeRouteLeave(async (to, from, next) => {
        await animation.up();

        next();
    });
    onMounted(async () => {
        await animation.down();
    })
}
