export type RouteProps = { params: { [key: string]: string }; searchParams: SearchParams };
export type ErrorRouteProps = { error: Error & { digest?: string }; reset: () => void };
export type SearchParams = { [key: string]: string | string[] | undefined };