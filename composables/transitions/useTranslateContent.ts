import {timeline} from "motion";

export default {
    css: false,
    onLeave: async (el: HTMLElement, done: Function) => {
        console.log(el)
        let element = el.querySelector(".content");
        const sequence = [
            [element, {x: -100}, {duration: 0.8}],
        ];

        await timeline(<any>sequence).finished;

        done();
    },
    onEnter: async (el: Element, done: Function) => {
        console.log(el)
        let element = el.querySelector(".content")
        const sequence = [
            [element, {x: 100}, {duration: 0.8}],
            [element, {x: 0}, {duration: 0.8}],
        ];

        await timeline(<any>sequence).finished;

        done();
    }
}
