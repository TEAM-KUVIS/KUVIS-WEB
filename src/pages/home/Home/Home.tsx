import {
  chattingSection,
  formButton,
  formContainer,
  formInput,
  mainLayout,
} from "./Home.style";
import { Chats } from "../components";
import { useChat } from "../hooks";
import { DotLoader } from "react-spinners";
import { Header } from "@components";

const Home = () => {
  const {
    chatHistory,
    question,
    typedAnswer,
    isTyping,
    chatListRef,
    isPending,
    handleSubmitForm,
    handleChangeInput,
  } = useChat();

  return (
    <>
      <Header />
      <main css={mainLayout}>
        <ul css={chattingSection} ref={chatListRef}>
          <Chats
            chats={chatHistory}
            typedAnswer={typedAnswer}
            isTyping={isTyping}
          />
        </ul>
        {isPending && <DotLoader color="#AAB396" />}

        <form css={formContainer} onSubmit={handleSubmitForm}>
          <input
            css={formInput}
            type="text"
            value={question}
            onChange={handleChangeInput}
            disabled={isPending}
            placeholder="질문을 입력하세요."
          />
          <button css={formButton} type="submit">
            <span className="material-symbols-outlined">arrow_upward</span>{" "}
          </button>
        </form>
      </main>
    </>
  );
};

export default Home;
