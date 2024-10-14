import { useMutation } from "@tanstack/react-query";
import { AnswerResponseType } from "@types";
import { instance } from "..";

const postSendToFlask = async (
  query: string
): Promise<AnswerResponseType | null> => {
  try {
    const response: AnswerResponseType = await instance.post("/sendToFlask", {
      inputVal: query,
    });
    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const usePostSendToFlask = () => {
  return useMutation({
    mutationFn: (query: string) => postSendToFlask(query),
  });
};
