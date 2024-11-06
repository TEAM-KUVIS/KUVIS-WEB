import { useQuery } from "@tanstack/react-query";

import { PdfsResponseType } from "@types";
import { get } from "..";

const getPdfs = async (): Promise<PdfsResponseType[] | null> => {
  try {
    const response = await get<PdfsResponseType[]>(`/pdfs`);

    return response.data;
  } catch (err) {
    console.error(err);
    return null;
  }
};

export const useFetchPdfs = () => {
  return useQuery({
    queryKey: ["pdfs"],
    queryFn: () => getPdfs(),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 10,
  });
};
