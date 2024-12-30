import testimonials from "@/content/data/testimonials.json";
import Link from "next/link";

export default function Page() {
  return (
    <main className={"py-4"}>
      <div className={"mx-auto flex w-[60%] flex-col gap-2 max-md:w-[90%]"}>
        <div className={"grid grid-cols-[auto,1fr] overflow-hidden rounded-box bg-base-300"}>
          <div className={"avatar mr-8"}>
            <div className={"size-24 md:size-32"}>
              <img src={"/assets/portrait"} alt={"Avatar"} />
            </div>
          </div>
          <div className={"flex min-w-0 flex-col justify-center"}>
            <div className={"mb-1 truncate text-2xl font-bold"}>Dennise Catolos</div>
            <div className={"truncate text-sm text-secondary"}>Aspiring Technologist</div>
          </div>
        </div>
        <div className={"rounded-box bg-base-300 p-6"}>
          <div className={"mb-2 text-xl font-bold"}>About Me</div>
          <div className={"text-sm text-secondary"}>
            As a passionate IT student at Nanyang Polytechnic, I am driven to create impactful software solutions that
            contribute to a better future. ❤️‍🔥 My journey in technology began in primary school, where I experimented
            with coding small programs. 🧑‍💻 Since then, I have developed a strong technical foundation through hands-on
            experience with various programming languages and technologies, including .NET, Python, React, and Next.js.
          </div>
        </div>
        <div className={"rounded-box bg-base-300 p-6"}>
          <div className={"mb-2 text-xl font-bold"}>Testimonials</div>
          <div className={"space-y-4"}>
            {testimonials.map((testimonial, index) => (
              <div key={index}>
                <div className={"mb-1 text-sm"}>
                  <span>“</span>
                  <span className={"italic"}>{testimonial.content}</span>
                  <span>”</span>
                </div>
                <div className={"mb-1 text-xs text-secondary"}>
                  <span>— </span>
                  <span>{testimonial.author}</span>
                </div>
              </div>
            ))}
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