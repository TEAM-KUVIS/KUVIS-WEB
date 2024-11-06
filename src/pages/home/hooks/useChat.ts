import { useEffect, useRef, useState } from "react";
import { Chat } from "@types";
import { usePostQuery } from "@apis/chat/usePostQuery";
import { useFetchHistory } from "@apis/chat/useFetchHistory";
import { useQueryClient } from "@tanstack/react-query";

const useChat = () => {
  const [chatHistory, setChatHistory] = useState<Chat[]>([]);
  const [query, setQuery] = useState("");
  const [typedAnswer, setTypedAnswer] = useState(""); // 타이핑 중인 답변 상태
  const [isTyping, setIsTyping] = useState(false); // 타이핑 중인지 여부

  const chatListRef = useRef<HTMLUListElement>(null);
  const [selectedChatId, setSelectedChatId] = useState<number>();
  const queryClient = useQueryClient();

  const handleClickChat = (id: number) => {
    if (selectedChatId === id) {
      return;
    }
    setSelectedChatId(id);
    queryClient.invalidateQueries({ queryKey: ["chatHistory", id] });
  };

  const { mutateAsync, isPending } = usePostQuery();
  const { data: chatSavedHistory } = useFetchHistory(selectedChatId ?? 0);

  useEffect(() => {
    if (chatSavedHistory) {
      setChatHistory(chatSavedHistory);
    }
  }, [chatSavedHistory]);

  const handleSubmitForm = async (
    event: React.ChangeEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    if (isTyping || isPending) {
      return;
    }

    if (!query.trim().replace(/[\s\n\t]+/g, "").length || !selectedChatId) {
      return;
    }

    mutateAsync({ pdfId: selectedChatId, query: query }).then((data) => {
      const fullAnswer = data?.data.outputVal || "";

      setIsTyping(true);
      setTypedAnswer(""); // 새 답변을 입력하기 전에 초기화
      typeAnswer(fullAnswer);
      setChatHistory([...chatHistory, { query, answer: "" }]); // 빈 답변으로 추가
      setQuery("");
    });
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
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (chatListRef.current) {
      chatListRef.current.scrollTop = chatListRef.current.scrollHeight;
    }
  }, [chatHistory, typedAnswer, isPending]);

  return {
    chatHistory,
    query,
    typedAnswer,
    isTyping,
    chatListRef,
    isPending,
    handleSubmitForm,
    handleChangeInput,
    selectedChatId,
    setSelectedChatId,
    handleClickChat,
  };
};

export default useChat;
