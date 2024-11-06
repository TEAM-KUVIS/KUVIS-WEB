import {
  chattingSection,
  formButton,
  formContainer,
  formInput,
  mainLayout,
  mainWrapper,
} from "./Home.style";
import { Chats } from "../components";
import { useChat } from "../hooks";
import { SyncLoader } from "react-spinners";
import { Header, Sidebar } from "@components";

const mockData = [
  { name: "컴퓨터 네트워크 컴퓨터 네트워크 컴퓨터 네트워크", selected: false },
  { name: "데이터베이스", selected: true },
  { name: "프로그래밍 언어", selected: false },
  { name: "자료구조", selected: false },
  { name: "운영체제", selected: false },
  { name: "컴퓨터 구조", selected: false },
];

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
      <div css={mainWrapper}>
        <Sidebar menuList={mockData} />
        <main css={mainLayout}>
          <ul css={chattingSection} ref={chatListRef}>
            <Chats
              chats={chatHistory}
              typedAnswer={typedAnswer}
              isTyping={isTyping}
            />
          </ul>
          {isPending && <SyncLoader color="#112D4E" />}

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
      </div>
    </>
  );
};

export default Home;
