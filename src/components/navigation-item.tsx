"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavigationItemData = {
  label: string;
  href?: string;
  icon: string;
  subItems?: {
    label: string;
    href: string;
  }[];
};

export default function NavigationItem(props: { className?: string; data: NavigationItemData; bottomNav?: boolean }) {
  const pathname = usePathname();

  if (props.data.subItems && !props.bottomNav)
    return (
      <li className={props.className}>
        <details>
          <summary>
            <i className={props.data.icon} />
            {props.data.label}
          </summary>
          <ul>
            {props.data.subItems.map((subItem) => (
              <li key={subItem.href}>
                <Link className={clsx(pathname === subItem.href && "active")} href={subItem.href}>
                  {subItem.label}
                </Link>
              </li>
            ))}
          </ul>
        </details>
      </li>
    );

  if (props.bottomNav)
    return (
      <Link className={clsx(pathname === props.data.href && "active")} href={props.data.href || "#"}>
        <i className={props.data.icon} />
      </Link>
    );

  return (
    <li className={props.className}>
      <Link className={clsx(pathname === props.data.href && "active")} href={props.data.href || "#"}>
        <i className={props.data.icon} />
        {props.data.label}
      </Link>
    </li>
  );
}