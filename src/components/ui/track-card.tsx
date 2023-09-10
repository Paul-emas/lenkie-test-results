import { Disc2 } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const TrackCard = () => {
  return (
    <div className="group grid grid-cols-5 border-b py-3 last:border-none dark:border-slate-700">
      <div className="col-span-1 flex items-center">
        <div className="duration-300 group-hover:scale-125">
          <Image
            src="https://e-cdns-images.dzcdn.net/images/artist/32458864045f1087652738e10bcdf74b/1000x1000-000000-80-0-0.jpg"
            alt="Artist image"
            width={40}
            height={40}
            className="rounded-md object-cover object-top"
          />
        </div>
        <div className="ml-5 text-primary">Juice world</div>
      </div>
      <div className="flex items-center pt-2 text-muted-foreground">
        <Disc2 className="h-4 w-4" /> <span className="ml-2">Live forever</span>
      </div>
      <div className="col-span-2 pt-2 text-muted-foreground">Death Race For Love (Bonus Track Version)</div>
      <div className="pt-2 text-right text-muted-foreground">2:30</div>
    </div>
  );
};

export default TrackCard;
