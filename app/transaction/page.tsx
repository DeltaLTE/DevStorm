'use client';

import { useState } from 'react';
import Image from 'next/image';
import {ArrowLeftCircleIcon} from '@heroicons/react/24/outline'
import Link from 'next/link';

export default function PaymentPage() {
  const [selectedPayment, setSelectedPayment] = useState<string | null>(null);
  const [deliveryOption, setDeliveryOption] = useState<string>('Basic');
  const [showDeliveryOptions, setShowDeliveryOptions] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-300 p-6 font-sans">
      <div className='fixed top-0 left-0 w-full z-50 flex h-20 bg-[#FF3D00] shadow-md px-6 py-4 items-center justify-between'>
      
  {/* Back Button */}
  <Link href="/nota">
    <ArrowLeftCircleIcon className='w-10 h-10'/>
  </Link>
  {/* Title */}
  <h1 className="font-bold text-lg tracking-wide">PAYMENT</h1>

  {/* Logo */}
  <div className="bg-white rounded-full p-1 flex items-center justify-center">
    {/* Replace with actual logo */}
    <img src="/lolmart.jpeg" alt="Logo" className="w-10 h-10 object-contain" />
  </div>

      </div>
      <div className="bg-orange-400 rounded-3xl p-6 w-[640px] text-black relative shadow-xl">

        {/* Payment Method */}
        <h3 className="font-bold text-lg mb-2">PAYMENT METHOD</h3>

        {/* Bank Transfer */}
        <div className="mb-4">
          <p className="font-bold mb-2">BANK TRANSFER</p>
          <div className="space-y-2">
            {[
              { name: 'mandiri', logo: '/mandiri.jpg' },
              { name: 'BCA', logo: '/bca.jpg' },
              { name: 'BANK BRI', logo: '/bri.jpg' },
            ].map((bank) => (
              <div
                key={bank.name}
                className={`flex items-center justify-between bg-gray-200 rounded-sm px-2 py-1 cursor-pointer ${
                  selectedPayment === bank.name ? 'ring-2 ring-black' : ''
                }`}
                onClick={() => setSelectedPayment(bank.name)}
              >
                <div className="flex items-center space-x-2">
                  {/* Replace with actual logos */}
                  <Image src={bank.logo} alt={bank.name} width={50} height={20} />
                  <span className="uppercase text-sm">{bank.name}</span>
                </div>
                <span>🖐️</span>
              </div>
            ))}
          </div>
        </div>

        {/* COD Option */}
        <div
          className={`flex items-center justify-between px-2 py-1 text-sm mb-4 cursor-pointer ${
            selectedPayment === 'COD' ? 'ring-2 ring-black bg-gray-200' : ''
          }`}
          onClick={() => setSelectedPayment('COD')}
        >
          <span className="font-bold">COD</span>
          <span>🖐️</span>
        </div>

        {/* Debit / Credit Card */}
        <div
          className={`flex items-center justify-between px-2 py-1 text-sm mb-4 cursor-pointer ${
            selectedPayment === 'Card' ? 'ring-2 ring-black bg-gray-200' : ''
          }`}
          onClick={() => setSelectedPayment('Card')}
        >
          <span className="font-bold">DEBIT CARD / CREDIT CARD</span>
          <span>🖐️</span>
        </div>

        {/* Delivery Option */}
        <div className="flex items-start mb-6 relative">
          <button
            onClick={() => setShowDeliveryOptions(!showDeliveryOptions)}
            className="bg-green-500 text-white text-sm font-bold rounded-l px-4 py-2 focus:outline-none flex items-center"
          >
            DELIVERY OPTION <span className="ml-1">⬇️</span>
          </button>
          {showDeliveryOptions && (
            <div className="absolute top-full left-0 bg-white text-black text-sm font-bold rounded-b shadow-md mt-1 w-40">
              {['Basic', 'Priority'].map((option) => (
                <div
                  key={option}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setDeliveryOption(option);
                    setShowDeliveryOptions(false);
                  }}
                >
                  {option.toUpperCase()}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Order Button */}
        <div className="flex justify-end">
          <Link href="/transaction/confirm" className="bg-green-500 text-black font-bold py-2 px-6 rounded-full hover:bg-green-600 transition text-sm">
            ORDER
          </Link>
        </div>
      </div>
    </div>
  );
}
