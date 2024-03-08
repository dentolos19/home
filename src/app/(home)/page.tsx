import AvatarImage from "@/components/avatar-image";
import { socials } from "@/shared";
import Link from "next/link";

export default function Page() {
	return (
		<div className={"h-full flex items-center justify-center"}>
			<div className={"w-[90%] sm:w-[70%] md:w-[50%] text-center"}>
				<AvatarImage className={"relative bottom-[-50px] mx-auto"} size={150} />
				<div className={"px-4 py-6 shadow rounded bg-slate-800"}>
					<div className={"my-[30px]"} />
					<h1 className={"text-2xl font-bold"}>Dennise Catolos</h1>
					<p className={"mt-1 text-slate-300"}>
						A soon-to-be Year 1 student studying at Nanyang Polytechnic, pursing
						Diploma in Information Technology. ✌️🧑‍💻
					</p>
					<p className={"mt-3 flex gap-4 justify-center"}>
						{socials.map((social) => (
							<Link
								key={social.name}
								className={"transition hover:text-slate-400"}
								href={social.url}
							>
								<i className={`${social.icon} fa-xl`} />
							</Link>
						))}
					</p>
				</div>
			</div>
		</div>
	);
}