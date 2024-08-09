import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { roboto } from './fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div
      className={`${roboto.className} flex flex-row items-center leading-none text-white`}
    >
       <Image
            src="/SICCLOGO.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
      <p className="text-[44px]">SICC</p>
    </div>
  );
}
