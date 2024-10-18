import PortfolioContainer from "@/components/ui/portfolio-container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Dennise's Portfolio",
    template: "%s | Dennise's Portfolio",
  },
};

export default function Layout(props: { children: React.ReactNode }) {
  return <PortfolioContainer>{props.children}</PortfolioContainer>;
}