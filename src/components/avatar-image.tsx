import clsx from "clsx";
import Image from "next/image";

export default function AvatarImage(props: {
  className?: string;
  size: number;
}) {
  return (
    <Image
      className={clsx("rounded-full", props.className)}
      src={`https://gravatar.com/avatar/a8c63fb5500bc292955f80701cbf53c2?s=${props.size}`}
      alt={"Avatar"}
      height={props.size}
      width={props.size}
    />
  );
}