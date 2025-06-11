import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import Image from 'next/image'

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-[#FFEB3B] rounded-r-[50]">
      <div className="flex justify-center items-center p-4">
        <Image src="/lolmart.jpeg" className='rounded-full aspect-square ' width={70} height={70} loading='eager' alt='lolmart'/>
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-[#FFEB3B] md:block"></div>
      </div>
    </div>
  );
}
