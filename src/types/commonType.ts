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
