import { motion } from "framer-motion";
import {
	ArrowRight,
	Award,
	Building,
	Check,
	ClipboardList,
	Clock,
	Mail,
	Phone,
	QuoteIcon,
} from "lucide-react";
import heroImage from "../assets/heroImage.webp";
import homewwr from "../assets/homewwr.jpg";
import homewwr2 from "../assets/homewwr2.webp";
import { Link } from "react-router-dom";
import { div } from "framer-motion/client";

const Hero = () => {
	// Animation variants for the letter split effect
	// const letterVariants = {
	// 	hidden: {
	// 		opacity: 0,
	// 		y: 20,
	// 	},
	// 	visible: {
	// 		opacity: 0.8,
	// 		y: 0,
	// 		transition: {
	// 			duration: 0.8,
	// 			ease: "easeOut",
	// 		},
	// 	},
	// };

	// const paragraphVariants = {
	// 	hidden: { opacity: 0, y: 20 },
	// 	visible: {
	// 		opacity: 0.8,
	// 		y: 0,
	// 		transition: { duration: 0.8, delay: 0.2 },
	// 	},
	// };

	// Split text into individual letters while preserving words
	const text = "BMK DEVELOPMENTS";
	const words = text.split(" ");
	const letters = words.map((word) => [...word]);

	return (
		<div className="relative w-full h-[calc(100vh-5rem)] md:h-[calc(100vh-6rem)]">
			{/* Image container */}
			<img
				src={heroImage}
				alt="BMK Developments Hero"
				className="w-full h-full object-cover"
			/>

			{/* Overlay text container */}
			<div className="absolute inset-0 flex items-center bg-black/60">
				<div className="container px-4 md:px-8">
					<div className="flex flex-col items-start md:items-start max-w-3xl mx-auto">
						{/* Mobile: Left-aligned, Desktop: Left-aligned */}
						<div className="flex flex-col items-start space-y-1 md:space-y-4">
							{letters.map((word, wordIndex) => (
								<div key={wordIndex} className="flex">
									{word.map((letter, letterIndex) => (
										<motion.span
											key={letterIndex}
											className={`
                        ${
							wordIndex === 0
								? "text-6xl sm:text-7xl md:text-6xl lg:text-8xl"
								: "text-3xl sm:text-4xl md:text-6xl lg:text-8xl"
						} 
                        font-bold
                        ${
							(letter === "B" || letter === "M") &&
							word[letterIndex + 1] !== "E"
								? "text-[#0d83ed]"
								: "text-white"
						}
                      `}
											initial={{ opacity: 0, x: -50 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{
												type: "spring",
												stiffness: 100,
												damping: 10,
												delay:
													(wordIndex * word.length +
														letterIndex) *
													0.05,
											}}
										>
											{letter}
										</motion.span>
									))}
								</div>
							))}
						</div>

						{/* Tagline with new animation */}
						<motion.p
							className="text-white text-lg md:text-xl mt-6 md:mt-8 md:text-left"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{
								type: "spring",
								stiffness: 100,
								damping: 10,
								delay: 0.2,
							}}
						>
							Transforming spaces with excellence - from luxury
							new builds and stunning renovations to seamless home
							extensions. Your vision, our expertise.
						</motion.p>

						{/* Call to Action Section */}
						{/* <div className="mt-8 space-y-4 md:space-y-0 md:grid md:grid-cols-2 md:gap-4"> */}
						{/* <div className="flex items-center">
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										type: "spring",
										stiffness: 100,
										damping: 10,
										delay: 0.4,
									}}
									className="text-white text-lg"
								>
									Personalised Consultation
								</motion.div>
							</div>
							<div className="flex items-center">
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										type: "spring",
										stiffness: 100,
										damping: 10,
										delay: 0.5,
									}}
									className="text-white text-lg"
								>
									Creative Design Solutions
								</motion.div>
							</div>
							<div className="flex items-center">
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										type: "spring",
										stiffness: 100,
										damping: 10,
										delay: 0.6,
									}}
									className="text-white text-lg"
								>
									Client-Focused Approach
								</motion.div>
							</div>
							<div className="flex items-center">
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										type: "spring",
										stiffness: 100,
										damping: 10,
										delay: 0.7,
									}}
									className="text-white text-lg"
								>
									Efficient Approvals Handling
								</motion.div>
							</div>
							<div className="flex items-center">
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										type: "spring",
										stiffness: 100,
										damping: 10,
										delay: 0.8,
									}}
									className="text-white text-lg"
								>
									Quality and Transparency
								</motion.div>
							</div>
							<div className="flex items-center">
								<motion.div
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										type: "spring",
										stiffness: 100,
										damping: 10,
										delay: 0.9,
									}}
									className="text-white text-lg"
								>
									Peace of Mind
								</motion.div>
							</div> */}
						{/* </div> */}

						{/* Buttons Section */}
						<div className="mt-6 flex flex-col md:flex-row md:space-x-4 space-y-3 md:space-y-0">
							<motion.button
								className="bg-[#0d83ed] text-white px-4 py-2 text-sm md:text-base rounded-lg hover:bg-[#0d83ed]/80 transition-all duration-300 transform hover:scale-105"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									type: "spring",
									stiffness: 100,
									damping: 10,
									delay: 1,
								}}
							>
								<Link
									to={"/contact"}
									className="flex items-center gap-2 group"
								>
									Get an Estimate{" "}
									<ArrowRight className="group-hover:translate-x-1.5 transition" />
								</Link>
							</motion.button>
							<motion.button
								className="bg-transparent border-2 border-white text-white px-4 py-2 text-sm md:text-base rounded-lg hover:bg-[#0d83ed] hover:border-[#0d83ed] transition-all duration-300 transform hover:scale-105"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									type: "spring",
									stiffness: 100,
									damping: 10,
									delay: 1.1,
								}}
							>
								<Link to={"/services/new-build"}>
									View Our Services
								</Link>
							</motion.button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const AboutSection = () => {
	return (
		<section className="py-20 px-4 md:px-8 bg-white">
			<div className="container mx-auto">
				{/* Top Section */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-20">
					<motion.img
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						src={homewwr}
						alt="BMK Developments Project"
						className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg"
					/>
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{
							duration: 0.8,
							ease: "easeOut",
							delay: 0.2,
						}}
						className="space-y-4"
					>
						<h2 className="text-3xl md:text-4xl font-bold mb-6">
							BUILDING YOUR VISION
						</h2>
						<p className="text-gray-700">
							Based in Sydney, BMK Developments has earned its reputation
							as a premier construction firm, delivering exceptional
							high-end residential projects, comprehensive home
							transformations, and sophisticated property additions.
						</p>
						<p className="text-gray-700">
							For more than a decade, our unwavering commitment to
							excellence has shaped Sydney's residential landscape.
							Our distinguished team brings together the finest
							craftsmen and specialists from every construction
							discipline, each dedicated to achieving unparalleled
							quality and exceeding client expectations.
						</p>
						<p className="text-gray-700">
							From groundbreaking new construction to thoughtful
							renovations and expansions, our comprehensive service
							portfolio addresses all your building needs. Rest assured,
							our full industry accreditation, comprehensive insurance
							coverage, and proven expertise make us your trusted
							partner in construction.
						</p>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.4 }}
							className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6"
						>
							<div className="flex items-center gap-2">
								<Mail className="w-5 h-5 text-[#0d83ed]" />
								<span>info@bmkdevelopments.com</span>
							</div>
							<div className="flex items-center gap-2">
								<Phone className="w-5 h-5 text-[#0d83ed]" />
								<span>0460 006 007</span>
							</div>
							<div className="flex items-center gap-2">
								<Award className="w-5 h-5 text-[#0d83ed]" />
								<span>License: 469014C</span>
							</div>
							<div className="flex items-center gap-2">
								<Clock className="w-5 h-5 text-[#0d83ed]" />
								<span>10 Years Experience</span>
							</div>
						</motion.div>
					</motion.div>
				</div>

				{/* Bottom Section */}
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
						className="space-y-6"
					>
						<div className="flex items-start gap-4">
							<Building className="w-8 h-8 text-[#0d83ed] flex-shrink-0 mt-1" />
							<div>
								<h3 className="text-xl font-semibold mb-2">
									Qualified Builder
								</h3>
								<p className="text-gray-700">
									At BMK Developments, we pride ourselves on
									our exceptional team of licensed and skilled
									craftsmen who strive for excellence in
									every project. Drawing from decades of
									collective expertise across the construction
									industry, we deliver superior workmanship
									that consistently exceeds client
									expectations.
								</p>
							</div>
						</div>
						<div className="flex items-start gap-4">
							<ClipboardList className="w-8 h-8 text-[#0d83ed] flex-shrink-0 mt-1" />
							<div>
								<h3 className="text-xl font-semibold mb-2">
									Project Management
								</h3>
								<p className="text-gray-700">
									From start to finish, our dedicated project
									managers oversee every detail of your
									construction journey. We excel at
									orchestrating complex builds - seamlessly
									integrating design, scheduling, budgeting,
									and compliance. Our team coordinates
									tradespeople, navigates permits, and keeps
									you informed with regular updates, ensuring
									a smooth path to bringing your vision to
									life.
								</p>
							</div>
						</div>
					</motion.div>
					<motion.img
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
						src={homewwr2}
						alt="BMK Developments Project"
						className="w-full object-cover rounded-2xl shadow-lg"
					/>
				</div>
			</div>
		</section>
	);
};

const Quote = () => {
	return (
		<section className="bg-white py-16 ">
			<div className="container mx-auto px-4 md:px-8 ">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{
						duration: 1,
						ease: "easeOut",
					}}
					className="relative w-full mx-auto text-center"
				>
					{/* Quote Icon */}
					<div className="absolute left-4 top-4 -translate-y-7 text-gray-400 opacity-20 scale-150 sm:scale-200 md:scale-250 rotate-180">
						<QuoteIcon />
					</div>

					{/* Quote Text */}
					<motion.p
						className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 italic leading-relaxed"
						style={{
							textShadow: "3px 3px  rgba(0, 0, 0, 0.2)", // This is the text shadow!
						}}
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{
							duration: 1.2,
							delay: 0.3,
							ease: "easeOut",
						}}
					>
						Quality in construction is a blend of innovation, skill,
						and a passion for perfection.
					</motion.p>
				</motion.div>
			</div>
		</section>
	);
};

const Values = () => {
	return (
		<section className="relative bg-white py-12 md:py-20">
			{/* Top wave/arrow divider */}
			<div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] rotate-180">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
					className="relative block w-full h-[50px] md:h-[80px]"
				>
					<path
						d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
						className="fill-gray-100"
					></path>
				</svg>
			</div>

			{/* Content */}
			<div className="container min-w-full min-h-full px-4 md:px-8 py-16 bg-gray-100">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8 }}
					className="max-w-4xl mx-auto"
				>
					<motion.h2
						className="text-2xl md:text-3xl font-bold text-center mb-12"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						What Makes Us Stand Out?
					</motion.h2>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="space-y-8 md:space-y-10"
					>
						{[
							{
								title: "Experience That Counts",
								description: "10+ years in construction, renovation & extensions."
							},
							{
								title: "Quality & Precision",
								description: "Only high-grade materials & top craftsmanship."
							},
							{
								title: "Client-Focused Approach",
								description: "We prioritize your vision, ensuring personalized solutions & seamless communication."
							}
						].map((item, index) => (
							<motion.div
								key={item.title}
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: 0.6 + index * 0.2
								}}
								className="flex items-start gap-4 max-w-2xl mx-auto"
							>
								<div className="flex-shrink-0 mt-1">
									<Check className="w-6 h-6 text-[#0d83ed]" />
								</div>
								<div>
									<h3 className="text-xl md:text-2xl font-semibold mb-2">
										{item.title}
									</h3>
									<p className="text-gray-700 text-lg">
										{item.description}
									</p>
								</div>
							</motion.div>
						))}
					</motion.div>
				</motion.div>
			</div>

			{/* Bottom wave/arrow divider */}
			<div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
					className="relative block w-full h-[50px] md:h-[80px]"
				>
					<path
						d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
						className="fill-gray-100"
					></path>
				</svg>
			</div>
		</section>
	);
};

const Home = () => {
	return (
		<div className="mt-20 md:mt-24">
			<Hero />
			<AboutSection />
			<Quote />
			<div className="py-5 md:py-10">
				<Values />
			</div>
		</div>
	);
};

export default Home;
