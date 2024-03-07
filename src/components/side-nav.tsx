import AvatarImage from "@/components/avatar-image";
import Link from "next/link";

export default function SideNav({
	className,
	links,
	socials,
}: {
	className?: string;
	links: {
		name: string;
		url: string;
	}[];
	socials: {
		name: string;
		icon: string;
		url: string;
	}[];
}) {
	return (
		<div
			className={`w-[220px] flex flex-col shadow-xl text-white bg-slate-800 ${className}`}
		>
			<div className={"h-[220px] flex flex-col items-center justify-center"}>
				<AvatarImage size={120} />
				<h1 className={"mt-2 text-xl font-bold"}>Dennise Catolos</h1>
			</div>
			<div className={"flex-1"}>
				{links.map((link) => (
					<Link
						key={link.name}
						className={
							"block leading-loose text-center transition hover:bg-slate-700"
						}
						href={link.url}
					>
						{link.name}
					</Link>
				))}
			</div>
			<div className={"h-12 flex items-center justify-center gap-4"}>
				{socials.map((social) => (
					<Link
						key={social.name}
						className={"transition hover:text-slate-400"}
						href={social.url}
					>
						<i className={`${social.icon} fa-lg`} />
					</Link>
				))}
			</div>
		</div>
	);
}