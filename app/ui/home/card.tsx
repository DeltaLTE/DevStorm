import Link from "next/link"
import { luckiest } from '@/app/ui/fonts';

export default function ProductCard({
    id,
    name,
    price,
    image,
}: {
    id: string;
    name: string;
    price: number;
    image: string;
}) {

    const formatRupiah = (value: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(value);
    };

    return (
        <div className="bg-white rounded-2xl p-2 shadow text-center border-yellow-200 border-4">
            <div className="bg-yellow-200 rounded-xl p-2 mb-2">
                <Link href={`/home/produk/${id}`}>
                    <img
                        src={image}
                        alt={name}
                        className="rounded-lg w-full h-32 object-contain"
                    />
                </Link>
            </div>
            <h3 className={`${luckiest.className} text-sm font-bold mb-1`}>{name}</h3>
            <p className={`${luckiest.className} font-semibold text-black`}>{formatRupiah(price)}</p>
        </div>
    )
};