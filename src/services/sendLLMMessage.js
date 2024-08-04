const sendLLMMessage = async (e, setMessages, setInputMessage, setAIMessages) => {
    if (e.key === "Enter") {
        setMessages((prevMessages) => [
            ...prevMessages,
            { type: "human", text: e.target.value }
        ]);   
        setInputMessage("")
        const response = await sendMessage(e.target.value);
        console.log(response)
        if (response.llm_response) {
            setMessages((prevMessages) => [
                ...prevMessages,
                { type: "AI", text: response.llm_response }
            ]);   
        }
    }
}

const sendMessage = (message) => {
    return fetch("http://localhost:8000/llm_recommendation", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user_message: message,
        })
    })
    .then(response => response.json())
    .catch(error => {
        console.log(error);
        throw error;
    });
}

export default sendLLMMessage;