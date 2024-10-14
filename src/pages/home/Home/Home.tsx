import {
  chattingSection,
  formButton,
  formContainer,
  formInput,
  mainLayout,
} from "./Home.style";
import { Chats } from "../components";
import { useChat } from "../hooks";

const Home = () => {
  const {
    chatHistory,
    question,
    typedAnswer,
    isTyping,
    chatListRef,
    handleSubmitForm,
    handleChangeInput,
  } = useChat();

  return (
    <main css={mainLayout}>
      <ul css={chattingSection} ref={chatListRef}>
        <Chats
          chats={chatHistory}
          typedAnswer={typedAnswer}
          isTyping={isTyping}
        />
      </ul>
      <form css={formContainer} onSubmit={handleSubmitForm}>
        <input
          css={formInput}
          type="text"
          value={question}
          onChange={handleChangeInput}
          disabled={isTyping}
          placeholder="질문을 입력하세요."
        />
        <button css={formButton} type="submit">
          <span className="material-symbols-outlined">arrow_upward</span>{" "}
        </button>
      </form>
    </main>
  );
};

export default Home;
