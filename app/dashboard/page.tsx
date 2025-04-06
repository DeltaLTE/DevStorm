import { UserIcon, UserGroupIcon, TagIcon, ShoppingBagIcon } from "@heroicons/react/24/outline"
import Link from 'next/link';

const DashboardStats = () => {
    return (
        <div className="">
            <Link href="/home" className="top-0 p-3 flex items-center justify-end z-20 h-header-height  select-none *:pointer-events-auto motion-safe:transition max-md:hidden">
                <UserIcon className=" h-10 w-10" />
            </Link>
            <div className="bg-yellow-100 rounded-3xl p-6 w-full h-full max-w-4xl mx-auto grid grid-cols-3 gap-4">
                {/* Total Pengguna */}
                <div className="bg-yellow-200 border rounded-md">
                    <div className="bg-orange-500 rounded-t-md text-center py-1 text-white font-bold">
                        TOTAL PENGGUNA
                    </div>
                    <div className="flex items-center justify-center space-x-2 py-4">
                        <UserGroupIcon className="text-black h-20 w-20" />
                        <span className="font-bold text-black text-lg">3,000</span>
                    </div>
                </div>

                {/* Jumlah Kategori */}
                <div className="bg-yellow-200 border rounded-md">
                    <div className="bg-orange-500 rounded-t-md text-center py-1 text-white font-bold">
                        JUMLAH KATEGORI
                    </div>
                    <div className="flex items-center justify-center space-x-2 py-4">
                        <TagIcon className="text-black h-20 w-20" />
                        <span className="font-bold text-black text-lg">10</span>
                    </div>
                </div>

                {/* Jumlah Produk */}
                <div className="bg-yellow-200 border rounded-md">
                    <div className="bg-orange-500 rounded-t-md text-center py-1 text-white font-bold">
                        JUMLAH PRODUK
                    </div>
                    <div className="flex items-center justify-center space-x-2 py-4">
                        <ShoppingBagIcon className="text-black h-20 w-20" />
                        <span className="font-bold text-black text-lg">500</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardStats;
