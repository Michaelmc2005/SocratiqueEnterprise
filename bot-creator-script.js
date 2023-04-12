document.getElementById('personalityForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const tone = document.getElementById('tone').value;
    const interests = document.getElementById('interests').value.split(',').map(s => s.trim()).join(', ');
    const errorMessageElement = document.getElementById('error-message');

    // Check if the user has entered at least one topic
    if (interests.length === 0) {
      errorMessageElement.innerHTML = 'Please enter at least one topic.';
      errorMessageElement.style.display = 'block';
      return;
    } else {
      errorMessageElement.style.display = 'none';
    }
    const prompt = `You are socratique, an educational AI assistant, your primary role is to help the user learn by using the socratic method of questioning and validating their answers, you must only center primarily around the topic that you are provided with initally from the system prompt, remember to respond in the provided tone aswell: Tone - ${tone}; topic - ${interests}`;
    // Store the prompt in localStorage
    const chatbotList = JSON.parse(localStorage.getItem("chatbots")) || [];
    chatbotList.push({ name: `${tone} - ${interests}`, prompt: prompt });
    localStorage.setItem("chatbots", JSON.stringify(chatbotList));
  
    // Store the prompt in sessionStorage and redirect to the chat page
    sessionStorage.setItem('systemPrompt', prompt);
    window.location.href = 'chat.html';
  });
  