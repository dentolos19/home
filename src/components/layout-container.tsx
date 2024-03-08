import SideNav from "@/components/side-nav";
import TopNav from "@/components/top-nav";

export default function LayoutContainer({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className={"h-dvh flex max-xl:flex-col"}>
			<TopNav className={"xl:hidden"} />
			<SideNav className={"max-xl:hidden"} />
			<main
				className={"flex-1 overflow-y-auto text-white bg-slate-600"}
				style={{
					scrollbarGutter: "stable both-edges",
				}}
			>
				{children}
			</main>
		</div>
	);
}