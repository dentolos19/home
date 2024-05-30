import Image from "next/image";
import { twJoin } from "tailwind-merge";

export default function AvatarImage(props: {
  className?: string;
  size: number;
}) {
  return (
    <Image
      className={twJoin("rounded-full", props.className)}
      src={`https://gravatar.com/avatar/a8c63fb5500bc292955f80701cbf53c2?s=${props.size}`}
      alt={"Avatar"}
      height={props.size}
      width={props.size}
    />
  );
}