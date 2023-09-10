import React from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';
import { PlayCircleIcon, PlusIcon } from 'lucide-react';

const JuiceWrldCard = () => {
  return (
    <div className="col-span-2 mt-3 flex h-80 items-center justify-center rounded-lg border border-input bg-gradient-to-br from-primary-foreground via-primary-foreground to-gray-200 p-5 dark:to-gray-800">
      <div className="h-64 w-64 rounded-full">
        <div className="relative h-full w-full overflow-hidden rounded-md">
          <Image
            src="https://e-cdns-images.dzcdn.net/images/artist/32458864045f1087652738e10bcdf74b/1000x1000-000000-80-0-0.jpg"
            fill
            alt="profile image"
            className="rounded-full object-cover object-left-top"
          />
        </div>
      </div>
      <div className="ml-8 pr-8">
        <h1 className="line-clamp-2 text-3xl font-bold">Best of JuiceWrld</h1>
        <p className="mt-2 line-clamp-3 max-w-xs text-sm font-normal text-muted-foreground">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil soluta quibusdam, est commodi eveniet minima,
          dolorem voluptatum facere
        </p>
        <div className="mt-6 flex items-center gap-x-4">
          <div>
            <Button variant="outline" className="h-11 pr-5 font-bold uppercase">
              <PlusIcon className="mr-2 h-6 w-6" />
              <span>my playlist</span>
            </Button>
          </div>
          <div>
            <Button className="h-11 pr-5 font-bold uppercase">
              <PlayCircleIcon className="mr-2 h-6 w-6" />
              <span>Listen now</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JuiceWrldCard;
