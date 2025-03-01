import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";

const Contact = () => {
	return (
		<div className="mt-20 md:mt-24">
			{/* Banner Section */}
			<section className="relative bg-[#0d83ed]/5 py-12 md:py-20">
				<div className="container mx-auto px-4 md:px-8">
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center space-y-6"
					>
						<h1 className="text-3xl md:text-4xl font-extrabold">
							Contact Us
						</h1>
						<p className="text-lg md:text-xl text-gray-600">
							We'd love to hear from you! Whether you have a
							question, feedback, or just want to say hello, reach
							out to us.
						</p>
						{/* <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-gray-500">
							<span>ABN: 24 679 267 111</span>
							<span className="hidden md:inline">|</span>
							<span>Lic Number: 469014C</span>
						</div> */}
					</motion.div>
				</div>
			</section>
			<ContactForm />
		</div>
	);
};

export default Contact;
