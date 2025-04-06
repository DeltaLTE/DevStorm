import {
    MagnifyingGlassIcon,
    UserCircleIcon,
    ShoppingCartIcon,
} from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { href: '/home/produk', icon: MagnifyingGlassIcon },
  { href: '/transaction/nota', icon: ShoppingCartIcon,},
  { href: '/profil', icon: UserCircleIcon },
];

export default function TopUser() {
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a
            key={link.href}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium text-white hover:text-black md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="w-6" />
          </a>
        );
      })}
    </>
  );
}
