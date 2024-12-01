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
        <div className={"card-title"}>{props.data.title}</div>
        <div className={"text-xs text-secondary"}>{props.data.date}</div>
        <div className={"text-sm"}>{props.data.excerpt}</div>
      </div>
    </Link>
  );
}