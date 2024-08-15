import Link from "next/link";

export default function ProjectCard(props: {
  name: string;
  description: string;
  stars: number | undefined;
  forks: number | undefined;
  href: string;
}) {
  return (
    <Link className={"card cursor-pointer transition bg-base-300 hover:bg-base-200"} href={props.href}>
      <div className={"card-body"}>
        <h2 className={"card-title"}>
          {props.name}
          {(props.stars || 0) > 0 && (
            <div className={"badge badge-accent gap-1"}>
              <i className={"fa-solid fa-star"} />
              {props.stars}
            </div>
          )}
          {(props.forks || 0) > 0 && (
            <div className={"badge badge-outline gap-1"}>
              <i className={"fa-solid fa-code-fork"} />
              {props.forks}
            </div>
          )}
        </h2>
        <p>{props.description}</p>
      </div>
    </Link>
  );
}