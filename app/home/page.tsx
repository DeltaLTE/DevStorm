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
              { name: "TOY", image: "/xonex-toy-novelties-screaming-chicken-pen-funny-gag-gifts.jpg"},
              { name: "BOOK", image: "/hachette-chronicle-books-journals-notebooks-part-time-adult-undated-daily-planner-funny-gag-gifts-1133347263.jpg" },
              { name: "PRANK TOOLS", image: "/accoutrements-archie-mcphee-impulse-im-funny-stuff-disappointed-sigh-funny-gag-gifts-17289520414881.png" },
              { name: "BAG", image: "/91YwJyu2ElL._AC_UF894,1000_QL80_.jpg" },
              { name: "FOOD", image: "/redstone-foods-candy-gummy-kraft-mac-and-cheese-funny-gag-gifts-36957684629665.png" },
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
            { rating: 4, image: "/xonex-toy-novelties-screaming-chicken-pen-funny-gag-gifts.jpg" },
            { rating: 5, image: "/hachette-chronicle-books-journals-notebooks-part-time-adult-undated-daily-planner-funny-gag-gifts-1133347263.jpg" },
            { rating: 4, image: "/accoutrements-archie-mcphee-impulse-im-funny-stuff-disappointed-sigh-funny-gag-gifts-17289520414881.png" },
            { rating: 4, image: "/redstone-foods-candy-gummy-kraft-mac-and-cheese-funny-gag-gifts-36957684629665.png" },
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
   