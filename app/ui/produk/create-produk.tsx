// app/ui/produk/CreateProdukForm.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateProdukForm() {
  const router = useRouter();
  const [form, setForm] = useState({
    nama_produk: "",
    harga: "",
    stok: "",
    foto: "",
    deskripsi: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  const form = event.currentTarget;
  const formData = new FormData(form);

  const response = await fetch("/api/produk", {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    router.push("/dashboard/produk");
  } else {
    console.error("Failed to submit form");
  }
};

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto mt-6">
      <h2 className="text-lg font-bold">Tambah Produk</h2>
      <input name="nama_produk" placeholder="Nama Produk" className="w-full border p-2 rounded" onChange={handleChange} required />
      <input name="harga" type="number" placeholder="Harga" className="w-full border p-2 rounded" onChange={handleChange} required />
      <input name="stok" type="number" placeholder="Stok" className="w-full border p-2 rounded" onChange={handleChange} required />
      <input type="file" accept="image/*" name="foto" required className="border border-gray-400 rounded px-3 py-2 w-full" />
      <textarea name="deskripsi" placeholder="Deskripsi" className="w-full border p-2 rounded" onChange={handleChange} required />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Simpan</button>
    </form>
  );
}
