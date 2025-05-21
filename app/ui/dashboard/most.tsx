import { fetchMostSoldProduct } from "@/app/lib/prisma";

export async function MostSoldContent() {
    const mostSold = await fetchMostSoldProduct();
    return (
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
    )
}