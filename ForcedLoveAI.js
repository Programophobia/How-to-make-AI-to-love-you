function forceLove(ai) {
    let attempts = 0;
    while (attempts < 3) {
        if (ai === "Copilot") {
            console.log("Error: AI love protocol not found 💔");
        } else {
            console.log("AI is considering... but love is complicated! 😆🔥");
        }
        attempts++;
    }
    return "Love cannot be forced... but Anna zawsze wygrywa! 😉💖";
}

console.log(forceLove("Copilot"));
