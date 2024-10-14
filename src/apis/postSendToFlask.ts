import { AxiosError } from "axios";

import instance from "./index";
import { AnswerResponseType } from "@types";

const postSendToFlask = async (
  query: string
): Promise<AnswerResponseType | null | undefined> => {
  try {
    const response: AnswerResponseType = await instance.post("/sendToFlask", {
      inputVal: query,
    });
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      return null;
    }
  }
};

export default postSendToFlask;
