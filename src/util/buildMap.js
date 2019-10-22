import Stack from "./dataStructures";

const buildMap = () => {
    let stack = new Stack();
    stack.push(15);
    stack.push(16);
    stack.push(17);
    console.log(stack.peek());
    console.log(stack.stack);
};

export default buildMap;
