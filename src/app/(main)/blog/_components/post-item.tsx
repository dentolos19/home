import Link from "next/link";

type PostItemProps = {
  data: {
    title: string;
    excerpt?: string;
    date: string;
    href: string;
  };
};

export default function PostItem(props: PostItemProps) {
  return (
    <Link
      className={"card cursor-pointer bg-base-300 transition hover:bg-base-200"}
      target={props.data.href && "_blank"}
      href={props.data.href}
    >
      <div className={"card-body"}>
        <h2 className={"card-title"}>{props.data.title}</h2>
        <p className={"text-xs text-gray-400"}>{props.data.date}</p>
        <p>{props.data.excerpt}</p>
      </div>
    </Link>
  );
}