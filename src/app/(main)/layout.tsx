import AppContainer from "@/components/app-container";

export default function Layout(props: { children: React.ReactNode }) {
  return <AppContainer>{props.children}</AppContainer>;
}