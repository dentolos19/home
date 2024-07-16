import SideNav from "@/components/side-nav";
import TopNav from "@/components/top-nav";

export default function LayoutContainer(props: { children: React.ReactNode }) {
  return (
    <div
      className={
        "h-dvh grid xl:grid-cols-[auto,1fr] max-xl:grid-rows-[auto,1fr]"
      }
    >
      <TopNav className={"xl:hidden"} />
      <SideNav className={"max-xl:hidden"} />
      {props.children}
    </div>
  );
}