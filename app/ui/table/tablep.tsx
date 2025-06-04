import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline"
import { fetchProdukPrisma } from "@/app/lib/prisma";


export async function TabelProdukContent() {
    const produkList = await fetchProdukPrisma();
    return (
        <table className="w-full text-sm text-left text-black border-collapse">
            <thead>
                <tr className="bg-[#FFEB3B]">
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
                    <tr key={produk.id_produk} className="bg-white">
                        <td className="border px-3 py-2">{produk.id_produk}</td>
                        <td className="border px-3 py-2">{produk.nama_produk}</td>
                        <td className="border px-3 py-2">{produk.harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
                        <td className="border px-3 py-2">{produk.stok}</td>
                        <td className="border px-3 py-2">
                            <img src={produk.foto || ''} alt={produk.nama_produk} className="h-10 w-10 object-cover rounded" />
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
    )
}