import Link from 'next/link';
import TopLinks from '@/app/ui/home/top-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import Image from 'next/image'

export default function TopNav() {
  return (
    <div className="fixed top-0 left-0 w-full z-50 flex h-20 bg-[#FF3D00] shadow-md px-6 py-4 items-center justify-between">
      
      {/* Logo Section */}
      <Link href="/home" className="flex items-center ">
        <div className="w-32 md:w-40 rounded-md bg-blue-600 p-2">
          <Image src="/lolmart.jpg" width={50} height={50} loading='eager' alt='lolmart'>
          </Image>
        </div>
      </Link>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <TopLinks />
      </div>

      {/* Sign Out Button */}
      <form>
      <Link href="/login" className="flex items-center gap-2 rounded-md bg-gray-50 px-4 py-2 text-sm font-medium hover:bg-sky-100 hover:text-blue-600">
          <PowerIcon className="w-6" />
          <span>Sign Out</span>
        </Link>
      </form>
      
    </div>
  );
}
