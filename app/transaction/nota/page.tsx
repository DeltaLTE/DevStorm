import { ArrowLeftCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';

const PaymentVerification = () => {
    return (
        <div className='min-h-screen flex items-center justify-center bg-yellow-300 p-6 font-sans'>
            <div className="bg-yellow-100 rounded-3xl p-6 w-full  text-black relative shadow-xl">
                <div className='fixed top-0 left-0 w-full z-50 flex h-20 bg-[#FF3D00] shadow-md px-6 py-4 items-center justify-between'>

                    {/* Back Button */}
                    <Link href="/home">
                        <ArrowLeftCircleIcon className='w-10 h-10' />
                    </Link>
                    {/* Title */}
                    <h1 className="font-bold text-lg tracking-wide">CONFIRMATION</h1>

                    {/* Logo */}
                    <div className="bg-white rounded-full p-1 flex items-center justify-center">
                        {/* Replace with actual logo */}
                        <img src="/lolmart.jpeg" alt="Logo" className="w-10 h-10 object-contain" />
                    </div>
                </div>
                {/* Receipt Content */}
                <div className="p-10 flex items-center justify-end">
                    <div className="bg-white rounded-lg overflow-hidden">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-gray-300">
                                    <th className="text-left p-4">ITEM</th>
                                    <th className="text-left p-4">DESCRIPTION</th>
                                    <th className="text-center p-4">UNIT COST</th>
                                    <th className="text-right p-4">PRICE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Item 1 */}
                                <tr className="border-b border-gray-300">
                                    <td className="p-4 align-top font-bold">CHICKEN PEN</td>
                                    <td className="p-4 text-xs">
                                        A CUTE SCREAMING CHICKEN PEN THAT WILL BE A GOOD LAUGH AT YOUR WORK OR SCHOOL DAY. THIS PEN WILL BE YOUR FRIEND AND SCREAM WITH YOU.
                                    </td>
                                    <td className="p-4 text-center">3</td>
                                    <td className="p-4 text-right">RP 140.000</td>
                                </tr>

                                {/* Item 2 */}
                                <tr className="border-b border-gray-300">
                                    <td className="p-4 align-top font-bold">SOUR PICKLE BALLS</td>
                                    <td className="p-4 text-xs">
                                        KNOW A PICKLE LOVER WITH A SWEET TOOTH? THIS SOUR CANDY IS FLAVORED WITH PICKLES WITH A SLIGHTLY SALTY TASTE, COMES WITH FOUR CANDIES.
                                    </td>
                                    <td className="p-4 text-center">1</td>
                                    <td className="p-4 text-right">RP 145.700</td>
                                </tr>

                                {/* Item 3 */}
                                <tr className="border-b border-gray-300">
                                    <td className="p-4 align-top font-bold">DOG POOP</td>
                                    <td className="p-4 text-xs">
                                        DOG POOP IS ONE OF THE PRANK TOOLS THAT IS OFTEN USED
                                    </td>
                                    <td className="p-4 text-center">2</td>
                                    <td className="p-4 text-right">RP 125.500</td>
                                </tr>

                                {/* Total */}
                                <tr>
                                    <td colSpan={3} className="p-4 font-bold">TOTAL PRICE</td>
                                    <td className="p-4 text-right font-bold">RP 411.200</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
                <div className="flex justify-end mt-4">
                    <Link href="/transaction" className='flex items-center justify-center text-center w-[60] b-1 bg-white rounded-full px-4 py-2 shadow-md'>
                        Lanjut
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PaymentVerification;
