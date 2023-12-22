import { Client, Databases, Query } from "appwrite";

export type Redirect = {
  name: string;
  destination: string;
};

const client = new Client();
client.setEndpoint("https://cloud.appwrite.io/v1").setProject("65858f61bee3d52ba89c");
const databases = new Databases(client);

export async function getRedirect(name: string) {
  try {
    return databases
      .listDocuments("65858f87218d89759bf5", "65858f8d4f8acf2c8fcb", [Query.equal("name", name)])
      .then((res) => {
        return res.documents[0] as unknown as Redirect;
      });
  } catch {
    return null;
  }
}