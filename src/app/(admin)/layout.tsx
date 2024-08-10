import AdminContainer from "@/components/admin-container";

export default function Layout(props: { children: React.ReactNode }) {
  return <AdminContainer>{props.children}</AdminContainer>;
}