import React from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { Slider } from './ui/slider';

const Player = () => {
  return (
    <div className="fixed bottom-0 right-0 z-50 flex h-20 w-full items-center border-t border-input bg-primary-foreground px-4">
      <div className="grid w-full grid-cols-5">
        <div className="col-span-1 flex items-center gap-x-2">
          <Button size="icon" variant="ghost">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-7 w-7">
              <path
                d="M5 18L5 6M19 6V18L9 12L19 6Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
          <Button size="icon" variant="ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-7 w-7"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
            </svg>
          </Button>
          <Button size="icon" variant="ghost">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="h-7 w-7">
              <path
                d="M19 6V18M5 18L5 6L15 12L5 18Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Button>
        </div>
        <div className="col-span-3 flex items-center justify-center gap-x-2 px-10">
          <div className="flex items-center">
            <div>
              <Image
                src="https://e-cdns-images.dzcdn.net/images/artist/544c8671efb4043b865f8a60597ec5eb/500x500-000000-80-0-0.jpg"
                width={50}
                height={50}
                alt="profile image"
                className="rounded-sm object-cover object-left-top"
              />
            </div>
            <div className="mx-3">
              <div className="text-lg text-primary">The weekend</div>
              <div className="-mt-1 text-sm font-light text-muted-foreground">Marshemello on the beast & Sam smith</div>
            </div>
            <div className="flex items-center">
              <Button size="icon" variant="ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 15h2.25m8.024-9.75c.011.05.028.1.052.148.591 1.2.924 2.55.924 3.977a8.96 8.96 0 01-.999 4.125m.023-8.25c-.076-.365.183-.75.575-.75h.908c.889 0 1.713.518 1.972 1.368.339 1.11.521 2.287.521 3.507 0 1.553-.295 3.036-.831 4.398C20.613 14.547 19.833 15 19 15h-1.053c-.472 0-.745-.556-.5-.96a8.95 8.95 0 00.303-.54m.023-8.25H16.48a4.5 4.5 0 01-1.423-.23l-3.114-1.04a4.5 4.5 0 00-1.423-.23H6.504c-.618 0-1.217.247-1.605.729A11.95 11.95 0 002.25 12c0 .434.023.863.068 1.285C2.427 14.306 3.346 15 4.372 15h3.126c.618 0 .991.724.725 1.282A7.471 7.471 0 007.5 19.5a2.25 2.25 0 002.25 2.25.75.75 0 00.75-.75v-.633c0-.573.11-1.14.322-1.672.304-.76.93-1.33 1.653-1.715a9.04 9.04 0 002.86-2.4c.498-.634 1.226-1.08 2.032-1.08h.384"
                  />
                </svg>
              </Button>
              <Button size="icon" variant="ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                  />
                </svg>
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-1 flex items-center justify-end">
          <div className="mr-2 w-20">
            <Slider defaultValue={[100]} />
          </div>
          <Button size="icon" variant="ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
              />
            </svg>
          </Button>
          <Button size="icon" variant="ghost">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" className="h-[24px] w-[24px]">
              <g
                fill="none"
                fill-rule="evenodd"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                transform="translate(4 3)"
              >
                <path d="m4.501 8.5-3.001 3 3.001 3" />
                <path d="m12.5 6.5v2c0 1.6568542-1.3431458 3-3 3h-8" />
                <path d="m8.499 6.5 3.001-3-3.001-3" />
                <path d="m.5 8.5v-2c0-1.65685425 1.34314575-3 3-3h8" />
              </g>
            </svg>
          </Button>
          <Button size="icon" variant="ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              role="img"
              aria-labelledby="shuffleIconTitle"
              stroke="currentColor"
              stroke-width="1"
              stroke-linecap="square"
              stroke-linejoin="miter"
              fill="none"
              color="currentColor"
              className="h-[23px] w-[23px]"
            >
              <path d="M21 16.0399H17.7707C15.8164 16.0399 13.9845 14.9697 12.8611 13.1716L10.7973 9.86831C9.67384 8.07022 7.84196 7 5.88762 7L3 7" />{' '}
              <path d="M21 7H17.7707C15.8164 7 13.9845 8.18388 12.8611 10.1729L10.7973 13.8271C9.67384 15.8161 7.84196 17 5.88762 17L3 17" />{' '}
              <path d="M19 4L22 7L19 10" /> <path d="M19 13L22 16L19 19" />{' '}
            </svg>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Player;
