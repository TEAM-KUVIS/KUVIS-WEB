import { Chat } from "@types";
import {
  answerContainer,
  answerText,
  chatContainer,
  questionContainer,
  questionText,
} from "./Chats.style";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

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
              <p css={questionText}>{chat.query}</p>
            </article>
            <article css={answerContainer}>
              <ReactMarkdown
                children={
                  index === chats.length - 1 && isTyping
                    ? typedAnswer
                    : chat.answer
                }
                remarkPlugins={[remarkGfm]}
                css={answerText}
              ></ReactMarkdown>
            </article>
          </li>
        );
      })}
    </>
  );
};

export default Chats;
