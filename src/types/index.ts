export interface IResponse<T> {
  data: T | null;
  error: boolean;
  message: string;
}

export interface ResponseType {
  data: unknown; // It will be change when actual data will come from api
  error: boolean;
  message: string;
}

export type LoginResponse = IResponse<{
  access_token: string;
  token_type: string;
}>;
