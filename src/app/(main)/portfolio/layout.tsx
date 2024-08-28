import PortfolioContainer from "@/components/portfolio-container";

export default function Layout(props: { children: React.ReactNode }) {
  return <PortfolioContainer>{props.children}</PortfolioContainer>;
}