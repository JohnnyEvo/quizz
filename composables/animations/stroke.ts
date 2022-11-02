import Vivus from "vivus";

let useStrokeAnimation = (element: string, options = {}, cb = () => {}) => {
    new Vivus(element, options, cb);
}

export default useStrokeAnimation;