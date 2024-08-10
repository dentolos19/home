import Link from "next/link";

export default async function Page() {
  // const redirects = await getRedirects();
  const redirects: {
    id: string;
  }[] = [];
  // TODO: remove security measure
  return (
    <main className={"p-4 space-y-2"}>
      <Link className={"w-full btn btn-primary"} href={"/admin/redirects/add"}>
        New Redirect
      </Link>
      {redirects.map((redirect) => (
        <Link className={"w-full btn"} href={`/admin/redirects/${redirect.id}`}>
          {redirect.id}
        </Link>
      ))}
    </main>
  );
}