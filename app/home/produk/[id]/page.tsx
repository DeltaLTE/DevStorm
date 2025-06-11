'use client';

import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

type Produk = {
  id_produk: number;
  nama_produk: string;  
  harga: number;
  deskripsi: string;
  foto: string;
};

export default function ProductDetailPage() {
  const params = useParams();
  const idParam = params?.id;
  const id = Array.isArray(idParam) ? idParam[0] : idParam;

  const [product, setProduct] = useState<Produk | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`/api/produk/${id}`);
        if (!res.ok) {
          setError('Produk tidak ditemukan atau ID tidak valid.');
          return;
        }
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError('Gagal memuat data.');
      }
    };

    fetchData();
  }, [id]);

  const formatRupiah = (value: number) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(value);

  if (error) return <div className="p-6">{error}</div>;
  if (!product) return <div className="p-6">Memuat produk...</div>;

  return (
    <div className="min-h-screen bg-[#fbe122] text-black font-sans">
      <Link href="/home/produk">
        <ArrowLeftCircleIcon className="w-10 h-10" />
      </Link>
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center">
          <div className="w-72 h-72 border-4 border-[#d72323] rounded-lg shadow-md bg-white">
            <img
              src={product.foto}
              alt={product.nama_produk}
              className="object-contain w-full h-full p-2"
            />
          </div>
          <div className="text-xs text-gray-700 mt-2">Gambar produk</div>
        </div>

        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{product.nama_produk}</h1>
          <p className="text-xl font-bold text-[#d72323]">{formatRupiah(product.harga)}</p>
          <p className="text-sm font-medium text-gray-900">{product.deskripsi}</p>
        </div>
      </div>
    </div>
  );
}
