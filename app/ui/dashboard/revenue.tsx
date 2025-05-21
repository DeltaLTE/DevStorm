import { fetchTotalRevenue } from "@/app/lib/prisma";

export async function RevenueContent() {
    const totalRevenue = await fetchTotalRevenue();
    return (
        <div className="bg-yellow-200 border rounded-md col-span-2">
            <div className="bg-orange-500 rounded-t-md text-center py-2 text-white font-bold">
                TOTAL PENDAPATAN
            </div>
            <div className="flex items-center justify-center py-6 text-xl font-bold text-black">
                {totalRevenue.toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                })}
            </div>
        </div>
    )
}