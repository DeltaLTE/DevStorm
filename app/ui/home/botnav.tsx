import Link from 'next/link';

import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import Image from 'next/image'

export default function BotNav() {
    return (
        <div className="fixed-bot left-0 w-full z-50 flex h-20 bg-yellow-200 shadow-md px-6 py-4 items-center justify-between">

            <h1>© 2025, Kelompok 10. All Rights Reserved.</h1>
            <div className='flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium '>
                <Link href="https://www.youtube.com/watch?v=6l8d1P8AyqE&list=PLuqpeFEjd6AxMcyOOm4I0I8nE5oixVwni&index=26&pp=gAQBiAQB" className="flex items-center ">
                    <Image src="/WhatsApp.png" alt="WhatsApp" width={50} height={50} className='rounded-full'/>
                </Link>

                <Link href="https://www.youtube.com/watch?v=6l8d1P8AyqE&list=PLuqpeFEjd6AxMcyOOm4I0I8nE5oixVwni&index=26&pp=gAQBiAQB" className="flex items-center ">
                    <Image src="/Instagram.png" alt="Instagram" width={50} height={50} className='rounded-full'/>
                </Link>
                
                <Link href="https://www.youtube.com/watch?v=6l8d1P8AyqE&list=PLuqpeFEjd6AxMcyOOm4I0I8nE5oixVwni&index=26&pp=gAQBiAQB" className="flex items-center ">
                    <Image src="/tiktok.png" alt="TikTok" width={50} height={50} className='rounded-full w-10 h-10'/>
                </Link>
            </div>
        </div>
    );
}
