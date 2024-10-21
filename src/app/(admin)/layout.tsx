import AdminShell from "@/components/shells/admin-shell";
import { LayoutProps } from "@/types";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dennise's Administration",
  robots: {
    index: false,
  },
};

export default function Layout(props: LayoutProps) {
  return <AdminShell>{props.children}</AdminShell>;
}