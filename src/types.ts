export type LayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export type RouteProps = {
  params: Promise<any>;
  searchParams: Promise<any>;
};

export type ErrorRouteProps = {
  error: Error & { digest?: string };
  reset: () => void;
};