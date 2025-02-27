import { motion } from "framer-motion";
import { ArrowRight, Award, Building, Check, Mail, Phone } from "lucide-react";
import heroImage from "../assets/heroImage.webp";
import newbuild3 from "../assets/newbuild/newbuild3.webp";
import grannyflat7 from "../assets/grannyflat/grannyflat7.webp";
import { Link } from "react-router-dom";

const AboutN = () => {
	return (
		<div className="mt-20 md:mt-24">
			{/* Banner Section */}
			<section className="relative w-full h-[40vh] md:h-[60vh]">
				<img
					src={
						"https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					}
					alt="About Us Banner"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-black/60 flex items-center justify-center">
					<div className="text-center text-white px-4 md:px-8">
						<h1 className="text-3xl md:text-5xl font-bold mb-4">
							ABOUT US
						</h1>
						<p className="text-lg md:text-xl w-full md:max-w-3xl">
							Here at BMK Developments, you will find a team of
							dedicated, passionate and professional individuals
							that strive to provide you with a beautifully
							finished home.
						</p>
					</div>
				</div>
			</section>

			{/* Text Left, Image Right Section */}
			<section className="py-12 pt-4 md:py-24 bg-white">
				<div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="space-y-4"
					>
						<p className="text-gray-700">
							We take education, legislation, and compliance
							seriously and work hard to stay up to date with the
							latest information and changes by working with
							Councils, Private Certifiers, and Engineers. This
							allows us to deliver correct information, assess
							with accuracy, and provide honest upfront pricing.
						</p>
						<p className="text-gray-700">
							Our construction crew is known for their attention
							to detail and consideration for tenants, neighbors,
							and owner-occupiers during the building process.
							Special attention is given to site safety to keep
							all occupants and tradesmen safe for the duration of
							the project.
						</p>
						<p className="text-gray-700">
							When you engage with our company for your project,
							you have the assurance that we are the building
							company. Construction is not outsourced.
						</p>
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
					</motion.div>
					<motion.img
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{
							duration: 0.8,
							ease: "easeOut",
							delay: 0.2,
						}}
						src={grannyflat7}
						alt="About Us Image"
						className="w-full h-[300px] md:h-[400px] object-cover rounded-2xl shadow-lg"
					/>
				</div>
			</section>

			{/* Image Left, Text Right Section */}
			<section className="py-16 md:py-24 bg-gray-100">
				<div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					<motion.img
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						src={newbuild3}
						alt="Our Values Image"
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
						<h2 className="text-3xl font-bold text-gray-800">
							Why Choose Us?
						</h2>

						<div className="space-y-4 last:mt-3">
							<div className="flex items-start gap-3">
								<Check className="min-w-5 h-5 text-[#0d83ed] mt-1" />
								<p className="text-gray-600">
									Our extensive experience ensures we have
									encountered and successfully handled a wide
									range of projects.
								</p>
							</div>

							<div className="flex items-start gap-3">
								<Check className="min-w-5 h-5 text-[#0d83ed] mt-1" />
								<p className="text-gray-600">
									We offer complimentary quotations to help
									you plan your project without any initial
									cost.
								</p>
							</div>

							<div className="flex items-start gap-3">
								<Check className="min-w-5 h-5 text-[#0d83ed] mt-1" />
								<p className="text-gray-600">
									Our detailed, itemized quotes ensure
									transparency, so you know exactly what
									you're paying for with no hidden fees.
								</p>
							</div>

							<div className="flex items-start gap-3">
								<Check className="min-w-5 h-5 text-[#0d83ed] mt-1" />
								<p className="text-gray-600">
									We possess all the necessary licenses,
									qualifications, and insurance to legally and
									safely undertake your project.
								</p>
							</div>

							{/* <div className="flex items-start gap-3">
								<Check className="min-w-5 h-5 text-[#0d83ed] mt-1" />
								<p className="text-gray-600">
									Our network of skilled tradesmen brings
									together over 50 years of combined
									experience, ensuring high-quality
									workmanship.
								</p>
							</div> */}
							<motion.div>
								<Link
									to="/contact"
									className="flex items-center gap-2 w-max mt-2 bg-[#0d83ed] hover:bg-[#0d83ed]/90 text-white px-6 py-3 rounded-lg transition-colors duration-300 group"
								>
									Get Your Free Quote Today
									<ArrowRight className="group-hover:translate-x-2 transition-all duration-200" />
								</Link>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</section>
		</div>
	);
};

export default AboutN;
