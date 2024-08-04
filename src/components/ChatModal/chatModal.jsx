import HumanMessage from "./humanMessage";
import AIMessage from "./AIMessage";
import styles from "./styles.module.css"
import { useState, useRef, useEffect } from "react"
import sendLLMMessage from "../../services/sendLLMMessage"

const ChatModal = (props) => {
    const [messages, setMessages] = useState([])
    const [searchInput, setInputMessage] = useState("")
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);
    var key = 0;
    return (
        <div id={styles["chat-container"]} style={{"display": props.modalDisplay}}>
            <p id={styles["chat-header"]}>AI ChatBot</p>
            <div id={styles["chat-body"]}>
                <div id={styles["messages-container"]}>
                    {
                        messages.length > 0 && messages.map((message) => {
                            return message.type === "AI" ? <AIMessage key={key++} message={message.text}/> : <HumanMessage key={key++} message={message.text}/>
                        })
                    }
                    <div ref={messagesEndRef} />
                </div>
                <div id={styles["prompt-container"]}>
                    <input 
                        id={styles["prompt-input"]} 
                        type="text"
                        placeholder="Send a Message" 
                        onKeyDown={(e) => sendLLMMessage(e, setMessages, setInputMessage)}
                        onChange={(e) => setInputMessage(e.target.value)}
                        value={searchInput}
                    >
                    </input>
                </div>
            </div>
        </div>
    )
}

export default ChatModal;