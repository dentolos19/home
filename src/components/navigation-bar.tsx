import NavigationItem, { NavigationItemData } from "@/components/navigation-item";
import { showSearchModal } from "@/components/search-modal";
import Link from "next/link";

const links: NavigationItemData[] = [
  {
    label: "Projects",
    href: "/projects",
    icon: "fa-solid fa-folder-tree",
  },
  {
    label: "Portfolio",
    href: "/portfolio/academic",
    icon: "fa-solid fa-briefcase",
  },
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
              <NavigationItem key={link.label} data={link} />
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
            <NavigationItem key={link.label} data={link} />
          ))}
        </ul>
      </div>
      <div className={"navbar-end"}>
        <div className={"tooltip tooltip-left"} data-tip={"Search"}>
          <button className={"btn btn-ghost"} type={"button"} onClick={showSearchModal}>
            <i className={"fa-solid fa-magnifying-glass fa-xl"} />
          </button>
        </div>
      </div>
    </nav>
  );
}