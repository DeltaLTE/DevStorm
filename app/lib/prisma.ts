import { NextRequest, NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import path from 'path';
import { PrismaClient } from '@prisma/client';
import { Produk, Transaksi } from "@/app/lib/definitions"

const prisma = new PrismaClient();

export async function fetchProdukPrisma(search?: string, skip: number = 0, take: number = 8) {
  try {
    const where = search
  ? {
      nama_produk: {
        contains: search,
        mode: 'insensitive' as const
      }
    }
  : {};

    const [data, total] = await Promise.all([
      prisma.produk.findMany({
        where,
        skip,
        take,
        orderBy: { id_produk: 'asc' },
      }),
      prisma.produk.count({ where }),
    ]);

    const Produk = data.map((produk: Produk) => ({
      id_produk: produk.id_produk,
      nama_produk: produk.nama_produk,
      harga: produk.harga,
      stok: produk.stok,
      foto: produk.foto,
      deskripsi: produk.deskripsi,
    })) as Produk[];

    return { produk: Produk, total };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch produk.");
  }
}


export async function fetchTransaksiPrisma() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const data = await prisma.transaksi.findMany({
    });

    const Transaksi = data.map((transaksi) => ({
      id_transaksi: transaksi.id_transaksi,
      nama_pembeli: transaksi.nama_pelanggan,
      tanggal: transaksi.tanggal_transaksi,
      total_harga: transaksi.total_harga,
    })) as unknown as Transaksi[];

    return Transaksi;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch transaksi.");
  }
}

export async function fetchTotalRevenue() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 10000));
    const result = await prisma.transaksi.aggregate({
      _sum: {
        total_harga: true,
      },
    });

    return result._sum.total_harga ?? 0;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total revenue.");
  }
}

export async function fetchMostSoldProduct() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const result = await prisma.transaksi.groupBy({
      by: ['id_produk'],
      _sum: {
        total_harga: true,
      },
      orderBy: {
        _sum: {
          total_harga: 'desc',
        },
      },
      take: 1,
    });

    if (result.length === 0) return null;

    const mostSoldProduct = await prisma.produk.findUnique({
      where: {
        id_produk: result[0].id_produk ?? undefined,
      },
    });


    return {
      ...mostSoldProduct,
      total_terjual: result[0]._sum.total_harga,
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch most sold product.");
  }
}



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
