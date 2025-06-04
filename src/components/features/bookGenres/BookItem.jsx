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
					className="relative flex items-center"
				>
					<Image
						className="self-center"
						src={urlToImage}
						alt={title}
						height={429}
						width={280}
					/>
				</figure>
			</div>
		</>
	);
}

export default BookItem;
