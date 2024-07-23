import Link from "next/link";

const links = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "About",
    href: "/about",
  },
];

export default function NavigationBar() {
  return (
    <nav className={"z-50 navbar bg-base-300"}>
      <div className={"navbar-start"}>
        <div className={"dropdown lg:hidden"}>
          <div className={"btn btn-ghost"} role={"button"} tabIndex={0}>
            <i className={"fa-solid fa-bars"} />
          </div>
          <ul className={"dropdown-content menu bg-base-300"}>
            {links.map((link) => (
              <li key={link.label}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link className={"btn btn-ghost text-xl"} href={"/"}>
          Dennise Catolos
        </Link>
      </div>
      <div className={"navbar-center"}>
        <ul className={"menu menu-horizontal hidden lg:flex"}>
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={"navbar-end"}>
        <button className={"btn btn-ghost"} type={"button"}>
          <i className={"fa-solid fa-magnifying-glass fa-xl"} />
        </button>
      </div>
    </nav>
  );
}