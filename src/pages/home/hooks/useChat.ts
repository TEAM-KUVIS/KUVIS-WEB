import { useEffect, useRef, useState } from "react";
import { Chat } from "@types";
// import postSendToFlask from "@apis/postSendToFlask";

const useChat = () => {
  const [chatHistory, setChatHistory] = useState<Chat[]>([]);
  const [question, setQuestion] = useState("");
  const [typedAnswer, setTypedAnswer] = useState(""); // 타이핑 중인 답변 상태
  const [isTyping, setIsTyping] = useState(false); // 타이핑 중인지 여부

  const chatListRef = useRef<HTMLUListElement>(null);

  const handleSubmitForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isTyping) {
      return;
    }

    if (!question.trim().replace(/[\s\n\t]+/g, "").length) {
      return;
    }

    // const fullAnswer = postSendToFlask(question);
    const fullAnswer = `컴퓨터네트워크에 대해서 알려줘컴퓨터네트워크에 대해서
              알려줘컴퓨터네트워크에 대해서 알려줘컴퓨터네트워크에 대해서
              알려줘컴퓨터네트워크에 대해서 알려줘컴퓨터네트워크에 대해서
              알려줘컴퓨터네트워크에 대해서 알려줘컴퓨터네트워크에 대해서
              알려줘컴퓨터네트워크에 대해서 알려줘컴퓨터네트워크에 대해서
              알려줘컴퓨터네트워크에 대해서 알려줘컴퓨터네트워크에 대해서 알려줘`;

    setIsTyping(true);
    setTypedAnswer(" "); // 새 답변을 입력하기 전에 초기화
    typeAnswer(fullAnswer);
    setChatHistory([...chatHistory, { question, answer: "" }]); // 빈 답변으로 추가
    setQuestion("");
  };

  const typeAnswer = (fullAnswer: string) => {
    let currentIndex = 0;

    const typingInterval = setInterval(() => {
      if (currentIndex < fullAnswer.length) {
        setTypedAnswer((prev) => prev + fullAnswer[currentIndex]);
        currentIndex += 1;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false); // 타이핑 완료
        setChatHistory((prev) => {
          const newHistory = [...prev];
          newHistory[newHistory.length - 1].answer = fullAnswer; // 완성된 답변 저장
          return newHistory;
        });
      }
    }, 1); // 타이핑 속도 조절 (50ms 마다 한 글자씩)
  };

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.target.value);
  };

  useEffect(() => {
    if (chatListRef.current) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }
  }, [chatHistory, typedAnswer]);

  return {
    chatHistory,
    question,
    typedAnswer,
    isTyping,
    chatListRef,
    handleSubmitForm,
    handleChangeInput,
  };
};

export default useChat;
