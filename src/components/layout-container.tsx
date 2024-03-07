import SideNav from "@/components/side-nav";
import TopNav from "@/components/top-nav";
import { links, socials } from "@/shared";

export default function LayoutContainer({
	children,
}: { children: React.ReactNode }) {
	return (
		<div className={"h-dvh flex max-sm:flex-col"}>
			<TopNav className={"sm:hidden"} links={links} socials={socials} />
			<SideNav className={"max-sm:hidden"} links={links} socials={socials} />
			<main className={"flex-1 overflow-y-auto text-white bg-slate-600"}>
				{children}
			</main>
		</div>
	);
}