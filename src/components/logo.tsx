import React, { Fragment } from 'react';

const Logo: React.FC = () => {
  return (
    <div className="relative flex items-center">
      <svg
        className="block dark:hidden"
        xmlns="http://www.w3.org/2000/svg"
        width="123"
        height="42"
        viewBox="0 0 123 42"
        fill="none"
      >
        <path
          d="M37.541 34.5H32.1445V7.42969H37.541V34.5ZM55.8771 32.5312C53.6974 34.0781 51.3127 34.8516 48.7228 34.8516C46.8009 34.8516 45.0724 34.4414 43.5373 33.6211C42.0138 32.7891 40.8068 31.6641 39.9162 30.2461C39.0373 28.8281 38.5978 27.2285 38.5978 25.4473C38.5978 23.748 38.9963 22.2305 39.7931 20.8945C40.6017 19.5586 41.6974 18.5039 43.0802 17.7305C44.463 16.957 46.0334 16.5703 47.7912 16.5703C49.6076 16.5703 51.2072 16.998 52.59 17.8535C53.9728 18.6973 55.0509 19.8809 55.8244 21.4043C56.5978 22.916 56.9845 24.668 56.9845 26.6602V27.2227H44.0295C44.2404 27.9141 44.5861 28.5234 45.0666 29.0508C45.547 29.5664 46.1447 29.9766 46.8595 30.2812C47.5744 30.5859 48.3947 30.7383 49.3205 30.7383C51.1134 30.7383 52.7834 30.1582 54.3302 28.998L55.8771 32.5312ZM43.8009 24.6562H52.3263C52.2326 23.8945 51.9923 23.2266 51.6056 22.6523C51.2306 22.0664 50.7326 21.6094 50.1115 21.2812C49.5021 20.9531 48.8166 20.7891 48.0548 20.7891C47.2814 20.7891 46.59 20.959 45.9806 21.2988C45.383 21.6387 44.8966 22.0957 44.5216 22.6699C44.1466 23.2441 43.9064 23.9062 43.8009 24.6562ZM75.5667 34.5H70.5218V25.5C70.5218 24.1289 70.1937 23.0566 69.5374 22.2832C68.8929 21.498 68.0081 21.1055 66.8831 21.1055C65.7113 21.1055 64.7796 21.5156 64.0882 22.3359C63.4085 23.1445 63.0687 24.2461 63.0687 25.6406V34.5H58.0238V16.9219H62.1019L62.2777 19.7344C62.9105 18.7031 63.7366 17.918 64.7562 17.3789C65.7757 16.8398 66.9769 16.5703 68.3597 16.5703C70.598 16.5703 72.3558 17.2617 73.6331 18.6445C74.9222 20.0156 75.5667 21.9141 75.5667 24.3398V34.5ZM82.3891 34.5H77.3442V8.13281H82.3891V24.3398L84.1118 22.2656L89.1743 16.9219H95.4848L88.0493 24.7441L96.3638 34.5H89.8423L84.5864 27.9082L82.3891 29.9121V34.5ZM99.319 12.7207C98.651 12.7207 98.0885 12.4863 97.6315 12.0176C97.1745 11.5488 96.9459 10.9805 96.9459 10.3125C96.9459 9.64453 97.1745 9.08203 97.6315 8.625C98.0885 8.15625 98.651 7.92188 99.319 7.92188C99.9987 7.92188 100.567 8.15625 101.024 8.625C101.493 9.08203 101.727 9.64453 101.727 10.3125C101.727 10.9805 101.493 11.5488 101.024 12.0176C100.567 12.4863 99.9987 12.7207 99.319 12.7207ZM101.85 34.5H96.8053V16.9219H101.85V34.5ZM120.221 32.5312C118.042 34.0781 115.657 34.8516 113.067 34.8516C111.145 34.8516 109.417 34.4414 107.882 33.6211C106.358 32.7891 105.151 31.6641 104.261 30.2461C103.382 28.8281 102.942 27.2285 102.942 25.4473C102.942 23.748 103.341 22.2305 104.137 20.8945C104.946 19.5586 106.042 18.5039 107.425 17.7305C108.807 16.957 110.378 16.5703 112.136 16.5703C113.952 16.5703 115.552 16.998 116.934 17.8535C118.317 18.6973 119.395 19.8809 120.169 21.4043C120.942 22.916 121.329 24.668 121.329 26.6602V27.2227H108.374C108.585 27.9141 108.93 28.5234 109.411 29.0508C109.891 29.5664 110.489 29.9766 111.204 30.2812C111.919 30.5859 112.739 30.7383 113.665 30.7383C115.458 30.7383 117.128 30.1582 118.675 28.998L120.221 32.5312ZM108.145 24.6562H116.671C116.577 23.8945 116.337 23.2266 115.95 22.6523C115.575 22.0664 115.077 21.6094 114.456 21.2812C113.846 20.9531 113.161 20.7891 112.399 20.7891C111.626 20.7891 110.934 20.959 110.325 21.2988C109.727 21.6387 109.241 22.0957 108.866 22.6699C108.491 23.2441 108.251 23.9062 108.145 24.6562Z"
          fill="#000000"
        ></path>
        <path
          d="M11.9443 15.9297C11.8257 15.8349 11.7566 15.6912 11.7566 15.5392V6.49983L22.9479 15.4495C23.3038 15.7341 23.511 16.1652 23.511 16.6209V21.0185C23.511 22.6953 21.5716 23.6277 20.262 22.5806L11.9443 15.9297Z"
          fill="#C97D00"
        ></path>
        <path
          d="M8.81314 29.631C8.15842 30.1551 7.18823 29.6889 7.18823 28.8503V21.6491L11.7564 17.9967V27.2751L8.81314 29.631Z"
          fill="#F5A623"
        ></path>
        <path
          d="M23.511 32.4346C23.511 32.5051 23.511 32.5403 23.5105 32.5628C23.4738 34.1979 21.5967 35.1 20.297 34.1072C20.2791 34.0936 20.2516 34.0716 20.1966 34.0276L11.7566 27.2753V17.9969L23.1281 27.0907C23.1354 27.0965 23.1391 27.0995 23.1426 27.1023C23.3733 27.2902 23.5083 27.5711 23.511 27.8687C23.511 27.8732 23.511 27.8779 23.511 27.8873V32.4346Z"
          fill="#C97D00"
        ></path>
        <path
          d="M5.98959 20.3899C5.87089 20.4848 5.80178 20.6285 5.80178 20.7805V31.3235C5.80178 31.7793 5.5945 32.2104 5.23845 32.4951L3.2489 34.0857C1.93927 35.1327 0 34.2003 0 32.5235V16.6216C0 16.1658 0.20726 15.7347 0.563267 15.45L11.7564 6.50038V15.5397C11.7564 15.6917 11.6873 15.8354 11.5686 15.9303L5.98959 20.3899Z"
          fill="#F5A623"
        ></path>
      </svg>
      <svg
        className="hidden dark:block"
        xmlns="http://www.w3.org/2000/svg"
        width="123"
        height="42"
        viewBox="0 0 123 42"
        fill="none"
      >
        <path
          d="M37.541 34.5H32.1445V7.42969H37.541V34.5ZM55.8771 32.5312C53.6974 34.0781 51.3127 34.8516 48.7228 34.8516C46.8009 34.8516 45.0724 34.4414 43.5373 33.6211C42.0138 32.7891 40.8068 31.6641 39.9162 30.2461C39.0373 28.8281 38.5978 27.2285 38.5978 25.4473C38.5978 23.748 38.9963 22.2305 39.7931 20.8945C40.6017 19.5586 41.6974 18.5039 43.0802 17.7305C44.463 16.957 46.0334 16.5703 47.7912 16.5703C49.6076 16.5703 51.2072 16.998 52.59 17.8535C53.9728 18.6973 55.0509 19.8809 55.8244 21.4043C56.5978 22.916 56.9845 24.668 56.9845 26.6602V27.2227H44.0295C44.2404 27.9141 44.5861 28.5234 45.0666 29.0508C45.547 29.5664 46.1447 29.9766 46.8595 30.2812C47.5744 30.5859 48.3947 30.7383 49.3205 30.7383C51.1134 30.7383 52.7834 30.1582 54.3302 28.998L55.8771 32.5312ZM43.8009 24.6562H52.3263C52.2326 23.8945 51.9923 23.2266 51.6056 22.6523C51.2306 22.0664 50.7326 21.6094 50.1115 21.2812C49.5021 20.9531 48.8166 20.7891 48.0548 20.7891C47.2814 20.7891 46.59 20.959 45.9806 21.2988C45.383 21.6387 44.8966 22.0957 44.5216 22.6699C44.1466 23.2441 43.9064 23.9062 43.8009 24.6562ZM75.5667 34.5H70.5218V25.5C70.5218 24.1289 70.1937 23.0566 69.5374 22.2832C68.8929 21.498 68.0081 21.1055 66.8831 21.1055C65.7113 21.1055 64.7796 21.5156 64.0882 22.3359C63.4085 23.1445 63.0687 24.2461 63.0687 25.6406V34.5H58.0238V16.9219H62.1019L62.2777 19.7344C62.9105 18.7031 63.7366 17.918 64.7562 17.3789C65.7757 16.8398 66.9769 16.5703 68.3597 16.5703C70.598 16.5703 72.3558 17.2617 73.6331 18.6445C74.9222 20.0156 75.5667 21.9141 75.5667 24.3398V34.5ZM82.3891 34.5H77.3442V8.13281H82.3891V24.3398L84.1118 22.2656L89.1743 16.9219H95.4848L88.0493 24.7441L96.3638 34.5H89.8423L84.5864 27.9082L82.3891 29.9121V34.5ZM99.319 12.7207C98.651 12.7207 98.0885 12.4863 97.6315 12.0176C97.1745 11.5488 96.9459 10.9805 96.9459 10.3125C96.9459 9.64453 97.1745 9.08203 97.6315 8.625C98.0885 8.15625 98.651 7.92188 99.319 7.92188C99.9987 7.92188 100.567 8.15625 101.024 8.625C101.493 9.08203 101.727 9.64453 101.727 10.3125C101.727 10.9805 101.493 11.5488 101.024 12.0176C100.567 12.4863 99.9987 12.7207 99.319 12.7207ZM101.85 34.5H96.8053V16.9219H101.85V34.5ZM120.221 32.5312C118.042 34.0781 115.657 34.8516 113.067 34.8516C111.145 34.8516 109.417 34.4414 107.882 33.6211C106.358 32.7891 105.151 31.6641 104.261 30.2461C103.382 28.8281 102.942 27.2285 102.942 25.4473C102.942 23.748 103.341 22.2305 104.137 20.8945C104.946 19.5586 106.042 18.5039 107.425 17.7305C108.807 16.957 110.378 16.5703 112.136 16.5703C113.952 16.5703 115.552 16.998 116.934 17.8535C118.317 18.6973 119.395 19.8809 120.169 21.4043C120.942 22.916 121.329 24.668 121.329 26.6602V27.2227H108.374C108.585 27.9141 108.93 28.5234 109.411 29.0508C109.891 29.5664 110.489 29.9766 111.204 30.2812C111.919 30.5859 112.739 30.7383 113.665 30.7383C115.458 30.7383 117.128 30.1582 118.675 28.998L120.221 32.5312ZM108.145 24.6562H116.671C116.577 23.8945 116.337 23.2266 115.95 22.6523C115.575 22.0664 115.077 21.6094 114.456 21.2812C113.846 20.9531 113.161 20.7891 112.399 20.7891C111.626 20.7891 110.934 20.959 110.325 21.2988C109.727 21.6387 109.241 22.0957 108.866 22.6699C108.491 23.2441 108.251 23.9062 108.145 24.6562Z"
          fill="#FFFFFF"
        ></path>
        <path
          d="M11.9443 15.9297C11.8257 15.8349 11.7566 15.6912 11.7566 15.5392V6.49983L22.9479 15.4495C23.3038 15.7341 23.511 16.1652 23.511 16.6209V21.0185C23.511 22.6953 21.5716 23.6277 20.262 22.5806L11.9443 15.9297Z"
          fill="#C97D00"
        ></path>
        <path
          d="M8.81314 29.631C8.15842 30.1551 7.18823 29.6889 7.18823 28.8503V21.6491L11.7564 17.9967V27.2751L8.81314 29.631Z"
          fill="#F5A623"
        ></path>
        <path
          d="M23.511 32.4346C23.511 32.5051 23.511 32.5403 23.5105 32.5628C23.4738 34.1979 21.5967 35.1 20.297 34.1072C20.2791 34.0936 20.2516 34.0716 20.1966 34.0276L11.7566 27.2753V17.9969L23.1281 27.0907C23.1354 27.0965 23.1391 27.0995 23.1426 27.1023C23.3733 27.2902 23.5083 27.5711 23.511 27.8687C23.511 27.8732 23.511 27.8779 23.511 27.8873V32.4346Z"
          fill="#C97D00"
        ></path>
        <path
          d="M5.98959 20.3899C5.87089 20.4848 5.80178 20.6285 5.80178 20.7805V31.3235C5.80178 31.7793 5.5945 32.2104 5.23845 32.4951L3.2489 34.0857C1.93927 35.1327 0 34.2003 0 32.5235V16.6216C0 16.1658 0.20726 15.7347 0.563267 15.45L11.7564 6.50038V15.5397C11.7564 15.6917 11.6873 15.8354 11.5686 15.9303L5.98959 20.3899Z"
          fill="#F5A623"
        ></path>
      </svg>
      <div className="-mt-1.5 ml-0.5 text-3xl">🎵</div>
    </div>
  );
};

export default Logo;