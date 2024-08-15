import Link from "next/link";

export default function NotFound() {
  return (
    <main className={"grid place-items-center"}>
      <div className={"card bg-base-300"}>
        <div className={"card-body items-center"}>
          <h2 className={"card-title"}>Oops!</h2>
          <p>Sorry, the page that you are looking for does not exist.</p>
          <div className={"card-actions"}>
            <Link className={"btn btn-sm btn-primary"} href={"/"}>
              Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}