import { get } from "..";

interface PreSignedUrlResponse {
  fileName: "string";
  url: "string";
}

export const fetchPresignedUrl =
  async (): Promise<PreSignedUrlResponse | null> => {
    try {
      const response = await get<PreSignedUrlResponse>(`/pdf`);

      if (!response) {
        return null;
      }
      return response.data;
    } catch (err) {
      console.error(err);
    }

    return null;
  };
