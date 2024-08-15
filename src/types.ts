type RouteParams = { [key: string]: string };
type RouteSearchParams = { [key: string]: string | string[] | undefined };

export type RouteProps = { params: RouteParams; searchParams: RouteSearchParams };
export type ErrorRouteProps = { error: Error & { digest?: string }; reset: () => void };