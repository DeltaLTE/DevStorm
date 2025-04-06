import {ArrowLeftCircleIcon} from '@heroicons/react/24/outline'
import Link from 'next/link';

const PaymentVerification = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-yellow-300 p-6 font-sans'>
    <div className="bg-yellow-100 rounded-3xl p-6 w-[640px] text-black relative shadow-xl">
      <div className='fixed top-0 left-0 w-full z-50 flex h-20 bg-[#FF3D00] shadow-md px-6 py-4 items-center justify-between'>
            
        {/* Back Button */}
        <Link href="/transaction">
          <ArrowLeftCircleIcon className='w-10 h-10'/>
        </Link>
        {/* Title */}
        <h1 className="font-bold text-lg tracking-wide">CONFIRMATION</h1>
      
        {/* Logo */}
        <div className="bg-white rounded-full p-1 flex items-center justify-center">
          {/* Replace with actual logo */}
          <img src="/lolmart.jpeg" alt="Logo" className="w-10 h-10 object-contain" />
        </div>
        </div>
      {/* Bank Information */}
      <div className="flex items-center mb-6">
        <img src="/mandiri.jpg" alt="Mandiri Logo" className="w-14 h-14 object-contain mr-3" />
        <div>
          <p className="font-semibold text-black">Bank Mandiri</p>
          <p className="text-black">LOLMart</p>
        </div>
      </div>

      {/* Account Number */}
      <div className="bg-gray-200 rounded-md flex items-center justify-between px-3 py-2 mb-4">
        <span className="font-bold text-black">1234567890123</span>
        <button className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
          VERIFY
        </button>
      </div>

      {/* Transfer Fee */}
      <div className="mb-6">
        <p className="font-semibold text-black mb-1">Transfer Fee</p>
        <div className="bg-gray-200 rounded-md flex items-center justify-between px-3 py-2">
          <span className="font-bold text-black">Rp. 140,000</span>
          <button className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            VERIFY
          </button>
        </div>
      </div>

      {/* Timer and Verify Button */}
      <div className="flex items-center justify-end">
        <span className="text-black font-semibold px-10">Timer: 10:00</span>
        <button className="bg-green-500 text-white px-4 py-2 rounded-full font-bold">
          VERIFY
        </button>
      </div>
    </div>
    </div>
  );
};

export default PaymentVerification;
