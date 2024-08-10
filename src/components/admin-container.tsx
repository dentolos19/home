"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminContainer(props: { children: React.ReactNode }) {
  const router = useRouter();

  const navigateBack = () => {
    router.back();
  };

  const adminLogout = () => {
    router.push("/");
  };

  return (
    <div className={"h-full drawer lg:drawer-open"}>
      <input id={"drawer"} className={"drawer-toggle"} type={"checkbox"} />
      <div className={"drawer-side"}>
        <label className={"drawer-overlay"} htmlFor={"drawer"} />
        <div className={"w-56 h-full bg-base-300"}>
          <div className={"navbar max-lg:hidden"}>
            <div className={"navbar-start"}>
              <div className={"tooltip tooltip-right"} data-tip={"Back"}>
                <button className={"btn btn-ghost"} onClick={navigateBack}>
                  <i className={"fa-solid fa-backward fa-xl"} />
                </button>
              </div>
            </div>
          </div>
          <ul className={"menu"}>
            <li>
              <Link href={"/admin"}>
                <i className={"fa-solid fa-gauge"} />
                Dashboard
              </Link>
            </li>
            <li>
              <Link href={"/admin/redirects"}>
                <i className={"fa-solid fa-folder-open"} />
                Redirects
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={"h-full drawer-content grid grid-rows-[auto,1fr]"}>
        <div className={"navbar bg-base-300"}>
          <div className={"navbar-start"}>
            <label className={"btn btn-ghost lg:hidden"} htmlFor={"drawer"}>
              <i className={"fa-solid fa-bars fa-xl"} />
            </label>
          </div>
          <div className={"navbar-end"}>
            <div className={"mr-2 tooltip tooltip-left"} data-tip={"Account"}>
              {/* <button className={"btn btn-ghost"} onClick={adminLogout}>
                <i className={"fa-solid fa-right-from-bracket fa-xl"} />
              </button> */}
              <UserButton />
            </div>
          </div>
        </div>
        {props.children}
      </div>
    </div>
  );
}