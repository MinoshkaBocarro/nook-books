import Image from "next/image";
import { useRouter } from "next/router";

function BookItem({ urlToImage, title, id }) {
	const router = useRouter();
	function handleNavigate() {
		router.push("/" + id);
	}

	return (
		<>
			<div className="flex justify-center p-0 rounded-sm card-body bg-second/50">
				<figure
					onClick={handleNavigate}
					className="relative w-full sm:max-w-[280px] aspect-[280/429] cursor-pointer overflow-hidden"
				>
					<Image
						src={urlToImage}
						alt={title}
						fill={true}
						className="object-contain"
						sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 280px"
					/>
				</figure>
			</div>
		</>
	);
}

export default BookItem;
