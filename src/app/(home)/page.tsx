import AvatarImage from "@/components/avatar-image";
import { socials } from "@/shared";
import Link from "next/link";

export default function Page() {
	return (
		<div className={"h-full flex items-center justify-center"}>
			<div className={"w-[90%] md:w-[70%] lg:w-[50%] text-center"}>
				<AvatarImage className={"relative bottom-[-50px] mx-auto"} size={150} />
				<div className={"px-4 py-6 shadow rounded bg-slate-800"}>
					<div className={"my-[30px]"} />
					<h1 className={"text-3xl font-bold"}>Dennise Catolos</h1>
					<p className={"mt-2 mb-4 text-sm text-slate-300"}>
						A Year 1 student studying at Nanyang Polytechnic, pursing
						a Diploma in Information Technology. ✌️🧑‍💻
					</p>
					<p className={"flex gap-4 justify-center"}>
						{socials.map((social) => (
							<Link
								key={social.name}
								className={"transition hover:text-slate-400"}
								title={social.name}
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