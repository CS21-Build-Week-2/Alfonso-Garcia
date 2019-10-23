import Stack from "./dataStructures";

/*

Going to need a function that returns the opposite direction of where we go.

VARIABLES TO NOTE --
    COOLDOWN:
    We need to keep track of the cooldown everytime we go into a new room so we can wait that amount of time before making the next move

    PREVIOUS ROOM ID:
    

*/

const buildMap = () => {
    let stack = new Stack();
    stack.push(15);
    stack.push(16);
    stack.push(17);
    console.log(stack.peek());
    console.log(stack.stack);
};

export default buildMap;
