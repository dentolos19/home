export type RouteProps = { params: { [key: string]: string }, searchParams: SearchParams };
export type SearchParams = { [key: string]: string | string[] | undefined };