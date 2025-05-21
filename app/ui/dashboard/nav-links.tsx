import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Dashboard', href: '/dashboard', },
  { name: 'Pengguna', href: '/dashboard/pengguna',},
  { name: 'Produk', href: '/dashboard/produk'},
  { name: 'Transaksi', href: '/dashboard/transaksi'},
  { name: 'Status', href: '/dashboard/status'},
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <div key={link.name}>
            <a
              href={link.href}
              className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:text-black text-white md:flex-none md:p-2 md:px-3">
              <p className="hidden md:block">{link.name}</p>
            </a>
            <div className='bg-white w-full h-[1]'></div>
          </div>
        );
      })}
    </>
  );
}
