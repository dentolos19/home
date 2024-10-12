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
];

export default function PortfolioContainer(props: { children: React.ReactNode }) {
  return (
    <div className={"grid min-h-0 max-md:grid-rows-[1fr,auto] md:grid-cols-[200px,1fr]"}>
      <ul className={"menu bg-base-300 max-md:hidden"}>
        {links.map((link, index) => (
          <NavigationItem key={index} data={link} />
        ))}
      </ul>
      {props.children}
      <div className={"btm-nav static bg-base-300 md:hidden"}>
        {links.map((link, index) => (
          <NavigationItem key={index} data={link} bottomNav />
        ))}
      </div>
    </div>
  );
}