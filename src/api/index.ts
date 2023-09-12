import axios, { AxiosError } from 'axios';
// import { ErrorInterface } from '@/utils/types';
import { getPath, getCustomUrl, createUrlParamFromObj, getContentType, createHeader, getBaseUrl } from '@/lib/utils';
import { ErrorInterface } from '@/types/shared';
// import errorValidator from './error-validator';

interface RequestPayloadTypes {
  path?: string;
  params?: any;
  url?: string;
  type?: string;
  headers?: any;
  body?: any;
}

export const apiInstance = axios.create({
  baseURL: getBaseUrl(),
  timeout: 10000,
  validateStatus: (status: number) => status >= 200 && status < 300
});

class ApiRequest {
  static request = async (
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    route: string,
    payload: RequestPayloadTypes,
    custom: boolean
  ) => {
    const path = getPath(payload.path);
    const params = createUrlParamFromObj(payload.params);
    const customUrl = getCustomUrl(payload.url);
    const contentType = getContentType(payload.type);
    const baseHeaders = {
      'Content-Type': contentType
    };
    const headers = createHeader(payload.headers, baseHeaders);
    const url = customUrl.length > 0 ? customUrl : route + path + params;
    const data = payload.body ? payload.body : {};
    const requestObj = { url, headers, method, data };

    try {
      const response = await (custom ? axios : apiInstance).request(requestObj);
      return response;
    } catch (error) {
      const err = error as AxiosError<ErrorInterface>;
      //   errorValidator(err);
      if (err && err.response && err.response.data) {
        throw err.response.data;
      } else if (err && err.response) {
        throw err.response;
      } else {
        throw err;
      }
    }
  };

  static get = (route: string) => (payload: RequestPayloadTypes) => this.request('GET', route, payload, false);

  static put = (route: string) => (payload: RequestPayloadTypes) => this.request('PUT', route, payload, false);

  static post = (route: string) => (payload: RequestPayloadTypes) => this.request('POST', route, payload, false);

  static delete = (route: string) => (payload: RequestPayloadTypes) => this.request('DELETE', route, payload, false);

  static patch = (route: string) => (payload: RequestPayloadTypes) => this.request('PATCH', route, payload, false);
}

export default ApiRequest;
