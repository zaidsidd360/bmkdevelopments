import { motion } from "framer-motion";
import {
	Award,
	Building,
	Check,
	ClipboardList,
	Clock,
	Mail,
	Phone,
  QuoteIcon,
} from "lucide-react";
import heroImage from "../assets/heroImage.webp"
import homewwr from "../assets/homewwr.jpg"
import homewwr2 from "../assets/homewwr2.webp"

const Hero = () => {
	// Animation variants for the letter split effect
	const letterVariants = {
		hidden: {
			opacity: 0,
			y: 20,
		},
		visible: {
			opacity: 0.8,
			y: 0,
			transition: {
				duration: 0.8,
				ease: "easeOut",
			},
		},
	};

	const paragraphVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 0.8,
			y: 0,
			transition: { duration: 0.8, delay: 0.2 },
		},
	};

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
				<div className="container mx-auto px-4 md:px-8">
					<div className="flex flex-col items-start md:items-center max-w-3xl mx-auto">
						{/* Mobile: Left-aligned, Desktop: Center-aligned */}
						<div className="flex flex-col items-start md:items-center space-y-1 md:space-y-4">
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
											initial="hidden"
											animate="visible"
											variants={letterVariants}
											transition={{
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

						{/* Tagline */}
						<motion.p
							className="text-white text-lg md:text-xl mt-6 md:mt-8 md:text-center"
							initial="hidden"
							animate="visible"
							variants={paragraphVariants}
						>
							Transforming spaces with excellence - from luxury
							new builds and stunning renovations to seamless home
							extensions. Your vision, our expertise.
						</motion.p>
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
							WHO WE ARE
						</h2>
						<p className="text-gray-700">
							BMK Developments is an established construction
							company operating out of Sydney, specializing in
							luxury new builds, renovations, and extensions.
						</p>
						<p className="text-gray-700">
							With over 10 years' experience in the building
							industry delivering bespoke results, we pride
							ourselves with ensuring our client is happy at all
							times. Our team consists of a professional group of
							qualified tradesmen ranging across all building
							trades focusing on always delivering perfection and
							100% customer satisfaction.
						</p>
						<p className="text-gray-700">
							Whether you are building a new home, renovating,
							extending or perhaps even in need of building
							maintenance, we have you covered. We have all the
							necessary licenses, qualifications & insurances to
							undertake your project.
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
									Our team consists of professional qualified
									tradesmen focusing on delivering perfection
									and 100% customer satisfaction. We have a
									network of tradesmen combining over 50 years
									of experience in the industry, ensuring the
									highest quality workmanship for your
									project.
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
									We offer comprehensive project management
									services to ensure your project is completed
									on time and within budget. Our expertise
									includes managing all aspects of
									construction, from initial planning and
									design through to final completion. We
									coordinate with all trades, handle council
									requirements, and maintain clear
									communication throughout the entire process.
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
						Quality in construction is a blend of innovation, skill, and a passion for perfection.
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
					className="max-w-4xl mx-auto text-center"
				>
					<motion.p
						className="text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed mb-12"
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						With over 10 years' experience in the building industry
						delivering bespoke results, we pride ourselves with
						ensuring our client is happy at all times.
					</motion.p>

					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, delay: 0.4 }}
						className="space-y-6"
					>
						<p className="text-lg md:text-xl">
							BMK Developments is founded on 3 main values:
						</p>

						<div className="flex sm:flex-row items-center justify-center gap-4 sm:gap-12 mt-6">
							{["Quality", "Innovation", "Trust"].map(
								(value, index) => (
									<motion.div
										key={value}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{
											duration: 0.5,
											delay: 0.6 + index * 0.2,
										}}
										className="flex items-center gap-2"
									>
										<Check className="w-5 h-5 text-[#0d83ed]" />
										<span className="text-lg font-semibold">
											{value}
										</span>
									</motion.div>
								)
							)}
						</div>
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
