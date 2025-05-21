// app/components/ProdukCardContent.tsx (Server Component)
import { fetchProdukPrisma } from '@/app/lib/prisma';
import { ShoppingBagIcon } from "@heroicons/react/24/outline";

export async function ProdukCardContent() {
  const produkList = await fetchProdukPrisma();

  return (
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
  );
}
