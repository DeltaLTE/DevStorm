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

    const Transaksi = data.map((transaksi: Transaksi) => ({
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

