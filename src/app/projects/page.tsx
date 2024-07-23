import { getRepos } from "@/content";

export default async function Page() {
  const repos = await getRepos();

  return (
    <main className={"py-4"}>
      <div className={"mx-auto w-[90%] md:w-[50%]"}>
        <div className={"flex"}>{/* TODO */}</div>
        <div className={"flex flex-col gap-2"}>
          {repos.map((repo) => (
            <div key={repo.full_name} className={"card bg-base-300"}>
              <div className={"card-body"}>
                <h2 className={"card-title"}>{repo.name}</h2>
                <p>{repo.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}