import React, { useEffect } from 'react';
import Logo from '../logo';
import Image from 'next/image';
import { useAppDispatch } from '@/lib/redux/hooks';
import { handlePageLoading } from '@/lib/redux/slices/trackSlice';

const PageLoader = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const firstTimeUser = window.localStorage.getItem('firstTimeUser');
    if (!firstTimeUser) {
      dispatch(handlePageLoading(true));
      setTimeout(() => {
        dispatch(handlePageLoading(false));
        window.localStorage.setItem('firstTimeUser', JSON.stringify(true));
      }, 600);
    } else {
      dispatch(handlePageLoading(false));
    }
  }, [window.localStorage.getItem('firstTimeUser')]);

  return (
    <div className="fixed inset-0 z-40 flex h-screen w-screen items-center justify-center bg-background">
      <div>
        <div className="scale-125">
          <Logo />
        </div>
        <div className="mt-3 flex justify-center">
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
      </div>
    </div>
  );
};

export default PageLoader;
