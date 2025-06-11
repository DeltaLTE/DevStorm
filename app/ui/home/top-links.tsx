import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home', href: '/home'},
  { name: 'Produk', href: '/home/produk'},
  { name: 'About', href: '/home/about'},
  { name: 'Contact', href: '/home/contact'}
];

export default function TopLinks() {
  return (
    <>
      {links.map((link) => {
        return (
          <a
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium text-black hover:text-gray-700 md:flex-none md:justify-start md:p-2 md:px-3">
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </>
  );
}
