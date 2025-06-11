import { PlusIcon, ArrowLeftCircleIcon, ArrowRightCircleIcon, UserIcon } from "@heroicons/react/24/outline"
import Link from 'next/link';
import { TabelTransaksiContent } from '@/app/ui/table/tablet';
import { Suspense } from 'react';
import { TabelTransaksiSkeleton } from "@/app/ui/skeletons";

const TransaksiTable = async () => {

    return (
        <div>
            <Link href="/home" className="top-0 p-3 flex items-center justify-end z-20 h-header-height select-none *:pointer-events-auto motion-safe:transition max-md:hidden">
                <UserIcon className=" h-10 w-10" />
            </Link>
            <div className="bg-yellow-200 rounded-3xl p-4 w-full max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-4">
                    <input
                        type="text"
                        placeholder="Cari transaksi"
                        className="border border-gray-400 rounded px-3 py-1 w-1/3"
                    />
                    <Link className="flex items-center bg-green-500 text-white px-3 py-1 rounded-full text-sm" href={"transaksi/create"}>
                        <PlusIcon className="w-4 h-4 mr-1" /> TAMBAH
                    </Link>
                </div>

                <Suspense fallback={<TabelTransaksiSkeleton />}>
                    <TabelTransaksiContent />
                </Suspense>

                <div className="flex justify-center mt-4 space-x-2">
                    <button className=" rounded-full p-1">
                        <ArrowLeftCircleIcon className="w-4 h-4" />
                    </button>
                    <span className="text-black text-sm flex items-center">1</span>
                    <button className=" rounded-full p-1">
                        <ArrowRightCircleIcon className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TransaksiTable;
