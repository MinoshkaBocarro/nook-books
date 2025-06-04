import Container from "@/components/common/placement/Container";
import HeroSection from "@/components/features/HeroSection";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function ContactPage() {
	return (
		<>
			<HeroSection
				title="Contact"
				logo={true}
				subtitle="Please check out my other work and contacts"
			>
				<div className="flex **:text-6xl **:text-prime gap-4">
					<a
						href="https://github.com/MinoshkaBocarro"
						target="_blank"
					>
						<FaGithub />
					</a>
					<a
						href="https://au.linkedin.com/in/minoshka-bocarro-360275205"
						target="_blank"
					>
						<FaLinkedin />
					</a>
				</div>
			</HeroSection>
			<Container>
				<div className="flex flex-col">
					<h2 className="font-bold text-heading">Credits</h2>
					<p>
						<span>All bookshelves designed by </span>
						<a href="https://www.freepik.com" className="link">
							Freepik
						</a>
					</p>
					<p>
						<a
							href="https://www.flaticon.com/free-icons/bookshelf"
							title="bookshelf icons"
						>
							Bookshelf favicon created by Freepik -{" "}
							<span className="link">Flaticon</span>
						</a>
					</p>
				</div>
			</Container>
		</>
	);
}

export default ContactPage;
