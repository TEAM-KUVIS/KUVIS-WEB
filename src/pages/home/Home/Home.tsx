import {
  chattingSection,
  formButton,
  formContainer,
  formInput,
  homeSpinner,
  mainLayout,
  mainWrapper,
} from "./Home.style";
import { Chats } from "../components";
import { useChat } from "../hooks";
import { SyncLoader } from "react-spinners";
import { Header, Sidebar } from "@components";

const Home = () => {
  const {
    chatHistory,
    query,
    typedAnswer,
    isTyping,
    chatListRef,
    isPending,
    handleSubmitForm,
    handleChangeInput,
    selectedChatId,
    handleClickChat,
  } = useChat();

  return (
    <>
      <Header />
      <div css={mainWrapper}>
        <Sidebar
          selectedChatId={selectedChatId}
          handleClickChat={handleClickChat}
        />
        <main css={mainLayout}>
          <ul css={chattingSection} ref={chatListRef}>
            <Chats
              chats={chatHistory}
              typedAnswer={typedAnswer}
              isTyping={isTyping}
            />
          </ul>
          {isPending && (
            <span css={homeSpinner}>
              <SyncLoader color="#112D4E" />
            </span>
          )}

          <form css={formContainer} onSubmit={handleSubmitForm}>
            <input
              css={formInput}
              type="text"
              value={query}
              onChange={handleChangeInput}
              disabled={isPending}
              placeholder="질문을 입력하세요."
            />
            <button css={formButton} type="submit">
              <span className="material-symbols-outlined">arrow_upward</span>{" "}
            </button>
          </form>
        </main>
      </div>
    </>
  );
};

export default Home;
