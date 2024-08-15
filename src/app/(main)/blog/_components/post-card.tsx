import Link from "next/link";

export default function PostCard(props: { title: string; excerpt: string | undefined; date: string; href: string }) {
  return (
    <Link className={"card cursor-pointer transition bg-base-300 hover:bg-base-200"} href={props.href}>
      <div className={"card-body"}>
        <h2 className={"card-title"}>{props.title}</h2>
        <p className={"text-xs text-gray-400"}>{props.date}</p>
        <p>{props.excerpt}</p>
      </div>
    </Link>
  );
}