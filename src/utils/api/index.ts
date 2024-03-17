import { FetchMethodsEnum, RequestOptionsType, RequestUrlType } from 'utils/types/api';

function buildQueryStringFromData(data: Record<string, string | number>): string {
  if (typeof data !== 'object') {
    throw new Error('Данные должны быть объектом');
  }

  const queryString = Object.keys(data)
    .map((key) => `${key}=${data[key]}`)
    .join('&');

  return `?${queryString}`;
}

export class HTTPTransport {
  async request(url: RequestUrlType, options: RequestOptionsType): Promise<XMLHttpRequest> {
    const { method, data, headers = {}, timeout = 5000 } = options;
    const isGet = method === FetchMethodsEnum.GET;
    const xhr = new XMLHttpRequest();

    return new Promise((resolve, reject) => {
      xhr.open(method, isGet && !!data ? `${url}${buildQueryStringFromData(data)}` : url);

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = () => {
        resolve(xhr);
      };

      xhr.onerror = () => {
        reject(new Error('Произошла ошибка при выполнении запроса'));
      };

      xhr.timeout = timeout;
      xhr.ontimeout = () => {
        reject(new Error('Время ожидания истекло'));
      };

      xhr.onabort = () => {
        reject(new Error('Запрос был прерван'));
      };

      if (method === FetchMethodsEnum.GET || !data) {
        xhr.send();
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  }

  async get(url: RequestUrlType, options: RequestOptionsType): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: FetchMethodsEnum.GET });
  }

  async post(url: RequestUrlType, options: RequestOptionsType): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: FetchMethodsEnum.POST });
  }

  async put(url: RequestUrlType, options: RequestOptionsType): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: FetchMethodsEnum.PUT });
  }

  async delete(url: RequestUrlType, options: RequestOptionsType): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: FetchMethodsEnum.DELETE });
  }
}

export async function refetch(
  url: RequestUrlType,
  options: RequestOptionsType,
  retryCount = 3,
): Promise<XMLHttpRequest | Error> {
  const fetch = new HTTPTransport();

  try {
    const response = await fetch.request(url, options);
    return response;
  } catch (err) {
    if (retryCount > 0) {
      return refetch(url, options, retryCount - 1);
    } else {
      throw new Error('Не удалось отправить запрос');
    }
  }
}
