import Link from "next/link";

export default function Page() {
  return (
    <main className={"py-4"}>
      <div className={"mx-auto flex w-[60%] flex-col gap-2 max-md:w-[90%]"}>
        <div className={"grid grid-cols-[auto,1fr] overflow-hidden rounded-box bg-base-300"}>
          <div className={"avatar mr-8"}>
            <div className={"size-24 md:size-32"}>
              <img src={"/assets/cavatar"} alt={"Avatar"} />
            </div>
          </div>
          <div className={"flex min-w-0 flex-col justify-center"}>
            <h2 className={"mb-1 truncate text-xl font-bold"}>Dennise Catolos</h2>
            <p className={"truncate"}>Aspiring Technologist</p>
          </div>
        </div>
        <Link className={"btn btn-primary"} href={"/go/linkedin"}>
          <i className={"fa-brands fa-linkedin fa-xl"} />
          View my profile on LinkedIn!
        </Link>
      </div>
    </main>
  );
}