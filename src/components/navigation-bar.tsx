"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    label: "Home",
    href: "/",
    icon: "fa-solid fa-house",
  },
  {
    label: "Projects",
    href: "/projects",
    icon: "fa-solid fa-folder-tree",
  },
  // {
  //   label: "Portfolio",
  //   href: "/portfolio",
  //   icon: "fa-solid fa-briefcase",
  // },
  {
    label: "Blog",
    href: "/blog",
    icon: "fa-solid fa-newspaper",
  },
  {
    label: "About",
    href: "/about",
    icon: "fa-solid fa-user",
  },
];

export default function NavigationBar() {
  const pathname = usePathname();

  const handleSearch = () => {
    const searchModal = document.getElementById("search-modal") as HTMLDialogElement;
    searchModal.showModal();
  };

  return (
    <nav className={"z-50 navbar bg-base-300"}>
      <div className={"navbar-start"}>
        <div className={"tooltip tooltip-right"} data-tip={"Home"}>
          <Link className={"btn btn-ghost text-xl max-md:hidden"} href={"/"}>
            <i className={"fa-solid fa-house"} />
          </Link>
        </div>
        <div className={"dropdown md:hidden"}>
          <div className={"btn btn-ghost"} role={"button"} tabIndex={0}>
            <i className={"fa-solid fa-bars fa-xl"} />
          </div>
          <ul className={"dropdown-content menu bg-base-300"}>
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
      <div className={"navbar-center"}>
        <Link className={"btn btn-ghost text-lg md:hidden"} href={"/"}>
          Dennise Catolos
        </Link>
        <ul className={"menu menu-horizontal max-md:hidden"}>
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
      <div className={"navbar-end"}>
        <div className={"tooltip tooltip-left"} data-tip={"Search"}>
          <button className={"btn btn-ghost"} type={"button"} onClick={handleSearch}>
            <i className={"fa-solid fa-magnifying-glass fa-xl"} />
          </button>
        </div>
      </div>
    </nav>
  );
}