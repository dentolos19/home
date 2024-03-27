"use client";

import { links, socials } from "@/shared";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function TopNav({
	className,
}: {
	className?: string;
}) {
	const pathname = usePathname();
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<div className={`shadow-xl text-white bg-slate-800 ${className}`}>
			<div className={"w-full h-12 px-4 flex items-center justify-between"}>
				<Link href={"/"}>
					<div className={"text-lg font-bold"}>Dennise Catolos</div>
				</Link>
				<button
					className={"cursor-pointer transition hover:text-slate-300"}
					type={"button"}
					onClick={() => setMenuOpen(!menuOpen)}
				>
					<i className={"fa-solid fa-bars fa-lg"} />
				</button>
			</div>
			<AnimatePresence>
				{menuOpen && (
					<motion.div
						className={
							"w-full absolute z-10 overflow-hidden drop-shadow-xl bg-slate-800"
						}
						initial={{
							height: 0,
						}}
						animate={{
							height: "auto",
						}}
						exit={{
							height: 0,
						}}
						transition={{
							duration: 0.2,
						}}
					>
						<div className={"my-4 flex items-center justify-center gap-8"}>
							{socials.map((social) => (
								<Link
									key={social.name}
									className={"transition hover:text-slate-300"}
									href={social.url}
								>
									<i className={`${social.icon} fa-xl`} />
								</Link>
							))}
						</div>
						<div className={"mb-2"}>
							{links.map((link) => (
								<Link
									key={link.name}
									className={`py-4 block text-center transition hover:bg-slate-700 ${
										pathname === link.url ? "bg-slate-600" : ""
									}`}
									href={link.url}
									onClick={() => setMenuOpen(false)}
								>
									{link.name}
								</Link>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}