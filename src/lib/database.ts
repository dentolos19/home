import PocketBase from "pocketbase";

const pb = new PocketBase("https://easy-judge.pockethost.io");

export type Redirect = {
  name: string;
  destination: string;
};

export async function getRedirect(name: string) {
  try {
    return (await pb.collection("redirects").getFirstListItem(`name="${name}"`)) as Redirect;
  } catch {
    return null;
  }
}