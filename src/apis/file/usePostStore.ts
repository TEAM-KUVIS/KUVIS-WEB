import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AnswerResponseType } from "@types";
import { post } from "..";

const postStore = async (
  name: string,
  filename: string
): Promise<AnswerResponseType | null> => {
  try {
    const response: AnswerResponseType = await post("/store", {
      name,
      filename,
    });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const usePostStore = (handleModalClose: () => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ name, filename }: { name: string; filename: string }) =>
      postStore(name, filename),
    onSuccess: () => {
      handleModalClose();
      queryClient.invalidateQueries({ queryKey: ["pdfs"] });
    },
  });
};
