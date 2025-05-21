import { UserIcon, TagIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { Suspense } from 'react';
import { TransaksiSkeleton, ToProSkeleton, ToRevSkeleton, MostSkeleton } from '@/app/ui/skeletons';
import { ProdukCardContent } from '@/app/ui/dashboard/produk';
import { TransaksiContent } from '@/app/ui/dashboard/transaksi';
import { RevenueContent } from '@/app/ui/dashboard/revenue';
import { MostSoldContent } from '@/app/ui/dashboard/most';

const DashboardStats = async () => {

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
        <Suspense fallback={<TransaksiSkeleton />}>
          <TransaksiContent />
        </Suspense>

        {/* Total Produk */}
        <Suspense fallback={<ToProSkeleton />}>
          <ProdukCardContent />
        </Suspense>

        {/* Total Revenue */}
        <Suspense fallback={<ToRevSkeleton />}>
          <RevenueContent />
        </Suspense>

        {/* Most Sold Product */}
        <Suspense fallback={<MostSkeleton />}>
          <MostSoldContent />
        </Suspense>

      </div>
    </div>
  );
};

export default DashboardStats;
