"use client";

import { useAuth } from "@/components/contexts/auth-context";
import NavigationItem, { NavigationItemData } from "@/components/navigation-item";
import LoadingView from "@/components/views/loading-view";
import LoginView from "@/components/views/login-view";
import { storageIds } from "@/lib/integrations/appwrite";
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
  {
    label: "Assets",
    href: "/admin/assets",
    icon: "fa-solid fa-file",
  },
  {
    label: "Files",
    icon: "fa-solid fa-folder",
    subItems: [
      ...Object.values(storageIds).map((bucket) => ({
        label: bucket.label,
        href: `/admin/files/${bucket.id}`,
      })),
    ],
  },
];

export default function AdminShell(props: { children: React.ReactNode }) {
  const auth = useAuth();

  if (auth.loading) return <LoadingView />;
  if (!auth.user) return <LoginView />;

  const handleLogout = () => {
    auth.logout();
  };

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
              <details className={"dropdown dropdown-end"}>
                <summary className={"tooltip tooltip-left mr-2 flex items-center"} data-tip={"Account"}>
                  <div className={"avatar cursor-pointer"}>
                    <div className={"size-8 rounded-full"}>
                      <img
                        src={"/assets/avatar"}
                        alt={"Avatar"}
                      />
                    </div>
                  </div>
                </summary>
                <ul className={"menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow"}>
                  <li>
                    <button onClick={handleLogout}>Logout</button>
                  </li>
                </ul>
              </details>
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