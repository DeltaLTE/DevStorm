import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { fetchProdukPrisma } from '@/app/lib/prisma';
import Link from 'next/link'

const formatRupiah = (value: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(value);
};

const ProductCard = ({
  id,
  name,
  price,
  image,
}: {
  id: string;
  name: string;
  price: number;
  image: string;
}) => (
  <div className="bg-white rounded-2xl p-2 shadow text-center">
    <div className="bg-orange-400 rounded-xl p-2 mb-2">
      <Link href={`/home/produk/${id}`}>
        <img
          src={image}
          alt={name}
          className="rounded-lg w-full h-32 object-contain"
        />
      </Link>
    </div>
    <h3 className="text-sm font-bold mb-1">{name}</h3>
    <p className="font-semibold text-black">{formatRupiah(price)}</p>
  </div>
);

const ProductList = async () => {
  const produk = await fetchProdukPrisma();

  return (
    <div className="bg-yellow-400 min-h-screen p-6">
      <div className="flex items-center mb-6">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 px-4 py-2 rounded-l-full border border-black text-sm"
        />
        <button className="bg-white p-2 rounded-r-full border border-black">
          <MagnifyingGlassIcon className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {produk.map((product: any, index: number) => (
          <ProductCard
            id={product.id}
            key={index}
            name={product.name}
            price={product.price}
            image={product.img}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
