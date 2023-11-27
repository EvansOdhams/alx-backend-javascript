export default function taskBlock(trueOrFalse) {
  let task = false; // Changed var to let
  let task2 = true; // Changed var to let

  if (trueOrFalse) {
    task = true; // Removed var declaration to update the existing variable
    task2 = false; // Removed var declaration to update the existing variable
  }

  return [task, task2];
}
