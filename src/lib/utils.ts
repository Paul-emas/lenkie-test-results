import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getBaseUrl = () => `${process.env.NEXT_PUBLIC_PROXY}/?${process.env.NEXT_PUBLIC_BASE_URL}`;

export const getPath = (path: string = ''): string => (path ? `/${path}` : '');

export const createUrlParamFromObj = (params: any = null): string => {
  if (!params) return '';
  const result: any = [];
  Object.keys(params).map(key => result.push(`${key}=${params[key]}`));
  return `?${result.join('&')}`;
};

export const getCustomUrl = (url: string = ''): string => url;

export const getContentType = (type: string = ''): string => {
  switch (type) {
    case 'form-data':
      return 'multipart/form-data';
    default:
      return 'application/json';
  }
};

export const createHeader = (value = {}, base = {}) => ({
  ...base,
  ...value
});
