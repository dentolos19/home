import SideNav from "@/components/side-nav";
import TopNav from "@/components/top-nav";
import { links, socials } from "@/shared";

export default function LayoutContainer({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className={"h-dvh flex max-xl:flex-col"}>
			<TopNav className={"xl:hidden"} links={links} socials={socials} />
			<SideNav className={"max-xl:hidden"} links={links} socials={socials} />
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