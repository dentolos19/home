import { account } from "@/lib/integrations/appwrite";
import { ID, Models } from "appwrite";

export type UserPrefs = {};

export async function loginUser(email: string, password: string) {
  const session = await account.createEmailPasswordSession(email, password);
  const user = (await account.get<UserPrefs>()) as Models.User<UserPrefs>;
  return { session, user };
}

export async function logoutUser() {
  await account.deleteSession("current");
}

export async function registerUser(email: string, password: string, name?: string) {
  return await account.create<UserPrefs>(ID.unique(), email, password, name).then(() => loginUser(email, password));
}

export async function getUser() {
  try {
    const session = await account.getSession("current");
    const user = (await account.get<UserPrefs>()) as Models.User<UserPrefs>;
    return { session, user };
  } catch (err) {
    console.error(err);
    return undefined;
  }
}