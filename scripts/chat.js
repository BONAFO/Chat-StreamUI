let eraser_seed = 0;
const expiration_time = 3;
const chat_wait = 2;


const parseStyle = (style = {}) => {
    let styletext = ""

    Object.keys(style).map(st => {
        styletext += `${st}: ${style[st]};`;
    })


    return styletext
}



const Create_Chat = (text, username, style = { username: {}, text: {} }) => {
    const chat = document.getElementsByClassName("chat");

    for (let i = 0; i < chat.length; i++) {
        const ch = document.createElement("li");
        ch.className = `chat-item`;
        ch.setAttribute("data-exp", eraser_seed + (expiration_time * chat_wait))
        ch.innerHTML = `<span style="${parseStyle(style.username)}">${username ? username + ": " :""}</span><span style="${parseStyle(style.text)}">${text}</span>`;
        chat[i].append(ch)
        PROCESS_CHAT({ username, text })

    }
}

const Clear_Chats = () => {
    eraser_seed += expiration_time
    const chat_list = document.querySelectorAll("[data-exp]");
    for (let i = 0; i < chat_list.length; i++) {

        if (parseFloat(chat_list[i].getAttribute(`data-exp`)) <= eraser_seed) {
            chat_list[i].style.opacity = 0;
            setTimeout(() => {
                chat_list[i].remove()
            }, 300);
        }
    }
}


setInterval(() => {
    Clear_Chats()
}, expiration_time * 1000);