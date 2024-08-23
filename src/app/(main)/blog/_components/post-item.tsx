import Link from "next/link";

export default function PostItem(props: {
  data: {
    title: string;
    excerpt?: string;
    date: string;
    href: string;
  };
}) {
  return (
    <Link className={"card cursor-pointer transition bg-base-300 hover:bg-base-200"} href={props.data.href}>
      <div className={"card-body"}>
        <h2 className={"card-title"}>{props.data.title}</h2>
        <p className={"text-xs text-gray-400"}>{props.data.date}</p>
        <p>{props.data.excerpt}</p>
      </div>
    </Link>
  );
}