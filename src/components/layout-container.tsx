import SideNav from "@/components/side-nav";
import TopNav from "@/components/top-nav";

const links = [
	{
		name: "Home",
		url: "/",
	},
	{
		name: "Projects",
		url: "/projects",
	},
	{
		name: "Blog",
		url: "https://blog.dennise.me",
	},
	{
		name: "About",
		url: "/about",
	},
];

const socials = [
	{
		name: "Email",
		icon: "fa-solid fa-envelope",
		url: "mailto:contact@dennise.me",
	},
	{
		name: "GitHub",
		icon: "fa-brands fa-github",
		url: "https://github.com/dentolos19",
	},
	{
		name: "LinkedIn",
		icon: "fa-brands fa-linkedin",
		url: "https://www.linkedin.com/in/dentolos19/",
	},
	{
		name: "Instagram",
		icon: "fa-brands fa-instagram",
		url: "https://instagram.com/dentolos19",
	},
	{
		name: "Twitter",
		icon: "fa-brands fa-x-twitter",
		url: "https://twitter.com/dentolos19",
	},
];

export default function LayoutContainer({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className={"h-dvh flex max-sm:flex-col"}>
			<TopNav className={"sm:hidden"} links={links} socials={socials}/>
			<SideNav className={"max-sm:hidden"} links={links} socials={socials}/>
			<main className={"flex-1 overflow-y-auto text-white bg-slate-600"}>{children}</main>
		</div>
	);
}