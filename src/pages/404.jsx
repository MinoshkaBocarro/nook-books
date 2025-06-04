import NBButtonLink from "@/components/common/util/NBButtonLink";
import Image from "next/image";

function NotFoundPage() {
	return (
		<div className="flex items-center justify-center grow">
			<div className="text-center w-200">
				<div className="flex flex-col gap-3 pb-7">
					<h1 className="pb-7 font-heading">Error! Page Not Found</h1>
					<p>
						"Were you looking for a certain{" "}
						<Image
							className="inline w-auto h-10"
							src="/tanuki.png"
							alt="Tanuki"
							width={512}
							height={512}
						/>
						?
					</p>
					<p>He hasn't got his grubby paws on these books yet!</p>
					<p> Head back to base!</p>
				</div>
				<NBButtonLink path="/genres">Genres</NBButtonLink>
			</div>
		</div>
	);
}

export default NotFoundPage;
