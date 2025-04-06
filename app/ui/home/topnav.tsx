import Link from 'next/link';
import TopLinks from '@/app/ui/home/top-links';
import TopUser from '@/app/ui/home/top-user'
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import Image from 'next/image'

export default function TopNav() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex h-20 bg-[#FF3D00] shadow-md px-6 py-4 items-center justify-between">
      
      {/* Logo Section */}
      <Link href="/home" className="flex items-center ">
          <Image src="/lolmart.jpeg" className='rounded-full aspect-square' width={70} height={70} loading='eager' alt='lolmart'/>
      </Link>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <TopLinks />
      </div>

      {/* Sign Out Button */}
      <div className='flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium '>
        <TopUser />
      </div>
      
      
    </div>
  );
}
