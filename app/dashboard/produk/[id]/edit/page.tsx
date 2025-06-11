import { PrismaClient } from '@/generated/prisma';
import EditProdukForm from '@/app/ui/produk/edit-produk'

const prisma = new PrismaClient();

export default async function EditProdukPage({ params }: { params: { id: string } }) {
  const produk = await prisma.produk.findUnique({
    where: { id_produk: Number(params.id) },
  })

  if (!produk) return <div>Produk not found</div>

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Edit Produk</h1>
      <EditProdukForm produk={produk} />
    </div>
  )
}
