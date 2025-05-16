import {
  UserIcon,
  TagIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import {
  fetchProdukPrisma,
  fetchTransaksiPrisma,
  fetchTotalRevenue,
  fetchMostSoldProduct,
} from "@/app/lib/prisma";

const DashboardStats = async () => {
  const produkList = await fetchProdukPrisma();
  const transaksiList = await fetchTransaksiPrisma();
  const totalRevenue = await fetchTotalRevenue();
  const mostSold = await fetchMostSoldProduct();

  return (
    <div className="">
      {/* Top Right User Icon */}
      <Link
        href="/home"
        className="top-0 p-3 flex items-center justify-end z-20 h-header-height select-none *:pointer-events-auto motion-safe:transition max-md:hidden"
      >
        <UserIcon className="h-10 w-10" />
      </Link>

      {/* Stats Grid */}
      <div className="bg-yellow-100 rounded-3xl p-6 w-full h-full max-w-4xl mx-auto grid grid-cols-2 gap-4">
        {/* Total Transaksi */}
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

        {/* Total Produk */}
        <div className="bg-yellow-200 border rounded-md col-span-2 sm:col-span-1">
          <div className="bg-orange-500 rounded-t-md text-center py-2 text-white font-bold">
            JUMLAH PRODUK
          </div>
          <div className="flex items-center justify-center space-x-2 py-6">
            <ShoppingBagIcon className="text-black h-16 w-16" />
            <span className="font-bold text-black text-xl">
              {produkList.length}
            </span>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="bg-yellow-200 border rounded-md col-span-2">
          <div className="bg-orange-500 rounded-t-md text-center py-2 text-white font-bold">
            TOTAL PENDAPATAN
          </div>
          <div className="flex items-center justify-center py-6 text-xl font-bold text-black">
            {totalRevenue.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
          </div>
        </div>

        {/* Most Sold Product */}
        <div className="bg-yellow-200 border rounded-md col-span-2">
          <div className="bg-orange-500 rounded-t-md text-center py-2 text-white font-bold">
            PRODUK TERLARIS
          </div>
          <div className="flex flex-col items-center justify-center py-6 text-black text-center">
            {mostSold ? (
              <>
                <span className="font-bold text-lg">{mostSold.nama_produk}</span>
                <span className="text-sm">Terjual: {mostSold.total_terjual}x</span>
              </>
            ) : (
              <span className="text-sm">Belum ada data</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardStats;
