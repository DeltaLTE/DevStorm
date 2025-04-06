import Link from 'next/link';
import ProLinks from '@/app/ui/home/produk-link';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import Image from 'next/image'

export default function ProNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-[#FF9800]">
      <div className="flex justify-center items-center p-4">
        Categories
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <ProLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-[#FF9800] md:block"></div>
      </div>
    </div>
  );
}
