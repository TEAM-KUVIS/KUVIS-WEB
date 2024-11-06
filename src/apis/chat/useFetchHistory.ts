import { useQuery } from "@tanstack/react-query";

import { Chat } from "@types";
import { get } from "..";

const getHistory = async (selectedChatId: number): Promise<Chat[] | null> => {
  try {
    if (!selectedChatId) {
      return null;
    }
    const response = await get<Chat[]>(`/history/${selectedChatId}`);

    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const useFetchHistory = (selectedChatId: number) => {
  return useQuery({
    queryKey: ["chatHistory", selectedChatId],
    queryFn: () => getHistory(selectedChatId),
    enabled: !!selectedChatId,
  });
};
