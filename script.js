async function askGPT() {
    const userInput = document.getElementById("userInput").value;
    const responseElement = document.getElementById("response");

    const apiKey = "YOUR_OPENAI_API_KEY"; // Replace with your actual API key

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-4",
            messages: [{ role: "user", content: userInput }]
        })
    });

    const data = await response.json();
    responseElement.innerText = data.choices[0].message.content;
}
