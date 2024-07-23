import clsx from "clsx";

export default function AvatarImage(props: {
  className?: string;
  size: number;
}) {
  return (
    <div className={clsx("avatar", props.className)}>
      <div className={`size-[${props.size}px] rounded-full`}>
        <img
          src={`https://gravatar.com/avatar/a8c63fb5500bc292955f80701cbf53c2?s=${props.size}`}
          alt={"Avatar"}
        />
      </div>
    </div>
  );
}