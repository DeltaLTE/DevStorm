import ProLinks from '@/app/ui/home/produk-link';
import { luckiest } from '@/app/ui/fonts';

export default function ProNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-yellow-200 border-2 border-black">
      <div className={`${luckiest.className} flex justify-center items-center p-4`}>
        Categories
      </div>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <ProLinks />
        <div className="hidden h-auto w-full grow rounded-md md:block"></div>
      </div>
    </div>
  );
}
