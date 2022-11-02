import {timeline} from "motion";

export default {
    css: false,
    mode: 'out-in',
    onLeave: async (el: Element, done: Function) => {
        const waveBg = <HTMLElement>document.getElementById('wave-bg');
        const wave = <HTMLElement>document.getElementById('wave');

        const sequence = [
            [wave, {transform: ["translateY(0)"]}, { duration: 1 }],
            [waveBg, {transform: ["translateY(0)"]}, { at:"-1"}],
        ];

        await timeline(<any>sequence).finished;

        done();
    },
    onEnter: async (el: Element) => {
        const waveBg = <HTMLElement>document.getElementById('wave-bg');
        const wave = <HTMLElement>document.getElementById('wave');

        if(wave && waveBg) {
            waveBg.style.transform = 'translate: 0';
            wave.style.transform = 'translate: 0';
        }

        const sequence = [
            [wave, {transform: ["translateY(100%)"]}, { duration: 1 }],
            [waveBg, {transform: ["translateY(100%)"]}, { at:"-.5"}],
        ];

        await timeline(<any>sequence).finished;
    }
}
