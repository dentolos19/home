import NavigationItem, { NavigationItemData } from "@/components/navigation-item";

const links: NavigationItemData[] = [
  {
    label: "Me",
    href: "/portfolio",
    icon: "fa-solid fa-user",
  },
  {
    label: "Events",
    href: "/portfolio/events",
    icon: "fa-solid fa-calendar",
  },
  {
    label: "Achievements",
    href: "/portfolio/achievements",
    icon: "fa-solid fa-star",
  },
  {
    label: "Experience",
    href: "/portfolio/experience",
    icon: "fa-solid fa-building",
  },
];

export default function PortfolioContainer(props: { children: React.ReactNode }) {
  return (
    <div className={"min-h-0 grid md:grid-cols-[200px,1fr] max-md:grid-rows-[auto,1fr]"}>
      <ul className={"max-md:hidden menu bg-base-300"}>
        {links.map((link, index) => (
          <NavigationItem key={index} data={link} />
        ))}
      </ul>
      {props.children}
      <div className={"md:hidden btm-nav bg-base-300"}>
        {links.map((link, index) => (
          <NavigationItem key={index} data={link} bottomNav />
        ))}
      </div>
    </div>
  );
}