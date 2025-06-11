import { fetchProdukPrisma } from '@/app/lib/prisma';
import ProductCard from '@/app/ui/home/card';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default async function Page({ searchParams }: { searchParams: { search?: string } }) {
  const searchQuery = searchParams.search || '';
  const produk = await fetchProdukPrisma(searchQuery);

  return (
    <div className="bg-yellow-400 min-h-screen p-6">
      <form className="flex items-center mb-6" method="GET">
        <input
          type="text"
          name="search"
          placeholder="Search"
          defaultValue={searchQuery}
          className="flex-1 px-4 py-2 rounded-l-full border border-black text-sm"
        />
        <button
          type="submit"
          className="bg-white p-2 rounded-r-full border border-black"
        >
          <MagnifyingGlassIcon className="w-4 h-4" />
        </button>
      </form>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {produk.map((product, index) => (
          <ProductCard
            key={index}
            id={product.id_produk.toString()}
            name={product.nama_produk}
            price={product.harga}
            image={product.foto}
          />
        ))}
      </div>
    </div>
  );
}
