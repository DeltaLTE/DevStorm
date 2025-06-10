import { PrismaClient } from '@/generated/prisma';
import EditProdukForm from '@/app/ui/produk/edit-produk';

const prisma = new PrismaClient();
export const dynamic = 'force-dynamic';

export default async function EditProdukPage({ params }: { params: { id: string } }) {
  const id = parseInt(await Promise.resolve(params).then(p => p.id), 10);

  if (isNaN(id)) {
    return <div>Invalid ID</div>;
  }

  const produk = await prisma.produk.findUnique({
    where: { id_produk: id },
  });

  if (!produk) {
    return <div>Produk not found</div>;
  }

  return (
    <div className="p-4">
      <EditProdukForm produk={produk} />
    </div>
  );
}
