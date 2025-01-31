const responses = {
    "hello": "Hi there! How can I help?",
    "how are you": "I'm just a simple AI, but I'm doing great!",
    "what is your name": "I'm ChatBot, your AI assistant!",
    "bye": "Goodbye! Have a nice day!",
};

function sendMessage() {
    let userInput = document.getElementById("user-input").value.toLowerCase();
    let chatBox = document.getElementById("chat-box");

    // Display user message
    chatBox.innerHTML += `<p><strong>You:</strong> ${userInput}</p>`;

    // Find response or use default
    let response = responses[userInput] || "Sorry, I don't understand that.";
    
    // Display AI response
    chatBox.innerHTML += `<p><strong>AI:</strong> ${response}</p>`;

    // Clear input
    document.getElementById("user-input").value = "";
}
