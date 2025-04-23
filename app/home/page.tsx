import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css'
import Image from 'next/image';

export default function Page() {
    return (
      <div className="flex justify-center h-full">
        <div className=" w-full h-full mt-20">
          <h2 className="text-xl font-bold pt-2">OUR PRODUCT:</h2>
          <div className="grid grid-cols-5 gap-4 my-4">
            {[
              { name: "TOY", image: "/hero-desktop.png"},
              { name: "BOOK", image: "/hero-desktop.png" },
              { name: "PRANK TOOLS", image: "/hero-desktop.png" },
              { name: "BAG", image: "/hero-desktop.png" },
              { name: "FOOD", image: "/hero-desktop.png" },
            ].map((product, index) => (
              <div key={index} className="text-center pl-20">
                <Image className="w-24 h-24 bg-gray-200" src={product.image} width={500} height={500} alt={product.name} />
                <p className="mt-2 font-semibold w-24 h-24">{product.name}</p>
               </div>
            ))}
          </div>
        <div className='bg-white w-full h-2'></div>
        <h2 className="text-xl font-bold mt-6">PRODUK BEST SELLER:</h2>
        <div className="grid grid-cols-4 gap-4 my-4">
          {[
            { rating: 4, image: "/hero-desktop.png" },
            { rating: 5, image: "/hero-desktop.png" },
            { rating: 4, image: "/hero-desktop.png" },
            { rating: 4, image: "/hero-desktop.png" },
          ].map((product, index) => (
            <div key={index} className="text-center pl-20">
              <Image className="w-24 h-24 bg-gray-200" src={product.image} width={500} height={500} alt={`Product ${index + 1}`} />
              <p className="mt-2 w-24 h-24">RATING: {"★".repeat(product.rating)}{"☆".repeat(5 - product.rating)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    )
    }
   