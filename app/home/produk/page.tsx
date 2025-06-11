import { fetchProdukPrisma } from '@/app/lib/prisma';
import ProductCard from '@/app/ui/home/card';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default async function Page({
  searchParams,
}: {
  searchParams: { search?: string; page?: string };
}) {
  const searchQuery = searchParams.search || '';
  const page = parseInt(searchParams.page || '1', 10);
  const limit = 8;
  const offset = (page - 1) * limit;

  const { produk, total } = await fetchProdukPrisma(searchQuery, offset, limit);
  const totalPages = Math.ceil(total / limit);

  return (
    <div className=" min-h-screen p-6">
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
        {produk.map((product) => (
          <ProductCard
            key={product.id_produk}
            id={product.id_produk.toString()}
            name={product.nama_produk}
            price={product.harga}
            image={product.foto}
          />
        ))}
      </div>

      <div className="flex justify-center mt-8 gap-4">
        {page > 1 && (
          <Link
            href={`?search=${searchQuery}&page=${page - 1}`}
            className="px-4 py-2 bg-white border border-black rounded"
          >
            &larr;
          </Link>
        )}
        {page < totalPages && (
          <Link
            href={`?search=${searchQuery}&page=${page + 1}`}
            className="px-4 py-2 bg-white border border-black rounded"
          >
             &rarr;
          </Link>
        )}
      </div>
    </div>
  );
}
