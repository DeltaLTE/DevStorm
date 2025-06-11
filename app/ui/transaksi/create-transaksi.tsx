"use client";

import { createTransaksi } from "@/app/lib/actions"

export default function CreateTransaksiForm() {
  return (
    <form action={createTransaksi} className="space-y-4 bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto mt-6">
      <h2 className="text-lg font-bold">Tambah Transaksi</h2>
      <input name="nama_pelanggan" placeholder="Nama Pelanggan" className="w-full border p-2 rounded" />
      <input name="total_harga" type="number" placeholder="Total Harga" className="w-full border p-2 rounded" />
      <input name="tanggal_transaksi" type="date" className="w-full border p-2 rounded" />
      <input name="id_produk" type="number" placeholder="ID Produk" className="w-full border p-2 rounded" />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Simpan
      </button>
    </form>
  );
}
