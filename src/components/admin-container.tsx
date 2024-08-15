"use client";

import { UserButton } from "@clerk/nextjs";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    label: "Dashboard",
    href: "/admin",
    icon: "fa-solid fa-gauge",
  },
  {
    label: "Links",
    href: "/admin/links",
    icon: "fa-solid fa-link",
  },
  {
    label: "Files",
    href: "/admin/files",
    icon: "fa-solid fa-folder",
  },
];

export default function AdminContainer(props: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className={"drawer lg:drawer-open"}>
      <input id={"drawer"} className={"drawer-toggle"} type={"checkbox"} />
      <div className={"h-dvh drawer-content grid grid-rows-[auto,1fr]"}>
        <div className={"navbar bg-base-300"}>
          <div className={"navbar-start"}>
            <label className={"btn btn-ghost lg:hidden"} htmlFor={"drawer"}>
              <i className={"fa-solid fa-bars fa-xl"} />
            </label>
          </div>
          <div className={"navbar-end"}>
            <div className={"mr-2 flex items-center tooltip tooltip-left"} data-tip={"Account"}>
              <UserButton />
            </div>
          </div>
        </div>
        {props.children}
      </div>
      <div className={"drawer-side"}>
        <label className={"drawer-overlay"} htmlFor={"drawer"} />
        <div className={"w-56 h-dvh bg-base-300"}>
          <div className={"navbar max-lg:hidden"}>
            <div className={"tooltip tooltip-right"} data-tip={"Home"}>
              <Link className={"btn btn-ghost"} href={"/"}>
                <i className={"fa-solid fa-house fa-xl"} />
              </Link>
            </div>
          </div>
          <ul className={"menu"}>
            <li className={"lg:hidden"}>
              <Link href={"/"}>
                <i className={"fa-solid fa-house"} />
                Home
              </Link>
            </li>
            {links.map((link) => (
              <li key={link.label}>
                <Link className={clsx(pathname === link.href && "active")} href={link.href}>
                  <i className={link.icon} />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}