import { PencilIcon, TrashIcon, PlusIcon, ArrowLeftCircleIcon, ArrowRightCircleIcon, UserIcon } from "@heroicons/react/24/outline"
import Link from 'next/link';
import { fetchProdukPrisma } from '@/app/lib/prisma';

const ProdukTable = async () => {
    const produkList = await fetchProdukPrisma();

    return (
        <div>
            <Link href="/home" className="top-0 p-3 flex items-center justify-end z-20 h-header-height select-none *:pointer-events-auto motion-safe:transition max-md:hidden">
                <UserIcon className=" h-10 w-10" />
            </Link>
            <div className="bg-yellow-100 rounded-3xl p-4 w-full max-w-5xl mx-auto">
                <div className="flex justify-between items-center mb-4">
                    <input
                        type="text"
                        placeholder="Cari produk"
                        className="border border-gray-400 rounded px-3 py-1 w-1/3"
                    />
                    <button className="flex items-center bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                        <PlusIcon className="w-4 h-4 mr-1" /> TAMBAH
                    </button>
                </div>

                <table className="w-full text-sm text-left text-black border-collapse">
                    <thead>
                        <tr className="bg-gray-300">
                            <th className="border px-3 py-2">ID</th>
                            <th className="border px-3 py-2">NAMA PRODUK</th>
                            <th className="border px-3 py-2">HARGA</th>
                            <th className="border px-3 py-2">STOK</th>
                            <th className="border px-3 py-2">FOTO</th>
                            <th className="border px-3 py-2">AKSI</th>
                        </tr>
                    </thead>
                    <tbody>
                        {produkList.map((produk) => (
                            <tr key={produk.id} className="bg-white">
                                <td className="border px-3 py-2">{produk.id}</td>
                                <td className="border px-3 py-2">{produk.name}</td>
                                <td className="border px-3 py-2">{produk.price.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                                <td className="border px-3 py-2">{produk.inv}</td>
                                <td className="border px-3 py-2">
                                    <img src={produk.img || ''} alt={produk.name} className="h-10 w-10 object-cover rounded" />
                                </td>
                                <td className="border px-3 py-2">
                                    <div className="flex space-x-2">
                                        <button className="p-1">
                                            <PencilIcon className="w-4 h-4" />
                                        </button>
                                        <button className="p-1">
                                            <TrashIcon className="w-4 h-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

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
