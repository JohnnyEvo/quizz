import {timeline} from "motion";

export default {
    css: false,
    mode: 'out-in',
    onLeave: async (el: Element, done: Function) => {
        let waveSettingsBg, waveSettingsShape;
        [waveSettingsBg, waveSettingsShape] = getElements();

        const sequence = [
            [waveSettingsBg, {transform: "translateY(0)"}, {duration: 1}],
            [waveSettingsShape, {transform: "translateY(0)"}, {at: "-1"}],
        ];

        await timeline(<any>sequence).finished;

        done();
    },
    onEnter: async (el: Element, done: Function) => {
        let waveSettingsBg, waveSettingsShape;
        [waveSettingsBg, waveSettingsShape] = getElements();

        if (waveSettingsBg && waveSettingsShape) {
            waveSettingsShape.style.transform = 'translate: 0';
            waveSettingsBg.style.transform = 'translate: 0';
        }

        const sequence = [
            [waveSettingsShape, {transform: "translateY(100%)"}, {duration: 1}],
            [waveSettingsBg, {transform: "translateY(100%)"}, {at: "-.5"}],
        ];

        await timeline(<any>sequence).finished;

        done();
    }
}

let getElements = () => {
    return <HTMLElement[]>[
        <HTMLElement>document.getElementById('settings-wave-bg'),
        <HTMLElement>document.getElementById('settings-wave-shape'),
    ];
}
