"use client";

import { updateProduk } from "@/app/lib/actions";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function EditProdukForm({ produk }: { produk: any }) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    nama_produk: produk.nama_produk,
    harga: produk.harga,
    stok: produk.stok,
    deskripsi: produk.deskripsi,
    foto: null as File | null,
  });

  const [previewUrl, setPreviewUrl] = useState<string | null>(produk.foto || null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setFormData(prev => ({ ...prev, foto: file }));

      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result as string);
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const fd = new FormData();
    fd.append('nama_produk', formData.nama_produk);
    fd.append('harga', formData.harga.toString());
    fd.append('stok', formData.stok.toString());
    fd.append('deskripsi', formData.deskripsi);
    if (formData.foto) fd.append('foto', formData.foto);

    await updateProduk(produk.id_produk, fd);
    router.push('/dashboard/produk');
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-4 bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto mt-6">
      <h2 className="text-lg font-bold">Edit Produk</h2>

      <input name="nama_produk" value={formData.nama_produk} onChange={handleChange} className="w-full border p-2 rounded" required />
      <input name="harga" type="number" value={formData.harga} onChange={handleChange} className="w-full border p-2 rounded" required />
      <input name="stok" type="number" value={formData.stok} onChange={handleChange} className="w-full border p-2 rounded" required />
      
      <input type="file" accept="image/*" name="foto" onChange={handleFileChange} className="border border-gray-400 rounded px-3 py-2 w-full" />

      {previewUrl && (
        <div className="mt-2">
          <p className="text-sm text-gray-600 mb-1">Image Preview:</p>
          <img src={previewUrl} alt="Preview" className="max-h-48 object-contain rounded border" />
        </div>
      )}

      <textarea name="deskripsi" value={formData.deskripsi} onChange={handleChange} className="w-full border p-2 rounded" required />

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
    </form>
  );
}
