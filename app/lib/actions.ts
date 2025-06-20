'use server';

import { PrismaClient } from '@prisma/client';
import { writeFile } from 'fs/promises';
import path from 'path';
import { redirect } from 'next/navigation';

const prisma = new PrismaClient();

export async function createProduk(formData: FormData) {
  const nama_produk = formData.get('nama_produk') as string;
  const harga = parseInt(formData.get('harga') as string, 10);
  const stok = parseInt(formData.get('stok') as string, 10);
  const deskripsi = formData.get('deskripsi') as string;
  const fotoFile = formData.get('foto') as File;

  if (!fotoFile || !fotoFile.size) {
    throw new Error('No image uploaded');
  }

  const bytes = await fotoFile.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const fileName = `${Date.now()}-${fotoFile.name}`;
  const filePath = path.join(process.cwd(), 'public', fileName);

  await writeFile(filePath, buffer);

  const fotoPath = `/${fileName}`;

  await prisma.produk.create({
    data: {
      nama_produk,
      harga,
      stok,
      deskripsi,
      foto: fotoPath,
    },
  });

  redirect('/dashboard/produk'); // change this to wherever your read page is
}

export async function deleteProduk(formData: FormData) {
  const id_korban = Number(formData.get("id_produk"));

  if (!id_korban || isNaN(id_korban)) {
    throw new Error("Invalid or missing product ID");
  }

  try {
    await prisma.produk.delete({
      where: { id_produk: id_korban },
    });
  } catch (error) {
    // Handle errors gracefully, e.g., log or rethrow with more info
    console.error("Failed to delete product:", error);
    throw error;
  }

  redirect('/dashboard/produk');
}


export async function updateProduk(id_produk: number, formData: FormData): Promise<void> {
  const nama_produk = formData.get('nama_produk') as string;
  const harga = parseInt(formData.get('harga') as string, 10);
  const stok = parseInt(formData.get('stok') as string, 10);
  const deskripsi = formData.get('deskripsi') as string;
  const fotoFile = formData.get('foto') as File;

  let fotoPath: string | undefined;

  if (fotoFile && fotoFile.size > 0) {
    const bytes = await fotoFile.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const fileName = `${Date.now()}-${fotoFile.name}`;
    const filePath = path.join(process.cwd(), 'public', fileName);

    await writeFile(filePath, buffer);
    fotoPath = `/${fileName}`;
  }

  await prisma.produk.update({
    where: { id_produk },
    data: {
      nama_produk,
      harga,
      stok,
      deskripsi,
      ...(fotoPath && { foto: fotoPath }),
    },
  });

  redirect('/dashboard/produk');
}

export async function createTransaksi(formData: FormData) {
  const nama_pelanggan = formData.get('nama_pelanggan') as string;
  const total_harga = parseInt(formData.get('total_harga') as string, 10);
  const tanggal_transaksi = formData.get('tanggal_transaksi') as string;
  const id_produk = parseInt(formData.get('id_produk') as string, 10);

  if (!nama_pelanggan || isNaN(total_harga) || !tanggal_transaksi || isNaN(id_produk)) {
    throw new Error('Invalid form data');
  }

  await prisma.transaksi.create({
    data: {
      nama_pelanggan,
      total_harga,
      tanggal_transaksi: new Date(tanggal_transaksi),
      id_produk,
    },
  });

  redirect('/dashboard/transaksi'); // Adjust to your actual redirect path
}


export async function deleteTransaksi(formData: FormData) {
  const id_transaksi = Number(formData.get("id_transaksi"));

  if (!id_transaksi || isNaN(id_transaksi)) {
    throw new Error("Invalid or missing transaction ID");
  }

  try {
    await prisma.transaksi.delete({
      where: { id_transaksi },
    });
  } catch (error) {
    console.error("Failed to delete transaksi:", error);
    throw error;
  }

  redirect('/dashboard/transaksi'); // Change to your correct path
}