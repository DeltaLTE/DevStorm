import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { fetchTransaksiPrisma } from "@/app/lib/prisma";
import { deleteTransaksi } from "@/app/lib/actions";

export async function TabelTransaksiContent() {
  const transaksiList = await fetchTransaksiPrisma();

  return (
    <table className="w-full text-sm text-left text-black border-collapse">
      <thead>
        <tr className="bg-[#FFEB3B]">
          <th className="border px-3 py-2">ID</th>
          <th className="border px-3 py-2">NAMA PELANGGAN</th>
          <th className="border px-3 py-2">TANGGAL</th>
          <th className="border px-3 py-2">TOTAL HARGA</th>
          <th className="border px-3 py-2">AKSI</th>
        </tr>
      </thead>
      <tbody>
        {transaksiList.map((transaksi) => (
          <tr key={transaksi.id_transaksi} className="bg-white">
            <td className="border px-3 py-2">{transaksi.id_transaksi}</td>
            <td className="border px-3 py-2">{transaksi.nama_pelanggan}</td>
            <td className="border px-3 py-2">
              {new Date(transaksi.tanggal_transaksi).toISOString().split('T')[0]}
            </td>
            <td className="border px-3 py-2">
              {transaksi.total_harga.toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
              })}
            </td>
            <td className="border px-3 py-2">
              <div className="flex space-x-2">
                <button className="p-1" aria-label="Edit transaksi">
                  <PencilIcon className="w-4 h-4" />
                </button>
                <form action={deleteTransaksi}>
                  <input type="hidden" name="id_transaksi" value={transaksi.id_transaksi} />
                  <button className="p-1" type="submit" aria-label="Hapus transaksi">
                    <TrashIcon className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
