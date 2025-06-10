import { PrismaClient } from '@/generated/prisma';
import { notFound } from 'next/navigation';
import { ArrowLeftCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const dynamic = 'force-dynamic';

const prisma = new PrismaClient();

export default async function ProductDetailPage({ params }: { params: { id: string } }) {
  const id = parseInt(await Promise.resolve(params).then(p => p.id), 10);

  if (isNaN(id)) {
    return <div>Invalid ID</div>;
  }

  const product = await prisma.produk.findUnique({
    where: { id_produk: id },
  });

  if (!product) {
    return notFound();
  }

  const formatRupiah = (value: number) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(value);

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
