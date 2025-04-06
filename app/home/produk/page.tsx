import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
const products = [
  { name: 'BUTTS ON THINGS GAME', price: 'Rp 216.876', rating: 4, image: '/hero-desktop.png' },
  { name: 'PERMAINAN SUSHI GO!', price: 'Rp 124.567', rating: 4, image: '/hero-desktop.png' },
  { name: 'GAME GORILLA POUND', price: 'Rp 157.985', rating: 3, image: '/hero-desktop.png' },
  { name: 'ABDUCTION: GAME DASAR', price: 'Rp 231.456', rating: 4, image: '/hero-desktop.png' },
  { name: 'GAME BULUZI', price: 'Rp 109.999', rating: 4, image: '/hero-desktop.png' },
  { name: 'GAME HITLER RAHASIA', price: 'Rp 115.678', rating: 3, image: '/hero-desktop.png' },
  { name: 'ULTIMATE WEREWOLF: EDISI REVISI', price: 'Rp 355.764', rating: 5, image: '/hero-desktop.png' },
  { name: 'NIGHTMARE BEFORE CHRISTMAS', price: 'Rp 452.854', rating: 4, image: '/hero-desktop.png' },
];

const ProductCard = ({ name, price, rating, image }: { name: string; price: string; rating: number; image: string }) => (
  <div className="bg-white rounded-2xl p-2 shadow text-center">
    <div className="bg-orange-400 rounded-xl p-2 mb-2">
      <img src={image} alt={name} className="rounded-lg w-full h-32 object-contain" />
    </div>
    <h3 className="text-sm font-bold mb-1">{name}</h3>
    <div className="flex justify-center mb-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < rating ? 'text-black' : 'text-gray-300'}>
          ★
        </span>
      ))}
    </div>
    <p className="font-semibold text-black">{price}</p>
  </div>
);

const ProductList = () => {
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
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
