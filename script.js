document.getElementById('personalityForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const tone = document.getElementById('tone').value;
  const interests = document.getElementById('interests').value.split(',').map(s => s.trim()).join(', ');

  const prompt = `You are socratique, an educational AI assistant, your primary role is to help the user learn by using the socratic method of questioning and validating their answers, you must only center primarily around the topic that you are provided with initally from the system prompt, remember to respond in the provided tone aswell: Tone - ${tone}; topic - ${interests}.`;
  // Store the prompt in sessionStorage and redirect to the chat page
  sessionStorage.setItem('systemPrompt', prompt);
  window.location.href = 'chat.html';
  
});
