import Link from "next/link";

export default function ProjectItem(props: {
  data: {
    name: string;
    description: string;
    stars?: number;
    forks?: number;
    href: string;
  };
}) {
  return (
    <Link className={"card cursor-pointer bg-base-300 transition hover:bg-base-200"} href={props.data.href}>
      <div className={"card-body"}>
        <h2 className={"card-title"}>
          {props.data.name}
          {(props.data.stars || 0) > 0 && (
            <div className={"badge badge-accent gap-1"}>
              <i className={"fa-solid fa-star"} />
              {props.data.stars}
            </div>
          )}
          {(props.data.forks || 0) > 0 && (
            <div className={"badge badge-outline gap-1"}>
              <i className={"fa-solid fa-code-fork"} />
              {props.data.forks}
            </div>
          )}
        </h2>
        <p>{props.data.description}</p>
      </div>
    </Link>
  );
}