let sentence = ["Hello", "my", "name", "is", "Per"]
let greetingEl = "";

// How do you keep the spaces between the words if I remve them from the array?

for (let i = 0; i < sentence.length; i++) {
    greetingEl.textContent = greetingEl.textContent + sentence[i] + " ";
}
console.log(greetingEl);
