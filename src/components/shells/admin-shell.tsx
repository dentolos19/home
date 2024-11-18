"use client";

import NavigationItem, { NavigationItemData } from "@/components/navigation-item";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const links: NavigationItemData[] = [
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
];

export default function AdminShell(props: { children: React.ReactNode }) {
  return (
    <div className={"drawer lg:drawer-open"}>
      <input id={"drawer"} className={"drawer-toggle"} type={"checkbox"} />
      <div className={"drawer-content"}>
        <div className={"grid h-dvh grid-rows-[auto,1fr]"}>
          <div className={"navbar bg-base-300"}>
            <div className={"navbar-start"}>
              <label className={"btn btn-ghost lg:hidden"} htmlFor={"drawer"}>
                <i className={"fa-solid fa-bars fa-xl"} />
              </label>
            </div>
            <div className={"navbar-end"}>
              <div className={"mr-2 flex items-center"}>
                <UserButton />
              </div>
            </div>
          </div>
          {props.children}
        </div>
      </div>
      <div className={"drawer-side"}>
        <label className={"drawer-overlay"} htmlFor={"drawer"} />
        <div className={"h-dvh w-56 bg-base-300"}>
          <div className={"navbar max-lg:hidden"}>
            <div className={"tooltip tooltip-right"} data-tip={"Home"}>
              <Link className={"btn btn-ghost"} href={"/"}>
                <i className={"fa-solid fa-house fa-xl"} />
              </Link>
            </div>
          </div>
          <ul className={"menu"}>
            <NavigationItem className={"lg:hidden"} data={{ label: "Home", href: "/", icon: "fa-solid fa-house" }} />
            {links.map((link) => (
              <NavigationItem key={link.href} data={link} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}