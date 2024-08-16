import AppContainer from "@/components/app-container";
import { LayoutProps } from "@/types";

export default function Layout(props: LayoutProps) {
  return <AppContainer>{props.children}</AppContainer>;
}