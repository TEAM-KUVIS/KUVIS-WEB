import { Chat } from "@types";
import {
  answerContainer,
  answerText,
  chatContainer,
  questionContainer,
  questionText,
} from "./Chats.style";

interface ChatsProps {
  chats: Chat[];
  typedAnswer: string;
  isTyping: boolean;
}

const Chats = ({ chats, typedAnswer, isTyping }: ChatsProps) => {
  return (
    <>
      {chats.map((chat, index) => {
        return (
          <li css={chatContainer} key={index}>
            <article css={questionContainer}>
              <p css={questionText}>{chat.question}</p>
            </article>
            <article css={answerContainer}>
              <p css={answerText}>
                {" "}
                {index === chats.length - 1 && isTyping
                  ? typedAnswer
                  : chat.answer}
              </p>
            </article>
          </li>
        );
      })}
    </>
  );
};

export default Chats;
