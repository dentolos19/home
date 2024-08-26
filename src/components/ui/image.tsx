import clsx from "clsx";
import Image from "next/image";

type MyImageProps = {
  className?: string;
  src: string;
  alt: string;
};

export default function MyImage(props: MyImageProps) {
  return (
    <figure className={clsx("relative", props.className)}>
      <Image src={props.src} alt={props.alt} fill />
    </figure>
  );
}