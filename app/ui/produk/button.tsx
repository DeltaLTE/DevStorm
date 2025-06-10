import { PencilIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export function UpdateProduk({ id }: { id: string }) {
  return (
    <Link
      href={`/dashboard/produk/${id}/edit`}
      className="[p-1]"
    >
      <PencilIcon className="w-4 h-4" />
    </Link>
  );
}