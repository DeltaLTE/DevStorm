import { PrismaClient } from "@/generated/prisma";
import { Produk, Transaksi } from "@/app/lib/definitions"

const prisma = new PrismaClient();

export async function fetchProdukPrisma() {
    try {
        const data = await prisma.produk.findMany({
        });

        const Produk = data.map((produk) => ({
            id: produk.id_produk,
            name: produk.nama_produk,
            price: produk.harga,
            inv: produk.stok,
            img: produk.foto,
            desc: produk.deskripsi,
        })) as unknown as Produk[];

        return Produk;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch produk.");
    }
}

export async function fetchProdukById(id: string): Promise<Produk | null> {
  try {
    const produk = await prisma.produk.findUnique({
      where: { id_produk: Number(id) },
    });

    return produk; // no mapping, just return as-is
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch produk by ID.");
  }
}



export async function fetchTransaksiPrisma() {
    try {
        const data = await prisma.transaksi.findMany({
        });

        const Transaksi = data.map((transaksi) => ({
            id: transaksi.id_transaksi,
            name: transaksi.nama_pembeli,
            date: transaksi.tanggal,
            total: transaksi.total_harga,
        })) as unknown as Transaksi[];

        return Transaksi;
    } catch (error) {
        console.error("Database Error:", error);
        throw new Error("Failed to fetch transaksi.");
    }
}

export async function fetchTotalRevenue() {
  try {
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
        id_produk: result[0].id_produk,
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
