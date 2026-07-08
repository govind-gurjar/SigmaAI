import Sidebar from "./Sidebar";
import ChatWindow from "./ChatWindow";
import { MyContext } from "./MyContext";
import { useState, useEffect } from "react";
import { v1 as uuidv1 } from "uuid";
import "./App.css";

function Layout() {

    const [prompt, setPrompt] = useState("");
    const [reply, setReply] = useState(null);
    const [currThreadId, setCurrThreadId] = useState(uuidv1());
    const [prevChats, setPrevChats] = useState([]);
    const [newChat, setNewChat] = useState(true);
    const [allThreads, setAllThreads] = useState([]);
    //dark/light them ke liye
    const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
   );

   useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
    }, [theme]);

    const providerValues = {
        prompt, setPrompt,
        reply, setReply,
        currThreadId, setCurrThreadId,
        newChat, setNewChat,
        prevChats, setPrevChats,
        allThreads, setAllThreads,

          theme,
          setTheme
    };

    return (
    <MyContext.Provider value={providerValues}>
        <div className={`app ${theme}`}>
            <Sidebar />
            <ChatWindow />
        </div>
    </MyContext.Provider>
);
}

export default Layout;