/**
 * This program uses MrCoxallStack
 *
 *
 * By: Seti Ngabo
 * Version: 1.0
 * Since:   2022-09-17
 */

import MrCoxallStack from "./MrCoxallStack";
import promptSync from "prompt-sync";

const prompt = promptSync();
const myStack = new MrCoxallStack();

// Input & Process
while (true) {
  const userInput = prompt("Enter a number (! to pop): ");

  if (userInput === "!") {
    break;
  } else {
    const number = parseInt(userInput);
    if (isNaN(number)) {
      console.log(`${userInput} is NaN`);
    } else {
      myStack.Push(number);
    }
  }
}
// const tempStack = myStack.getStack() refer back 2 2-02 for multiple

console.log("");
console.log(myStack.getStack());
const popValue = myStack.popNumber();
console.log(`Popped: ${popValue} out of stack`);

console.log("\nDone.");
