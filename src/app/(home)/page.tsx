import AvatarImage from "@/components/avatar-image";
import Link from "next/link";

export default function Page() {
  return (
    <main className={"grid place-items-center"}>
      <div className={"relative"}>
        <AvatarImage
          className={"z-10 position-center-x top-[-30px]"}
          size={200}
        />
        <div className={"mt-[150px] card bg-base-300"}>
          <div className={"card-body items-center text-center"}>
            <h2 className={"card-title text-3xl"}>Dennise Catolos</h2>
            <p>
              A Year 1 student studying at Nanyang Polytechnic, pursing a
              Diploma in Information Technology. ✌️🧑‍💻
            </p>
            <div className={"card-actions gap-4"}>
              <div className={"tooltip tooltip-bottom"} data-tip={"Contact Me"}>
                <Link href={"mailto:contact@dennise.me"}>
                  <i className={"fa-solid fa-envelope fa-xl"} />
                </Link>
              </div>
              <div
                className={"tooltip tooltip-bottom"}
                data-tip={"GitHub Profile"}
              >
                <Link href={"https://github.com/dentolos19"}>
                  <i className={"fa-brands fa-github fa-xl"} />
                </Link>
              </div>
              <div
                className={"tooltip tooltip-bottom"}
                data-tip={"LinkedIn Profile"}
              >
                <Link href={"https://linkedin.com/in/dentolos19"}>
                  <i className={"fa-brands fa-linkedin fa-xl"} />
                </Link>
              </div>
              <div
                className={"tooltip tooltip-bottom"}
                data-tip={"Instagram Page"}
              >
                <Link href={"https://instagram.com/dentolos19"}>
                  <i className={"fa-brands fa-instagram fa-xl"} />
                </Link>
              </div>
              <div className={"tooltip tooltip-bottom"} data-tip={"Support Me"}>
                <Link href={"https://ko-fi.com/dentolos19"}>
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