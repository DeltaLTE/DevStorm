
import { TagIcon } from "@heroicons/react/24/outline";
import { fetchTransaksiPrisma } from "@/app/lib/prisma";

export async function TransaksiContent() {
    const transaksiList = await fetchTransaksiPrisma();

    return (
        <div className="bg-yellow-200 border rounded-md col-span-3 sm:col-span-1">
            <div className="bg-orange-500 rounded-t-md text-center py-2 text-white font-bold">
                TOTAL TRANSAKSI
            </div>
            <div className="flex items-center justify-center space-x-2 py-6">
                <TagIcon className="text-black h-16 w-16" />
                <span className="font-bold text-black text-xl">
                    {transaksiList.length}
                </span>
            </div>
        </div>
    );
}
