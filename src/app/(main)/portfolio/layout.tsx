import PortfolioContainer from "@/components/ui/portfolio-container";

export default function Layout(props: { children: React.ReactNode }) {
  return <PortfolioContainer>{props.children}</PortfolioContainer>;
}