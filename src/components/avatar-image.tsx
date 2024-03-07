import Image from "next/image";

export default function AvatarImage({
	className,
	size,
}: {
	className?: string;
	size: number;
}) {
	return (
		<Image
			className={`rounded-full ${className}`}
			src={`https://gravatar.com/avatar/a8c63fb5500bc292955f80701cbf53c2?s=${size}`}
			alt={"Avatar"}
			height={size}
			width={size}
		/>
	);
}