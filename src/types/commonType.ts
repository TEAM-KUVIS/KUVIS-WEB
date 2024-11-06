export interface ApiResponseType<T> {
  status: number;
  message: string;
  data: T;
}

export interface AnswerResponseType {
  data: {
    outputVal: string;
  };
}

export interface StoreResponseType {
  name: string;
  filename: string;
}

export interface PdfsResponseType {
  id: number;
  name: string;
}
