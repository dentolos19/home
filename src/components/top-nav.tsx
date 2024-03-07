"use client";

import Link from "next/link";
import { useState } from "react";

export default function TopNav({
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
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className={`shadow-xl text-white bg-slate-800 ${className}`}>
			<div
				className={"w-full h-12 px-4 flex items-center justify-between"}
			>
				<Link href={"/"}>
          <div className={"text-lg font-bold"}>Dennise Catolos</div>
        </Link>
				{/* biome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
				<div onClick={() => setMenuOpen(!menuOpen)}>
					<i className={"fa-solid fa-bars fa-lg"} />
				</div>
			</div>
			<div className={menuOpen ? "" :  "hidden"}>
				<div>
					{links.map((link) => (
						<Link
							key={link.name}
							className={"block leading-loose text-center"}
							href={link.url}
							onClick={() => setMenuOpen(false)}
						>
							{link.name}
						</Link>
					))}
				</div>
				<div className={"my-4 flex items-center justify-center gap-3"}>
					{socials.map((social) => (
						<Link key={social.name} href={social.url}>
							<i className={`${social.icon} fa-xl`} />
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}