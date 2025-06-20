import { PlusIcon, ArrowLeftCircleIcon, ArrowRightCircleIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';
import { TabelProdukContent } from '@/app/ui/table/tablep';
import { Suspense } from 'react';
import { TabelProdukSkeleton } from "@/app/ui/skeletons";

type ProdukTableProps = {
  searchParams: Promise<{ search?: string }>;
};

const ProdukTable = async ({ searchParams }: ProdukTableProps) => {
  const { search: searchQuery } = await searchParams;
  const search = searchQuery || '';

  return (
    <div>
      <Link href="/home" className="top-0 p-3 flex items-center justify-end z-20 h-header-height select-none *:pointer-events-auto motion-safe:transition max-md:hidden">
        <UserIcon className=" h-10 w-10" />
      </Link>
      <div className="bg-yellow-200 rounded-3xl p-4 w-full max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-4">
          <form method="GET" className="w-1/3">
            <input
              type="text"
              name="search"
              placeholder="Cari produk"
              defaultValue={search}
              className="border border-gray-400 rounded px-3 py-1 w-full"
            />
          </form>
          <Link className="flex items-center bg-green-500 text-white px-3 py-1 rounded-full text-sm" href="produk/create">
            <PlusIcon className="w-4 h-4 mr-1" /> TAMBAH
          </Link>
        </div>

        <Suspense fallback={<TabelProdukSkeleton />}>
          <TabelProdukContent search={search} />
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

export default ProdukTable;
