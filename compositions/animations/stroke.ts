import Vivus from "vivus";

let animation = (element: string, options = {}, cb = () => {}) => {
    new Vivus(element, options, cb);
}

export default animation;