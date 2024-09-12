import AppShell from "@/components/shells/app-shell";
import { LayoutProps } from "@/types";

export default function Layout(props: LayoutProps) {
  return <AppShell>{props.children}</AppShell>;
}