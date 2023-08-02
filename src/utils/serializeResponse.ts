import { IResponse } from 'types';
import { AxiosResponse } from 'axios';

export async function TransformResponse<T>(
  responseP: Promise<AxiosResponse<T>>,
  customMessage?: string,
): Promise<IResponse<T>> {
  try {
    const response = await responseP;
    if (response.status >= 200 && response.status < 400) {
      return {
        data: response.data,
        error: false,
        message: customMessage ?? '',
      };
    }
    return { data: null, error: true, message: 'Something went wrong' };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return {
      data: null,
      error: true,
      message:
        error?.response?.data?.error ??
        error.message ??
        'Something went wrong!',
    };
  }
}
