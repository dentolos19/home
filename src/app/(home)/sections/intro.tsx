import Image from "next/image";

export default function Intro() {
  return (
    <div className={"h-screen grid place-items-center bg-mountainous-seas bg-center"}>
      <div className={"frame"}>
        <Image
          className={"mx-auto mb-4 rounded-full shadow-xl"}
          alt={"Avatar"}
          src={"https://gravatar.com/avatar/a8c63fb5500bc292955f80701cbf53c2?s=128"}
          width={128}
          height={128}
        />
        <div className={"text-center"}>
          <div className={"text-2xl font-bold"}>Dennise Catolos</div>
          <div className={"text-gray-900"}>
            Student @ <a href={"https://nyp.edu.sg"}>Nanyang Polytechnic</a>
          </div>
          <div className={"mt-4 flex gap-4 justify-center"}>
            <a className={"lni lni-envelope"} href={"/#contact"}></a>
            <a className={"lni lni-github-original"} href={"https://github.com/dentolos19"}></a>
            <a className={"lni lni-linkedin-original"} href={"https://linkedin.com/in/dentolos19"}></a>
          </div>
        </div>
      </div>
    </div>
  );
}