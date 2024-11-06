import { useMutation } from "@tanstack/react-query";
import { AnswerResponseType } from "@types";
import { post } from "..";

const postQuery = async (
  pdfId: number,
  query: string
): Promise<AnswerResponseType | null> => {
  try {
    const response: AnswerResponseType = await post("/query", {
      pdfId,
      query,
    });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const usePostQuery = () => {
  return useMutation({
    mutationFn: ({ pdfId, query }: { pdfId: number; query: string }) =>
      postQuery(pdfId, query),
  });
};
