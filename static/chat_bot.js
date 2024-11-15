function toggleChatbot() {
  const chatbotContainer = document.getElementById("chatbot-container");
  chatbotContainer.style.display = chatbotContainer.style.display === "block" ? "none" : "block";
}

function sendMessage(userMessage) {
  const chatbotBody = document.getElementById("chatbot-body");

  // Add user message
  const userMessageDiv = document.createElement("div");
  userMessageDiv.classList.add("message", "user");
  userMessageDiv.textContent = userMessage;
  chatbotBody.appendChild(userMessageDiv);

  // Scroll to the bottom of the chat
  chatbotBody.scrollTop = chatbotBody.scrollHeight;

  // Determine bot response
  setTimeout(() => {
      const botResponse = document.createElement("div");
      botResponse.classList.add("message", "bot");

      if (userMessage === "I am an existing customer") {
          botResponse.textContent = "Great! How can we assist you further?";
      } else if (userMessage === "I am interested in new services") {
          botResponse.textContent = "Which service are you interested in?";
          chatbotBody.appendChild(botResponse);

          // Add service options
          const services = ["Photography", "Videography", "Editing", "Consultation"];
          services.forEach(service => {
              const option = document.createElement("div");
              option.classList.add("message-option");
              option.textContent = service;
              option.onclick = () => sendMessage(service);
              chatbotBody.appendChild(option);
          });
          return;
      } else {
          botResponse.textContent = `Thank you for showing interest in our ${userMessage} service. How can we help with that?`;
      }

      chatbotBody.appendChild(botResponse);
      chatbotBody.scrollTop = chatbotBody.scrollHeight;

  }, 1000); // Delay bot response by 1 second
}
