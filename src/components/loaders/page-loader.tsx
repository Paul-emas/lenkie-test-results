import React, { useEffect, useState } from 'react';
import Logo from '../logo';
import Image from 'next/image';
import { useAppDispatch } from '@/lib/redux/hooks';
import { handlePageLoading } from '@/lib/redux/slices/trackSlice';

const PageLoader = () => {
  const dispatch = useAppDispatch();
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowSpinner(true), 700);
    const firstTimeUser = window.localStorage.getItem('firstTimeUser');
    if (!firstTimeUser) {
      dispatch(handlePageLoading(true));
      setTimeout(() => {
        dispatch(handlePageLoading(false));
        window.localStorage.setItem('firstTimeUser', JSON.stringify(true));
      }, 3000);
    } else {
      dispatch(handlePageLoading(false));
    }
  }, []);

  return (
    <div className="fixed inset-0 z-40 flex h-screen w-screen items-center justify-center bg-background">
      <div>
        <div className="scale-125">
          <Logo />
        </div>

        <div
          className={`${
            showSpinner ? 'mt-3 h-auto opacity-100' : 'h-0 opacity-0'
          } flex justify-center overflow-hidden duration-300`}
        >
          <div className="block dark:hidden">
            <Image
              src="/images/loader.gif"
              width={18}
              height={18}
              alt="Spinner gif"
              className="overflow-hidden rounded-full"
            />
          </div>
          <div className="hidden dark:block">
            <Image
              src="/images/loader-dark.gif"
              width={18}
              height={18}
              alt="Spinner gif"
              className="overflow-hidden rounded-full"
            />
          </div>
        </div>

        <div className="absolute bottom-10 left-0 flex w-full justify-center">
          <div className="flex items-center">
            <div className="pt-2 text-sm">Powered by</div>
            <div className="-ml-2.5 -mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={150}
                height={40}
                viewBox="-150 -47.8 1300 286.8"
                fill="currentColor"
              >
                <g transform="translate(0 86.8)">
                  <path d="M234.1 40.1c0 40.1 24.7 64.1 61.4 64.1 18.3 0 33.7-5.1 42.3-18.5v18.5h33.5v-191h-34.8v81.2C328.6-19 314-25 295.7-25c-35.8-.1-61.6 24.4-61.6 65.1zm103.5 0c0 22.9-15.6 37.2-34.3 37.2-19.4 0-34.3-14.3-34.3-37.2 0-23.3 15-37.9 34.3-37.9 18.7 0 34.3 14.8 34.3 37.9zm142 14.8c-4 14.8-14.1 22.2-30 22.2-18.5 0-33.7-11.2-34.1-31h87.7c1.1-4.9 1.6-10.1 1.6-15.8 0-35.5-24.2-55.5-59.9-55.5-38.1 0-64.3 27.1-64.3 63.9 0 41 28.9 65.6 68.9 65.6 30.2 0 50.7-12.6 59.7-37.7zm-64.1-32C418.8 8.6 430.7.2 445 .2c15.6 0 26.2 8.4 26.2 21.6l-.2 1.1zm193.2 32c-4 14.8-14.1 22.2-30 22.2-18.5 0-33.7-11.2-34.1-31h87.7c1.1-4.9 1.6-10.1 1.6-15.8 0-35.5-24.2-55.5-59.9-55.5-38.1 0-64.3 27.1-64.3 63.9 0 41 28.9 65.6 68.9 65.6 30.2 0 50.7-12.6 59.7-37.7zm-64.1-32C547.9 8.6 559.8.2 574.1.2c15.6 0 26.2 8.4 26.2 21.6l-.2 1.1zm212.1 81.5V72.9h-73.1l71.1-69.2v-28.8H642.2v30h68.7L640 74.4v30zm101.7-49.5c-4 14.8-14.1 22.2-30 22.2-18.5 0-33.7-11.2-34.1-31H882c1.1-4.9 1.6-10.1 1.6-15.8 0-35.5-24.2-55.5-59.9-55.5-38.1 0-64.3 27.1-64.3 63.9 0 41 28.9 65.6 68.9 65.6 30.2 0 50.7-12.6 59.7-37.7zm-64.1-32C797.6 8.6 809.5.2 823.8.2 839.4.2 850 8.6 850 21.8l-.2 1.1z" />
                  <path fill-rule="evenodd" clip-rule="evenodd" fill="#40ab5d" d="M155.5-25.1h42.9V0h-42.9z" />
                  <linearGradient
                    gradientTransform="matrix(1.8318 0 0 -1.8318 381.813 477.953)"
                    y2="255.826"
                    x2="-111.943"
                    y1="241.804"
                    x1="-111.722"
                    gradientUnits="userSpaceOnUse"
                    id="a"
                  >
                    <stop offset="0" stop-color="#358c7b" />
                    <stop offset=".526" stop-color="#33a65e" />
                  </linearGradient>
                  <path fill="url(#a)" fill-rule="evenodd" clip-rule="evenodd" d="M155.5 9.7h42.9v25.1h-42.9z" />
                  <linearGradient
                    gradientTransform="matrix(1.8318 0 0 -1.8318 381.813 477.953)"
                    y2="235.917"
                    x2="-99.772"
                    y1="223.628"
                    x1="-123.891"
                    gradientUnits="userSpaceOnUse"
                    id="b"
                  >
                    <stop offset="0" stop-color="#222b90" />
                    <stop offset="1" stop-color="#367b99" />
                  </linearGradient>
                  <path fill="url(#b)" fill-rule="evenodd" clip-rule="evenodd" d="M155.5 44.5h42.9v25.1h-42.9z" />
                  <linearGradient
                    gradientTransform="matrix(1.8318 0 0 -1.8318 381.813 477.953)"
                    y2="210.773"
                    x2="-185.032"
                    y1="210.773"
                    x1="-208.432"
                    gradientUnits="userSpaceOnUse"
                    id="c"
                  >
                    <stop offset="0" stop-color="#f90" />
                    <stop offset="1" stop-color="#ff8000" />
                  </linearGradient>
                  <path fill="url(#c)" fill-rule="evenodd" clip-rule="evenodd" d="M0 79.3h42.9v25.1H0z" />
                  <linearGradient
                    gradientTransform="matrix(1.8318 0 0 -1.8318 381.813 477.953)"
                    y2="210.773"
                    x2="-156.732"
                    y1="210.773"
                    x1="-180.132"
                    gradientUnits="userSpaceOnUse"
                    id="d"
                  >
                    <stop offset="0" stop-color="#ff8000" />
                    <stop offset="1" stop-color="#cc1953" />
                  </linearGradient>
                  <path fill="url(#d)" fill-rule="evenodd" clip-rule="evenodd" d="M51.8 79.3h42.9v25.1H51.8z" />
                  <linearGradient
                    gradientTransform="matrix(1.8318 0 0 -1.8318 381.813 477.953)"
                    y2="210.773"
                    x2="-128.432"
                    y1="210.773"
                    x1="-151.832"
                    gradientUnits="userSpaceOnUse"
                    id="e"
                  >
                    <stop offset="0" stop-color="#cc1953" />
                    <stop offset="1" stop-color="#241284" />
                  </linearGradient>
                  <path fill="url(#e)" fill-rule="evenodd" clip-rule="evenodd" d="M103.7 79.3h42.9v25.1h-42.9z" />
                  <linearGradient
                    gradientTransform="matrix(1.8318 0 0 -1.8318 381.813 477.953)"
                    y2="210.773"
                    x2="-100.16"
                    y1="210.773"
                    x1="-123.56"
                    gradientUnits="userSpaceOnUse"
                    id="f"
                  >
                    <stop offset="0" stop-color="#222b90" />
                    <stop offset="1" stop-color="#3559a6" />
                  </linearGradient>
                  <path fill="url(#f)" fill-rule="evenodd" clip-rule="evenodd" d="M155.5 79.3h42.9v25.1h-42.9z" />
                  <linearGradient
                    gradientTransform="matrix(1.8318 0 0 -1.8318 381.813 477.953)"
                    y2="233.464"
                    x2="-127.508"
                    y1="226.081"
                    x1="-152.755"
                    gradientUnits="userSpaceOnUse"
                    id="g"
                  >
                    <stop offset="0" stop-color="#cc1953" />
                    <stop offset="1" stop-color="#241284" />
                  </linearGradient>
                  <path fill="url(#g)" fill-rule="evenodd" clip-rule="evenodd" d="M103.7 44.5h42.9v25.1h-42.9z" />
                  <linearGradient
                    gradientTransform="matrix(1.8318 0 0 -1.8318 381.813 477.953)"
                    y2="225.211"
                    x2="-155.899"
                    y1="234.334"
                    x1="-180.965"
                    gradientUnits="userSpaceOnUse"
                    id="h"
                  >
                    <stop offset=".003" stop-color="#fc0" />
                    <stop offset="1" stop-color="#ce1938" />
                  </linearGradient>
                  <path fill="url(#h)" fill-rule="evenodd" clip-rule="evenodd" d="M51.8 44.5h42.9v25.1H51.8z" />
                  <linearGradient
                    gradientTransform="matrix(1.8318 0 0 -1.8318 381.813 477.953)"
                    y2="239.791"
                    x2="-158.699"
                    y1="257.754"
                    x1="-178.165"
                    gradientUnits="userSpaceOnUse"
                    id="i"
                  >
                    <stop offset=".003" stop-color="#ffd100" />
                    <stop offset="1" stop-color="#fd5a22" />
                  </linearGradient>
                  <path fill="url(#i)" fill-rule="evenodd" clip-rule="evenodd" d="M51.8 9.7h42.9v25.1H51.8z" />
                  <path d="M966.1 19.6v3.7h33.9v-9.9c0-22.2-13.9-38.3-37.2-38.3-15 0-25.6 7.3-31.1 19.4v-19.4h-35v129.3h35V21.1c0-13.2 7.1-20.5 18-20.5 10 .1 16.4 9.5 16.4 19z" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
