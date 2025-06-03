import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function ContactPage() {
	return (
		<>
			<h1>Contact Nook Books</h1>
			<p>Please check out my other work and contacts</p>
			<a href="https://github.com/MinoshkaBocarro" target="_blank">
				<FaGithub />
			</a>
			<a
				href="https://au.linkedin.com/in/minoshka-bocarro-360275205"
				target="_blank"
			>
				<FaLinkedin />
			</a>
		</>
	);
}

export default ContactPage;
