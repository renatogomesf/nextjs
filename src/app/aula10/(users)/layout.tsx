// utilizar parenteses "()" numa pasta faz que ela não crie uma rota automática do next.

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { name: "Profile", href: "/aula10/profile" },
  { name: "Config", href: "/aula10/config" },
  { name: "Info", href: "/aula10/info" },
];

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname(); // usa a rota e permite fazer uso de algumas funcionalidades.

  return (
    <div>
      {navLinks.map((link) => {
        const isActive = pathName.startsWith(link.href);

        return (
          <Link
            className={`${isActive ? "text-red-600" : "text-blue-600"}`}
            style={{ margin: 10 }}
            key={link.href}
            href={link.href}
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
}
