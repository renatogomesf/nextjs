// utilizar parenteses "()" numa pasta faz que ela não crie uma rota automática do next.

// quando usa o nome "template" num arquivo next, ele mantem o layout mas não mantem o estado das coisas, re-renderizando elas (o que faz chamar useEffect novamente). neste caso, o input reseta. no arquivo chamado "layout" ele se mantem.

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { name: "Profile", href: "/aula11/profile" },
  { name: "Config", href: "/aula11/config" },
  { name: "Info", href: "/aula11/info" },
];

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname(); // usa a rota e permite fazer uso de algumas funcionalidades.
  const [value, setValue] = useState("");

  return (
    <div>
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

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
