import { useState } from "react";
import {
  fileInput,
  header,
  headerTitle,
  modalButton,
  modalContainer,
  nameInput,
} from "./Header.style";
import { fetchPresignedUrl } from "@apis/file/useFetchPresignedUrl";
import { usePutS3Upload } from "@apis/file/usePutS3Upload";
import { Modal } from "@components";

const Header = () => {
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

  const handleUploadFile = async () => {
    if (!chatName || !selectedFile) {
      return;
    }

    const presignedUrl = await fetchPresignedUrl();
    const { fileName, url } = presignedUrl!;

    if (fileName && url) {
      try {
        await putS3UploadMutateAsync({ url, file: selectedFile });

        const fileUrl = url?.split("?")[0];
        console.log("업로드 성공");
        console.log("파일 이름: ", fileUrl);
      } catch (err) {
        console.error(`${selectedFile.name}이 업로드에 실패했음`, err);
        return null;
      }
    }
  };

  return (
    <header css={header}>
      <span onClick={handlePlusClick} className="material-symbols-outlined">
        add
      </span>
      <h1 css={headerTitle}>KUVIS</h1>
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
          </article>
        </Modal>
      )}
    </header>
  );
};

export default Header;
