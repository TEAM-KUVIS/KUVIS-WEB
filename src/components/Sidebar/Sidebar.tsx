import { useFetchPdfs } from "@apis/chat/useFetchPdfs";
import {
  addChatMenu,
  sidebarContainer,
  sidebarList,
  sidebarMenu,
  fileInput,
  modalButton,
  modalContainer,
  modalSpinner,
  nameInput,
} from "./Sidebar.style";
import { useEffect, useState } from "react";
import { fetchPresignedUrl } from "@apis/file/useFetchPresignedUrl";
import { usePutS3Upload } from "@apis/file/usePutS3Upload";
import { usePostStore } from "@apis/file/usePostStore";
import { Modal } from "@components";
import { DotLoader } from "react-spinners";
interface SidebarProps {
  selectedChatId: number | undefined;
  handleClickChat: (id: number) => void;
}

const Sidebar = ({ selectedChatId, handleClickChat }: SidebarProps) => {
  const { data: menuList } = useFetchPdfs();

  const [chatName, setChatName] = useState("");
  const [selectedFile, setSelectedFile] = useState<File>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { mutateAsync: putS3UploadMutateAsync } = usePutS3Upload();

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handlePlusClick = () => {
    setIsModalOpen(true);
  };

  const { mutate, isPending } = usePostStore(handleModalClose);

  const handleUploadFile = async () => {
    if (!chatName || !selectedFile) {
      return;
    }

    const presignedUrl = await fetchPresignedUrl();
    const { fileName, url } = presignedUrl!;

    if (fileName && url) {
      try {
        await putS3UploadMutateAsync({ url, file: selectedFile });
        mutate({ name: chatName, filename: fileName });
      } catch (err) {
        console.error(`${selectedFile.name}이 업로드에 실패했음`, err);
        return null;
      }
    }
  };

  useEffect(() => {
    if (menuList && menuList.length > 0 && !selectedChatId) {
      handleClickChat(menuList[menuList.length - 1].id);
      menuList.reverse();
    }
  }, [handleClickChat, menuList, selectedChatId]);

  return (
    <aside css={sidebarContainer}>
      <ul css={sidebarList}>
        <li onClick={handlePlusClick} css={addChatMenu}>
          <span>새로운 채팅</span>
          <span className="material-symbols-outlined">add</span>
        </li>
        {(menuList || []).map((item) => (
          <li
            onClick={() => {
              handleClickChat(item.id);
            }}
            css={sidebarMenu(item.id === selectedChatId)}
            key={item.id}
          >
            {item.name}
          </li>
        ))}
      </ul>
      {isModalOpen && (
        <Modal onClose={handleModalClose}>
          <article css={modalContainer}>
            <input
              value={chatName}
              onChange={(e) => setChatName(e.target.value)}
              css={nameInput}
              type="text"
              placeholder="대화명을 입력하세요. ex)컴퓨터 네트워크"
            />
            <input
              onChange={(e) => setSelectedFile(e.target.files![0])}
              css={fileInput}
              type="file"
              accept="application/pdf"
            />
            <button onClick={handleUploadFile} css={modalButton} type="button">
              대화 생성
            </button>
            {isPending && (
              <div css={modalSpinner}>
                <DotLoader color="#112D4E" />
              </div>
            )}
          </article>
        </Modal>
      )}
    </aside>
  );
};

export default Sidebar;
