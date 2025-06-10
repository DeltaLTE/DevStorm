"use client";

import { createProduk } from "@/app/lib/actions"

export default function CreateProdukForm() {

  return (
    <form action={createProduk} className="space-y-4 bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto mt-6">
      <h2 className="text-lg font-bold">Tambah Produk</h2>
      <input name="nama_produk" placeholder="Nama Produk" className="w-full border p-2 rounded"  required />
      <input name="harga" type="number" placeholder="Harga" className="w-full border p-2 rounded"  required />
      <input name="stok" type="number" placeholder="Stok" className="w-full border p-2 rounded"  required />
      <input type="file" accept="image/*" name="foto" required className="border border-gray-400 rounded px-3 py-2 w-full" />
      <textarea name="deskripsi" placeholder="Deskripsi" className="w-full border p-2 rounded"  required />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Simpan</button>
    </form>
  );
}