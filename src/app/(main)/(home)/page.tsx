import Link from "next/link";

export default function Page() {
  return (
    <main className={"grid place-items-center"}>
      <div className={"relative"}>
        <div className={"position-center-x avatar absolute top-[-30px] z-10"}>
          <div className={"size-[200px] rounded-full"}>
            <img src={"/assets/avatar"} alt={"Avatar"} />
          </div>
        </div>
        <div className={"card mt-[150px] bg-base-300"}>
          <div className={"card-body items-center text-center"}>
            <div className={"card-title text-4xl"}>Dennise Catolos</div>
            <div className={"my-1 max-w-screen-sm text-secondary"}>
              A Year 1 student studying at Nanyang Polytechnic, pursing a Diploma in Information Technology. ✌️🧑‍💻
            </div>
            <div className={"card-actions gap-4"}>
              <div className={"tooltip tooltip-bottom"} data-tip={"Contact Me"}>
                <Link href={"mailto:contact@dennise.me"}>
                  <i className={"fa-solid fa-envelope fa-xl"} />
                </Link>
              </div>
              <div className={"tooltip tooltip-bottom"} data-tip={"GitHub Profile"}>
                <Link href={"/go/github"}>
                  <i className={"fa-brands fa-github fa-xl"} />
                </Link>
              </div>
              <div className={"tooltip tooltip-bottom"} data-tip={"LinkedIn Profile"}>
                <Link href={"/go/linkedin"}>
                  <i className={"fa-brands fa-linkedin fa-xl"} />
                </Link>
              </div>
              <div className={"tooltip tooltip-bottom"} data-tip={"Instagram Page"}>
                <Link href={"/go/instagram"}>
                  <i className={"fa-brands fa-instagram fa-xl"} />
                </Link>
              </div>
              <div className={"tooltip tooltip-bottom"} data-tip={"Support Me"}>
                <Link href={"/go/support"}>
                  <i className={"fa-solid fa-circle-dollar-to-slot fa-xl"} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}