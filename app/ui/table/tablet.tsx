import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline"
import { fetchTransaksiPrisma } from "@/app/lib/prisma";

export async function TabelTransaksiContent() {
    const transaksiList = await fetchTransaksiPrisma();

    return (
        <table className="w-full text-sm text-left text-black border-collapse">
            <thead>
                <tr className="bg-gray-300">
                    <th className="border px-3 py-2">ID</th>
                    <th className="border px-3 py-2">NAMA PELANGGAN</th>
                    <th className="border px-3 py-2">TANGGAL </th>
                    <th className="border px-3 py-2">TOTAL HARGA</th>
                    <th className="border px-3 py-2">AKSI</th>
                </tr>
            </thead>
            <tbody>
                {transaksiList.map((transaksi) => (
                    <tr key={transaksi.id_transaksi} className="bg-white">
                        <td className="border px-3 py-2">{transaksi.id_transaksi}</td>
                        <td className="border px-3 py-2">{transaksi.nama_pembeli}</td>
                        <td className="border px-3 py-2">
                            {new Date(transaksi.tanggal).toISOString().split('T')[0]}
                        </td>

                        <td className="border px-3 py-2">{transaksi.total_harga.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</td>
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