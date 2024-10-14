import { AxiosError } from "axios";

import instance from "./index";

const postSendToFlask = async (query: string) => {
  try {
    const response = await instance.post("/sendToFlask", {
      inputVal: query,
    });
    return response;
  } catch (error) {
    if (error instanceof AxiosError) {
      const response = error.response;
      return response;
    }
  }
};

export default postSendToFlask;
