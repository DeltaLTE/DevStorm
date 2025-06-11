import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { fetchProdukPrisma } from "@/app/lib/prisma";
import { deleteProduk } from '@/app/lib/actions';
import { UpdateProduk } from '@/app/ui/produk/button';

type TabelProdukContentProps = {
  search?: string;
};

export async function TabelProdukContent({ search }: TabelProdukContentProps) {
  const { produk: produkList } = await fetchProdukPrisma(search);

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
            <td className="border px-3 py-2">
              {produk.harga.toLocaleString('id-ID', {
                style: 'currency',
                currency: 'IDR',
              })}
            </td>
            <td className="border px-3 py-2">{produk.stok}</td>
            <td className="border px-3 py-2">
              <img
                src={produk.foto || ''}
                alt={produk.nama_produk}
                className="h-10 w-10 object-cover rounded"
              />
            </td>
            <td className="border px-3 py-2">
              <div className="flex space-x-2">
                <UpdateProduk id={produk.id_produk} />
                <form action={deleteProduk}>
                  <input
                    type="hidden"
                    name="id_produk"
                    value={produk.id_produk}
                  />
                  <button
                    className="p-1"
                    type="submit"
                    aria-label={`Delete product ${produk.nama_produk}`}
                  >
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
