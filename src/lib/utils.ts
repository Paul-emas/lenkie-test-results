import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const numberFormatter = (num: number) => {
  return num.toLocaleString('en-US', {
    // add suffixes for thousands, millions, and billions
    // the maximum number of decimal places to use
    maximumFractionDigits: 2,
    // specify the abbreviations to use for the suffixes
    notation: 'compact',
    compactDisplay: 'short'
  });
};

export const formatTime = (time: number) => {
  if (time && !isNaN(time)) {
    const minutes = Math.floor(time / 60);
    const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(time % 60);
    const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${formatMinutes}:${formatSeconds}`;
  }
  return '00:00';
};

export const getBaseUrl = () => process.env.NEXT_PUBLIC_BASE_URL;

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
