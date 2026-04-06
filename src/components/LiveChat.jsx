import ChatMessage from "./ChatMessage";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addmessage } from "../utils/chatSlice";
import { useSelector } from "react-redux";
import { generate } from "../utils/helper";
import { makeid } from "../utils/helper";
const LiveChat = () => {
  const dispatch = useDispatch();
  const chatmessages = useSelector((store) => store.chat.messages);
   const  [livemessages, setLivemessages] = useState("");
  useEffect(() => {
    const i = setInterval(() => {
      console.log("polling for new messages");
      dispatch(
        addmessage({
          name: generate(),
          message: makeid(30),
        }),
      );
    }, 2000);

   

    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <>
      <div className="w-full border border-black h-[600px] bg-slate-100 ml-2 p-2 rounded-lg overflow-y-scroll flex flex-col-reverse">
        <div>
          {chatmessages.map((c, i) => (
            <ChatMessage key={i} name={c.name} message={c.message} />
          ))}
        </div>
      </div>

      <form className="w-full my-2 p-1 ml-2 border border-black" onSubmit={(e)=> {
        e.preventDefault();
        dispatch(addmessage({
          name: "Mayur Thombare",
          message: livemessages
        }))

        setLivemessages("");
        
        }}>
        <input className="w-60 p-2 m-2" type="text"  value={livemessages} onChange={(e)=> setLivemessages(e.target.value)}/>
        <button className="p-2 bg-green-600 rounded-lg">send</button>
      </form>
    </>
  );
};

export default LiveChat;
