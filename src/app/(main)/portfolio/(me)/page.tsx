import Link from "next/link";

export default function Page() {
  return (
    <main className={"py-4"}>
      <div className={"mx-auto w-[60%] max-md:w-[90%] flex flex-col gap-2"}>
        <div className={"grid grid-cols-[auto,1fr] bg-base-300 rounded-box overflow-hidden"}>
          <div className={"mr-8 avatar"}>
            <div className={"size-24 md:size-32"}>
              <img src={"/assets/cavatar"} alt={"Avatar"} />
            </div>
          </div>
          <div className={"min-w-0 flex flex-col justify-center"}>
            <h2 className={"mb-1 font-bold text-xl truncate"}>Dennise Catolos</h2>
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