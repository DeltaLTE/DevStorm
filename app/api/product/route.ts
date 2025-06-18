import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import { PrismaClient } from '@prisma/client';
import { Produk, Transaksi } from "@/app/lib/definitions"

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  
  const file = formData.get("foto") as File;
  const nama_produk = formData.get("nama_produk") as string;
  const harga = parseInt(formData.get("harga") as string);
  const stok = parseInt(formData.get("stok") as string);
  const deskripsi = formData.get("deskripsi") as string;

  if (!file || !file.name) {
    return NextResponse.json({ error: "No image uploaded" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const filename = `${Date.now()}_${file.name}`;
  const filePath = path.join(process.cwd(), "public", filename);

  await writeFile(filePath, buffer);

  const imageUrl = `/${filename}`; // Accessible at: http://localhost:3000/filename

  await prisma.produk.create({
    data: {
      nama_produk,
      harga,
      stok,
      deskripsi,
      foto: imageUrl,
    },
  });

  return NextResponse.redirect(new URL('/dashboard/produk', req.url));
}

export async function GET(
  req: NextRequest,
  context: { params: { id: string } }
) {
  const id = parseInt(context.params.id, 10);

  if (isNaN(id)) {
    return NextResponse.json({ error: 'Invalid ID' }, { status: 400 });
  }

  const product = await prisma.produk.findUnique({
    where: { id_produk: id },
  });

  if (!product) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  return NextResponse.json(product);
}