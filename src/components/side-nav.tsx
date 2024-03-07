import Link from "next/link";

export default function SideNav({
  className,
	links,
	socials,
}: Readonly<{
  className?: string;
	links: ReadonlyArray<{
		name: string;
		url: string;
	}>;
	socials: ReadonlyArray<{
		name: string;
		icon: string;
		url: string;
	}>;
}>) {
	return (
		<div className={`w-[200px] flex flex-col shadow-xl text-white bg-slate-800 ${className}`}>
			<div className={"h-[200px] flex flex-col items-center justify-center"}>
				{/* eslint-disable-next-line @next/next/no-img-element */}
				<img
					className={"aspect-square rounded-full"}
					alt={"Avatar"}
					src={
						"https://gravatar.com/avatar/a8c63fb5500bc292955f80701cbf53c2?s=128"
					}
					width={128}
				/>
				<h1 className={"mt-2 text-xl font-bold"}>Dennise Catolos</h1>
			</div>
			<div className={"flex-1"}>
				{links.map((link) => (
					<Link
						key={link.name}
						className={"block leading-loose text-center transition hover:bg-slate-700"}
						href={link.url}
					>
						{link.name}
					</Link>
				))}
			</div>
			<div className={"h-12 flex items-center justify-center gap-3"}>
				{socials.map((social) => (
					<Link key={social.name} className={"transition hover:text-slate-400"} href={social.url}>
						<i className={`${social.icon} fa-xl`} />
					</Link>
				))}
			</div>
		</div>
	);
}