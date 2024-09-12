import AdminShell from "@/components/shells/admin-shell";
import { LayoutProps } from "@/types";

export default function Layout(props: LayoutProps) {
  return <AdminShell>{props.children}</AdminShell>;
}