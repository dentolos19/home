import { Redis } from "@upstash/redis";

const redis = new Redis({
	url: process.env.UPSTASH_REDIS_REST_URL as string,
	token: process.env.UPSTASH_REDIS_REST_TOKEN as string,
});

export async function getRedirect(id: string) {
	try {
		const redirect = await redis.get<string>(`redirects:${id}`);
		if (!redirect) {
			return undefined;
		}
		return redirect;
	} catch (error) {
		return undefined;
	}
}