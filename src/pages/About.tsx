import { motion } from "framer-motion";
import { Award, Building, Check, Mail, Phone } from "lucide-react";
import heroImage from "../assets/heroImage.webp"

const About = () => {
	return (
		<div className="mt-20 md:mt-24">
			{/* Banner Section */}
			<section className="relative bg-[#0d83ed]/5 py-12 md:py-20">
				<div className="container mx-auto px-4 md:px-8">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="text-center space-y-4"
					>
						<h1 className="text-4xl md:text-5xl font-bold">
							ABOUT US
						</h1>
						<h2 className="text-2xl md:text-3xl text-gray-700">
							BMK Developments
						</h2>
						<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-gray-600">
							<span>ABN: 24 679 267 111</span>
							<span className="hidden md:inline">•</span>
							<span>Lic Number: 469014C</span>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Main Content Section */}
			<section className="py-16 md:py-24">
				<div className="container mx-auto px-4 md:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
						{/* Text Content */}
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8 }}
							className="space-y-6"
						>
							<h2 className="text-3xl font-bold text-gray-800">
								Why Choose Us?
							</h2>

							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<Check className="min-w-5 h-5 text-[#0d83ed] mt-1" />
									<p className="text-gray-600">
										We've been there, done that.
									</p>
								</div>

								<div className="flex items-start gap-3">
									<Check className="min-w-5 h-5 text-[#0d83ed] mt-1" />
									<p className="text-gray-600">
										We provide you with a free quotation
									</p>
								</div>

								<div className="flex items-start gap-3">
									<Check className="min-w-5 h-5 text-[#0d83ed] mt-1" />
									<p className="text-gray-600">
										We provide you with an itemised quote
										(no hidden costs)
									</p>
								</div>

								<div className="flex items-start gap-3">
									<Check className="min-w-5 h-5 text-[#0d83ed] mt-1" />
									<p className="text-gray-600">
										We have all the necessary
										license/qualifications & insurances to
										undertake your project.
									</p>
								</div>

								<div className="flex items-start gap-3">
									<Check className="min-w-5 h-5 text-[#0d83ed] mt-1" />
									<p className="text-gray-600">
										And most importantly we have a network
										of tradesmen combining over 50 years
										experience.
									</p>
								</div>
							</div>

							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.4 }}
								className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6"
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
									<Building className="w-5 h-5 text-[#0d83ed]" />
									<span>Qualified Builder</span>
								</div>
							</motion.div>

							<motion.button
								initial={{ opacity: 0 }}
								whileInView={{ opacity: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.6, delay: 0.6 }}
								className="bg-[#0d83ed] text-white px-8 py-3 rounded-lg hover:bg-[#0d83ed]/90 transition-colors mt-6"
							>
								Get A Quote
							</motion.button>
						</motion.div>

						{/* Image */}
						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl"
						>
							<img
								src={heroImage}
								alt="Modern bathroom design"
								className="w-full h-full object-cover"
							/>
						</motion.div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;
