"use client";

import { clsx } from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

type FilterSelectorProps = {
  label: string;
  name: string;
  value?: string;
  active: boolean;
};

export default function FilterSelector(props: FilterSelectorProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const urlSearchParams = new URLSearchParams(searchParams);
  if (props.value) urlSearchParams.set(props.name, props.value);
  else urlSearchParams.delete(props.name);

  const url = new URL(pathname, window.location.origin);
  url.search = urlSearchParams.toString();

  return (
    <Link className={clsx("btn btn-sm", props.active ? "btn-primary" : "btn-outline")} href={url} replace>
      {props.label}
    </Link>
  );
}